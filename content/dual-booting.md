---
title: Dual Boot Windows 10 Alongside Pop!_OS
description: Learn how to install Windows alongside Pop!_OS.
keywords:
  - System76
  - dual boot
  - Windows
  - Windows 10
  - Windows 11
  - Linux

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: windows
tableOfContents: true
---

## Disclaimer

This article explains how to install Windows on a System76 computer (with UEFI firmware) alongside Pop!_OS.

System76 is not a licensed reseller or installer of the Windows operating system. This article is provided for informational purposes only.

System76 encourages users to take ownership of their machines and install whatever software or operating systems they prefer. However, System76 does not guarantee the success or quality of experience when installing Windows.

The contents of this support article are the **total extent of support and troubleshooting that System76 can provide for Windows.** Any troubleshooting or Windows support questions not covered in this article are outside the scope of System76 and should be referred to Microsoft.

Windows 11 is not supported on all systems, if your computer does not meet [Windows 11 requirements](https://support.microsoft.com/en-us/topic/windows-11-system-requirements-86c11283-ea52-4782-9efd-7674389a7ba3) try Windows 10.  Windows 10 is still supported till [October of 2025](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Creating Install Media

Download the latest [Windows .iso file](https://www.microsoft.com/en-us/software-download/windows10ISO) from Microsoft's website. Plug in a USB flash drive (8GB or larger) to use as an installation disk. The USB drive will be wiped during this process.

On Pop!_OS or Ubuntu, install [WoeUSB-ng](https://github.com/WoeUSB/WoeUSB-ng) using these commands:

```
sudo apt install git p7zip-full python3-pip python3-wxgtk4.0 grub2-common
sudo pip3 install WoeUSB-ng
```

Once installed, open the WoeUSB-ng application (entering your password when prompted) and perform the following steps:

1. Select the Windows .iso file as the source.

    - To find the file, select `Other Locations` -> `Computer` -> `home` -> `your-username` -> `Downloads`.

2. Select the USB flash drive as the target device.
3. Click `Install`.

![WoeUSB-ng](/images/dual-booting/woeusb.png)

It may take several minutes or more for the process to finish-- wait until the `Installation succeeded!` message appears.

## Planning the Installation

There are several ways to dual boot Pop!_OS and Windows. Make sure to follow the instructions for your specific situation:

- [Installing on a Dedicated Drive (Recommended)](#installing-on-a-dedicated-drive)
- [Installing on a Shared Drive - Starting with Pop!_OS](#installing-on-a-shared-drive-starting-with-pop_os)

---

## Installing on a Dedicated Drive

The easiest way to dual boot is to install Windows on a separate physical drive from Pop!_OS. This allows both Windows and Pop!_OS to use their default partition schemes, and allows you to select the OS using the UEFI firmware menu. If you want to use full-disk encryption in Pop!_OS, this is the only option.

For the safest experience, power off your machine, [open the case](https://tech-docs.system76.com/), and remove the drive with Pop!_OS prior to installing Windows. This is not required, but it ensures Windows won't overwrite the Pop!_OS bootloader, and helps avoid accidentally overwriting Pop!_OS.

### Starting the installer

Plug the [install media](#creating-install-media) into your machine, then power on while holding the appropriate key to enter the [boot menu](/articles/boot-menu/):

- <kbd>Esc</kbd> for laptops with Open Firmware
- <kbd>F7</kbd> for laptops with proprietary firmware
- <kbd>F8</kbd> or <kbd>F12</kbd> for Thelio desktops
- <kbd>F10</kbd> for Meerkat desktops

From the boot menu, select the drive containing the Windows installer, then wait for the installer to boot.

### Performing the installation

Select your language, region, and keyboard settings, then click `Next`.

![Windows region & language settings](/images/dual-booting/windows-language-settings.jpg)

On the next page, click `Install now`.

![Windows installer](/images/dual-booting/windows-install-now.jpg)

On the `Activate Windows` page, enter your Windows product key, then click `Next`. If you don't have a product key, click `I don't have a product key`. (Usage of Windows without a product key may violate Microsoft's [license terms](https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm) for Windows, and some features may be limited or unavailable.)

![Windows activation](/images/dual-booting/windows-activation.jpg)

If you didn't enter a product key, you will be asked to choose which version of Windows to install. The standard version for desktop and laptop computers is `Windows 10 Pro` (if you're not sure which version to select, use this one.)

![Windows edition selection](/images/dual-booting/windows-select-edition.jpg)

Next, you will be asked to read and accept Microsoft's license terms for Windows. To continue, check the `I accept the license terms` checkbox and click `Next`.

![Windows license terms](/images/dual-booting/windows-accept-license-terms.jpg)

The next page will ask what type of installation you want to perform. Since there is no existing Windows installation to upgrade, select the `Custom: Install Windows only (advanced)` option.

![Windows installation types](/images/dual-booting/windows-installation-type.jpg)

Finally, the installer will ask you to select where you want to install to. In this scenario, we are installing Windows to a dedicated drive (if you're doing something else, see [Planning the Installation](#planning-the-installation)).

If the drive to be used for Windows already contains any partitions, start by deleting those partitions. To do this, you'll need to identify which drive will be used for Windows.

For example, if you purchased a System76 machine with multiple drives, any extra drives should have a single partition (while the OS drive for Pop!_OS will have three or four partitions.) In this example, the Pop!_OS drive is 256GB and the Windows drive is 128GB, so we'll delete the single partition on `Drive 1` because it's closest to 128GB:

![Windows deleting existing partitions](/images/dual-booting/windows-delete-existing-partitions.jpg)

(If your flash drive is large enough, it may also show up in the list of drives; once again, identify it by its size and do not attempt to delete its partitions, since it's where the installer is stored.)

You will be asked to confirm any partitions you delete:

![Windows confirming a partition deletion](/images/dual-booting/windows-confirm-partition-delete.jpg)

Once all of the partitions have been deleted from the soon-to-be Windows drive, select the `Unallocated Space` on that drive and click `Next`. This will allow the installer to configure the necessary partitions automatically.

![Windows selecting unallocated space](/images/dual-booting/windows-select-unallocated-space.jpg)

Next, wait for the Windows installation to complete. The installer will show progress as it copies and expands the OS files. The system may reboot one or more times.

![Windows being installed](/images/dual-booting/windows-installing.jpg)

If you see a message about checking the disk, wait and allow the installer to check its newly-created partitions.

![Windows checking the disk](/images/dual-booting/windows-checking-disk.jpg)

Eventually, the Windows out-of-box experience wizard will start. Select your country (it may be automatically selected if you're connected to the internet) and click `Yes`.

![Windows first-time setup wizard](/images/dual-booting/windows-oobe.jpg)

Follow the wizard to select your preferences:

- Keyboard layout
- Network setup, if using WiFi
- Account details
- Privacy settings
- Cortana settings

After completing the wizard, Windows will display a slideshow while it finishes setting up. Eventually, you will see the Windows desktop:

![Windows 10 desktop](/images/dual-booting/windows-10-desktop.jpg)

See [additional setup](#additional-setup-for-windows) for next steps.

---

## Installing on a Shared Drive (Starting with Pop!_OS)

If you need to install both operating systems on a single drive (for example, if your computer only supports a single SSD), it is possible to install both OS's using a custom partition scheme. Pop!_OS's full-disk encryption is not supported with this setup.

Start by [installing Pop!_OS](/articles/install-pop/), making sure to select `Don't Encrypt` during the installation process.

(System76 computers shipped with Pop!_OS give you the option of whether or not to encrypt on first boot. If you chose to encrypt at first boot, or if you reinstalled and chose to encrypt, you will need to reinstall without encrypting before proceeding. If you want to dual boot and also use full-disk encryption, you will need to [use a dedicated drive](#installing-on-a-dedicated-drive) instead.)

### Shrinking Pop!_OS

Once Pop!_OS is installed (and not encrypted), boot into Recovery mode by holding down the spacebar during boot and selecting `Pop!_OS recovery` from the list of boot options.

![Entering Pop!_OS Recovery](/images/dual-booting/pop-recovery.jpg)

Once Recovery mode has finished loading, select your language and keyboard layout, then select `Try Demo Mode` in the bottom left to exit the installer.

Next, open GParted by searching for it in the Activities menu (<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>) or the Pop!_Shell launcher (<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>/</kbd>).

If you're booted from Recovery mode on the only drive in the computer, GParted should automatically show the drive that Pop!_OS is installed to; otherwise, if GParted is showing a different drive (such as a flash drive), select the correct drive in the GParted -> Devices menu.

The largest partition in an unencrypted, default layout is an ext4 partition. Select this partition from the list, then click the `Resize/Move` button.

![Selecting the Pop!_OS partition in GParted](/images/dual-booting/gparted-select-partition.jpg)

In the resizing dialog, drag the end of the partition to the left to shrink its size. (If you want the Pop!_OS partition to be a specific size, you can also enter the size value manually in the `New size (MiB)` text box.)

![Resizing the Pop!_OS partition in GParted](/images/dual-booting/gparted-resize-partition.png)

Click the `Resize/Move` button in the bottom right to confirm the change. Next, select the `unallocated` space immediately following the resized partition and click the `New` button to create a new partition for Windows.

![Creating a Windows partition in GParted](/images/dual-booting/gparted-create-partition.jpg)

In the "Create new Partition" dialog, change the `File system:` dropdown to `ntfs`, then click `Add` to confirm the options.

![Creating a Windows partition in GParted](/images/dual-booting/gparted-new-partition.jpg)

Finally, click the `Apply All Operations` button (green checkmark) to write the changes to the disk.

![Applying the GParted operations](/images/dual-booting/gparted-apply-1.jpg)

In the confirmation dialog, click `Apply` again to confirm.

![Applying the GParted operations](/images/dual-booting/gparted-apply-2.jpg)

Wait until all of the operations complete, then click the `Close` button.

![Completed GParted operations](/images/dual-booting/gparted-complete.jpg)

Exit out of GParted and use the top-right menu to power off the system.

### Starting the Windows installer

Plug the [Windows install media](#creating-install-media) into your machine, then power on while holding the appropriate key to enter the [boot menu](/articles/boot-menu/):

- <kbd>Esc</kbd> for laptops with Open Firmware
- <kbd>F7</kbd> for laptops with proprietary firmware
- <kbd>F8</kbd> or <kbd>F12</kbd> for Thelio desktops
- <kbd>F10</kbd> for Meerkat desktops

From the boot menu, select the drive containing the Windows installer, then wait for the installer to boot.

### Performing the Windows installation

Select your language, region, and keyboard settings, then click `Next`.

![Windows region & language settings](/images/dual-booting/windows-language-settings.jpg)

On the next page, click `Install now`.

![Windows installer](/images/dual-booting/windows-install-now.jpg)

On the `Activate Windows` page, enter your Windows product key, then click `Next`. If you don't have a product key, click `I don't have a product key`. (Usage of Windows without a product key may violate Microsoft's [license terms](https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm) for Windows, and some features may be limited or unavailable.)

![Windows activation](/images/dual-booting/windows-activation.jpg)

If you didn't enter a product key, you will be asked to choose which version of Windows to install. The standard version for desktop and laptop computers is `Windows 10 Pro` (if you're not sure which version to select, use this one.)

![Windows edition selection](/images/dual-booting/windows-select-edition.jpg)

Next, you will be asked to read and accept Microsoft's license terms for Windows. To continue, check the `I accept the license terms` checkbox and click `Next`.

![Windows license terms](/images/dual-booting/windows-accept-license-terms.jpg)

The next page will ask what type of installation you want to perform. Since there is no existing Windows installation to upgrade, select the `Custom: Install Windows only (advanced)` option.

![Windows installation types](/images/dual-booting/windows-installation-type.jpg)

Finally, the installer will ask you to select where you want to install to. In this scenario, we are installing Windows to a pre-made partition on the shared drive (if you're doing something else, see [Planning the Installation](#planning-the-installation)).

Select the partition that matches the size and position in the list of what you created earlier using GParted. (Windows may select this partition automatically.) Click `Next` to install Windows to the partition.

**Warning:** You should not need to format any partitions during this step. If you see a `Windows can't be installed on drive # partition #` message, either you have the wrong partition selected, or you did not select `ntfs` as the partition type when creating the partition in GParted earlier. Try selecting a different partition, or go back to [Shrinking Pop!_OS](#shrinking-pop_os).

![Windows selecting a partition](/images/dual-booting/windows-select-partition.jpg)

Next, wait for the Windows installation to complete. The installer will show progress as it copies and expands the OS files. The system may reboot one or more times.

![Windows being installed](/images/dual-booting/windows-installing.jpg)

If you see a message about checking the disk, wait and allow the installer to check its newly-created partitions.

![Windows checking the disk](/images/dual-booting/windows-checking-disk.jpg)

Eventually, the Windows out-of-box experience wizard will start. Select your country (it may be automatically selected if you're connected to the internet) and click `Yes`.

![Windows first-time setup wizard](/images/dual-booting/windows-oobe.jpg)

Follow the wizard to select your preferences:

- Keyboard layout
- Network setup, if using WiFi
- Account details
- Privacy settings
- Cortana settings

After completing the wizard, Windows will display a slideshow while it finishes setting up. Eventually, you will see the Windows desktop:

![Windows 10 desktop](/images/dual-booting/windows-10-desktop.jpg)

See [additional setup](#additional-setup-for-windows) for next steps.

---

## Additional Setup for Windows

### Installing Drivers

After finishing the Windows installation, open Settings -> Update & Security and click `Check for updates` to install any drivers available through Windows Update first.

![Checking for Windows updates](/images/dual-booting/windows-update.jpg)

Click `Restart now` if you are prompted to restart to finish installing any updates. Repeat this process until no more updates are available.

After the system is fully up-to-date, you can find any additional drivers needed for Open Firmware systems [here](https://github.com/system76/windows-drivers).

Keyboard backlight control is not supported within Windows on Open Firmware systems. The Device Manager app may report that some devices are missing drivers; this is normal and can be disregarded.

### Disabling Fast Startup

It is also recommended to disable "Fast Startup" within Windows to avoid problems switching between operating systems. To do this, navigate to Settings -> System -> Power & sleep and click `Additional power settings` in the right sidebar:

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-1.jpg)

This will open another contorl panel. In this panel, click `Choose what the power buttons do` in the left sidebar.

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-2.jpg)

On the next page, click `Change settings that are currently unavailable`.

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-3.jpg)

Finally, scroll down to the "Shutdown settings" section, uncheck the `Turn on fast startup (recommended)` option, and click `Save changes`.

![Disabling Fast Startup in Windows](/images/dual-booting/windows-power-settings-4.jpg)

This will ensure Windows fully shuts down and allows other operating systems to use the hardware.

### Switching between Pop!_OS and Windows

Depending on how you installed Windows and which firmware your computer is running, there may be several ways to chooose which OS to boot.

- **Using the UEFI firmware:**
  - **Change the default OS** using the [UEFI setup menu](/articles/boot-menu/) (while booting, hold down <kbd>Esc</kbd> on Open Firmware laptops, <kbd>F2</kbd> on closed firmware laptops, <kbd>Del</kbd> on Thelio desktops, or <kbd>F2</kbd> on Meerkat desktops.)
    - Navigate to the boot options and set the desired order, then save and exit.
    - If there's more than one entry for an OS or drive, try them from top to bottom until you find the one that works.
  - **Boot the secondary OS** using the [UEFI boot menu](/articles/boot-menu/) (while booting, hold down <kbd>Esc</kbd> on Open Firmware laptops, <kbd>F7</kbd> on closed firmware laptops, <kbd>F8</kbd> or <kbd>F12</kbd> on Thelio desktops, or <kbd>F10</kbd> on Meerkat desktops.)
    - Select the desired OS (or the drive that it's on.)
    - If there's more than one entry for an OS or drive, try them from top to bottom until you find the one that works.
- **Using systemd-boot**:
  - This menu is part of Pop!_OS, so in order to use it effectively, Pop!_OS must be set as the default OS in the firmware settings as described in the previous section.
  - **Change the default OS** using the `systemd-boot` menu (while booting, hold down <kbd>Spacebar</kbd>.)
    - Highlight the desired default OS using the arrow keys, then press <kbd>d</kbd> to make it the default.
  - **Boot the secondary OS** using the `systemd-boot` menu (while booting, hold down <kbd>Spacebar</kbd>.)
    - Highlight the selected OS, then press <kbd>Enter</kbd> to boot.
  - **Get prompted to choose the OS on every boot** using the `systemd-boot` menu.
    - While booting, hold down <kbd>Spacebar</kbd> to enter the menu.
    - Press the <kbd>+</kbd> key (or <kbd>Shift</kbd> + <kbd>=</kbd>) to increase the number of seconds the system will wait before booting the default OS; press <kbd>-</kbd> to decrease the number of seconds.
    - Once a timer is set, the menu will display on every boot without having to hold down <kbd>Spacebar</kbd>. (To reverse this, press <kbd>-</kbd> until the timer is back to zero.)

### Repairing the Pop!_OS Bootloader

If Pop!_OS stops booting or no longer appears as a boot option after the Windows installation, or after a Windows update, see [this article](/articles/bootloader) for information on repairing the Pop!_OS bootloader.

### Fixing the System Clock

Windows and Linux store their time in the UEFI firmware differently. This can cause the clock to become desynchronized when you switch from one OS to the other.

If you're affected by this, the easiest solution is to fix it in Linux, forcing it to work the same way as Windows. Set the option using this command:

```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

You can verify that the change was successful using this command:

```bash
timedatectl
```

You should see `RTC in local TZ: yes` in the output. If you need to revert this setting, turn it back off with this command:

```bash
timedatectl set-local-rtc 0 --adjust-system-clock
```
