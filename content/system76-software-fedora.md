---
title: System76 Software (Install - Fedora)
description: >
  Learn what software is needed to use Fedora and install them
keywords:
  - system76
  - support
  - Fedora

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

> Parent article: [System76 Software (Install - Other Operating Systems)](/articles/system76-software)

Be sure to install the <u>System76 Driver</u> first and the steps to do that are [here](/articles/system76-driver).

### System76 Firmware Manager in Fedora

Then install the <u>System76 Firmware Manager</u> and the <u>System76 Firmware Daemon</u>, enable the service and add your user to the adm group.

```bash
sudo dnf install firmware-manager
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

### System76 Power in Fedora

Use these commands to install the <u>System76 Power</u> package and enable the service:

```bash
sudo dnf install system76-power
sudo systemctl enable system76-power system76-power-wake
sudo systemctl start system76-power
```
### System76 Power GNOME Shell Extension in Fedora

These commands will download the source code for the application, build it, install it and install the <u>Extensions</u> application:

```bash
git clone https://github.com/pop-os/gnome-shell-extension-system76-power.git
cd gnome-shell-extension-system76-power
sudo dnf install nodejs-typescript
make
make install
```

Now log out and use the <u>Extensions</u> to enable the extenstion.

### System76 DKMS in Fedora

Choose between the DKMS and ACPI DKMS packages for your system.
The `system76-acpi-dkms` package covers all System76 Coreboot products.
If unsure which option to choose for your System76 system, please contact System76 Support.

#### Option 1/2: DKMS

These commands will be used to install the <u>System76 DKMS</u> package which is for Proprietary Firmware systems:

```bash
sudo dnf install system76-dkms
sudo systemctl enable dkms
```

#### Option 2/2: ACPI DKMS

These commands will be used to install the <u>System76 ACPI DKMS</u> package which is for Open Firmware systems:

```bash
sudo dnf install system76-acpi-dkms
sudo systemctl enable dkms
```

**NOTE:** After enabling the dkms systemd service for either the <u>System76 DKMS</u> or the <u>System76 ACPI DKMS</u> package you will need to reboot the system:

```bash
sudo systemctl reboot
```

### System76 Thelio Io DKMS in Fedora

This command will be used to install the <u>System76 Io DKMS</u> which is used for the Thelio Io board:

```bash
sudo dnf install system76-io-dkms
```

### System76 OLED in Fedora

This command will be used to install the <u>System76 OLED</u> which is used for systems with OLED panels:

```bash
sudo dnf install system76-oled
```
