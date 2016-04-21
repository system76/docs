---
layout: article
title: Restore your System76 Computer
description: >
    Official directions to your System76 computer to factory defaults.
keywords:
    - Ubuntu 16.04
    - Restore
    - Reinstall
    - Installation
    - Driver
    - system76-driver
    - Release
    - System76
image: https://system76.com/images/newsletter/2016-04/xenial.jpg
---


System76 computers use a standard Ubuntu installation disc and the System76 Driver to fully restore your system to factory settings. This action will reformat your hard drive and remove all data from the computer. Backup any personal files in your home directory before installing. 

### Important Note!

If you recently updated your system, and now it does not boot, you may not need to reinstall Ubuntu. If, when you start your computer, you see a flashing underscore on the screen ("_"), then it is likely that Ubuntu's bootloader, GRUB, was not updated properly. To restore it, see [How to Restore Grub Bootloader](http://docs.system76.com/articles/grub)

## 1. Create an Ubuntu Bootable Disk

First, you'll need to create a bootable disk you can install Ubuntu from. 

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your comptuer. The restore process can leave your files intact, but it's best to be safe in case something goes wrong.

## 2. Reinstall

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. Immediately after you turn the computer on: 

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F8</kbd> or <kbd>F10</kbd>

During the initial setup, you may be asked to "Try Ubuntu" or to "Install Ubuntu". You'll need to choose the "Install Ubuntu" option to continue with the installation. Additionally, you will want to check the box labeled "Download updates while installing Ubuntu" to ensure that your new installation is fully up to date once the installation is complete.

![VirtualBox Listing in USC](/images/restore/updates.png)

#### Notes about Computers with Nvidia Graphics

Due to issues with the libllvm package (See [this bug](https://bugs.launchpad.net/oem-priority/+bug/1564156)) on the install disk, customers with 6th-Generation Core processors and Nvidia graphics will need to wait until 28th April, 2016 to be able to restore your computer.

## 3. Install the System76 Driver

Once you've reinstalled Ubuntu, you'll need to download and install the System76 Driver. Open the Terminal app (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

    sudo apt-add-repository ppa:system76-dev/stable
    sudo apt update
    sudo apt install system76-driver

---

**For NVIDIA Graphics:** If you ordered a system with a discreet Nvidia graphics card, you will need to manually install the drivers for your card to get the optimum performance. Open the Terminal app and enter the following command:

    sudo apt install system76-driver-nvidia

---

Once the process is finished, restart your computer for the changes to take effect.

# Where to Get Help

Having trouble with your reinstall? We're here to help. Here are two ways to get assistance:

# 1. Contact a Technician

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under the product you need help with.

## 2. Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
