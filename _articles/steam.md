---
layout: article
title: Install Steam
description: >
   Want to game on your super awesome new System 76 machine?  Take a look at these instrucitons to install Steam, a marketplace for hundres of Linux games.
keywords:
  - gaming
  - support
  - steam
hidden: false
section: articles

---

Currently, the best way to install Steam is with command line.

### Install Steam from the Command Line

To launch the _Terminal_ application you can use the _Dash_ to search for it if it is not pinned on your _Launcher_.

![Ubuntu Deskop](/images/general/open-dash_min.png)

Once the _Terminal_ application is opened you can use the Command Line tool `apt` to search for it like so:

`apt search steam`

![Terminal](/images/steam/Install-SteamCLI-16.04.png)

Once we find the right name for Steam we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

`sudo apt install steam`

![Terminal](/images/steam/Install-SteamCLI_P2-16.04.png)

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

Once installed, use the _Dash_ to search for and run Steam.
