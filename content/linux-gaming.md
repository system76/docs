---
layout: article
title: Gaming on Pop!_OS
description: >
   Want to game on your super awesome new System76 machine?  Take a look at these instructions to set your system up for gaming!
keywords:
  - gaming
  - support
  - steam
  - lutris
  - gamehub
  - proton
image: http://support.system76.com/images/system76.png
hidden: false
section: media

---

# Gaming on Pop!\_OS

#### [Table of Contents](#contents)
- [Game Launchers](#game-launchers)
    - [Steam](#steam)
    - [GameHub](#gamehub)
    - [Lutris](#lutris)
- [Using Steam](#using-steam)
    - [Using Proton](#using-proton)
    - [Using Native](#using-native)
- [Using GameHub](#using-gamehub)
    - [Steam](#using-steam-on-gamehub)
- [Using Lutris](#using-lutris)
    - [Using the website](#using-the-website)

## Steam (Install)

### Install Steam From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search steam
```

![Terminal](/images/linux-gaming/terminal-steam-search.png)

Once we find the right name for <u>Steam</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install steam
```

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

### Install Steam From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for Steam or by clicking the <u>Steam</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop Steam](/images/linux-gaming/pop-shop_steam.png)

Once installed, use the Activities Overview to search for and run <u>Steam</u>.

### Enable Steam Play (Proton)

Proton is a way to enable support for some Windows games using Wine and some tweaks and additions that Valve have been working on. You can enable it using the the <u>Steam</u> Settings to download and install Proton.

![Steam Settings](/images/linux-gaming/enable-steam-play_proton.png)

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

## Gamehub (Install)

### Install Gamehub From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search gamehub
```

![Terminal](/images/linux-gaming/terminal-gamehub-search.png)

Once we find the right name for <u>GameHub</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install com.github.tkashkin.gamehub
```

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

### Install GameHub From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for GameHub or by clicking the <u>GameHub</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop GameHub](/images/linux-gaming/pop-shop_gamehub.png)

Once installed, use the Activities Overview to search for and run <u>GameHub</u>.

## Lutris (Install)

### Install Lutris From Command Line

Open the <u>Terminal</u> application by searching for <u>Terminal</u> after pressing the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>SUPER</kbd>.

![Activities Overview](/images/linux-gaming/search-terminal.png)

Once the <u>Terminal</u> application is opened you can use the Command Line tool `apt` to search for it like so:

```bash
apt search lutris
```

![Terminal](/images/linux-gaming/terminal-steam-lutris.png)

Once we find the right name for <u>Lutris</u> we can install it with `apt` as well. Please type this command into the terminal and press <kbd>Enter</kbd>:

```bash
sudo apt install lutris
```

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

### Install Lutris From the Pop!_Shop

Open the <u>Pop!_Shop</u> application then either search for Lutris or by clicking the <u>Lutris</u> icon on the Pop!_Shop home page. Now click the **Install** button.

![Pop!_Shop Lutris](/images/linux-gaming/pop-lutris.png)

Once installed, use the Activities Overview to search for and run <u>Steam</u>.

# Using Steam

## Using Proton

This game is an example of using Proton to run a Windows only game. You can also tell when you see the "This game will launch with Steam Play" message.

![Playing a Proton Game](/images/linux-gaming/playing-proton-game.png)

## Using Native

This game is an example of running a Linux native game.

![Playing a native game](/images/linux-gaming/playing-native-game.png)

# Using GameHub

## Using Steam on GameHub

Once you sign into <u>Steam</u> though <u>GameHub</u> your games will be displayed. Note that games will be slightly discolored if they aren't installed which you will see that the two top left games are installed on this system.

![Using Steam with GameHub](/images/linux-gaming/gamehub-steam.png)

# Using Lutris

## Using the website

Some games like WoW (World of Warcraft) have installers on the Lutris website like the screenshot below. With <u>Lutris</u> installed you can click the **Install** button to install the game which will open <u>Lutris</u>.

![Lutris Install Button](/images/linux-gaming/lutris-install-button.png)

From there open the link with <u>Lutris</u> to open the <u>Lutris</u> to access the installer like the screenshot below. From there click the **Install** button to start the installation. 

![Lutris Installer](/images/linux-gaming/lutris-installer.png)

Then click the **Continue** button to start the installation of <u>Battle.net</u> like in the screenshot below.

![Lutris Installer 2](/images/linux-gaming/lutris-installer2.png)

You will need to install some WINE packages during the installation of <u>Battle.net</u>

It is *very* important to close <u>Battle.net</u> to complete the installation then reopen it to sign into your account. Now that <u>Battle.net</u> is installed you can launch it with the **Play** button once it is selected in <u>Lutris</u>.

![Lutris Installed Game](/images/linux-gaming/lutris-wow-installed.png)

## Using exe files

