---
layout: article
title: Disable Touchpad While Typing
description: If you would like to disable your touchpad while typing, please follow these instructions.
keywords:
  - touchpad
  - trackpad
  - clickpad
  - mouse settings
  - disable
  - typing
hidden: false
section: articles

---

To disable the touchpad while typing in Ubuntu, a built-in program needs to be run.  It's best to add it to the startup items to run every time your computer starts.  Search for and open 'Startup Applications' from the Dash, and then click **Add**

> Name: `Syndaemon`
>
> Command: `syndaemon -i 1.0 -K -t -d`
>
> Comment: `Disable touchpad while typing`

The `-i 1.0` parameter sets the idle time of the keyboard to 1 second.  
The `-K` option ignores the Modifier keys.  
The `-t` option only disables tapping and scrolling (optional: leave out to disable all mouse movement).  
The `-d` runs it as a daemon (in the background).  

Click **Add** and then **Close**

Reboot your computer to enable this setting

Note: this is a user setting, so repeat this process for all user accounts.
