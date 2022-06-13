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

Using Wayland is not supported on Pop!_OS and may cause problems particularly when using Nvidia graphics cards. Do so at your own risk.

Edit `/etc/gmd3/custom.conf` and comment out the line `WaylandEnable=false`. Save the file and restart your computer. There should now be a gear showing on the bottom right side of the login screen when you're prompted for your password. From there you can select `Pop Wayland`. If later you want to switch back to Xorg logout and select `Pop` from the gear icon.
