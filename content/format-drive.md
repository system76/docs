---
layout: article
title: Format Your drive
description: Learn how to format your drive
keywords:
  - System76
  - Security
  - Linux
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---
# Format Your Drive

<!---- Document Version: 1.0.0
- Date: (8-27-2020)
- Author: Aaron Honeycutt
- Contributing Editor(s): Nathaniel Warburton--->

## Live Disk or Pop Recovery

In order to format the drive that has your OS on it we will need to boot from either a live disk or the Pop Recovery partition.

> **NOTE** Formatting the entire OS drive (including the Recovery partition) requires booting from a live disk or another drive.

## Disks application

The <u>Disks</u> application can be used to format the drive to remove any personal data. Disks comes pre-installed on Pop!\_OS and Ubuntu.

In this screenshot the drive is a USB Flash Drive, though the concept is the same for any drive, including the drive where your OS is installed. First left-click on the drive on the left side then left-click on the top right menu with three dots (three lines on older releases).

![Disks](/images/format-drive/disks-format-disk.png)

Now select the **Format Disk...** option then make sure to have the 'Compatible with modern systems and hard drives > 2TB (GPT)' selected (you can use either the Quick option or the Slow option).

![Disks](/images/format-drive/disks-format-disk2.png)
