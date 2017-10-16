---
layout: article
title: Use OpenVPN 
description: >
  This page will go over setting up and using OpenVPN to browse the internet more securely in places like airports, cafe shops and more.
keywords:
  - OpenVPN
  - Security
  - Privacy
  - ProtonVPN
image: http://support.system76.com/images/system76.png
hidden: true
section: articles

---

### Use OpenVPN

For all Desktop Enviroments you will need the <u>network-manager-openvpn</u> package, this will also install the <u>openvpn</u> package as that is a dependency.

### Open A Terminal

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> on your keyboard.  A purple Terminal window should open up.

### Install Packages

Copy and paste the following long line, followed by <kbd>Enter</kbd>:

```
sudo apt install network-manager-openvpn
```

If your using GNOME Shell (Desktop Enviroment) you will also need the <u>network-manager-openvpn-gnome</u> package:

```
sudo apt install network-manager-openvpn-gnome
```

### Open Network Settings

Next let's open up the Settings app (GNOME Control Center)

![GNOME-Control-Center](/images/use-openvpn/GNOME-Control-Center.png)

### Using a .ovpn file

If you have a .ovpn (OpenVPN file type) you would click 'Import from file...'

![VPN-Dialog](/images/use-openvpn/VPN-Dialog.png)

#### Connect to your personal server

If you setup your own server for use of OpenVPN then the top option would let you fill all the needed info to connect to your server.
