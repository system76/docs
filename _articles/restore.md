---
layout: article
title: Restore Your System76 Comptuer
description: >
    Official directions to restore your System76 computer.
keywords:
    - Ubuntu 15.04
    - Vivid Vervet
    - Restore
    - Refresh
    - Reinstall
    - System76
---

# Restoring Your System76 Computer

System76 computers use a standard Ubuntu installation disc and the System76 Driver to fully restore your system to factory settings. This action will reformat your hard drive and remove all data from the computer. Backup any personal files in your home directory before installing. 

### Important Note!

If you recently updated your system, and now it does not boot, you may not need to reinstall Ubuntu. If, when you start your computer, you see a flashing underscore on the screen ("_"), then it is likely that Ubuntu's bootloader, GRUB, was not updated properly. To restore it, see How to Restore Grub Bootloader. 

## 1. Prepare for the Upgrade

First, we recommend having Ubuntu installation media (i.e. a DVD or USB drive) handy before starting any upgrades in case something goes wrong.

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
<small>OS X can't make a System76-compatible USB Drive</small>| [Using OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your comptuer. The restore process can leave your files intact, but it's best to be safe in case something goes wrong.

## 2. Reinstall

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. When you see the System76 logo on the screen: 

Laptops  | Desktops
-------- | --------
Hold F7 or F1 | Hold F8 or F10

## 3. Install the System76 Driver

Once you've reinstalled Ubuntu, you'll need to download and install the System76 Driver. Open the Terminal app (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

    sudo apt-add-repository ppa:system76-dev/stable
    sudo apt-get update
    sudo apt-get install system76-driver

---

**For NVIDIA Graphics:** If you ordered a system with a discreet Nvidia graphics card, you will need to manually install the drivers for your card to get the optimum performance. Open the Terminal app and enter the following command:

    sudo apt-get install system76-driver-nvidia

---

Once the process is finished, restart your computer for the changes to take effect.

# Where to Get Help

Having trouble with your reinstall? We're here to help. Here are two ways to get assistance:

# 1. Contact a Technician

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under the product you need help with.

## 2. Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
