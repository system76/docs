---
layout: article
title: Using Legacy Status Icons in Pop!_OS
description: Use legacy status icons (system tray/AppIndicators) with a GNOME extension
keywords:
  - legacy icons
  - status icons
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---

Pop!\_OS uses GNOME Shell for launching apps, switching windows, managing workspaces, etc. Ubuntu and previous versions of GNOME Shell supported "status icons" or "AppIndicators" where installed apps could add arbitrary icons to the shell. In GNOME Shell 3.26, this functionality was [removed in favor of other APIs](https://blogs.gnome.org/aday/2017/08/31/status-icons-and-gnome/). This extension was added into the default install of Pop!_OS starting with 20.04 LTS.

If you are running a Pop!_OS version older than 20.04, some apps you use (like Dropbox) might not have been updated and thus might depend on being able to draw a status icon. Fortunately it is easy to add legacy status icon support with a GNOME Shell extension.

## Install

The extension `gnome-shell-extension-appindicator` works well for this and is what we recommend users of Pop!\_OS install if they need status icons. To install, open the **Terminal** app (<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>+<kbd>T</kbd>) and type:

```bash
sudo apt install gnome-shell-extension-appindicator
```

…and press <kbd>Enter</kbd>. If prompted, type your password and press <kbd>Enter</kbd>. The extension is now installed, but you need to enable it.

## Enable

In the **Terminal** app or from the **Enter a command** dialog (<kbd>Alt</kbd>+<kbd>F2</kbd>), type:

```bash
gnome-shell-extension-prefs
```

…and press <kbd>Enter</kbd>. In the **Shell Extensions** window that comes up, turn on the **KStatusNotifierItem/AppIndicator Support** switch.

Lastly, you may need to **log out** and back in for icons to show up. When you do, any app's status icons will show up at the right-side of the top panel, next to the system menu.
