---
title: System76 Software (Install - Arch)
description: >
  Learn what software is needed to use Arch and install them
keywords:
  - system76
  - support
  - Arch

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

> Parent article: [System76 Software (Install - Other Operating Systems)](/articles/system76-software)

Be sure to install the <u>System76 Driver</u> first. The steps to do that are [here](/articles/system76-driver).

If you want to use an AUR helper like [Paru](https://github.com/Morganamilo/paru) then follow the steps on this [page](/articles/system76-driver) as well.

This command will install all of the packages using <u>Paru</u>.

```bash
paru -S system76-firmware-daemon system76-firmware firmware-manager system76-power gnome-shell-extension-system76-power-git system76-driver system76-dkms system76-acpi-dkms
```

### System76 Firmware Daemon in Arch

These commands will clone, build and install the <u>System76 Firmware Daemon</u> service.

```bash
git clone https://aur.archlinux.org/system76-firmware.git
cd system76-firmware-daemon
makepkg -srcif
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

These commands will install `system76-firmware-daemon` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s system76-firmware-daemon
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

### System76 Firmware Manager in Arch

These commands will clone, build and install the <u>System76 Firmware Manager</u> application.

```bash
git clone https://aur.archlinux.org/firmware-manager.git
cd firmware-manager
makepkg -srcif
```

This command will install `firmware-manager` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s firmware-manager
```

### System76 DKMS in Arch

Choose between the DKMS and ACPI DKMS packages for your system.
The `system76-acpi-dkms` package covers all System76 Coreboot products.
If unsure which option to choose for your System76 system, please contact System76 Support.

#### Option 1/2: DKMS

This package is needed for hotkeys and fan(s) on Closed Firmware systems.

```bash
git clone https://aur.archlinux.org/system76-dkms.git
cd system76-dkms
makepkg -srcif
```

This command will install `system76-dkms` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s system76-dkms
```

#### Option 2/2: ACPI DKMS

This package is needed for hotkeys and fan(s) on Open Firmware systems.

```bash
git clone https://aur.archlinux.org/system76-acpi-dkms.git
cd system76-acpi-dkms
makepkg -srcif
```

This command will install `system76-acpi-dkms` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s system76-acpi-dkms
```

### System76 Power in Arch

```bash
git clone https://aur.archlinux.org/system76-power.git
cd system76-power
makepkg -srcif
sudo systemctl enable --now system76-power
sudo gpasswd -a $USER adm
```

These commands will install `system76-power` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s system76-power
sudo systemctl enable --now system76-power
sudo gpasswd -a $USER adm
```

### System76 Power GNOME Shell Extension in Arch

```bash
git clone https://aur.archlinux.org/gnome-shell-extension-system76-power-git.git
cd gnome-shell-extension-system76-power
makepkg -srcif
```

This command will install `gnome-shell-extension-system76-power` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s gnome-shell-extension-system76-power
```

### System76 Thelio Io DKMS in Arch

```bash
git clone https://aur.archlinux.org/system76-io-dkms.git
cd system76-io-dkms
makepkg -srcif
```

This command will install `system76-io-dkms` using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
paru -s system76-io-dkms
```

**NOTE:** This package is only needed for Thelio desktops.

### System76 OLED in Arch

```bash
git clone https://aur.archlinux.org/system76-oled.git
cd system76-acpi-oled
makepkg -srcif
```

This command will install it using <u>Paru</u>.

**NOTE:** choose the first software option after running the <u>Paru</u> command.

```bash
<u>Paru</u> -s system76-acpi-oled
```

**NOTE:** This package is only needed for systems with OLED displays to control the brightness.