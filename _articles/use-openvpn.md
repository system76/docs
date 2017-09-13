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
  - System76
image: http://support.system76.com/images/system76.png
hidden: true
section: articles

---

This tutorial will very closely follow the one that ProtonVPN has for using their VPN locations but it can also be used to use other VPN providers.

For all Desktop Enviroments, Window Managers and anything in general you will need the 'network-manager-openvpn' package, this will also install the openvpn package as that is a dependcy.

```
sudo apt install network-manager-openvpn
```

If your using the GNOME Shell (Desktop Enviroment) you will also need the 'network-manager-openvpn-gnome' package:

```
sudo apt install network-manager-openvpn-gnome
```

Next let's open up the Settings app (GNOME Control Center)

![GNOME-Control-Center](/images/use-openvpn/GNOME-Control-Center.png)


If you have a .ovpn (OpenVPN file type) you would click 'Import from file...'

![VPN-Dialog](/images/use-openvpn/VPN-Dialog.png)

If you setup your own server for use of OpenVPN then the top option would let you fill all the needed info to connect to your server.
