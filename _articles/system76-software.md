---
layout: article
title: Install System76 Software in other OSes
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
sudo gpasswd -a $USER adm
```

### System76 Firmware Manager

```bash
git clone https://aur.archlinux.org/firmware-manager.git
cd firmware-manager
makepkg -srcif
```

### System76 DKMS

This package is needed for the keyboard backlight key combos to work on Closed Firmware systems:

```bash
git clone https://aur.archlinux.org/system76-dkms.git
cd system76-dkms
makepkg -srcif
```

### System76 ACPI DKMS

This package is needed for the keyboard backlight key combos to work on Open Firmware systems:

```bash
git clone https://aur.archlinux.org/system76-acpi-dkms.git
cd system76-acpi-dkms
makepkg -srcif
```

### System76 Power

```bash
git clone https://aur.archlinux.org/system76-power.git
cd system76-power
makepkg -srcif
sudo systemctl enable --now system76-power
sudo gpasswd -a $USER adm
```

#### System76 Power GNOME Shell Extension

```bash
git clone https://aur.archlinux.org/gnome-shell-extension-system76-power-git.git
cd gnome-shell-extension-system76-power
makepkg -srcif
```

NOTE: As of this writing the GNOME Shell Extension doesn't support GNOME 40.

### System76 Thelio Io DKMS

```bash
git clone https://aur.archlinux.org/system76-io-dkms.git
cd system76-io-dkms
makepkg -srcif
```

NOTE: This package is only needed for Thelio desktops.

### System76 OLED 

```bash
git clone https://aur.archlinux.org/system76-oled.git
cd system76-acpi-oled
makepkg -srcif
```

NOTE: This package is only needed for systems with OLED displays.