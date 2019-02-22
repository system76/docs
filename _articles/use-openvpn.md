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

### Open A Terminal

#### Pop!_OS

Press <kbd><span class="fl-pop-key"></span></kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

#### Ubuntu

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

### Install Packages

Enter the following command followed by <kbd>Enter</kbd>:

```
sudo apt install network-manager-openvpn-gnome
```

### Open Network Settings

Next let's open up the <u>Settings</u> application (GNOME Control Center)

![GNOME-Control-Center](/images/use-openvpn/GNOME-Control-Center.png)

### Using a .ovpn file

If you have a .ovpn (OpenVPN file type) click the plus icon to the right of the VPN section then this window will appear. Next you would click 'Import from file...'

![VPN-Dialog](/images/use-openvpn/VPN-Dialog.png)

### Getting a .ovpn file

Most VPN providers will provide a .ovpn file such as the following:

- [ProtonVPN](https://protonvpn.com/)
- [NordVPN](https://nordvpn.com/ovpn/)
- [Private Internet Access](https://www.privateinternetaccess.com/openvpn/openvpn.zip)
