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
section: software

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

### Install Steam From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for Steam or by clicking the <u>Steam</u> icon on the Pop!_Shop home page. 

![Pop!_Shop](/images/steam/pop_shop1.png)

Then click the **install button**.

![Pop!_Shop](/images/steam/pop_shop2.png)

#### Enable Steam Play (Proton)

Proton is a way to enable support for some Windows games using Wine and some tweaks and additions that Valve have been working on. You can enable it using the the <u>Steam</u> Settings to download and install Proton.

![Steam Settings](/images/steam/enable-steam-play_proton.png)
