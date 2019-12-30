---
layout: article
title: Dual Booting
description: Learn how to install another OS alongside Pop!\_OS
keywords:
  - System76
  - dual boot
  - Windows
  - Linux
image: http://support.system76.com/images/system76.png
hidden: false
section: pop-ubuntu

---

### If Pop!\_OS is installed first

To dual boot Pop!\_OS alongside another OS install Pop!\_OS first. Then once booted into Pop!\_OS and use GParted to resize the root partition (the largest partition) to make room for Windows 10 (35GB is the minimum required).  

![GParted](/images/dual-booting/gparted.png)

![GParted Resize](/images/dual-booting/gparted-resize.png)

## Install Windows 10

Once Windows 10 is loaded and the 'Windows Setup' window is shown the partition that was created earlier for Windows can be selected. When installing Windows 10 it will use the Pop EFI system partition (ESP) so that Windows boot efi files will be placed in the ESP partition.

![Windows](/images/dual-booting/windows-partitioning.png)

With the 'Unallocated Space' selected new press the 'Apply' button. Note if the whole partition is being used for this installation then the size property won't need to be changed.

![Windows](/images/dual-booting/windows-partitioning-2.png)

Next Windows will create an extra partition that is needs for some features.

![Windows](/images/dual-booting/windows-partitioning-3.png)

This message can be safely ignored and it is caused by Windows not being the first OS in the boot order.

![Windows](/images/dual-booting/windows-partitioning-4.png)

## Using another drive

Another way to set up a dual boot is to install another drive for the other OS of your choice. This is one of the easiest ways to dual boot as each OS will set up the whole drive for automatically created partitions and won't require you to resize any partitions. To access each OS you would reboot and hold the boot menu key (F7 for our laptops and F10/F12/Del for our desktops).

## Windows Caveats

Windows 8 and later uses a "Fast Startup" setting which prevents Windows from fully shutting down and allowing other OSes to use the disk. Before you can properly dual boot with Windows, you must disable this setting in Windows.

In your Windows install, open Control Panel and head to "Power Options" Select "Choose what the power buttons do", select "Change settings that are currently unavailable", then disable the "fast startup" setting. Note that Windows updates may occasionally turn this setting back on without asking, so if you are unable to boot into Pop!\_OS, check this setting first.

Once in the BIOS change the Boot Order to boot Pop!\_OS first that way when the <kbd>Spacebar</kbd> is pressed systemd-boot will appear and then the Windows Boot Manager can be selected for booting Windows 10.
