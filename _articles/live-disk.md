---
layout: article
title: Create and use a live disk
description: >
  You can run Ubuntu from a USB or DVD for hardware testing, recovering your environment, or reinstalling.
keywords:
  - Ubuntu
  - USB 
  - Live disk
  - Restore
  - Reinstall
  - Installation
  - System76
hidden: true
section: faq

---

Ubuntu is remakably flexible -- enough so that you can run a full version of Ubuntu from a USB drive (often known as a thumb drive, flash drive, or USB stick) or a DVD in what's known as a *live environment.* Using a live environment (live disk) is useful for:

* [Determining if an issue is caused by hardware or software](http://support.system76.com/articles/hardware-failure/)
* [Reinstalling](support.system76.com/articles/restore/) or [upgrading](http://support.system76.com/articles/upgrade/) your Ubuntu installation
* [Fixing the boot loader](support.system76.com/articles/grub/)
* Recovering your normal environment
* Backing up files when you can't boot

You can understand why a live disk is a handy tool to have around! Note that it's typically called a *live disk* since you can use either a USB or DVD. USB is recommended, since it's significantly faster.

## How do I create a live disk?

The basic steps to create a live disk are as follows:

1. [Download](https://www.ubuntu.com/download) an ISO copy of Ubuntu
2. Connect a USB or DVD drive
3. Use a special program (Startup Disk Creator, Rufus, unetbootin, or dd) to write the ISO to disk

If you're upgrading or reinstalling Ubuntu, choose the version you plan on installing. If you're using the live disk for recovery purposes, try and match the same version.

Ubuntu has provided step-by-step guides to create install media:

Create an Installation USB | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

### Advanced: Using **dd** to create a live USB

If you have a Linux (or macOS) system available, you can create a live USB using a command line tool called `dd`. **Please note, this is an advanced method. `dd` is a simple and powerful tool which can overwrite any drive, destination, or file. Use with caution!**

Warnings aside, `dd` is safe and highly effective when used properly. Be sure to confirm your destination file `of=` before running the command. A screenshot is provided below the instructions for reference.

1. Insert the USB drive
2. Run `lsblk` to get a listing of all block-level devices and their mountpoints (`mount` is also useful)
3. Unmount the USB with `umount /dev/[path-to-usb-drive]`
4. Write out your `dd` command. **The following assumes the ISO is in the ~/Downloads folder and is being writing to /dev/sdf -- substitute the correct paths for your system!**

```
sudo dd if=~/Downloads/ubuntu-17.04-desktop-amd64.iso of=/dev/sdf
```
5. **Confirm the output file path `of=` is correct** -- open a new terminal if needed!
6. If everything looks good, press <kbd>Enter</kbd> to write the ISO to disk.

Since `dd` is writing to a device at the block level, it requires elevated permissions via `sudo`. You will be prompted for your password.

7. The ISO is a large file, and it takes several minutes to write. The system might not look like it's doing anything. Be patient!
8. Once complete, `dd` will print a final count of blocks in/out.

If your `dd` completes immediately, it was likely written to a file instead of to your USB drive. Confirm the `of=` destination is correct (it should be a block-level device, like /dev/sdf) and try again.

![Using dd](/images/live-usb/using-dd.png)

## Booting from a live disk

After creating the live disk, insert the USB or DVD into your computer, then reboot or power on your system. You'll need to tell the computer to boot from the live disk by holding a key right as you power on:

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

If done correctly, you should see a boot device selection menu, like one of the following images.

![Boot menu](/images/live-usb/boot-menu.jpg)

Use the arrow keys to select your USB or DVD drive, then press <kbd>Enter</kbd> to boot the selection.

You'll be asked if you want to **Install Ubuntu** or **Try Ubuntu without installing**. Choose whichever is applicable:

Install Ubuntu    | Try Ubuntu
------------------| -------------
Reinstall         | Test hardware
Upgrade           | Try out Ubuntu
                  | Fix the bootloader
                  | Back up files
                  | Fix your environment
                  
Ubuntu will boot into the installer or send you to the familiar Ubuntu dekstop. You can install Ubuntu from the live environment.

![The live disk environment](/images/live-desktop.png)

## What's different about the live environment?

