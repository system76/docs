---
layout: article
title: Pop! - Install Pop!_OS On Your System76 Computer
description: >
  Full instructions on installing Pop!_OS your computer.
keywords:
  - Pop!_OS
  - 17.10
  - Restore
  - Reinstall
  - Installation
  - Driver
  - system76-driver
  - system76-driver-nvidia
  - Release
  - System76
image: http://support.system76.com/images/pop-icon.jpg
hidden: false
section: faq

---


The following guide describes how to download the Pop!_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

Requirements: At the time of this writing Pop!_OS only runs on 64-bit x86 architecture. At least 4 GB of RAM and 20 GB of storage is recommended.

## Make Bootable Drive

Please see our instructions for making and booting from a live disk of Pop!_OS [here](/articles/live-disk/).

## Installing Pop!_OS

Once the system boots from the Pop!_OS live image (cool words for an OS running from a flash drive), you will be at the Pop!_OS desktop! You can use the operating system as you normally would now. Because it is running from the flash drive performance may be slower and if you reboot back into the flash drive at this point, you'll lose anything you've changed while running in this "live session".

Double click the *Install Pop!_OS* desktop icon to continue.  

![Install Pop!_OS Icon](/images/install-pop/pop-live-desktop.jpg)

First we have to select the language we want to use:

![Select Language](/images/install-pop/select-language-pop.jpg)

Next you'll see a few different options for how you can install Pop!_OS. If you already have another operating system installed (like Windows or MacOS) and you don't want to get rid of it - select the "Install Alongside option" (pictured below):

![Install and Erase Disk](/images/install-pop/erase-install.jpg)

To finish this part up, it will ask you to confirm that you want to make changes to your hard drive. If you are okay to do this, then hit "Continue". If you want to check or change something, you can click "Go Back".

![Continue or Go Back](/images/install-pop/write-changes.jpg)

Then Pop!_OS should start installing!

![Installing Pop!_OS For Real!](/images/install-pop/installing-pop-os.jpg)

Just sit tight as the installer does its thing. Once it completes, you will have the option to continue using the live session or restart the computer (so  you can boot into your newly install Pop!_OS installation).

Once you restart, remove the flash drive when it tells you to, and when the computer comes back up - you'll have Pop!_OS. Great job!

### Install System76 Driver

Once you've reinstalled Pop!_OS, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> (search <u>Terminal</u> by pressing the Super Key <kbd><i class="fl-ubuntu"></i></kbd>), then enter the following commands:

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt update
sudo apt install -y system76-driver
```
