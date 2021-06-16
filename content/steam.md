---
layout: article
title: Install Steam 
description: >
   Want to game on your super awesome new System76 machine?  Take a look at these instructions to install Steam, a marketplace for hundreds of Linux games.
keywords:
  - gaming
  - support
  - steam
  - proton
image: http://support.system76.com/images/system76.png
hidden: false
section: media

---

# Steam (Install)

### Install Steam From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>, <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>.

![Activities Overview](/images/steam/search.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search steam
```

![Terminal](/images/steam/steam1.png)

Once we find the right name for <u>Steam</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
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
<u>Protonup</u> is an easy tool, written in Python, to install the newest-available version of ProtonGE into Steam's proton directory. <u>ProtonGE</u> is a fork of <u>Proton</u>, maintained by GloriousEggroll on Github [here](https://github.com/GloriousEggroll/proton-ge-custom). <u>Protonup</u> is maintained by Naseef in the PyPi project directory [here](https://pypi.org/project/protonup/).

First, we'll need the Python package manager, pip.

```bash
sudo apt update
sudo apt install python3-pip
```

Now, let's install protonup via pip.

```bash
pip3 install protonup
```

The `protonup` command will be available after a reboot, or you can run the below command to add it to your `PATH` for immediate use.

```bash
source ~/.profile
```

Now, after <u>Steam</u> is installed, you can run protonup in terminal, and it will grab the newest ProtonGE build. This tool will also pull hotfixes. Below is an example of the tools output:

```bash
protonup
Ready to download Proton-6.10-GE-1 
Size      : 370.81 MiB 
Published : 2021-06-07
Continue? (Y/N): y
Downloaded 100.0% - 370.81 MiB/370.81 MiB
[INFO] Installed in: /home/aaronh/.steam/root/compatibilitytools.d/Proton-6.10-GE-1
```
