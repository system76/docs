---
layout: article
title: Install Pop!_OS On Your System76 Computer
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

## Download Installation Media

In order to install Pop!_OS, we must first download the .iso image, this is a disk image with the operating system and installer on it. You can download [Pop!_OS here](http://pop.system76.com), just click the link and the download should begin!

## Make Bootable drive

In order to install Pop!_OS you must have a bootable flash drive. You'll need a flash drive, of course, and software to write the Pop!_OS .iso image to the drive. There's a variety of applications you can use to write disk images to a flash drive, but for this tutorial we'll use Etcher.

Etcher is an open source app for Windows, Linux and MacOS that allows you to "burn images to SD cards & USB drives safely and easily", you can download it at the [Etcher.io website](https://etcher.io).

Once you have installed Etcher and downloaded the Pop!_OS .iso image, open up the Etcher application, you should see something like this:

![Etcher](/images/install-pop/etcher.png)

Choose "Select Image" and navigate to where you downloaded Pop!_OS, click on it and hit the "open" button:

![Select Pop!_OS iso](/images/install-pop/open-pop-iso-etcher.png)

Next you select the drive that you want to use, if there is only one it should automatically recognize that you have a flash drive inserted and select it.

![Etcher Flash Drive Selected](/images/install-pop/etcher-flash-selected.png)

Now hit the "Flash" button and watch the magic happen!

![Flashing Pop!_OS...](/images/install-pop/flashing-pop-os.png)

![Flash Complete](/images/install-pop/flash-complete.png)

Once the flash is complete (should look like the screenshot above), it's time to boot it up on the machine that you want to install Pop!_OS on!

## Installing Pop!_OS

We're finally to the part where we get to install Pop!_OS on your computer!

Depending on the computer you are using, there are different buttons you have to press upon boot to get to choose the boot device. On a System76 computer, it's the F7 button. You want to just start pressing that as soon as the computer begins booting up, typically folks just keep pushing the button repeatedly until they see the boot menu come up. Once you see the boot menu, select your flash drive.

![Boot Menu](/images/install-pop/boot-menu.jpg)

You'll want to know the brand of your flash drive so that you can select it from the boot menu. Usually this is just a logo on the flash drive. The other things listed here will be drives in your computer, or even partitions on those drives. If you boot the wrong drive, no worries, just restart the computer and pick another option, you'll find it eventually!

Once you select the flash drive and it boots from the Pop!_OS live image (cool words for an OS running from a flash drive), you should see the Pop\!_Logo and the text "Try or Install Pop_OS". (See pic below):

![Try or Install Pop!_OS](/images/install-pop/selected.png)

Once the flash drives boots, you will be at the Pop!_OS desktop! You can use the operating system as you normally would now. Because it is running from the flash drive performance may be slower and if you reboot back into the flash drive at this point, you'll lose anything you've changed while running in this "live session".

![Install Pop!_OS Icon](/images/install-pop/pop-live-desktop.jpg)

First we have to select the language we want to use:

![Select Language](/images/install-pop/select-language-pop.jpg)

Next is probably the most important stage in installing Pop!_OS, as this is the screen where you can do the most damage if you don't know what you're doing. You'll see a few different options for how you can install Pop!_OS here.

So here is what you need to know. If you already have another operating system installed (like Windows or MacOS) and you don't want to get rid of it - select the "Install Alongside option" (pictured below):

![Install and Erase Disk](/images/install-pop/erase-install.jpg)

To finish this part up, it will ask you to confirm that you want to make changes to your hard disk (hard drive). If you are okay to do this, then hit "Continue". If you want to check or change something, you can click "Go Back".

![Continue or Go Back](/images/install-pop/write-changes.jpg)

Then Pop!_OS should start installing!

![Installing Pop!_OS For Real!](/images/install-pop/installing-pop-os.jpg)

Just sit tight as the installer does its thing. Once it completes, you will have the option to continue using the live session or restart the computer (so  you can boot into your newly install Pop!_OS installation).

Once you restart, remove the flash drive when it tells you to, and when the computer comes back up - you'll have Pop!_OS. Great job!
