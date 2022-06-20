---
title: System76 Driver (Install)
description: >
  Learn how to add the System76 Driver to your System76 computer after reinstalling Ubuntu
keywords:
  - system76
  - driver
  - NVIDIA
  - support

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

This guide will show you how to add the System76 software repository and install the driver on Ubuntu.

Please note these steps are not necessary in Pop!\_OS, which includes the repository and the appropriate drivers installed by default.

## Adding the Apt Preferences File

If you are running Ubuntu 19.10 or later, you will need to manually add an apt preferences file to "pin" the System76 repository. This will tell apt to prefer System76 packages over standard Ubuntu packages. Installing the System76 Driver will not be possible until this step is completed.

Create the apt preferences file here:

```bash
sudo gedit /etc/apt/preferences.d/system76-apt-preferences
```

Add the following six lines (seven if you count the space in the middle):

```bash
Package: *
Pin: release o=LP-PPA-system76-dev-stable
Pin-Priority: 1001

Package: *
Pin: release o=LP-PPA-system76-dev-pre-stable
Pin-Priority: 1001
```

Save the file. Now you should be able to install the System76 Driver as described below.

## Installing the Driver

To install our Driver you need to run the following commands in the Terminal:

```bash
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt-get update
sudo apt install system76-driver
```

This installs the System76 driver and related utilities which are needed to enable full functionality for your system.

## Installing the System76 NVIDIA Driver for Systems with NVIDIA GPUs

If your system has an NVIDIA graphics card, you will want to go ahead and use this command to install the System76 Driver with NVIDIA graphics drivers built-in:

```bash
sudo apt-get install system76-driver-nvidia
```

In addition to the standard packages, that will pull in the latest NVIDIA drivers as packaged by System76, and all related packages needed to take full advantage of your dedicated NVIDIA graphics card.

### Install System76 Driver on Other Operating Systems

**DISCLAIMER:** This section explains how to install the <u>System76 Driver</u> on Arch and Fedora.

The System76 engineering and QA teams may not regularly test other OSes on System76 hardware. This section is provided for informational purposes only. 

System76 encourages users to take ownership of their machines and install whatever software or operating systems they prefer. However, System76 does not guarantee the success or quality of experience when installing other operating systems.

The support team typically makes a best-effort attempt to offer direction or troubleshooting for other distributions. The team may determine that troubleshooting has exceeded the scope of support. If that's the case, further questions should be referred to those operating system(s)' support forums.

**Note:** At this time, it is recommended to use the NVIDIA driver from the Arch and Fedora repositories.

### Arch - Manual install

First, install some build dependencies for the the <u>System76 Firmware Daemon</u> and <u>System76 Driver</u> packages:

```bash
sudo pacman -S --needed base-devel git linux-headers
```

Next, the <u>System76 Driver</u> package can be cloned, built, and installed using these commands:

```bash
git clone https://aur.archlinux.org/system76-driver.git
cd system76-driver
makepkg -srcif
sudo systemctl enable --now system76
```

### Arch - Using an AUR helper

Arch uesrs can alternatively use an AUR helper to automate some of the steps for installation and upgrading; in this example, we'll use the <u>Paru</u> application. <u>Paru</u> can be installed from the AUR using these commands:

```bash
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

**Note:** By default, <u>Paru</u> uses VIM keyboard shortcuts, so when you see a `:`, press the <kbd>q</kbd> key to continue. You may also need to confirm the import of some public keys using the <kbd>y</kbd> key.

```bash
paru -s system76-driver
# choose the first software option listed
sudo systemctl enable --now system76
```

### Fedora

Run these commands in a <u>Terminal</u> to enable the [community Fedora COPR](https://copr.fedorainfracloud.org/coprs/szydell/system76/) and install the <u>System76 Driver</u> :

```bash
sudo dnf copr enable szydell/system76
sudo dnf install system76*
sudo systemctl enable --now system76-power.service
```
