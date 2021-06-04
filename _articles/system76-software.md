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

# Notes about these instructions

NOTE: These instructions were tested on a Galago Pro (galp3-b) and Pangolin (pang10). Neither system have NVIDIA GPUs, so this process doesn't go over installing the NVIDIA driver (system76-driver-nvidia). Due to these limitations, switchable graphics may not work on NVIDIA systems.

## Arch

Be sure to install the <u>System76 Driver</u> first. The steps to do that are [here](/articles/system76-driver). 

### System76 Firmware Daemon

These commands will clone, build and install the <u>System76 Firmware Daemon</u> service.

```bash
git clone https://aur.archlinux.org/system76-firmware.git
cd system76-firmware-daemon
makepkg -srcif
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

### System76 Firmware Manager

These commands will clone, build and install the <u>System76 Firmware Manager</u> application.

```bash
git clone https://aur.archlinux.org/firmware-manager.git
cd firmware-manager
makepkg -srcif
```

### System76 DKMS

This package is needed for hotkeys and fan(s) on Closed Firmware systems:

```bash
git clone https://aur.archlinux.org/system76-dkms.git
cd system76-dkms
makepkg -srcif
```

### System76 ACPI DKMS

This package is needed for hotkeys and fan(s) on Open Firmware systems:

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

NOTE: This package is only needed for systems with OLED displays to control the brightness.

## Fedora

Be sure to install the <u>System76 Driver</u> first and the steps to do that are [here](/articles/system76-driver). 

### System76 Firmware Manager

Then install the <u>System76 Firmware Manager</u> and the <u>System76 Firmware Daemon</u>,enable the service and add your user to the adm group:

```bash
sudo dnf install firmware-manager
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

### System76 Power

Use these commands to install the <u>System76 Power</u> package and enable the service:

```bash
sudo systemctl enable system76-power system76-power-wake 
sudo systemctl start system76-power
```

#### System76 Power GNOME Shell Extension

These commands will download the source code for the application, build it, install it and install the <u>Extensions</u> application:

```bash
git clone https://github.com/pop-os/gnome-shell-extension-system76-power.git
cd gnome-shell-extension-system76-power
sudo dnf install nodejs-typescript
make
make install
```

Now log out and use the <u>Extensions</u> to enable the extenstion. 

### System76 DKMS

These commands will be used to install the <u>System76 DKMS</u> package which is for Proprietary Firmware systems:

```bash
sudo dnf install system76-dkms
sudo systemctl enable dkms
```

### System76 ACPI DKMS

These commands will be used to install the <u>System76 ACPI DKMS<u> package which is for Open Firmware systems:

```bash
sudo dnf install system76-acpi-dkms
sudo systemctl enable dkms
```

NOTE: After enabling the dkms systemd service for either the <u>System76 DKMS</u> or the <u>System76 ACPI DKMS</u> package you will need to reboot the system:

```bash
sudo systemctl reboot
```

### System76 Thelio Io DKMS

This command will be used to install the <u>System76 Io DKMS</u> which is used for the Thelio Io board:

```bash
sudo dnf install system76-io-dkms
```

### System76 OLED

This command will be used to install the <u>System76 OLED</u> which is used for systems with OLED panels:

```bash
sudo dnf install system76-oled
```