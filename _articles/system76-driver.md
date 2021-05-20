---
layout: article
title: Install the System76 Driver
description: >
    Our System76 Driver can generate system logs, we'll also go over how to reinstall the NVIDIA Driver.
keywords:
  - system76
  - driver
  - NVIDIA
  - support
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

## System76 Driver

To install our Driver you need to run the following commands in the Terminal:

```bash
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt-get update
sudo apt-get install -y system76-driver
```

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

## System76 NVIDIA Driver

Follow the above steps as well as this additional command if you have a NVIDIA GPU:

```bash
sudo apt-get install system76-driver-nvidia
```

NOTE: You can install the `system76-driver-nvidia` package for NVIDIA systems instead of the `system76-driver` as it is a dependency.  

### Generate Log Files

The System76 Driver can be opened by pressing the Ubuntu or Pop key and then search for 'system76', then click on the System76 Driver. 

Next click on the button outlined in red in the <u>System76 Driver</u> application and there will be a file called `system76-logs.tgz` placed in your Home directory (/home/username)

![CreateLogFiles](/images/system76-driver/CreateLogFiles.png)

### Troubleshooting

#### Ubuntu and Pop!_OS

##### Apt Preferences File

If you are running Ubuntu 19.10 or later, you will need to manually add an apt preferences file to "pin" the System76 repository. This will tell apt to prefer System76 packages over standard Ubuntu packages. Installing the System76 Driver will not be possible until this step is completed.

Create the apt preferences file here:

```bash
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