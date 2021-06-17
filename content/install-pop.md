---
layout: article
title: Pop!_OS (Install)
description: >
  Full instructions on installing Pop!_OS your computer.
keywords:
  - Pop!\_OS
  - Restore
  - Reinstall
  - Installation
  - Driver
  - system76-driver
  - system76-driver-nvidia
  - Release
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: pop

---

# Pop!_OS (Install)

The following guide describes how to download the Pop!\_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

Requirements: At the time of this writing Pop!\_OS only runs on 64-bit x86 architecture, 2 GB of RAM is required, 4 GB of RAM is recommended and 20 GB of storage is recommended.

## Download the Pop!\_OS.iso image
From https://pop.system76.com/, choose **DOWNLOAD**, and then choose from the current release (default), or the Long Term Support (LTS) image. The download dialog includes the current _Requirements_, and download _Filesize_, as well as the image checksums used to verify the file once downloaded.

## Make Bootable Drive

Please see our instructions for making and booting from a live disk of Pop!\_OS [here](/articles/live-disk/).

## Installing Pop!\_OS

The first step after booting from your new live disk is to select your language:

![Language](/images/install-pop/1_language.png)

Next we will select the keyboard layout for our setup and region:

![Keyboard](/images/install-pop/2_keyboard.png)

Now we can choose to install Pop!\_OS or to try Demo Mode to learn your new desktop before installing:

![Try or Install](/images/install-pop/3_try_or_install.png)

We can select to erase the currently installed operating system and install Pop!\_OS on the selected drive. To the left we can choose Custom Partitioning if you need to Dual Boot or want to have a separate Home partition or place the /tmp partition on a different drive:

![Disk setup](/images/install-pop/4_disk.png)

### Full Disk Encryption

You can choose to encrypt your drive or to not encrypt your drive. If you would like to encrypt the drive then push the **Choose Password** button, if you don't want to encrypt click the **Don't Encrypt** button:

![Encrypt option](/images/install-pop/5_encrypt_notice.png)

At this step you choose the password that will be used to encrypt your drive and it will be requested every time the system boots:

![Encrypt password](/images/install-pop/6_encrypt_password.png)

Now Pop!\_OS will begin installing!

![Progress](/images/install-pop/7_progress.png)

Pop!\_OS has been successfully installed on your computer! Awesome work! You can choose to reboot your computer to create your new user for the OS or you can shut down and setup the new user later:

![Success](/images/install-pop/8_success.png)


#### NVIDIA Graphics

If you installed from the Intel/AMD ISO and your system has discrete NVIDIA graphics card or if you added one later on, you will need to manually install the drivers for your card to get the optimum performance. Please run the following command in a command terminal to install the driver:

```
sudo apt install system76-driver-nvidia
```
