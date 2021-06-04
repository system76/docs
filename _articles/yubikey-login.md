---
layout: article
title: Login with Yubikey
description: >
   Configure Pop!_OS to accept a Yubikey for login and unlock.
keywords:
  - Yubikey
  - Administration
image: http://support.system76.com/images/system76.png
hidden: false
section: community
---


# Login with Yubikey

If you have a Yubikey, you can use it to login or unlock  your system.

To do this you must install the yubikey-luks package, configure a challenge-response slot on the Yubikey, and then configure the necessary PAM modules.

**This guide assumes you are running Pop!_OS**

## Install Packages

To install the necessary packages, run:

    sudo apt install -y libpam-yubico yubikey-personalization

You may get a question about the PAM configuration line. If so, enter this line:

    mode=challenge-response

Don't enable any PAM modules yet.  We'll do that at the end.

If you have already installed the package or want to reconfigure it, use this command:

    sudo dpkg-reconfigure libpam-yubico

## Configure Challenge-Response for your Yubikey

To enable challenge-response on your Yubikey, type the following command:

    ykpersonalize -2 -ochal-resp -ochal-hmac -ohmac-lt64 -oserial-api-visible

This configures slot 2 for challenge-response, and leaves slot 1 alone.

Next we need to create some challenge response files, move them to a system wide directory, and secure those files:

    sudo mkdir /var/yubico
    sudo chown root.root /var/yubico
    sudo chmod 700 /var/yubico
    ykpamcfg -2 -v

You should receive a message similar to:

`Stored initial challenge and expected response in '$HOME/.yubico/challenge-123456'.`

You should receive a unique *challenge-123456* in your output.

Now, to finish up:

    sudo mv ~/.yubico/challenge-123456 /var/yubico/alice-123456
    sudo chown root.root /var/yubico/alice-123456
    sudo chmod 600 /var/yubico/alice-123456

Pay close attention when copying/pasting the commands above.  The *challenge-123456* and *alice-123456* needs to match whatever your output is.**

## Configure Plugable Authentication Modules

**Before making any changes to the files listed below, I highly recommend backing up each file, and having a sudo/root session open in case you need to roll-back.**

You need to add the following line to each of the files listed below:

    auth sufficient pam_yubico.so mode=challenge-response chalresp_path=/var/yubico

This configures your system to accept your Yubikey as an acceptable login alternative.  In other words, you can login without a password, just plug the key into a USB port. **You can still use your password to login with this setup**.

If you want your Yubiky to be **required to login**, then you need to change *sufficient* to *required*.  For example:

    auth required pam_yubico.so mode=challenge-response chalresp_path=/var/yubico

There a a number of other options for PAM.  Check the man pages for more information.  Also, the [Yubico PAM module](https://developers.yubico.com/yubico-pam/) page has a pretty good breakdown.

- /etc/pam.d/common-auth
- /etc/pam.d/login
- /etc/pam.d/gdm-password

### /etc/pam.d/common-auth

At a minimum you need to modify this file.

Add the auth line to the top of this file (after the comment block).

You may need to run `pam-auth-update` afterwards.

### /etc/pam.d/login

Modifying this file is optional.  This allows you to authenticate to the Linux terminal with your Yubikey.

Add the auth line to the top of this file (after the comment block).

### /etc/pam.d/gdm-password

Modifying this file is also optional.  If you want to login to your Desktop Environment, (e.g. GNOME), you will need to add the auth line to the /etc/pam.d/gdm-password file.

Add the auth line immediately below the **@include common-auth** line.

**NOTE: This will allow you to login to your desktop without a password, but you may still be asked to use a password to unlock your keyring.  This prompt should only appear once upon initial login.**

## References

The following sites were used to build this guide:
- [Authentication Using Challenge Response](https://developers.yubico.com/yubico-pam/Authentication_Using_Challenge-Response.html) (From Yubikey).
- [Yubico PAM Module](https://developers.yubico.com/yubico-pam/) (From Yubikey).

---

This article was contributed by [71nuxadd1ct](https://github.com/71nuxadd1ct).
