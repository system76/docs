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

From <https://system76.com/pop/download/>, choose **DOWNLOAD** under the section best matching your computer (generic, NVIDIA, or Raspberry Pi). The download page includes the current _Requirements_ and download _Filesize_, as well as the image checksums used to verify the file once downloaded.

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

### Initial Setup

After rebooting, the COSMIC-greeter screen will appear and prompt for a password, or if you chose to encrypt your drive, you'll be prompted to enter that first.

![Cosmic-greeter screen with date and time, clickable settings icons underneath and a password prompt box to the right. Icons under the date and time from left to right include; accessibility, keyboard layout, user accounts, session settings, suspend, restart and shutdown.](/images/install-pop/2404/cosmic-greeter-initial1.png)

At first login, the screen reader will be active. The first screen at initial setup is for accessibility settings and is where to enable screen reader, magnifier, high contrast and color invert. To disable the screen reader during initial setup, toggle the screen reader button on the right. Click 'Next' to advance to the next setup window.

![Initial Setup accessibility settings on the Pop 24.04 Welcome screen. First option is the 'screen reader' feature which can be enabled with the toggle button on the right, Next option is 'interface size' as a percentage in the dropdown menu to the right. After that is the 'additional scale options' with option to choose a percentage using a minus sign or plus sign. The last option is the 'Magnifier' which can be enabled with the toggle button on the right. Click the 'Next' button to advance to the next setup window](/images/install-pop/2404/initial-setup-1.png)

Personalize the desktop appearance with one of the pre-configured color themes, then click 'Next.'

![Personalize Appearance window during initial setup. Three options on top from left to right include COSMIC Dark, COSMIC Light and Comet Light. The second row of options from left to right includes Cream Light, Mocha Dark and Nebula Dark. You can further customize accent colors and the look of your desktop in Appearance Settings.](/images/install-pop/2404/initial-setup-personalize.png)

Choose the layout configuration for your dock and panel and click 'Next.'

![Layout configuration settings for the dock and panel during initial setup. The first option is Top Panel and Bottom Dock. The second option is Bottom Panel. Move the panel or dock to any edge, change the size and automatically hide them in Settings.](/images/install-pop/2404/initial-setup-layout-configuration.png)

The following windows during initial setup are for informative purposes. Click 'Next' on each window to advance to the next.

### New System Applications

![New System Applications during initial setup window with icons for the applications highlighted in an image and text that says Enjoy an array of new system applications that come with the COSMIC desktop environment. Including Settings, COSMIC App Store, Files, Text Editor and Terminal.](/images/install-pop/2404/initial-setup-4.png)

### Workspaces for Your Workflow

![Workspaces for Your Workflow describes the features to automatically tile or float windows per-workspace using the tiling applet. You can select vertical or horizontal workspaces and pin workspaces to make them static.](/images/install-pop/2404/initial-setup-5.png)

### New Keyboard Shortcuts

![New Keyboard Shortcuts explains new shortcuts like Shift+Super+arrows or drag with the pointer to move windows. Take advantage of visual hints when using automatic window tiling](/images/install-pop/2404/initial-setup-6.png)

### Fast and Efficient

![Fast and Efficient informative window during initial setup. Press the Super or Windows key to activate the Launcher. Search and press enter to open an app or switch to it. You can also jump to settings or system functions like suspend. Type "?" to learn about the Launcher's advanced features](/images/install-pop/2404/initial-setup-7.png)

Click 'Next' to advance to your new Linux Desktop Installation of Pop!_OS.

![Pop 24.04 desktop after initial setup is complete](/images/install-pop/2404/initial-setup-8.png)

To customize Pop!_OS 24.04 further, visit COSMIC Settings by clicking the toggle button icon in the dock.

![COSMIC Settings in Pop!_OS 24.04 showing the Desktop tab, including wallpaper, appearance, panel, dock, window maangement and workspaces options](/images/install-pop/2404/initial-setup-9.png)