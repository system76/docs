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
section: pop

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

#### Install Protonup to Manage Custom Proton Versions
Protonup is an easy tool, written in Python, to install the newest-available version of ProtonGE into Steam's proton directory. ProtonGE is a fork of Proton, maintained by GloriousEggroll on github [here](https://github.com/GloriousEggroll/proton-ge-custom). Protonup is maintained by Naseef in the PyPi project directory [here](https://pypi.org/project/protonup/).

First, we'll need the Python package manager, pip.
```
sudo apt update
sudo apt install python3-pip
```

Now, let's install `protonup` via pip.
```
pip3 install protonup
```

Now, after steam is installed, you can run protonup in terminal, and it will grab you the newest custom ProtonGE. This tool will also pull hotfixes. Below is an example run of the tool.

```
➜  ~ protonup 
Ready to download Proton-6.9-GE-2-github-actions-test 
Size      : 370.27 MiB 
Published : 2021-05-30
Continue? (Y/N): y
Downloaded 100.0% - 370.31 MiB/370.27 MiB
[INFO] Installed in: /home/s31bz/.steam/root/compatibilitytools.d/Proton-6.9-GE-2-github-actions-test
```
