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

To enable Wayland on Pop requires editing the configuration file for GNOME Display Manager (GDM). To edit this file, access `/etc/gdm3/custom.conf` as an administrative user using your text editor of choice. In this example, `nano` is used but `vim` or `gedit` (for a GUI editor) will work just as well.

To edit the `custom.conf` file run the following Terminal command:

```bash
sudo nano /etc/gdm3/custom.conf
```

Once in the editor, comment out the line `WaylandEnable=false` by adding a "#" (pound sign) at the beginning of the line, like this:

```bash
# WaylandEnable=false
```

Save the file and restart your computer.

After decryption (if applicable), on the login screen, click on your user-icon. As the field prompting for the password appears, there should now be a gear showing on the bottom right side of the login screen. Click the gear and select `Pop Wayland` from the menu.

Later, if you want to switch back to Xorg, log out and select `Pop` from the gear icon instead.
