---
layout: article
title: Upgrade to the latest version of Ubuntu
description: >
    Official directions to upgrade your System76 computer to the latest version of Ubuntu.
keywords:
    - Ubuntu 16.04.1
    - Xenial Xerus
    - LTS
    - Point Release
    - Upgrade
    - Update
    - Release
    - System76
image: https://d1vhcvzji58n1j.cloudfront.net/images/newsletter/2016-07/16-c5e8aa32fb.04.1.png
---

# Upgrading to Ubuntu 16.04.1 LTS

Ubuntu 16.04.1 LTS is the latest release of Ubuntu. It incorporates many bug and stability fixes over version 16.04.  The next version of CUDA (Ver 8) will be supported with this release.  Also, upgrading from version 14.04 LTS will now be enabled without having to use bootable media.

## 1. Prepare for the Upgrade

First, we recommend having Ubuntu installation media (i.e. a DVD or USB drive) handy before starting any upgrades in case something goes wrong. You'll need to download a copy of Ubuntu. You can download a copy from [ubuntu.com](http://www.ubuntu.com/download/desktop).

### - Create an Installation USB Drive -

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong.

## 2. Upgrade

There are a couple of options for upgrading Ubuntu to 16.04.1; you can either Upgrade Ubuntu in place, use bootable media to upgrade your computer, or install a fresh copy of Ubuntu.  Ubuntu can be directly upgraded from 14.04.x or 15.10 to 16.04.1 without using bootable media.  If you have an older version of Ubuntu you will have to use bootable media to perform the 16.04.1 upgrade.

### - Upgrading in Place -

#### 1. Launch the Software Updater

Press the Ubuntu Key on your keyboard to launch the Dash, then search for *updater*. 

![Updater in Dash](/images/upgrade/Step-1.jpg)

#### 2. Enable LTS Updates

Click on "Settings", then select the tab called *Updates*. Under the dropdown menu for "notify me of a new Ubuntu Version", as long as you have "Prompt for LTS" selected, your computer will notify you that 16.04.1 is ready to release.  You may also have "For any new version" selected, which will prompt you for this LTS version, as well as future non-LTS versions. Then, close the window. If prompted, allow the package cache to be updated.

#### 3. Check for Updates

If there are any updates available, install them. When you're finished, click "Check for Updates" if available, then click on the "Upgrade..." button.

![Software Updater](/images/upgrade/Step-2.jpg)

#### 4. Install the Upgrade

A message will appear informing you of the availability of the new release. Click Upgrade and follow the on-screen instructions.

![Upgrade Message](/images/upgrade/Step-3.jpg)


---

##### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the "Terminal" item to exand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact us at support (see below) and we'll be able to provide assistance.

---


### - Installing a Fresh Copy of Ubuntu -

#### 1. Start Up the Installer

Insert the live disk you made above, then restart your computer. You'll need to tell the computer to boot from the Live Disk. Immediately after you turn the computer on: 

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

#### 2. Install Updates

During the initial setup, you may be asked to "Try Ubuntu" or to "Install Ubuntu". You'll need to choose the "Install Ubuntu" option to continue with the installation. Additionally, you will want to check the box labeled "Download updates while installing Ubuntu" to ensure that your new installation is fully up to date once the installation is complete.

![VirtualBox Listing in USC](/images/restore/updates.png)


#### 3. Complete the Upgrade Process

Follow the on-screen instructions to complete the upgrade. To preserve your files and settings, be sure to choose *Upgrade Ubuntu 15.10 to 16.04.1 LTS* (or *Upgrade Ubuntu 14.04 LTS to 16.04.1 LTS* if you're upgrading from 14.04). This will ensure that your files are not erased.  If you would like erase your operating system and start over, choose 'Erase disk and install Ubuntu'

---

If asked about installation of `grub_pc` during the upgrade, you should select to **_Install the Package Maintainer's version_**, not the default option.

---

## 4. Install the System76 Driver

Once you've upgraded Ubuntu, you'll need to download and install the System76 Driver. Open the Terminal app (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

    sudo apt-add-repository ppa:system76-dev/stable
    sudo apt update
    sudo apt full-upgrade
    sudo apt install system76-driver

---

**For NVIDIA Graphics:** If you ordered a system with a discrete nVidia graphics card, you will need to manually install the closed source drivers for your card to get the optimum performance. Open the Terminal app and enter the following command:

    sudo apt install system76-driver-nvidia

Once the process is finished, restart your computer for the changes to take effect.

---

# Fixing Common Upgrade Failures

Many upgrades proceed without a hitch.  Occasionally, things go wrong.  If you system hangs on the upgrade process, or if it reboots and won't start, then these steps can help repair your broken OS.

### 1. Create Bootable Media

Please see the steps above to create bootable media.  Restart your computer and use the keys above to start your computer from the bootable media.  When given the option, choose _Try Ubuntu_.

### 2. Mount Your Existing Hard Drive

Open a terminal  (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>) and run the following command:

`lsblk`

And then note what the name of your primary partition is.  It may be `/dev/nvme0n1` or `/dev/sda1`.  Notice that the first command below is using the partition (sda1), and the later command is using the disk (sda).

Next, type these commands:

```
sudo mount /dev/sda1 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo cp /etc/resolv.conf /mnt/etc/resolv.conf
sudo chroot /mnt
```

### 3. Repair Exisiting OS

Then run these commands next to fix GRUB bootloader issues, package issues, and to re-run the release upgrade software.

```
sudo grub-install /dev/sda
sudo update-grub
sudo apt clean
sudo apt update -m
sudo apt install -f
sudo dpkg --configure -a
sudo apt full-upgrade
sudo do-release-upgrade -d
```

After that, if the apt package manager commands and release upgrade command sucessfully update and repair your issues, you should be able to boot normally.

# Where to Get Help

Having trouble with your upgrade? We're here to help! Here are two ways to get assistance:

## 1. Contact a Technician

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under the product you need help with.

## 2. Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
