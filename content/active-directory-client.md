---
title: Active Directory Domain
description: Learn how to join Pop!_OS to an Active Directory domain
keywords:
  - Pop!_OS
  - Security
  - Linux
  - Active Directory
  - Authentication

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

Pop!\_OS and Ubuntu can be joined to an Active Directory domain, which allows users to log in with their existing network credentials.

1. Install the necessary packages:

    ```bash
    sudo apt install sssd heimdal-clients msktutil
    ```

    While installing those packages, you will be prompted for the following information. These are sample responses. Our domain is called "system76.local" and our Active Directory server is called "adserver" in this example:

    ```bash
    Forest name: SYSTEM76
    Domain controller hostname: ADSERVER.system76.local
    Administrative server for your Kerberos realm: ADSERVER.system76.local
    ```

2. Move the default Kerberos configuration file to a backup, and create a fresh file to use:

    ```bash
    sudo mv /etc/krb5.conf /etc/krb5.conf.default
    sudo nano /etc/krb5.conf
    ```

    Edit the /etc/krb5.conf file with the following contents:

    ```
    [libdefaults]
    default_realm = SYSTEM76.LOCAL
    rdns = no
    dns_lookup_kdc = true
    dns_lookup_realm = true

    [realms]
    SYSTEM76.LOCAL = {
    kdc = ADSERVER.system76.local
    admin_server = ADSERVER.system76.local
    }
    ```

3. Initialize Kerberos and generate a keytab file. The first command requires the username of a domain administrator, and our computer's hostname is "pop-os" in this example:

    ```
    kinit administrator
    klist
    msktutil -N -c -b 'CN=COMPUTERS' -s POP-OS/pop-os.system76.local -k my-keytab.keytab --computer-name POP-OS --upn POP-OS$ --server adserver.system76.local --user-creds-only
    msktutil -N -c -b 'CN=COMPUTERS' -s POP-OS/pop-os -k my-keytab.keytab --computer-name POP-OS --upn POP-OS$ --server adserver.system76.local --user-creds-only
    kdestroy
    ```

4. Move the keytab to the /etc/sssd directory, and configure SSSD:

    ```bash
    sudo mv my-keytab.keytab /etc/sssd/my-keytab.keytab
    sudo nano /etc/sssd/sssd.conf
    ```

    The SSSD configuration file should contain the following:

    ```
    [sssd]
    services = nss, pam
    config_file_version = 2
    domains = system76.local

    [nss]
    entry_negative_timeout = 0
    #debug_level = 5

    [pam]
    #debug_level = 5

    [domain/system76.local]
    #debug_level = 10
    enumerate = false
    id_provider = ad
    auth_provider = ad
    chpass_provider = ad
    access_provider = ad
    dyndns_update = false
    ad_hostname = pop-os.system76.local
    ad_server = adserver.system76.local
    ad_domain = system76.local
    ldap_schema = ad
    ldap_id_mapping = true
    fallback_homedir = /home/%u
    default_shell = /bin/bash
    ldap_sasl_mech = gssapi
    ldap_sasl_authid = POP-OS$
    krb5_keytab = /etc/sssd/my-keytab.keytab
    ldap_krb5_init_creds = true
    ad_gpo_access_control = permissive
    ```

    After saving, set the appropriate permissions on that configuration file:

    ```bash
    sudo chmod 0600 /etc/sssd/sssd.conf
    ```

5. Configure PAM:

    ```bash
    sudo nano /etc/pam.d/common-session
    ```

    Look for the line that contains "session required pam_unix.so" and add this line immediately below it:

    ```
    session required pam_mkhomedir.so skel=/etc/skel umask=0077
    ```

    After saving that file, restart SSSD:

    ```bash
    sudo systemctl restart sssd
    ```

6. Add the domain administrator to the local sudo group:

    ```bash
    sudo adduser administrator sudo
    ```

    Then, test a login with the domain administrator:

    ```bash
    su -l administrator
    ```

7. Reboot the computer. At the login screen, you can click the "Not listed?" link, and type the username of any domain user. After logging in with a domain user for the first time, that user will appear on the login screen's user list.

    ![Login Screen](/images/active-directory-client/login-screen-not-listed.png)
