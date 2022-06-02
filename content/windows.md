---
title: Windows (Install)
description: >
  Instructions for installing Windows on System76 hardware and for locating Windows drivers.
keywords:
  - Windows
  - Windows 10
  - Windows 11
  - Microsoft
  - Drivers
  - System76
  - Dual Boot
  - Linux
  - Support
  - VM
  - Virtual Machines
  - Virtualbox

facebookImage: /_social/article
twitterImage: /_social/article

redirect_from:
  - /windows

hidden: false
section: software
tableOfContents: true
---

## Disclaimer

System76 is not a licensed reseller or installer of the Windows operating system. This article is provided for information purposes only.

System76 encourages users to take ownership of their machines and install whatever software or operating systems they prefer. However, System76 does not guarantee the success or quality of experience when installing Windows.

### Scope of Support

The contents of this support article are the **total extent of support and troubleshooting that System76 can provide for Windows.** Any troubleshooting or Windows support questions not covered in this article are outside the scope of System76 and should be referred to Microsoft.

## Windows 11

>**Compatibility:** Windows 11 is not supported on all systems. If your computer does not meet [Windows 11 requirements](https://support.microsoft.com/en-us/topic/windows-11-system-requirements-86c11283-ea52-4782-9efd-7674389a7ba3), try Windows 10.  Windows 10 is still supported by Microsoft until [October of 2025](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

<details open>
<summary>

### Compatibility Table

</summary>

| Laptop Model | Windows 10 Support | Windows 11 Support |
| ------------ | ------------------ | ------------------ |
| addw1        | Yes                | Yes                |
| addw2        | Yes                | No                 |
| bonw14       | Yes                | No                 |
| darp6        | Yes                | No                 |
| galp4        | Yes                | No                 |
| galp5        | Yes                | No                 |
| gaze15       | Yes                | No                 |
| gaze16       | Yes                | No                 |
| lemp9        | Yes                | No                 |
| lemp10       | Yes                | No                 |
| oryp6        | Yes                | No                 |
| oryp7        | Yes                | No                 |
| oryp8        | Yes                | No                 |
| pang10       | Yes                | Yes                |
| pang11       | Yes                | Yes                |
| serw12       | Yes                | Yes                |

| Desktop Model     | Windows 10 Support | Windows 11 Support |
| ----------------- | ------------------ | ------------------ |
| meer5             | Yes                | Yes                |
| meer6             | Yes                | Yes                |
| thelio-mira-r1    | Yes                | Yes*                |
| thelio-mira-b1    | Yes                | Yes*                |
| thelio-major      | Yes                | Yes*                |
| thelio-mega-r1    | Yes                | Yes*                |
| thelio-massive-b1 | Yes                | Yes*                |

> **NOTE:** For desktop computers you will want to confirm you have an 8th Gen Intel Core Processor or 2000 Ryzen AMD Processor, and that you have TPM enabled in the UEFI settings.

</details>

---

## Set Up

To install Windows on your System 76 computer, we will need to create a Windows USB installer. Creating a Windows installer on Linux is similar to how you create Linux USB installers. However, the Windows installer has unique set up requirements, so not all USB creation tools will work.

### Create a Windows USB Installer

1. Download the latest Windows .iso file from [Microsoft's website](https://www.microsoft.com/en-us/software-download/windows10ISO).
2. Connect a USB flash drive (8GB or larger) to your computer. All data on the USB will be deleted during this process.
3. Install [WoeUSB-ng](https://github.com/WoeUSB/WoeUSB-ng)

On Pop!_OS or Ubuntu, you can install WoeUSB-ng using the commands below:

```bash
sudo apt install git p7zip-full python3-pip python3-wxgtk4.0 grub2-common
sudo pip3 install WoeUSB-ng
```

Once installed, open the WoeUSB-ng application and create the USB installer with the steps below:

1. Select the Windows .iso file as the source.

    - Select `Other Locations` -> `Computer` -> `home` -> `your-username` -> `Downloads`.

2. Select the USB flash drive as the target device.
3. Click `Install`.

![WoeUSB-ng](/images/dual-booting/woeusb.png)

It may take several minutes or more for the process to finish -- wait until the `Installation succeeded!` message appears.

---

## Dual-Booting Windows with Linux

Dual booting allows you to run 2 perating systems on the same computer. There are several ways to dual boot Pop!_OS and Windows. Make sure to follow the instructions for your specific situation:

- [Installing on a Dedicated Drive (Recommended)](#installing-on-a-dedicated-drive)
- [Installing on a Shared Drive](#installing-on-a-shared-drive)
- [Installing Windows Only (not dual booting)](#install-windows)

### Installing on a Dedicated Drive

The easiest way to dual-boot Windows is to install it on a separate physical drive from Pop!_OS. This allows both Windows and Pop!_OS to use their default partition schemes, and allows you to select the OS using the UEFI firmware menu.

>**NOTE:** If you want to use full-disk encryption in Pop!_OS, this is the only option.

For the safest experience, power off your machine, [open the case](https://support.system76.com/articles/guides), and remove the drive with Pop!_OS prior to installing Windows. This ensures Windows won't overwrite the Pop!_OS bootloader, and helps avoid accidentally overwriting Pop!_OS.

Once only the Windows drive is installed in the system, proceed to [installing Windows](#install-windows)

### Installing on a Shared Drive

If you need to install both operating systems on a single drive (for example, if your computer only supports a single SSD), it is possible to install both OS's using a custom partition scheme. Pop!_OS's full-disk encryption is not supported with this setup.

Start by [installing Pop!_OS](/articles/install-pop/), making sure to select `Don't Encrypt` during the installation process.

(System76 computers shipped with Pop!_OS give you the option of whether or not to encrypt on first boot. If you chose to encrypt at first boot, or if you reinstalled and chose to encrypt, you will need to reinstall without encrypting before proceeding. If you want to dual boot and also use full-disk encryption, you will need to [use a dedicated drive](#installing-on-a-dedicated-drive) instead.)

#### Shrinking Pop!_OS

Once Pop!_OS is installed (and not encrypted), boot into Recovery mode by holding down the spacebar during boot and selecting `Pop!_OS recovery` from the list of boot options.

![Entering Pop!_OS Recovery](/images/dual-booting/pop-recovery.jpg)

Once Recovery mode has finished loading, select your language and keyboard layout, then select `Try Demo Mode` in the bottom left to exit the installer.

Next, open `GParted` by searching for it in the Applications menu found at the top left of your primary display.

The Recovery partition is installed on the same drive as the main Pop!\_OS install. Because of the Recovery location, GParted should automatically show the drive that Pop!_OS is installed to; otherwise, if GParted is showing a different drive (such as a flash drive), select the correct drive in the `GParted` -> `Devices` menu.

The largest partition in an unencrypted, default layout is an ext4 partition. Select this partition from the list, then click the `Resize/Move` button.

![Selecting the Pop!_OS partition in GParted](/images/dual-booting/gparted-select-partition.jpg)

In the resizing dialog, drag the end of the partition to the left to shrink its size. (If you want the Pop!_OS partition to be a specific size, you can also enter the size value manually in the `New size (MiB)` text box.)

![Resizing the Pop!_OS partition in GParted](/images/dual-booting/gparted-resize-partition.png)

Click the `Resize/Move` button in the bottom right to confirm the change. Next, select the `unallocated` space immediately following the resized partition and click the `New` button to create a new partition for Windows.

![Creating a Windows partition in GParted](/images/dual-booting/gparted-create-partition.jpg)

In the "Create new Partition" dialog, change the `File system:` dropdown to `ntfs`, then click `Add` to confirm the options.

![Creating a Windows partition in GParted](/images/dual-booting/gparted-new-partition.jpg)

Finally, click the `Apply All Operations` button (green check-mark) to write the changes to the disk.

![Applying the GParted operations](/images/dual-booting/gparted-apply-1.jpg)

In the confirmation dialog, click `Apply` again to confirm.

![Applying the GParted operations](/images/dual-booting/gparted-apply-2.jpg)

Wait until all of the operations complete, then click the `Close` button.

![Completed GParted operations](/images/dual-booting/gparted-complete.jpg)

Exit out of GParted and use the top-right menu to power off the system.

## Install Windows

Plug the [USB installer](#create-a-windows-usb-installer) into your machine, then power on while holding the appropriate key to enter the [boot menu](/articles/boot-menu/):

- `Esc` for laptops with Open Firmware
- `F7` for laptops with proprietary firmware
- `F8` or `F12` for Thelio desktops
- `F10` for Meerkat desktops

From the boot menu, select the USB drive containing the Windows installer.

### Performing the Installation

Select your language, region, and keyboard settings, then click `Next`.

![Windows region & language settings](/images/dual-booting/windows-language-settings.jpg)

On the next page, click `Install now`.

![Windows installer](/images/dual-booting/windows-install-now.jpg)

On the `Activate Windows` page, enter your Windows product key, then click `Next`. If you don't have a product key, click `I don't have a product key`. (Usage of Windows without a product key may violate Microsoft's [license terms](https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm) for Windows, and some features may be limited or unavailable.)

![Windows activation](/images/dual-booting/windows-activation.jpg)

If you didn't enter a product key, you will be asked to choose which version of Windows to install. The standard version for desktop and laptop computers is `Windows 10 Home` (if you're not sure which version to select, use this one.)

![Windows edition selection](/images/dual-booting/windows-select-edition.jpg)

Next, you will be asked to read and accept Microsoft's license terms for Windows. To continue, check the `I accept the license terms` checkbox and click `Next`.

![Windows license terms](/images/dual-booting/windows-accept-license-terms.jpg)

The next page will ask what type of installation you want to perform. Since there is no existing Windows installation to upgrade, select the `Custom: Install Windows only (advanced)` option.

![Windows installation types](/images/dual-booting/windows-installation-type.jpg)

Finally, the installer will ask you to select the location where you want Windows installed. Please follow the instructions for the configuration you chose under [Dual-Booting Windows](#dual-booting-windows-with-linux)

Installing Windows to a **Dedicated Drive**

1. Select the drive for Windows installation.
    - This drive likely has 1 partition listed, or shows as "Unallocated Space"
    - If there are more partitions listed, see the [Managing Partitions](#managing-partitions) section below for instructions on removing them.
2. Click `Next` to install Windows to the drive.
3. Proceed to [Completing the Installation](#completing-the-installation)

Installing Windows to a **Shared Drive**

We are going to install Windows to an existing partition on the shared drive.

1. Select the partition that matches what you created earlier using GParted.
2. Click `Next` to install Windows to the partition.
3. Proceed to [Completing the Installation](#completing-the-installation)

>**Warning:** You should not need to format any partitions during this step. If you see a `Windows can't be installed on drive # partition #` message, either you have the wrong partition selected, or you did not select `NTFS` as the partition type when creating the partition in GParted earlier. Try selecting a different partition, or go back to [Shrinking Pop!_OS](#shrinking-pop_os).

Installing **Windows Only**

1. Select the drive you would like to install Windows on (likely the only drive)
    - If there are partitions already on the drive, see the [Managing Partitions](#managing-partitions) section below for instructions on removing them.
2. Click `Next` to install Windows to the partition.
3. Proceed to [Completing the Installation](#completing-the-installation)

#### Managing Partitions

If the drive to be used for Windows already contains any partitions, start by deleting those partitions. To do this, you'll need to identify which drive will be used for Windows.

For example, if you purchased a System76 machine with multiple drives, any extra drives should have a single partition (while the OS drive for Pop!_OS will have three or four partitions.) In this example, the Pop!_OS drive is 256GB and the Windows drive is 128GB, so we'll delete the single partition on `Drive 1` because it's closest to 128GB:

![Windows deleting existing partitions](/images/dual-booting/windows-delete-existing-partitions.jpg)

(If your flash drive is large enough, it may also show up in the list of drives; once again, identify it by its size and do not attempt to delete its partitions, since it's where the installer is stored.)

You will be asked to confirm any partitions you delete:

![Windows confirming a partition deletion](/images/dual-booting/windows-confirm-partition-delete.jpg)

Once all of the partitions have been deleted from the soon-to-be Windows drive, select the `Unallocated Space` on that drive and click `Next`. This will allow the installer to configure the necessary partitions automatically.

![Windows selecting unallocated space](/images/dual-booting/windows-select-unallocated-space.jpg)

### Completing the Installation

At this point, the Windows install will run. The installer will show progress as it copies and expands the OS files. The system may reboot one or more times during this process.

![Windows being installed](/images/dual-booting/windows-installing.jpg)

If you see a message about checking the disk, wait and allow the installer to check its newly-created partitions.

![Windows checking the disk](/images/dual-booting/windows-checking-disk.jpg)

### Windows Set Up

After the install is completed, the system will reboot and then load the Windows set-up wizard. Select your country (it may be automatically selected if you're connected to the internet) and click `Yes`.

![Windows first-time setup wizard](/images/dual-booting/windows-oobe.jpg)

Follow the wizard to select your preferences for:

- Keyboard layout
- Network setup, if using WiFi
- Account details
- Privacy settings
- Cortana settings

After completing the wizard, Windows will display a slideshow while it finishes setting up. Once the set up is completed, you will see the Windows desktop:

![Windows 10 desktop](/images/dual-booting/windows-10-desktop.jpg)

Now that Windows is installed, proceed to [additional setup](#additional-setup-for-windows) to make sure you have the best experience possible with Windows on your System76 computer.

---

## Additional Setup for Windows

### Installing Drivers

After finishing the Windows installation, open Settings -> Update & Security and click `Check for updates` to install any drivers available through Windows Update first.

![Checking for Windows updates](/images/dual-booting/windows-update.jpg)

Click `Restart now` if you are prompted to restart to finish installing any updates. Repeat this process until no more updates are available.

> **NOTE:** Keyboard backlight control is not supported within Windows on Open Firmware systems. The Device Manager app may report that some devices are missing drivers; this is normal and can be disregarded.

For System76 machines with Intel hardware, Windows Update is rather effective at finding drivers. We also recommend using [Intel Driver Update Utility](http://www.intel.com/content/www/us/en/support/detect.html), which will automatically detect and install drivers for Intel hardware.

For our Open Firmware and Open EC systems, you can download the Windows drivers [here](https://github.com/system76/windows-drivers).

For systems with NVIDIA graphics cards, drivers can be found here [NVIDIA Drivers](http://www.nvidia.com/Download/index.aspx)

#### NVIDIA Hardware Table

Always|Maybe|Never
:----:|:----:|:----:
Adder WS|Darter Pro (w/ eGPU)|Lemur
Bonobo WS|Galago Pro (w/ eGPU)|Kudu|
Leopard WS|Gazelle|Meerkat|
Oryx Pro|Ratel|
Serval WS|Thelio|
Silverback WS|Wild Dog Pro|

#### Ethernet Hardware Table

Realtek RTL8111/8168/8411|Intel I219-V|Atheros/Killer Ethernet E2400|Intel I210
:----:|:----:|:----:|:----:
Oryx Pro|Meerkat|Serval WS|Silverback WS|
Lemur|Wild Dog Pro|Bonobo WS|
Gazelle| Leopard WS| |
Kudu| | |

[Realtek Drivers](http://www.realtek.com.tw/downloads/)

[Intel I219-V Drivers](https://downloadcenter.intel.com/product/82186/Intel-Ethernet-Connection-I219-V)

[Intel I210 Drivers](https://downloadcenter.intel.com/product/64399/Intel-Ethernet-Controller-I210-Series)

[Killer Ethernet Drivers](http://www.killernetworking.com/driver-downloads/category/killer-suite)

If there is a missing driver in the `Device Manager`, right click on the item with the missing driver, choose **Properties**, then **Details**, and then **Hardware Ids** from the drop-down.  The VEN (vendor) and DEV (device) numbers are unique to every piece of hardware.  Search for the device at the PCI Database:

[PCI Lookup](http://www.pcilookup.com/)

You can use that info to find the manufacturer, then search for drivers.

### Disabling Fast Startup

It is also recommended to disable "Fast Startup" within Windows to avoid problems switching between operating systems. To do this, navigate to Settings -> System -> Power & sleep and click `Additional power settings` in the right sidebar:

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-1.jpg)

This will open another control panel. In this panel, click `Choose what the power buttons do` in the left sidebar.

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-2.jpg)

On the next page, click `Change settings that are currently unavailable`.

![Accessing additional power settings in Windows](/images/dual-booting/windows-power-settings-3.jpg)

Finally, scroll down to the "Shutdown settings" section, uncheck the `Turn on fast startup (recommended)` option, and click `Save changes`.

![Disabling Fast Startup in Windows](/images/dual-booting/windows-power-settings-4.jpg)

This will ensure Windows fully shuts down and allows other operating systems to use the hardware.

### Selecting Pop!_OS or Windows

Depending on how you installed Windows and which firmware your computer is running, there are a variety of ways to choose which OS to boot.

#### Using the firmware boot menu

- **Change the default OS** using the [UEFI setup menu](/articles/boot-menu/) (while booting, hold down `ESC` on Open Firmware laptops, `F2` on closed firmware laptops, `DEL` on Thelio desktops, or `F2` on Meerkat desktops.)
- Navigate to the boot options and set the desired order, then save and exit.
- If there's more than one entry for an OS or drive, try them from top to bottom until you find the one that works.
- **Boot the secondary OS** using the [UEFI boot menu](/articles/boot-menu/) (while booting, hold down `ESC` on Open Firmware laptops, `F7` on closed firmware laptops, `F8` or `F12` on Thelio desktops, or `F10` on Meerkat desktops.)
- Select the desired OS (or the drive that it's on.)
- If there's more than one entry for an OS or drive, try them from top to bottom until you find the one that works.

#### Using the systemd-boot menu

Systemd-boot is the bootloader used by Pop!_OS. It can be used to select which operating system you would like to boot from. The steps below outline how to access the systemd-boot menu, and select an operating system:

- This menu is part of Pop!_OS, so in order to use it effectively, Pop!_OS must be set as the default OS in the firmware settings as described in the previous section.
- **Change the default OS** using the `systemd-boot` menu (while booting, hold down `SPACE`.)
- Highlight the desired default OS using the arrow keys, then press `D` to make it the default.
- **Boot the secondary OS** using the `systemd-boot` menu (while booting, hold down `SPACE`).
- Highlight the selected OS, then press `ENTER` to boot.
- **Get prompted to choose the OS on every boot** using the `systemd-boot` menu.
- While booting, hold down `SPACE` to enter the menu.
- Press the `+` key (or `SHIFT` + `=`) to increase the number of seconds the system will wait before booting the default OS; press `-` to decrease the number of seconds.
- Once a timer is set, the menu will display on every boot without having to hold down `SPACE`. (To reverse this, press `-` until the timer is back to zero.)

##### Add Windows to systemd-boot

If you installed Windows on a [dedicated drive](#installing-on-a-dedicated-drive), then the systemd-boot menu will not recognize the Windows drive right away. To make systemd-boot aware of the Windows installation, we will need to copy the Windows boot files from the Windows boot partition, to the Pop!\_OS boot partition.

1. Boot to Pop!_OS
2. Find the Windows drive
    1. Run lsblk in a Terminal to list partitions on your systems
        - The EFI partition should be the 1st partition on the Windows drive, and will be around 100M in size
    2. Now mount the Windows EFI partition to /mnt
        - sudo mount /dev/NAME where NAME is from the "name" column of the lsblk output for the EFI partition
        - After mounting on a test machine, I ran ls -al /mnt/EFI and I was able to see a "Boot" and a "Microsoft" folder at this point
    3. Now copy the "Microsoft" folder to your Pop!_OS EFI partition.
        - will copy the folder if the Windows EFI was mounted as I indicated above
        ```bash
        sudo cp -Rv /mnt/EFI/Microsoft /boot/efi/EFI/Microsoft
        ```
3. When you reboot at this point, Windows should now show in the systemd-boot menu.

#### EFI Boot Manager

EFI Boot Manager or `efibootmgr` is a tool used to interact with an EFI system's boot entries. We can use `efibootmgr` in Linux to set Windows as our 1-time boot option. If we reboot the computer at this point, your computer will boot straight to Windows. Then, if you reboot the computer again, it will go back to Pop!_OS until you set the 1-time boot option again.

Most system released after 2014 use EFI-based firmware, and can use this tool.

1. Run the efibootmgr command in a Terminal.
    - This will show you the available EFI boot entries found on your system
2. Find the "Microsoft Boot Manager" line, we will need the 4-digit number found in the Boot000x section
3. Run the below command to set a 1-time boot to the Windows partition.
    - The 1-time boot selection will be loaded the next time you boot or reboot the system. After that, the default boot item will be used like normal
    - `sudo efibootmgr -n 000x` replace the x at the end with the number found in the "Microsoft Boot Manager" line.
4. Now, reboot your system and Windows will boot.
    - If you reboot Windows, it will go back to Pop!_OS. If you were to reboot Pop!_OS once more, it will continue to load Pop!_OS unless you intervene.

### Repairing the Pop!_OS Bootloader

If Pop!_OS stops booting or no longer appears as a boot option after the Windows installation, or after a Windows update, see [this article](/articles/bootloader) for information on repairing the Pop!_OS bootloader.

### Fixing the System Clock

Windows and Linux store their time in the UEFI firmware differently. This can cause the clock to become de-synchronized when you switch from one OS to the other.

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
