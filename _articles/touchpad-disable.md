---
layout: article
title: Hardware - Disable Touchpad While Typing
description: If you would like to disable the touchpad while typing, please follow these instructions.
keywords:
  - touchpad
  - trackpad
  - clickpad
  - mouse settings
  - disable
  - typing
image: http://support.system76.com/images/system76.png
hidden: true
section: articles

---

To disable the touchpad while typing, a built-in program needs run. It's best to add it to the startup items to run every time your computer starts. Search for and open <u>Startup Applications</u> from the Dash by pressing the Super Key <kbd><span class="fl-ubuntu"></span></kbd>, <kbd><span class="fl-pop-key"></span></kbd> and then click **Add**.

Field    | Value
---------|------------------------------
Name:    | Syndaemon
Command: | `syndaemon -i 1.0 -K -t -d`
Comment: | Disable touchpad while typing

The `-i 1.0` parameter sets the idle time of the keyboard to 1 second.  
The `-K` ignores the Modifier keys.  
The `-t` only disables tapping and scrolling (leave out to disable all mouse movement).  
The `-d` runs it as a daemon (in the background).  

Click **Add** and then **Close**.  Reboot your computer to enable this setting.

Note: This is a per user setting, so repeat this process for all user accounts.
