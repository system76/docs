---
layout: article
title: Upgrade Ubuntu
description: >
  Get the newest version of Ubuntu on your System76 computer! Check out our upgrade directions.
keywords:
  - Ubuntu 16.04
  - Ubuntu 16.04.1
  - Ubuntu 16.10
  - Yakkety Yak
  - Xenial Xerus
  - LTS
  - Point Release
  - Upgrade
  - Update
  - Release
  - System76
  - apt
image: https://d1vhcvzji58n1j.cloudfront.net/images/newsletter/2016-10/16-c1f27f8de8.10.jpg
hidden: false
faq: true # If it shows in the "Frequently Answered Questions" section
known: false # If it shows in the "Known issues" section
---

# Do I need to upgrade?

The choice to upgrade depends on how you're using your computer. Ubuntu has two versions. The first type, **LTS** is designed for long-term use as a "daily driver." LTS stands for "Long Term Support" since they receive updates for 5 years. The second type, **Standard**, is designed for those who like having the latest and greatest.

For many users, the LTS release is the best option, combining regular updates with a strong foundation. Users who are interested in new and interesting features can choose the Standard releases, which have a shorter lifespan.

# What versions of Ubuntu are available?

A current list of Ubuntu releases can be found here on the [Ubuntu wiki](https://wiki.ubuntu.com/Releases).

## Preparing for the upgrade

First, we recommend having Ubuntu installation media (i.e. a DVD or USB drive) handy before starting any upgrades in case something goes wrong. You'll need to download a copy of Ubuntu from [ubuntu.com](http://www.ubuntu.com/download/desktop).

### Create install media

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong.

# How do I upgrade?

There are two methods of upgrading:

1. Upgrade while running
2. Upgrade from media

**Upgrading while running** is great for moving to the next available release, or when switching from an LTS to a Standard release. **Upgrading from media** can provide a more stable environment since the system isn't running while it's being upgraded. Upgrading from media is required if you're more than one version behind.

### Upgrade while running

#### 1. Open Software Updater

Open the Dash and then search for *updater.*

![Updater in Dash](/images/upgrade/Step-1.jpg)

#### 2. Configure version updates

Click on **Settings** and then select **Updates.** You can choose to receive all updates or only LTS updates using the drop-down menu at the bottom, labled **Notify me of a new Ubuntu version.**

Selecting *For any new version* will show both Standard and LTS updates.

Selecting *For long-term support versions* will show only LTS updates.

Selecting *Never* will prevent upgrades to newer versions.

![Update Preference](/images/upgrade/notification-preference.png)


Changing this option will require your user password. After selecting your update preference, close the window.

#### 3. Check for updates

The system will automatically check for updates. You may need to update (and sometimes, restart) before continuing with the upgrade process. If you have to restart after installing updates, launch the updater again as described in Step 1.

![Software Updater](/images/upgrade/Step-2.jpg)

#### 4. Install the upgrade

A message will appear informing you of the availability of the new release. Click Upgrade and follow the on-screen instructions.

![Upgrade Message](/images/upgrade/Step-3.jpg)

#### 5. Done!

The upgrade will prompt you to restart, then you'll be on your newly upgraded system! If you run into any issues, check out _Stuck Upgrades_ or _Fixing Common Upgrade Failures_ below.

If you use any third-party packages, you'll need to re-enable them in the **Software & Updates** app on the **Other Software** tab. Check any sources that you might need, then close the window.

---

##### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the _Terminal_ item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support (see below) and we'll be able to provide assistance.

---

### Upgrade from media

#### 1. Start the installer

Insert your live disk, then restart your computer. You'll need to tell the computer to boot from the Live Disk. Immediately after you turn the computer on:

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

#### 2. Install updates

When prompted, choose _Install Ubuntu_.

Next, check the box labeled **Download updates while installing Ubuntu** to bring your installation up to date.

![VirtualBox Listing in USC](/images/restore/updates.png)


#### 3. Complete the upgrade

Follow the on-screen instructions to complete the upgrade. **To preserve your files and settings, be sure to choose _Upgrade Ubuntu_.** This will ensure that your files are not erased. You do have the option to erase your operating system and start over by choosing _Erase disk and install Ubuntu_. More information on this is available in our [restore guide](http://support.system76.com/articles/restore/).

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

If you use any third-party packages, you'll need to re-enable them in the **Software & Updates** app on the **Other Software** tab. Check any sources that you might need, then close the window.

# Fixing common upgrade failures

Most upgrades proceed without a hitch, but occasionally things go wrong. If you system hangs on the upgrade process or if it reboots and won't start, then these steps can help repair your broken OS.

### 1. Create install media

Please see the steps above to create bootable media. Restart your computer and use the keys above to start your computer from the bootable media.  When given the option, choose _Try Ubuntu_.

### 2. Mount your hard drive

Open a terminal (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>) and run the following command:

`lsblk`

And then note the name of your primary partition. It may be `/dev/nvme0n1` or `/dev/sda1`. Notice that the first command below is using the partition (sda1) and the later command is using the disk (sda).

Next, type these commands:

```
sudo mount /dev/sda1 /mnt
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo cp /etc/resolv.conf /mnt/etc/resolv.conf
sudo chroot /mnt
```

### 3. Repair your installation

Next, run these commands to fix GRUB bootloader issues, package issues, and to re-run the release upgrade software.

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

# Where to get help

Having trouble with your upgrade? We're here to help! Here are two ways to get assistance:

## 1. Create a support case

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under the product you need help with.

## 2. Give us a call

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
