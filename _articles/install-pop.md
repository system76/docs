---
layout: article
title: Pop! - Install Pop!\_OS On Your System76 Computer
description: >
  Full instructions on installing Pop!\_OS your computer.
keywords:
  - Pop!\_OS
  - 18.04
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


The following guide describes how to download the Pop!\_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

Requirements: At the time of this writing Pop!\_OS only runs on 64-bit x86 architecture. At least 4 GB of RAM and 20 GB of storage is recommended.

## Make Bootable Drive

Please see our instructions for making and booting from a live disk of Pop!\_OS [here](/articles/live-disk/).

## Installing Pop!\_OS

![Language](/images/install-pop/1_language.png)

The first step after booting from your new live disk is to select your language for the installation steps:

![Keyboard](/images/install-pop/2_keyboard.png)

Next we will select the keyboard layout for our setup and region:

![Try or Install](/images/install-pop/3_try_or_install.png)

Now we can choose to install Pop!\_OS or try Demo Mode to learn your new desktop before installing:

![Disk setup](/images/install-pop/4_disk.png)

We can select to erase the currently install OS(s) and install Pop!\_OS on the selected drive. To the left we can choose Custom Partitioning if you need to Dual Boot or want to have a separate Home partition or place the /tmp partition on a different drive:

### Choosing to encrypt your drive

![Encrypt option](/images/install-pop/5_encrypt_notice.png)

You can choose to encrypt your drive or to no encrypt your drive. If you would like to encrypt the drive then push the "Choose Password" button, if you don't want to encrypt you push the "Don't Encrypt" button:

![Encrypt password](/images/install-pop/6_encrypt_password.png)

At this step you choose the password that will be used to encrypt your drive and it will be required to boot your computer to the login screen. Then you enter your password for the new user that you will create on the next boot of your computer:

![Progress](/images/install-pop/7_progress.png)

Now Pop!\_OS will begin installing!

![Success](/images/install-pop/8_success.png)

Pop!\_OS has been successfully installed on your computer! Awesome work! You can choose to reboot your computer to create your new user for the OS or you can shut down and setup the new user later:

### Install System76 Driver

Once you've reinstalled Pop!\_OS, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> (search <u>Terminal</u> by pressing the Super Key <kbd><i class="fl-ubuntu"></i></kbd>, <kbd><span class="fl-pop-key"></span></kbd>) then enter the following commands:

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt update
sudo apt install -y system76-driver
```
