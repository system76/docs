---
layout: article
title: Create and Use Bootable Media
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
image: http://support.system76.com/images/pop-icon.jpg
hidden: false
section: faq

---

Pop!_OS is remarkably flexible. You can run a full version of Pop!_OS from a USB drive (often known as a thumb drive, flash drive, or USB stick) in what's known as a *live environment*. Using a live environment (live disk) is useful for:

- Installing Pop!_OS
- Recovering your exiting operating system
- Backing up files when you can't boot
- [Determining if an issue is caused by hardware or software](/articles/hardware-failure/)
- [Reinstalling](/articles/restore/) or [upgrading](/articles/upgrade/) your installation
- [Fixing the boot loader](/articles/grub/)

A live disk is a handy tool to have around!

## Create Live Disk

The basic steps to create a live disk are as follows:

1. [Download](https://system76.com/pop) a copy of Pop!_OS
2. Connect a USB drive
3. Use a special program to write the ISO to disk

If you're upgrading or reinstalling Pop!_OS, choose the version you plan on installing. If you're using the live disk for recovery purposes, try and match the same version.

To create the a bootable USB drive, use [Etcher](https://etcher.io).  <u>Etcher</u> is available for Windows, macOS, and Linux.

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
