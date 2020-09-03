---
layout: article
title: Dual Boot Windows 10 Alongside Pop!_OS
description: Learn how to install Windows OS alongside Pop!\_OS
keywords:
  - System76
  - dual boot
  - Windows
  - Linux
image: http://support.system76.com/images/system76.png
hidden: false
section: pop

---

### If Pop!\_OS is installed first

To dual boot Pop!\_OS alongside another OS install Pop!\_OS first. Then once booted into Pop!\_OS use GParted to resize the root partition (the largest partition) to make room for Windows 10 (35GB is the minimum required).  

![GParted](/images/dual-booting/gparted.png)

![GParted Resize](/images/dual-booting/gparted-resize.png)

### If Pop!\_OS is not installed

If you wish to install Pop!\_OS here is a [link](/articles/install-pop/) to it.

## Install Windows 10

### Create Install Media

To create the Install Media on Pop!\_OS and Ubuntu, use the [WoeUSB tool](https://www.dropbox.com/s/8emsfrqkqmf9km9/woeusb_3.3.1a_amd64.deb?dl=0). Once you have WoeUSB installed, download [the Windows ISO file](https://www.microsoft.com/en-us/software-download/windows10ISO).

![WoeUSB](/images/dual-booting/woeusb.png)

Select the Windows ISO file as the **Source**, set the **File system** as NTFS, then select the USB drive **Target device** and hit the **Install** button. 

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

NOTE: If you feel comfortable opening your machine, it may be helpful to remove whichever drive is not undergoing changes while you install the OS on the opposite drive. For example, removing "drive 1," while installing Windows on "drive 2."

This will prevent Windows (or Pop!_OS) from changing the boot partitions of the opposite drive. This is an extra precaution and not usually necessary; however, Windows does not always "play well with others," and removing drives you do not want changed during installation insures against this.

## Windows Caveats

Windows 8 and later uses a "Fast Startup" setting which prevents Windows from fully shutting down and allowing other OSes to use the disk. Before you can properly dual boot with Windows, you must disable this setting in Windows.

In your Windows install, open Control Panel and head to "Power Options" Select "Choose what the power buttons do", select "Change settings that are currently unavailable", then disable the "fast startup" setting. Note that Windows updates may occasionally turn this setting back on without asking, so if you are unable to boot into Pop!\_OS, check this setting first. (If the checkbox for 'Turn on fast startup' is grayed out, you can enable it by click 'Change settings that are currently unavailable' near the top of the power buttons settings page)

Once in the BIOS change the Boot Order to boot Pop!\_OS first that way when the <kbd>Spacebar</kbd> is pressed systemd-boot will appear and then the Windows Boot Manager can be selected for booting Windows 10. Steps for accessing the BIOS and changing the Boot Order are found [here](/articles/boot-menu/).

## Fix your clock

Windows and Linux store their time in the BIOS differently, this will cause your clock to be desynchronized when you switch from one OS to the other.

The easiest solution for it is to fix it in Linux, forcing it to work the same way as Windows. You can do this through the terminal:

```
timedatectl set-local-rtc 1 --adjust-system-clock
```

You can verify if the change has been successful, by running this command:

```
timedatectl
```

You should see `RTC in local TZ: yes`. 
If you need to revert it, just set it to 0:

```
timedatectl set-local-rtc 0 --adjust-system-clock
```
