---
title: File Systems (Mount and Repair)
description: >
  How to mount and repair common file system issues.
keywords:
  - Repair
  - File System
  - Ubuntu
  - Pop

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Problem

File Systems can be damaged from events like unexpected power loss or unsafe removal of drive(s). This is where you would run a File System repair tool on your system. There are a few ways to do this and we'll list them below:

## Solution

If you are not able to boot into the installed OS due to this issue we can boot into a [live disk](http://support.system76.com/articles/live-disk/), mount the drive, then chroot into the installed OS. More details [here](https://support.system76.com/articles/bootloader/). Once chrooted, follow these steps:

### GUI (Graphical User Interface)

We can use the Disks application once the drive (on the left side) is selected. From there click on the partiton (Pop and Ubuntu uses Ext4 for the root partition) then the gear icon for the menu in the below screenshot:

![Disks-Repair](/images/fixing-drives/disks-application.png)

### CLI (Command Line Interace)

We can instead use the <u>Terminal</u> application to perform the same behavior using these commands depending on your drive:

|         SATA                       |           NVMe                 |
|:----------------------------------:|:------------------------------:|
| sudo fsck -Cy /dev/sda#            | sudo fsck -Cy /dev nvme0n1p#   |

Substitute # with the partition number of your OS install, which can be determined by opening a terminal window and typing ```lsblk``` and pressing <kbd>Enter</kbd>.

The drive with the / mountpoint will be your OS installation.

If the commands complete without errors, or with errors corrected, reboot back into the installed OS.
If errors are reported and not corrected, your drive may be experiencing hardware issues. You'll want to use your live environemnt (Live Disk or Recovery) to back up your files to another drive. We have an article on this process [here](https://support.system76.com/articles/disaster-recovery).
