---
layout: article
title: Initial Server Setup
description: >
    Got a new server? Check out these complete instructions on setting up a System76 server, including initial login credentials.
keywords:
    - Support
    - Server
    - Initial
    - Setup
    - System76
hidden: false
---


## Initial Server Settings

Item                   | Value
-----------------------|------------------
Default Username       | oem
Default Password       | system76
Network Address (eth0) | Assigned by DHCP
Network Address (eth1) | Unconfigured

## Initial Server Setup

Connect your server to a monitor to determine the IP addresses assigned to your server.  Afterwards you can configure and manage your server from any other computer on your network.

Run the following command to determine the server's IP address:

`ifconfig`

In the directions below replace $IPADDRESS with the server's IP address.

#### Remotely Administer Your Server

From a Linux client terminal:

`ssh oem@$IPADDRESS`

From a Windows computer: Download PuTTY from [here](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).  Connect to the server using the username `oem` and `$IPAddress`.


### Add Your Administrative User

1. From your client computers terminal type:`ssh oem@$IPADDRESS`
2. enter the default password - `system76`
3. Create Your Administrator User: `sudo adduser [new username]`
4. Enter the oem user password - `system76`
5. Enter your `new users password`
6. Re-enter your`new users password`
7. Enter user info (Full Name, etc.)
8. Accept the Parameters by pressing <kbd>y</kbd> then <kbd>Enter</kbd>
9. Add your new user to the Admin group: `sudo adduser [new username] adm`
10. Add your new user to the Sudo group: `sudo adduser [new username] sudo`
11. Logout by typing `exit`
12. Log back in by typing `ssh [new username]@$IPADDRESS`
13. Remove the OEM User: `sudo deluser oem`


### Configure the Server's IP Addresses

`sudo nano /etc/network/interfaces` *Adjust as necessary & press <kbd>Ctrl</kbd> + <kbd>X</kbd> → <kbd>Y</kbd> → <kbd>enter</kbd> to save.

`sudo nano /etc/resolv.conf` *Adjust as necessary & press <kbd>Ctrl</kbd> + <kbd>X</kbd> → <kbd>Y</kbd> → <kbd>enter</kbd> to save.



Restart network services (this will drop your ssh connection):

`sudo /etc/init.d/networking restart`


`sudo nano /etc/network/interfaces` Example /etc/network/interfaces file:

```
# This is the loopback interface - Do not adjust
auto lo
iface lo inet loopback

# Primary Network Interface
auto eth0
iface eth0 inet static
address 10.13.15.10
netmask 255.255.255.0
gateway 10.13.15.254

# The Secondary Network Interface
auto eth1
iface eth1 inet static
address 10.13.15.11
netmask 255.255.255.0
gateway 10.13.15.254
```


`sudo nano /etc/resolv.conf` Example /etc/resolv.conf file.

```
nameserver 10.13.15.1
nameserver 10.13.15.2
```

### Configure the Server's Hostname and Domain
`sudo nano /etc/hosts` Example /etc/hosts file:

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


`sudo nano /etc/hostname` Example /etc/hostname file:

`fileserver`

Verify the correct hostname and domain:

`hostname -f`

### Update Your Server

Download and install Ubuntu updates:

`sudo apt-get update && sudo apt-get dist-upgrade`

Reboot may be required for the changes to take effect:

`sudo reboot`

### Configure the Server's Time Zone

`sudo dpkg-reconfigure tzdata`

## Additional Server Resources
[Ubuntu Server Information](http://www.ubuntu.com/server)

[Ubuntu Server Documentation](https://help.ubuntu.com/)
