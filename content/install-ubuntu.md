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

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk by accessing the Boot Menu using the key combos in this [article](/articles/bootloader).

<!--#### NVIDIA Graphics

Ubuntu may need a special option enabled to install and boot from Ubuntu until the NVIDIA driver can be installed as described below. If the installer doesn't show an image after this screen, please follow the next instructions:

![nomodeset](/images/install-ubuntu/ubuntu-install-nomodeset.png)

From the menu shown the 'nomodeset' option can be selected during this boot. -->

![grub](/images/install-ubuntu/GRUB-2.12.png)

Once Ubuntu starts and you have selected your language, any accessibility features that you may need, your keyboard selection, and network connectivity you will be asked to **Try Ubuntu without installing** or to **Install Ubuntu**. If you are attempting to restore a broken operating system, please choose **Try Ubuntu**.

>**IMPORTANT NOTE:** System76 recommends [backing up all important files from your computer](https://support.system76.com/articles/backup-files). The Ubuntu installation process will wipe any data on the drive that is selected for the installation. Next, double-click on the **Install Ubuntu** icon on the desktop.

![First page of the installer](/images/install-ubuntu/install-ubuntu-24.04-1.png)

>**NOTE:** You may or may not see the screen pictured above. Your system may boot directly to the screen pictured above:

### Language and Keyboard layout

![Keyboard Layout](/images/install-ubuntu/install-ubuntu-24.04-3.png)

If all of your files are backed up, or if you are installing from scratch, pick the **Install Ubuntu** option to continue with the installation.

![Try or Install](/images/install-ubuntu/install-ubuntu-24.04-5.png)

For most installations the **Interactive installation** type is recommended.

![Type of Installation](/images/install-ubuntu/install-ubuntu-24.04-6.png)

The **Default selection** will work for most installations while the **Extended selection** includes applications such as the LibreOffice suite and more. Those applications can be installed once the installation is finished if the **Default selection** is used instead.

![Applications](/images/install-ubuntu/install-ubuntu-24.04-7.png)

Let's break down what each of the options offer in regards to hardware and software support:

- **Install third-party software for graphics and Wi-Fi hardware**

This installs drivers (some non-free) for support for Wi-Fi (Wireless) and GPU support mainly NVIDIA as the amdgpu driver for AMD GPU's is in the kernel.

- **Download and install support for additional media formats**

This installs packages for playing media files such as MP3, MP4 and other formats that may need non-free codecs for the OS to play the content.

![Download Updates](/images/install-ubuntu/install-ubuntu-24.04-8.png)

## Install Ubuntu

Option             | Action
------------------ | ----------------
**Install Ubuntu Alongside** | To allow you to add an additional operating system to your computer. Choose this option if you already have an operating system, such as Windows or another version of Linux, and would like to also install Ubuntu. Please note that the existing operating system's partition will need to be reduced before installing Ubuntu in the extra space.
**Erase Disk** | To erase everything on the hard drive and install Ubuntu. The is the most destructive of the options, and will guarantee a clean slate. This option also has to be selected if you would like to encrypt the entire drive. When encrypting the drive, select **Use LVM with the new Ubuntu Installation** option for flexibility with partitions later.
**Manual Installation** | To do a manual installation of the partitions. This can be used to customize the partition or put certain directories on separate partitions or disks.

### Installation type

![Installation Type](/images/install-ubuntu/install-ubuntu-24.04-9.png)

### Advanced Features

![Advanced Features](/images/install-ubuntu/install-ubuntu-24.04-9-a.png)

### Disk encryption

![Disk Encryption](/images/install-ubuntu/install-ubuntu-24.04-9-b.png)

### User creation

This is when you will create your first user in your new install of Ubuntu.

![User Creation](/images/install-ubuntu/install-ubuntu-24.04-10.png)

### Location

![Location](/images/install-ubuntu/install-ubuntu-24.04-11.png)

This option will effect your timezone.

### Write changes to the drive/disk

![Write to Disk](/images/install-ubuntu/install-ubuntu-24.04-12.png)

### Slideshow

![Slideshow](/images/install-ubuntu/install-ubuntu-24.04-13.png)

This section of the installation will show you a few of the preinstalled applications and what they are used for and how to get involved.

### Restart

![Restart](/images/install-ubuntu/install-ubuntu-24.04-14.png)

Once the installation is finished, the system will prompt you to reboot.

### Remove Install Media

Before completing the reboot, the system will prompt you to make sure the install media has been removed.

### Decrypt Drive

![Decryption Screen](/images/install-ubuntu/ubuntu-24.04-decryption-screen.png)

If you chose to encrypt your drive, this screen will be shown on reboot. Enter the decryption passphrase, and press <kbd>ENTER</kbd>

### Login Screen

![Login Screen 1](/images/install-ubuntu/ubuntu-24.04-login-screen-1.png)

![Login Screen 2](/images/install-ubuntu/ubuntu-24.04-login-screen-2.png)

Select your User from the login screen and enter your user passphrase.

### Ubuntu Pro

![Ubuntu Pro](/images/install-ubuntu/ubuntu-24.04_initial-setup-2.png)

Canonical offers Ubuntu Pro for free on up to 5 machines but it is not required to use Ubuntu and it's features, and does not change your experience.

### Telemetry

![Telemetry](/images/install-ubuntu/ubuntu-24.04_initial-setup-3.png)

Canonical asks you if you would like to send some system information to them to improve Ubuntu. Opting in or out of this option will not affect your Ubuntu features or experience.

### Ready to Go

![Ready](/images/install-ubuntu/ubuntu-24.04_initial-setup-4.png)

Congratulations, Ubuntu is now installed on your system!

### Available Updates

Often, after a fresh install some packages will have been updated since the ISO file was created. If there are new updates available you'll see a dialogue box pop up like this:

![Updates Available](/images/install-ubuntu/ubuntu-updater.png)

You can opt to install the updates later, or install them now by clicking **Install Now.**

And often will prompt for a restart once complete:

![Updates Complete](/images/install-ubuntu/ubuntu-updater-finished.png)

### Install System76 Driver

Once you've installed Ubuntu, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> and run the following commands. For using the <u>Terminal</u> refer to our [Linux Terminal Basics article](/articles/terminal-basics).

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
