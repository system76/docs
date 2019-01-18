---
layout: article
title: Live Disk - Create and Use Bootable Media from Other OS's
description: >
  You can run Pop!_OS from a USB drive for hardware testing, recovery, and installation/re-installation.
keywords:
  - Pop_OS!
  - USB
  - Live disk
  - Restore
  - Reinstall
  - Installation
  - System76
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: faq

---

Pop!_OS and Ubuntu are remarkably flexible. You can run a full version of Pop!_OS or Ubuntu from a USB drive (often known as a thumb drive, flash drive, or USB stick) in what's known as a *live environment*. Using a live environment (live disk) is useful for:

- [Installing Pop!_OS](/articles/install-pop/)
- [Installing Ubuntu](/articles/install-ubuntu/)
- Recovering your exiting operating system
- Backing up files when you can't boot
- [Determining if an issue is caused by hardware or software](/articles/hardware-failure/)
- [Fixing the boot loader](/articles/grub/)

A live disk is a handy tool to have around!

## Make Bootable drive

[comment]: <> (Feb 7th 2019 is when 18.04.2 should come out so the Ubuntu will need to be updated)

In order to install Pop!_OS or Ubuntu, we must first download the .iso image, this is a disk image with the operating system and installer on it. You can [download Pop!_OS here](http://pop.system76.com) and [Ubuntu here](https://www.ubuntu.com/download/desktop/thank-you?version=18.04.1&architecture=amd64) just click the link and the download should begin!

In order to make a live disk of Pop!_OS you must have a bootable flash drive. You'll need a flash drive, of course, and software to write the Pop!_OS .iso image to the drive. There's a variety of applications you can use to write disk images to a flash drive, but for this tutorial we'll use the Disks applicaton for Ubuntu and Etcher for Windows/MacOS.

Press the <kbd><span class="fl-pop-key"></span></kbd>/<kbd><span class="fl-ubuntu"></span></kbd> key then type 'disks' to launch the Disks application.

![Disks](/images/live-disk/disks.png)

 Next select the flash drive in the list on left and click on the three dots on the top right of the window. Now select 'Restore Disk Image...' and select the Ubuntu or Pop_OS ISO file. Then finally hit the 'Start Restoring...' button and enter your user password.

![Disks](/images/live-disk/disks-selection.png)

Etcher is an open source app for Windows and MacOS that allows you to "burn images to SD cards & USB drives safely and easily", you can download it at [Etcher.io](https://etcher.io).

Once you have installed Etcher and downloaded the Pop!_OS.iso image, open up the Etcher application, you should see something like this:

![Etcher](/images/live-disk/etcher.png)

Choose *Select Image* and navigate to where you downloaded Pop!_OS, click on it and hit the *open* button:

![Select Pop!_OS iso](/images/live-disk/open-pop-iso-etcher.png)

Next you select the drive that you want to use, if there is only one it should automatically recognize that you have a flash drive inserted and select it.

![Etcher Flash Drive Selected](/images/live-disk/etcher-flash-selected.png)

Now hit the *Flash* button and watch the magic happen!

![Flashing Pop!_OS...](/images/live-disk/flashing-pop-os.png)

![Flash Complete](/images/live-disk/flash-complete.png)

Once the flash is complete (should look like the screenshot above), it's time to boot it up on the machine that you want to install Pop!_OS on!

## Booting From Live Disk

After creating the live disk, insert the USB into your computer, then reboot or power on your system. You'll need to tell the computer to boot from the live disk by holding a key right as you power on:

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

If done correctly, you should see a boot device selection menu, like one of the following images.

![Boot Menu](/images/live-disk/boot-menu.jpg)

Use the arrow keys to select the USB drive, then press <kbd>Enter</kbd> to boot the selection.  

Pop!_OS will boot into the familiar Pop!_OS desktop.

![Live Disk](/images/live-disk/live-desktop.png)

## Using Live Environment

The list provided at the beginning of the article provides links to other articles on using the live environment for hardware testing, restoration/upgrades, and boot repair.

### Repairing Existing Operating System

Since the live environment is a full Pop!_OS installation, it works just like the normal environment. There are tools and methods that allow to `chroot` (change root) into the normal installation and work in the existing operating system to repair a broken package or other problem that is preventing normal booting.

### Backup Files

Perhaps you're reinstalling, or maybe you can't boot but you want to try and recover and back up your files? The live environment will automatically detect and mount most file systems including Linux and Windows. You can then copy files from the disk to another external disk using the familiar <u>Files</u> utility.
