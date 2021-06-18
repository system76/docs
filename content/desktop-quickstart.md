---
layout: article
title: Desktop Quickstart
description: >
  Getting started on your new System76 Desktop.
keywords:
  - Support
  - Desktop Quickstart
  - Desktop Beginner
  - Thelio
  - Beginner
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: learn-about-your-computer

---

# Desktop Quickstart 

Congratulations on receiving your System76 Thelio Desktop! Read this article to get started quickly.

### Connect Your Monitor

#### Thelio R1/B1 Ports:

![Ports](/images/desktop-quickstart/thelio-r1_b1.png)

#### Thelio R2/B2 Ports:

![Ports](/images/desktop-quickstart/thelio-r2_ports-diagram_back.png)

If you ordered a dedicated graphics card, plug your monitor into one of the horizontal ports on the back of the machine. Do not connect your display to the vertical ports if you have a graphics card. The vertical ports are directly connected to the motherboard and are disabled by default if there is a dedicated graphics card.

### Connect Keyboard and Mouse

Keyboards and mice can connect via USB ports or wirelessly. Bluetooth devices can only be paired and used after new user setup. If your keyboard/mouse connects wirelessly, you should have a small USB device, called a receiver, that connects to the desktop and communicates with your keyboard and mouse via radio frequency. This should be included when you purchase a wireless keyboard or mouse. 

### Connect Power Supply

The power supply is located on the bottom of the back of the desktop. Use the cord provided to connect the computer to the nearest outlet.

### Power On

Press the circular button on the front of the machine after all components are plugged in. The power button is the largest button on the front of the machine. Check that the power supply is turned on at the power cable if the power button does not light up when pressed.

### Set Up User Account

When you power on, you'll be prompted to create a user account, which is an administrative account (in the sudo group). The password you set for this account will be the main password for when you install applications or updates, or add new users to the computer. In Pop!_OS, you can choose to encrypt your hard drive while setting up the user account. If Ubuntu was picked during configuration reinstalling the OS will be needed to set up encryption and instructions for that can be found [here](/articles/install-ubuntu).

If you selected the option to encrypt during the setup process, you will be prompted to set the encryption passphrase first. If you encrypt your hard drive, you will be prompted for the encryption passphrase every time you power on. It's important to write this password down and keep it somewhere safe. If the password is lost or forgotten, you will lose access to the contents of the drive.

After the encryption passphrase is set, you will proceed to set up a user account and be prompted to set the administrator password.

NOTE: The administrator password and the encryption passphrase are separate. Users can set them to have the same characters, but to the OS they are different items. It is good security practice to make the encryption passphrase and the administrative password different. However, this means that when prompted for the admin password, the encryption passphrase will not work, and vice-versa.

This administrator account has sudo rights, but it is not the root account. Some distributions (like Debian) have you set up a separate root account. Ubuntu and Pop!_OS do not.

### Looking for your additional drives?

This article can be used to [auto-mount the Extra Drives](/articles/extra-drive/).
