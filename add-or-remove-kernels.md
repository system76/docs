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
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Add or Remove Kernels

## PopOS

To see which kernel the system is currently running, issue the following Terminal command:

```bash
uname -r
```

To see all installed kernels, run:

```bash
dpkg --list | grep linux-image
```

If users experience issues with a new kernel install, testing an older kernel version is a good first troubleshooting step.


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
4. Hit <kbd enter /kbd> or restart the system, and you will boot with the older kernel

If the issue does not return in 5.8, then we have our culprit.

# Hold at 5.8 Kernel, and change Boot Default (alternative).

We can freeze the system temporarily at 5.8, and change the boot defaults by running these two commands.

```bash
sudo apt-mark hold linux-image-5.8.0-7642-generic
sudo kernelstub -v -k /boot/vmlinuz-5.8.0-7642-generic -i /boot/initrd.img-5.8.0-7642-generic
```
