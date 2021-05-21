---
layout: article
title: Add or Remove Kernels
description: >
 How to remove or install different kernel versions in Ubuntu and PopOS.
keywords:
 - kernel
 - kernels
 - grub
 - systemd
 - kernelstub
 - update
 - regression
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Add or Remove Kernels

- Document Version: 1.0.0
- Date: (5-20-2021)
- Author: Nathaniel Warburton
- Contributing Editor(s): 

Both Ubuntu and PopOS are capable of installing multiple kernel versions. The OS only boots to, and uses, one kernel at a time. Until removed through automatic updates, or manual deletion, some older kernels will be kept on the drive's boot partition. These older kernels can be used for testing software compatibility, providing a rescue environment, or for changing the way the system peforms scheduling. For example, the community maintained "Zen" version of the Linux Kernel (see below) is specfically focused on gaming peformance. The Zen kernel modifies it's CPU clock and scheduling alogorithms to try to improve OS speed. This may work better for some activities than others (gaming vs. machine learning). 

### Contents

This article covers how to:

1. See Which Kernels You Have Installed 
2. How to Update Kernels
3. How to Roll Back to an Older Kernel
4. How to Uninstall Kernels
5. How to Install Custom Kernels

# See Which Kernels You Have Installed 

## PopOS or Ubuntu

To see which kernel the system is currently running, issue the following Terminal command:

```bash
uname -r
```

To see all installed kernels, run:

```bash
dpkg --list | grep linux-image
```

# How to Roll Back to an Older Kernel 

## Test an Older Kernel (PopOS)

If you're experiencing issues with a newly installed kernel, testing an older kernel version is a good first troubleshooting step.


### Boot Older Kernel

1. Power off your system
2. Power on your system
3. Immediately hold down the spacebar
4. Select the "Pop!\_OS oldkern" option from the boot menu

### Change default boot option

Repeat the steps above, with one change.

1. Power on your system
2. Hold the spacebar to reach the bootloader
3. Highlight the "oldkern" option and press the "d" key to set it as the default
4. Hit <kbd> ENTER </kbd> or restart the system, and you will boot with the older kernel

If the issue does not return in the old kernel, the newer kernel was the likely cause.

# Hold at Older Kernel, and change Boot Default (alternative).

The system can be temporarily held at an older kernel version (in this example, kernel 5.8), and change the boot defaults by running these two commands. 

NOTE: The kernel version in the commands will need to be updated to reflect the kernel version you want to hold.

```bash
sudo apt-mark hold linux-image-5.8.0-7642-generic
sudo kernelstub -v -k /boot/vmlinuz-5.8.0-7642-generic -i /boot/initrd.img-5.8.0-7642-generic
```



https://github.com/zen-kernel/zen-kernel
