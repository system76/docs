---
layout: article
title: Dual Booting
description: Learn how to install Pop!\_OS alongside another OS
keywords:
  - System76
  - dual boot
  - Windows
  - Linux
image: http://support.system76.com/images/system76.png
hidden: false
section: pop-ubuntu

---

To dual boot Pop!\_OS alongside another OS, use the "Customize Partitions…" option when selecting a drive.

![Customize Partitions](/images/dual-booting/customize.png)

## Create a partition

If you already have an available partition that you want to erase and replace with Pop!\_OS, skip to the next section.

If you don't have an available partition, you can create one using the "Modify Partitions…" button to open GParted.

![Modify Partitions](/images/dual-booting/modify.png)

First, make sure you Select the correct drive in the top-right of GParted.

![GParted](/images/dual-booting/gparted.png)

Right-click the desired partition and select "Resize/Move". Resize the partition down to make room for a Pop!\_OS partition, then select the "Resize/Move" button.

![Resize](/images/dual-booting/gparted-resize.png)

Right-click the new "unallocated" space and select "New". Choose the filesystem you want (if unsure, keep the default ext4), then select the "Add" button.

![Add](/images/dual-booting/gparted-add.png)

When you're ready, select the "Apply All Operations" icon at the end of the toolbar. Once the process is complete, close the GParted window and the installer will update with your changes.

![Apply](/images/dual-booting/gparted-apply.png)

## Choose partitions

![Root](/images/dual-booting/choose-partition.png)

Select the partition on which you want to install Pop!\_OS. Choose "Use partition" and select "Use as Root (/)". On EFI installs, you must also choose a Boot (/boot/efi) partition. One should exist from your other OS; choose it, and do not format it.

![EFI](/images/dual-booting/efi.png)

## Erase and install

Once you have your partition(s) selected, select the red "Erase and Install" button. This will apply your changes and begin the installation. When you restart your device after installing, it should automatically boot into Pop!\_OS where you can set up your user. Note that on BIOS installs, the Pop!\_OS entry may read "Ubuntu". To boot your other OS:

- If your device is in EFI mode, hold the spacebar while powering it on.
- If your device is in BIOS mode, a menu will automatically appear when powering on.

Choose your previous OS with the arrow keys, then press Enter.

## Operating System Selection on Startup

In some instances, POP_OS! may not automatically see the presence of other operating systems on your machine. Or simply it may be undesirable to hold the spacebar on boot to be presented with a boot menu. An alternative approach to using the built in EFI boot selection menu, is to install grub using the Ubuntu Boot Repair utility which can be found here:

```
https://help.ubuntu.com/community/Boot-Repair
```
To use this utility, follow these steps:

- Create an Ubuntu (18.04 or 18.10) live USB stick using USB Flasher (Popsicle)
- Reboot your System76 computer and select the USB device from the boot menu, or the BIOS. (To enter BIOS for recent System76 laptops, hold the <kbd>F2</kbd> key immediately after turning your computer on.  For the boot menu, hold down the <kbd>F7</kbd> key.  For older laptops, hold the <kbd>F1</kbd> key.)
- Boot into Ubuntu using the "Try Ubuntu without Installing". NOTE: The "nomodeset" flag may need to be used on machines with Nvidia graphics adapters
- When in Ubuntu, open a terminal and paste the following lines in: (REQUIRES INTERNET CONNECTION)

```
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
```
- Then click the "Recommended repair" button.
- Depending on the configuration of your system, the utility may prompt you to enter additional commanads into terminal. Follow the on screen instructions one at a time
- Upon finishing, grub should be installed on your system and configred to see all of the operating systems installed.
- Reboot your computer and remove the USB stick, POP_OS! and any other bootable device should be visible in a new menu which is presenting to you on boot.

## Windows Caveats

Windows 8 and later uses a "Fast Startup" setting which prevents Windows from fully shutting down and allowing other OSes to use the disk. Before you can properly dual boot with Windows, you must disable this setting in Windows.

In your Windows install, open Control Panel and head to "Power Options" Select "Choose what the power buttons do", select "Change settings that are currently unavailable", then disable the "fast startup" setting. Note that Windows updates may occasionally turn this setting back on without asking, so if you are unable to boot into Pop!\_OS, check this setting first.
