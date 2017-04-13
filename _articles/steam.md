---
layout: article
title: Install Steam
description: >
   Want to game on your super awesome new System76 machine?  Take a look at these instructions to install Steam, a marketplace for hundreds of Linux games.
keywords:
  - gaming
  - support
  - steam
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Currently, the best way to install <u>Steam</u> is with command line.

### Install Steam From Command Line

Open the <u>Terminal</u> (search <u>Terminal</u> from the Ubuntu (<i class="fl-ubuntu"></i>) dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>)

![Ubuntu Deskop](/images/general/open-dash_min.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```
apt search steam
```

![Terminal](/images/steam/Install-SteamCLI-16.04.png)

Once we find the right name for <u>Steam</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```
sudo apt install steam
```

![Terminal](/images/steam/Install-SteamCLI_P2-16.04.png)

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

Once installed, use the Ubuntu (<i class="fl-ubuntu"></i>) dash to search for and run <u>Steam</u>.
