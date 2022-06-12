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

Edit `/etc/gmd3/custom.conf` and comment out the line `WaylandEnable=false`. Save the file and restart your computer. There should now be a gear showing on the bottom right side of the login screen when you're prompted for your password. From there you can select `Pop Wayland`.
