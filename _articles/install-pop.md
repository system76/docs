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
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: faq

---

# About this Guide

The following guide describes how to download the Pop!_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

Requirements: At the time of this writing Pop!_OS only runs on 64-bit x86 architecture. At least 4 GB of RAM and 20 GB of storage is recommended.

## Make Bootable Drive

Please see our instructions for making and booting from a live disk of Pop!_OS [here](/articles/live-disk/).

## Installing Pop!_OS

Once the system boots from the Pop!_OS live image (cool words for an OS running from a flash drive), after the initial setup, you will be at the Pop!_OS desktop. Because it is running from the flash drive performance may be slower and if you reboot back into the flash drive at this point, you’ll lose anything you’ve changed while running in this “live session”. The setup will allow you to install Pop!_OS to your hard drive as well, which is what we're trying to do here.

# Initial Setup

First we have to select the language we want to use:

![Select Language](/images/install-pop/select-language-pop.jpg)

Next, we have to select the country for that language:

![Select Language Country](/images/install-pop/select-language-country.jpg)

After that, you'll select your keyboard layout:

![Select Keyboard Layout](/images/install-pop/select-keyboard-layout.jpg)

Now select your input language of choice.

![Select Input Language](/images/install-pop/select-input-language.jpg)
# Installing Pop!_OS 

You will now be presented with two options: demo mode, or installing Pop!_OS. We want to install Pop!_OS, so go ahead and click "Install Pop!_OS 18.04 LTS."

![Install Pop!_OS 18.04 LTS](/images/install-pop/install-dialog.jpg)

Now, you'll want to choose the hard drive to install to. Be careful when doing this, because if you choose the wrong hard drive, you can lose all your data.

![Hard Drive Chooser](/images/install-pop/select-hard-drive.jpg)

The Pop!_OS Installer will ask you to encrypt your hard drive by default. If you want to skip this step, click "Don't Encrypt."

![Choose to Encrypt Your Hard Drive](/images/install-pop/choose-to-encrypt.jpg)

If you clicked "Choose Password", type in a password. If it is a weak password, like "password", then you will see this:

![Weak Encryption Password](/images/install-pop/weak-encryption-password.jpg)

You may still continue, but setting a weak password is not recommended.

If you type in a stronger password, you will see this:

![Strong Encryption Password](/images/install-pop/strong-encryption-password.jpg)


Now the installer with start install Pop!_OS to your hard drive.

![Installing](/images/install-pop/installing.jpg)


At any point if you'd like to see what's going on in the background just click the terminal icon above the progress bar:

![Terminal Output](/images/install-pop/terminal-output.jpg)

If something goes wrong during the installation, you will see this:

![Something Goes Wrong](/images/install-pop/something-goes-wrong.jpg)




Just sit tight as the installer does its thing. Once it completes, you will have the option to continue using the live session or restart the computer (so you can boot into your newly installed Pop!_OS installation).

Once the install finishes, restart, and at the boot logo of your computer (or before it starts booting) remove the flash drive. Go through the initial setup, and you are now ready to start using Pop!_OS!

### Note: The Pop!_OS Installer should install the System76 Driver by default.
