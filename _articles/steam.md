---
layout: article
title: Games - Install Steam
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

### Install Steam From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><i class="fl-ubuntu"></i></kbd>, <kbd><span class="fl-pop-key"></span></kbd>.

![Activities Overview](/images/steam/search.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```
apt search steam
```

![Terminal](/images/steam/steam1.png)

Once we find the right name for <u>Steam</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```
sudo apt install steam
```

![Terminal](/images/steam/steam2.png)

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

Once installed, use the Activities Overview to search for and run <u>Steam</u>.
