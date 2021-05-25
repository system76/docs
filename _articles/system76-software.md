---
layout: article
title: Install System76 Software to fully use the hardware in other OSes
description: >
    Learn what software is needed to use other OSes and install them
keywords:
  - system76
  - support
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

## Arch

Be sure to install the <u>System76 Driver</u> first and the steps to do that are [here](/articles/system76-driver). 

### System76 Firmware CLI

```bash
git clone https://aur.archlinux.org/system76-firmware.git
cd system76-firmware-daemon
makepkg -srcif
sudo systemctl enable --now system76-firmware-daemon
```

### System76 Firmware Manager

```bash
git clone https://aur.archlinux.org/firmware-manager.git
cd firmware-manager
makepkg -srcif
```

### System76 DKMS

This package is needed for the keyboard backlight key combos to work and the system will need to be rebooted for it to work:

```bash
git clone https://aur.archlinux.org/system76-dkms.git
cd system76-dkms
makepkg -srcif
```