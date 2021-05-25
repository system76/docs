---
layout: article
title: Install OpenVPN
description: >
  This page will go over setting up and using OpenVPN to browse the internet more securely in places like airports, cafe shops and more.
keywords:
  - OpenVPN
  - Security
  - Privacy
  - ProtonVPN
image: http://support.system76.com/images/system76.png
hidden: false
section: security-encryption

---

## Install ProtonVPN Graphcial Client

### Download the .deb package from their website

![Log into ProtonVPN website](/images/use-openvpn/Logged-In.png)

![Download debian file part 1](/images/use-openvpn/Debian-file-download.png)

![Download debian file part 2](/images/use-openvpn/Downloaded-debian-file.png)

### Installing the .deb package

![Installing the debian file](/images/use-openvpn/Installing-debian-file.png)

### Install the package:

### Pop!_OS

Press <kbd><span class="fl-pop-key"></span></kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

### Ubuntu

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

Next enter the following commands followed by <kbd>Enter</kbd>:

```bash
sudo apt update
sudo apt install protonvpn
```

### Using the Graphical Client

![ProtonVPN Main Window](/images/use-openvpn/ProtonVPN-main-window.png)

![ProtonVPN signed in](/images/use-openvpn/ProtonVPN-signed-in.png)

![ProtonVPN connected to a server](/images/use-openvpn/ProtonVPN-connected.png)

## Install a VPN using OpenVPN files

### Pop!_OS

Press <kbd><span class="fl-pop-key"></span></kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

### Ubuntu

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

#### Install Packages

Enter the following command followed by <kbd>Enter</kbd>:

```bash
sudo apt install network-manager-openvpn-gnome
```

### Open Network Settings

Access OpenVPN setting in the <u>Settings</u> application (GNOME Control Center)

![GNOME-Control-Center](/images/use-openvpn/GNOME-Control-Center.png)

### Getting a .ovpn file

OpenVPN uses `.ovpn` files for setting up the VPN on your system and includes the servers to contact. Most VPN providers will provide a `.ovpn` file such as the following:

- [ProtonVPN](https://protonvpn.com/)
- [NordVPN](https://nordvpn.com/ovpn/)
- [Private Internet Access](https://www.privateinternetaccess.com/openvpn/openvpn.zip)

### Using a .ovpn file

After getting a `.ovpn` (OpenVPN file type) click the plus icon to the right of the VPN section. A dialog will as show will open. Click 'Import from file...'

![VPN-Dialog](/images/use-openvpn/VPN-Dialog.png)

Select the `.ovpn` file downloaded from your VPN provider.
