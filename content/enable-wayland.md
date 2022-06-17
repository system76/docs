---
title: Enabling Wayland
description: >
 How to enable Wayland on Pop!_OS
keywords:
 - Wayland
 - Display Manager

hidden: false
section: software
tableOfContents: true
---

**Note:** *Using Wayland is not supported on Pop!\_OS and may cause problems particularly when using Nvidia graphics cards. Do so at your own risk.*

Edit `/etc/gdm3/custom.conf` and comment out the line `WaylandEnable=false`. Save the file and restart your computer.

After decryption (if applicable) on the login screen, click on your user-icon. As the field prompting for the password appears, there should now be a gear showing on the bottom right side of the login screen. Click the gear and select `Pop Wayland` from the menu.

Later, if you want to switch back to Xorg, log out and select `Pop` from the gear icon.
