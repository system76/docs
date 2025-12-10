---
title: Installing Pop!_OS
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

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

The following guide describes how to download the Pop!\_OS.iso image, write it to a flash drive, and install it on the hardware of your choice.

## Requirements

### System Specifications

| Component | Requirement | Recommended |
|-----------|-------------|-------------|
| CPU       | 64-bit x86, ARM (RAS PI 4) architectures |
| RAM       | 4 GB        | 8 GB        |
| Drive Storage | 20 GB   |             |

From <https://system76.com/pop/download/>, choose **DOWNLOAD**. The download dialog includes the current _Requirements_, and download _Filesize_, as well as the image checksums used to verify the file once downloaded.

### Installation Media

The Pop!\_OS.iso can be easily flashed to a USB drive. See our [Live Disk Creation](/articles/live-disk/) article for instructions to create a bootable USB drive in Windows, macOS, and Linux.

### Secure Boot

Secure boot must be disabled before installing Pop!\_OS. Secure boot can be disabled in the BIOS of most computers; however, the process to disable secure boot will vary by laptop and motherboard model.

## Selecting Your Bootable USB Drive as a Boot Device

Power off the target computer and insert the bootable USB. Power on the computer and enter the boot device menu selection for your BIOS or UEFI system. The table below lists lists several common methods for System76 laptops and desktops. Consult your computer manufacturer's documentation to access this menu on third-party computers.

| Firmware               | BIOS key | Boot Menu key                    |
|:----------------------|:--------|:--------------------------------|
| Laptop - Open Firmware | ESC      | ESC (select one time boot option) |
| Laptop - Proprietary   | F2       | F7                               |
| Older Laptops          | Depends on the system | F1                  |
| Thelio                 | Del      |  F8 or F12                       |
| Meerkat                | F2       | F10                              |

## Installing Pop!\_OS

Once your bootable USB drive is selected as a boot device, your computer will boot into a live Pop!\_OS environment.

1. Select your language:

    ![Language](images/install-pop/2404/install-pop-24-select-lang.png)

2. Select a locale.

    ![Select Locale](images/install-pop/2404/install-pop-24-select-locale.png)

3. Select a keyboard input language.

    ![Keyboard](images/install-pop/2404/install-pop-24-keyboard-input.png)

4. Select a keyboard layout.

    ![Select Keyboard Layout](images/install-pop/2404/install-pop-24-keyboard-layout.png)

5. Choose the `Clean Install` option for a standard installation. This is the best option for new Linux users, but be aware that this will erase all contents of the target drive. Alternatively, you can select `Try Demo Mode` to continue testing Pop!\_OS in the live environment.

    ![Try or Install](images/install-pop/2404/install-pop-24-clean-install.png)

    Select `Custom (Advanced)` to access GParted. This tool allows configuring advanced features like dual booting, creating a separate `/home` partition, or placing the `/tmp` partition on a different drive.

6. Click `Erase and Install` to install Pop!\_OS to your selected disk.

    ![Disk setup](images/install-pop/2404/install-pop-24-erase-install.png)

### User Account Setup

The next section of the installer will guide you through creating a user account so you can log in to your new Pop!\_OS installation.

Provide a full name (this can include any text you want, uppercase or lowercase), as well as a username (which must be lowercase):

![Username setup](images/install-pop/2404/install-pop-24-enter-username.png)
Once the account has been created, you will be prompted to set a new password.

![Password setup](images/install-pop/2404/install-pop-24-enter-password.png)

### Full Disk Encryption

Encrypting the system disk is not necessary, but it ensures user data is secure in the event that someone gains unauthorized physical access to the device.

The drive can be encrypted using your login password by checking `Encryption password is the same as user account password`, or you can uncheck this box and select `Set Password` at the bottom. Select `Don't Encrypt` to skip the disk encryption process.

![Encrypt option](images/install-pop/2404/install-pop-24-encrypt-disk.png)

If you chose the `Set Password` button, you will see an additional prompt to set your encryption password. This will be requested every time the system boots.

Continue to the next step in the installer. Pop!\_OS will now begin installing to disk.

![Progress](images/install-pop/2404/install-pop-24-install-progress.png)

When installation completes, reboot your computer and log in to complete the user account setup process.

> ℹ️ If you changed the boot order to prioritize your live USB during startup, shut down the computer completely and remove the installation USB. If you are dual-booting, press the appropriate keys to enter setup and select the drive containing the Pop!\_OS installation.

![Success](images/install-pop/2404/install-pop-24-install-complete.png)

#### NVIDIA Graphics

If you installed from the Intel/AMD ISO and your system has discrete NVIDIA graphics card or if you added one later on, you will need to manually install the drivers for your card to get the optimum performance. Run the following command in a command terminal to install the driver:

```
sudo apt install system76-driver-nvidia
```
