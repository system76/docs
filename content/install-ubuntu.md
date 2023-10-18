---
title: Ubuntu (Install)
description: >
  Full instructions on installing Ubuntu your computer.
keywords:
  - Ubuntu
  - Ubuntu 22.04
  - LTS
  - Restore
  - Reinstall
  - Installation
  - Driver
  - system76-driver
  - system76-driver-nvidia
  - Release
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: ubuntu
tableOfContents: true
---

## Important Disclaimer - Please Read

Ubuntu releases beyond 22.04 are not fully tested, but certain packages are made available in the system76-dev/stable PPA on Launchpad.

> **NOTE: Oryx Pro (oryp2) Touchpad** On our second generation Oryx Pro (oryp2), the System76 driver is required for the touchpad.  Please use the keyboard or an external mouse for the initial install steps and until the driver is installed.

## Recent Upgrade Issues

If your recently upgraded system does not boot, it can often be recovered.  If you see a flashing underscore on the screen after booting, then it's likely that Ubuntu's bootloader (GRUB) was not properly updated. To restore it, see [Repair the Bootloader](/articles/bootloader).

## Create Install Media

First, you'll need to create bootable media you can restore or install Ubuntu with.

Create an Installation USB | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

### Boot From Install Media

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk by accessing the Boot Menu using the key combos in this [article](/articles/bootloader).

<!--#### NVIDIA Graphics

Ubuntu may need a special option enabled to install and boot from Ubuntu until the NVIDIA driver can be installed as described below. If the installer doesn't show an image after this screen, please follow the next instructions:

![nomodeset](/images/install-ubuntu/ubuntu-install-nomodeset.png)

From the menu shown the 'nomodeset' option can be selected during this boot. -->

![grub](/images/install-ubuntu/ubuntu-grub.png)

Once Ubuntu starts, you will be asked to **Try Ubuntu without installing** or to **Install Ubuntu**. If you are attempting to restore a broken operating system, please choose **Try Ubuntu**.

>**IMPORTANT NOTE:** System76 recommends [backing up all important files from your computer](https://support.system76.com/articles/backup-files). The restore process is designed to leave your files intact, but it's best to be safe in case something goes wrong. Next, double-click on the **Install Ubuntu** icon on the desktop.

![Try or Install](/images/install-ubuntu/ubuntu-install-try-install.png)

>**NOTE:** You may or may not see the screen pictured above. Your system may boot directly to the screen pictured below:

![Try or Install 2](/images/install-ubuntu/install-ubuntu-21.04-1.png)

If all of your files are backed up, or if you are installing from scratch, pick the **Install Ubuntu** option to continue with the installation. Please check the box labeled **Download updates while installing Ubuntu** to ensure that your new installation is fully up to date once the installation is complete.

![Download Updates](/images/install-ubuntu/ubuntu-install-screen2.png)

## Install Ubuntu

Option             | Action
------------------ | ----------------
**Upgrade** | To preserve everything in the `/home` directory and attempt to restore Ubuntu to a working condition. This option can also be used to upgrade Ubuntu to the version currently on the bootable media. Choose this option if you would like to repair your OS. This is the least destructive of the options.
**Erase Ubuntu** | To erase only the partitions related to Ubuntu. Choose this option if you would like to preserve an existing installation of Windows or another operating system, while still reinstalling Ubuntu.
**Install Ubuntu Alongside** | To allow you to add an additional operating system to your computer. Choose this option if you already have an operating system, such as Windows or another version of Linux, and would like to also install Ubuntu. Please note that the existing operating system's partition will need to be reduced before installing Ubuntu in the extra space.
**Erase Disk** | To erase everything on the hard drive and install Ubuntu. The is the most destructive of the options, and will guarantee a clean slate. This option also has to be selected if you would like to encrypt the entire drive. When encrypting the drive, select **Use LVM with the new Ubuntu Installation** option for flexibility with partitions later.
**Something Else** | To do a manual installation of the partitions. This can be used to customize the partition or put certain directories on separate partitions or disks.

### Language and Keyboard layout

![Keyboard Layout](/images/install-ubuntu/install-ubuntu-21.04-2.png)

### Installation type

![Installation Type](/images/install-ubuntu/install-ubuntu-21.04-3.png)

### Advanced Features

![Advanced Features](/images/install-ubuntu/install-ubuntu-21.04-3.5.png)

### Disk encryption

![Disk Encryption](/images/install-ubuntu/install-ubuntu-21.04-3.6.png)

### Write changes to the drive/disk

![Write to Disk](/images/install-ubuntu/install-ubuntu-21.04-3.7.png)

### Location

![Location](/images/install-ubuntu/install-ubuntu-21.04-5.png)

This option will effect your timezone.

### User creation

![User Creation](/images/install-ubuntu/install-ubuntu-21.04-6.png)

This is when you will create your first user in your new install of Ubuntu.

### Slideshow

![Slideshow](/images/install-ubuntu/install-ubuntu-22.04-7.png)

This section of the installation will show you a few of the preinstalled applications and what they are used for and how to get involved.

### Restart

![Restart](/images/install-ubuntu/install-ubuntu-21.04-8.png)

Once the installation is finished, the system will prompt you to reboot.

### Remove Install Media

![Remove Install Media](/images/install-ubuntu/install-ubuntu-21.04-9.png)

Before completing the reboot, the system will prompt you to make sure the install media has been removed.

### Decrypt Drive

![Decryption Screen](/images/install-ubuntu/ubuntu-decryption-screen.png)

If you chose to encrypt your drive, this screen will be shown on reboot. Enter the decryption passphrase, and press <kbd>ENTER</kbd>

### Login Screen

![Login Screen 1](/images/install-ubuntu/ubuntu-login-screen-1.png)

![Login Screen 2](/images/install-ubuntu/ubuntu-login-2.png)

Select your User from the login screen and enter your user passphrase.

### Online Accounts

![Online Accounts](/images/install-ubuntu/ubuntu-online-accounts.png)

Ubuntu asks users if they would like to sign into online accounts after the first login. This can be done now, or later, in <u>Settings.</u>

### Telemetry

![Telemetry](/images/install-ubuntu/ubuntu-21.04-telemetry.png)

Canonical asks you if you would like to send some system information to them to improve Ubuntu. Opting in or out of this option will not affect your Ubuntu features or experience.

### Ready to Go

![Ready](/images/install-ubuntu/ubuntu-ready-to-go.png)

Congratulations, Ubuntu is now installed on your system!

### Available Updates

Often, after a fresh install some packages will have been updated since the ISO file was created. If there are new updates available you'll see a dialogue box pop up like this:

![Updates Available](/images/install-ubuntu/ubuntu-21.04-new-updates.png)

You can opt to install the updates later, or install them now by clicking **Install Now.**

Installing the updates will produce this screen asking for an administrative user's password:

![Authorization](/images/install-ubuntu/ubuntu-21.04-installing-updates.png)

The system will display the progress of updates through this screen:

![Updates in Progress](/images/install-ubuntu/ubuntu-21.04-updates-in-progress.png)

And often will prompt for a restart once complete:

![Updates Complete](/images/install-ubuntu/ubuntu-21.04-updates-finished.png)

### Install System76 Driver

Once you've reinstalled Ubuntu, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> (search <u>Terminal</u> from the Ubuntu (<font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon>) dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

```bash
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt update
sudo apt install system76-driver
```

### NVIDIA Graphics

If you ordered a system with a discrete NVIDIA graphics card or if you added one later on, you will need to manually install the drivers for your card to get the optimum performance. Please run the following command after the above commands to install the driver:

```bash
sudo apt install system76-driver-nvidia
```

Once the process is finished, restart your computer for all changes to take effect.
