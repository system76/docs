---
title: Ubuntu (Install)
description: >
  Full instructions on installing Ubuntu your computer.
keywords:
  - Ubuntu
  - Ubuntu 24.04
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

Ubuntu releases beyond 24.04 are not fully tested, but certain packages are made available in the system76-dev/stable PPA on Launchpad.

> **NOTE: Oryx Pro (oryp2) Touchpad** On our second generation Oryx Pro (oryp2), the System76 driver is required for the touchpad.  Please use the keyboard or an external mouse for the initial install steps and until the driver is installed.

## Recent Upgrade Issues

If your recently upgraded system does not boot, it can often be recovered.  If you see a flashing underscore on the screen after booting, then it's likely that Ubuntu's bootloader (GRUB) was not properly updated. To restore it, see [Repair the Bootloader](/articles/bootloader).

## Create Install Media

First, you'll need to create bootable USB you can restore or install Ubuntu with.

- [Using Ubuntu](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview)
- [Using Windows](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview)
- [Using macOS](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview)

### Boot From Install USB

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk by accessing the Boot Menu using the key combos in this [article](/articles/bootloader). Once you see the GRUB screen, select **Try or Install Ubuntu** by pressing the <kbd>Enter</kbd> key.

<!--#### NVIDIA Graphics

Ubuntu may need a special option enabled to install and boot from Ubuntu until the NVIDIA driver can be installed as described below. If the installer doesn't show an image after this screen, please follow the next instructions:

![nomodeset](/images/install-ubuntu/ubuntu-install-nomodeset.png)

From the menu shown the 'nomodeset' option can be selected during this boot. -->

![grub](/images/install-ubuntu/GRUB-2.12.png)

### Language and Keyboard layout

Once Ubuntu starts and the installer auto-launches, you will be asked to select your language, any accessibility features that you may need, your keyboard layout, and network connectivity.

![Language](/images/install-ubuntu/install-ubuntu-24.04-1.png)

![Keyboard Layout](/images/install-ubuntu/install-ubuntu-24.04-3.png)

Next, you will be asked to **Try Ubuntu without installing** or to **Install Ubuntu**. If you are attempting to restore a broken operating system, please choose **Try Ubuntu**.

If all of your files are backed up, or if you are installing from scratch, pick the **Install Ubuntu** option to continue with the installation.

>**IMPORTANT NOTE:** System76 recommends [backing up all important files from your computer](https://support.system76.com/articles/backup-files). The Ubuntu installation process will wipe any data on the drive that is selected for the installation.

![Try or Install](/images/install-ubuntu/install-ubuntu-24.04-5.png)

When asked how you'd like to install, choose the **Interactive installation** type to enter your preferences through the GUI.

![Type of Installation](/images/install-ubuntu/install-ubuntu-24.04-6.png)

The **Default selection** of applications will suffice for most installations, while the **Extended selection** includes additional apps such as the LibreOffice suite and more. Those applications can be installed once the installation is finished if the **Default selection** is used instead.

![Applications](/images/install-ubuntu/install-ubuntu-24.04-7.png)

Next, you will be asked whether to install several categories of proprietary software. Let's break down what each of the options offer in regards to hardware and software support:

- **Install third-party software for graphics and Wi-Fi hardware**

This installs proprietary (non-free) drivers to provide the best Wi-Fi/Bluetooth and GPU support (mainly for NVIDIA graphics, as AMD and Intel graphics are supported natively by the Linux kernel).

- **Download and install support for additional media formats**

This installs packages for playing media files such as MP3, MP4, and other formats that may require non-free codecs.

![Download Updates](/images/install-ubuntu/install-ubuntu-24.04-8.png)

## Install Ubuntu

### Disk setup

Option             | Action
------------------ | ----------------
**Install Ubuntu alongside...** | To allow you to add an additional operating system to your computer. Choose this option if you already have an operating system, such as Windows or another version of Linux, and would like to also install Ubuntu. The existing operating system's partition size will need to be reduced before installing Ubuntu in the extra space. This option won't show up if you don't have an existing OS installed that is compatible with this feature.
**Erase disk and install Ubuntu** | To erase everything on the hard drive and install Ubuntu. The is the most destructive of the options, and will guarantee a clean slate. This option also has to be selected if you would like to encrypt the entire drive. To encrypt the drive, select **Advanced features...** and then choose **Use LVM and encryption**.
**Manual installation** | To do a manual installation of the partitions. This can be used to customize the partition layout and put specific directories on separate partitions or disks.

![Installation Type](/images/install-ubuntu/install-ubuntu-24.04-9.png)

#### Advanced Features

![Advanced Features](/images/install-ubuntu/install-ubuntu-24.04-9-a.png)

#### Disk encryption

![Disk Encryption](/images/install-ubuntu/install-ubuntu-24.04-9-b.png)

### User creation

This is when you will create your first user account for your new installation of Ubuntu.

![User Creation](/images/install-ubuntu/install-ubuntu-24.04-10.png)

### Location

This option will set your timezone.

![Location](/images/install-ubuntu/install-ubuntu-24.04-11.png)

### Write changes to disk

This is the last chance to cancel the installation without affecting any preexisting data on your storage drive(s).

![Write to Disk](/images/install-ubuntu/install-ubuntu-24.04-12.png)

### Slideshow

While the system is installing, this page will show you a few of the preinstalled applications and what they are used for, as well as ways to get involved with the Ubuntu community.

![Slideshow](/images/install-ubuntu/install-ubuntu-24.04-13.png)

### Restart

Once the installation is finished, the system will prompt you to reboot.

![Restart](/images/install-ubuntu/install-ubuntu-24.04-14.png)

### Remove Install Media

Before completing the reboot, the system will prompt you to make sure the install media has been removed.

## First Boot

### Decrypt Drive

If you chose to encrypt your drive, this screen will be shown on reboot. Enter the decryption passphrase and press <kbd>Enter</kbd>.

![Decryption Screen](/images/install-ubuntu/ubuntu-24.04-decryption-screen.png)

### Login Screen

Select your user from the login screen and enter your user account's password, then press <kbd>Enter</kbd>.

![Login Screen 1](/images/install-ubuntu/ubuntu-24.04-login-screen-1.png)

![Login Screen 2](/images/install-ubuntu/ubuntu-24.04-login-screen-2.png)

On the first login, the system will automatically display a wizard to select some additional settings.

### Ubuntu Pro

Canonical offers Ubuntu Pro for free on up to 5 machines, but it is not required to use Ubuntu and its features, and it does not change the user experience.

![Ubuntu Pro](/images/install-ubuntu/ubuntu-24.04_initial-setup-2.png)

### Telemetry

Canonical asks you if you would like to send some system information to them to improve Ubuntu. Opting in or out of this option will not affect your Ubuntu features or experience.

![Telemetry](/images/install-ubuntu/ubuntu-24.04_initial-setup-3.png)

### Ready to Go

Congratulations, Ubuntu is now installed on your system!

![Ready](/images/install-ubuntu/ubuntu-24.04_initial-setup-4.png)

### Available Updates

Often after a fresh install, some packages will have been updated since the ISO file was created. If there are new updates available, you'll see a dialogue box like this pop up:

![Updates Available](/images/install-ubuntu/ubuntu-updater.png)

You can opt to install the updates later, or install them now by clicking **Install Now.** You may be prompted to reboot after the updates have finished installing.

![Updates Complete](/images/install-ubuntu/ubuntu-updater-finished.png)

### Install System76 Driver

Once you've installed Ubuntu, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> and run the following commands. For using the <u>Terminal</u>, refer to our [Linux Terminal Basics article](/articles/terminal-basics).

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
