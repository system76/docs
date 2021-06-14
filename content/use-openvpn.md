---
layout: article
title: OpenVPN (Install)
description: >
  This page will go over setting up and using OpenVPN to browse the internet more securely in places like airports, cafe shops and more.
keywords:
  - OpenVPN
  - Security
  - Privacy
  - ProtonVPN
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---

# OpenVPN (Install) 

### Open A Terminal

#### Pop!_OS

Press <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

#### Ubuntu

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

### Install Packages

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
