---
layout: article
title: Install the System76 Driver
description: >
    Learn how to add the System76 Driver to your System76 computer after reinstalling your OS
keywords:
  - system76
  - driver
  - NVIDIA
  - support
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

### System76 Driver

This guide will show you how to add the System76 software repository and install the driver on Ubuntu.

Please note these steps are not necessary in Pop!\_OS, which includes the repository and the appropriate drivers installed by default. 

#### Adding the Apt Preferences File

If you are running Ubuntu 19.10 or later, you will need to manually add an apt preferences file to "pin" the System76 repository. This will tell apt to prefer System76 packages over standard Ubuntu packages. Installing the System76 Driver will not be possible until this step is completed.

Create the apt preferences file here:

```
sudo gedit /etc/apt/preferences.d/system76-apt-preferences
```

Add the following six lines (seven if you count the space in the middle):

```
Package: *
Pin: release o=LP-PPA-system76-dev-stable
Pin-Priority: 1001

Package: *
Pin: release o=LP-PPA-system76-dev-pre-stable
Pin-Priority: 1001
```

Save the file. Now you should be able to install the System76 Driver as described below.

#### Installing the Driver 

To install our Driver you need to run the following commands in the Terminal:

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt-get update
sudo apt install system76-driver
```

This installs the System76 driver and related utilities which are needed to enable full functionality for your system. 

#### Installing the System76 NVIDIA Driver for Systems with NVIDIA GPUs 

If your system has an NVIDIA graphics card, you will want to go ahead and use this command to install the System76 Driver with NVIDIA graphics drivers built-in:

```
sudo apt-get install system76-driver-nvidia
```

In addition to the standard packages, that will pull in the latest NVIDIA drivers as packaged by System76, and all related packages needed to take full advantage of your dedicated NVIDIA graphics card.

### Install System76 Driver on Other OSes

#### Arch

Run these commands in a <u>Terminal</u> to clone, build and install the <u>System76 Driver</u> :

```bash
sudo pacman -S --needed base-devel git linux-headers
git clone https://aur.archlinux.org/system76-driver.git
cd system76-driver
makepkg -srcif
sudo systemctl enable --now system76
``` 

NOTE: For other featues like keyboard backlight support and firmware updates other packages will need to be installed. Refer to this [article](/articles/system76-software) to install that software.