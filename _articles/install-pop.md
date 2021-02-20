---
layout: article
title: Install Pop!_OS On Your System76 Computer
description: >
  Full instructions on installing Pop!_OS your computer.
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
section: software

---

The following guide describes how to download the Pop!\_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

Requirements: At the time of this writing Pop!\_OS only runs on 64-bit x86 architecture, 2 GB of RAM is required, 4 GB of RAM is recommended and 20 GB of storage is recommended.

## Make Bootable Drive

Please see our instructions for making and booting from a live disk of Pop!\_OS [here](/articles/live-disk/).

## Installing Pop!\_OS

The first step after booting from your new live disk is to select your language:

![Language](/images/install-pop/1_language-cropped.png)

Next we will select the keyboard layout for our setup and region:

![Keyboard](/images/install-pop/2_keyboard-cropped.png)

Now we can choose to install Pop!\_OS or to try Demo Mode to learn your new desktop before installing:

![Try or Install](/images/install-pop/3_try_or_install-cropped.png)

We can select to erase the currently installed operating system and install Pop!\_OS on the selected drive. To the left we can choose Custom Partitioning if you need to Dual Boot or want to have a separate Home partition or place the /tmp partition on a different drive:

![Disk setup](/images/install-pop/4_disk-cropped.png)

### Full Disk Encryption

You can choose to encrypt your drive or to not encrypt your drive. If you would like to encrypt the drive then push the **Choose Password** button, if you don't want to encrypt click the **Don't Encrypt** button:

![Encrypt option](/images/install-pop/5_encrypt_notice-cropped.png)

At this step you choose the password that will be used to encrypt your drive and it will be requested every time the system boots:

![Encrypt password](/images/install-pop/6_encrypt_password-cropped.png)

Now Pop!\_OS will begin installing!

![Progress](/images/install-pop/7_progress-cropped.png)

Pop!\_OS has been successfully installed on your computer! Awesome work! You can choose to reboot your computer to create your new user for the OS or you can shut down and setup the new user later:

![Success](/images/install-pop/8_success-cropped.png)


#### NVIDIA Graphics

If you installed from the Intel/AMD ISO and your system has discrete NVIDIA graphics card or if you added one later on, you will need to manually install the drivers for your card to get the optimum performance. Please run the following command in a command terminal to install the driver:

```
sudo apt install system76-driver-nvidia
```
