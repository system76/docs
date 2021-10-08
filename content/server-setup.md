---
title: System76 Server Setup
description: >
  Instructions on setting up a System76 server, including initial login credentials.
keywords:
  - support
  - server
  - initial
  - setup
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-computer
tableOfContents: true

redirect_from:
  - /serversetup
---

**Initial Server Settings** | **Value**
----------------------------|------------------
Username                    | `oem`
Password                    | System Serial Number
Network Address (eth0)      | Assigned by DHCP
Network Address (eth1)      | Unconfigured

> System serial number should be entered in all lower-case. For example, if the serial number is `7X1234`, then the password would be `7x1234`.

Connect your server to a monitor to determine the IP addresses assigned to your server. Afterwards you can configure and manage your server from any other computer on your network.

The following commands will determine the server's IP address:

```bash
ifconfig
```

```bash
ip link show
```

In the directions below replace `IPADDRESS` with the server's IP address.

### Configure Hostname And Domain

To configure the hostname and domain, run these commands:

```bash
sudo nano /etc/hosts
sudo nano /etc/hostname
```

---

Example `/etc/hosts` file:

```
127.0.0.1       localhost  
10.120.150.5    fileserver.mydomain.com fileserver  

# The following lines are desirable for IPv6 capable hosts  
::1     ip6-localhost ip6-loopback  
fe00::0 ip6-localnet  
ff00::0 ip6-mcastprefix  
ff02::1 ip6-allnodes  
ff02::2 ip6-allrouters  
ff02::3 ip6-allhosts  
```

Example `/etc/hostname` file:

```
fileserver
```

---

Verify the correct hostname and domain with this command:

```bash
hostname -f
```

### Configure Time Zone

```bash
sudo dpkg-reconfigure tzdata
```

### Configure Network Interface for Ubuntu Server 18.04

Ubuntu Server 18.04 is shipping with netplan, so the system file will need to be edited for networking. With this command, we will edit the file:

```bash
sudo nano /etc/netplan/50-cloud-int.yaml
```

This command will list the network interfaces:

```bash
ip link show
```

This text will need to be edited depending on what the system will label the network interfaces.

```bash
network:
    version: 2
    ethernets:
        eno1:
            addresses: [ ]
            dhcp4: true
            optional: true
        eno2:
            addresses: [ ]
            dhcp4: true
            optional: true
```

Now if the router has DHCP setup you will get an IP address for the port that has the Ethernet cable attached.

### Configure Network Interface for Ubuntu Server 16.04

To change the IP address of the server, run these commands:

```bash
sudo nano /etc/network/interfaces
```

Adjust as necessary & press <kbd>Ctrl</kbd>+<kbd>X</kbd> → <kbd>Y</kbd> → <kbd>Enter</kbd> to save.  Next, restart network services (this will drop your ssh connection):

```bash
sudo systemctl restart networking
```

---

Example `/etc/network/interfaces` file:

```
# This is the loopback interface - Do not adjust  
auto lo  
iface lo inet loopback  

# Primary Network Interface  
auto eth0  
iface eth0 inet static  
address 10.13.15.10  
netmask 255.255.255.0  
gateway 10.13.15.1  
dns-nameservers 8.8.8.8 8.8.4.4  

auto eth1  
iface eth1 inet static  
address 10.13.15.11  
netmask 255.255.255.0  
gateway 10.13.15.1  
dns-nameservers 8.8.8.8 8.8.4.4  
```

---

### Remote Administration

To remotely administer the server, a secure shell program needs installed to accept incoming SSH connections.  Install the program with this command:

```bash
sudo apt install openssh-server
```

And then configure the program by editing its settings file with this command:

```bash
sudo nano /etc/ssh/sshd_config
```

And to use the new settings, restart the SSH daemon with this command (or restart the server):

```bash
sudo systemctl restart sshd
```

Then, from another Linux client terminal:

```bash
ssh oem@IPADDRESS
```

From a Windows computer:  
Download [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

### Add Administrative User

To add another user, enter these commands:

```bash
ssh oem@IPADDRESS
sudo adduser [new username]
sudo adduser [new username] adm
sudo adduser [new username] sudo
exit
```

Log back in by typing:

```bash
ssh [new username]@IPADDRESS
```

Remove the OEM User:

```bash
sudo deluser oem
```

### Update Packages

Download and install updates:

```bash
sudo apt update
sudo apt dist-upgrade
```

Reboot may be required for the changes to take effect:

```bash
sudo reboot
```

### Configure BMC

To setup remote management on the server, connect an additional Ethernet line to the management interface port.  Configure the management interface IP address in BIOS.  Next, use a web browser on another computer to see the management interface.

See Intel's user guide for configuring the BMC here:

[Intel BMC User Guide](https://www.intel.com/content/dam/support/us/en/documents/server-products/intel-rmm4-ibmc-userguide.pdf)

To run the jwviewer.jnlp file on the viewing computer, please install this program:

```bash
sudo apt install icedtea-netx
```

Which will install the program 'javaws' (Java Web Services)

---

#### BMC on the Ibex Pro GPU

On the Ibex Pro GPU, the BMC interface will look slightly different. See the [Gigabyte Server Management Console](https://download.gigabyte.com/FileList/Manual/server_manual_mgt_console_user_guide_ami_v1.x.pdf) manual.

For this machine, the default BMC username is `admin` and the default password is `password`.

### Additional Server Resources

[Ubuntu Server Information](http://www.ubuntu.com/server)

[Ubuntu Server Documentation](https://help.ubuntu.com/)

### Troubleshooting

If the Jackal 2U server is fully loaded with 8 spinning drives, and will not boot, staggered drive startup may be needed.  Enter into BIOS, and in the 'Setup Mass Storage Controller Configuration' screen, enable 'AHCI HDD Staggered Spin-Up'.
