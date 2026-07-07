---
title: Install the System76 Driver
description: >
  Learn how to add the System76 Driver to your System76 computer after reinstalling Ubuntu
keywords:
  - system76
  - driver
  - NVIDIA
  - support

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-computer
tableOfContents: true
---

This guide will show you how to add the System76 software repository and install the driver on Ubuntu.

Please note these steps are not necessary in Pop!\_OS, which includes the repository and the appropriate drivers installed by default.

## Installing the Driver

First, [download the latest release](https://github.com/pop-os/system76-ubuntu-repo/releases/) of the System76 Ubuntu repo package. Choose the latest .deb file that corresponds to your PC's architecture. If you're unsure, amd64 is probably the one you need.

After the .deb file is downloaded, double-click it in the Downloads folder (or click it in Firefox) to open it with the Ubuntu App Center. The yellow `Potentially unsafe` warning about installing third-party packages is expected and can be safely ignored for this package. Click the green `Install` button to install the package, then click `Install` again to confirm; enter your user password and click `Authenticate`.

Installing that package sets up the System76 repository automatically, so the System76 Driver can be installed with these terminal commands:

```bash
sudo apt update
sudo apt install system76-driver
sudo apt full-upgrade
```

This installs the System76 Driver and related utilities which are needed to enable full functionality for your system.

### Installing the System76 NVIDIA Driver for Systems with NVIDIA GPUs

If your system has an NVIDIA graphics card, use this command to install the System76 Driver with NVIDIA graphics drivers included:

```bash
sudo apt install system76-driver-nvidia
```

In addition to the standard packages, this package also pulls in the System76-supported NVIDIA drivers and all related packages needed to take full advantage of your dedicated NVIDIA graphics card.

---

## Install System76 Driver on Other Operating Systems

**DISCLAIMER:** This section explains how to install the <u>System76 Driver</u> on Arch and Fedora.

The System76 engineering and QA teams may not regularly test other OSes on System76 hardware. This section is provided for informational purposes only.

System76 encourages users to take ownership of their machines and install whatever software or operating systems they prefer. However, System76 does not guarantee the success or quality of experience when installing other operating systems.

The support team typically makes a best-effort attempt to offer direction or troubleshooting for other distributions. The team may determine that troubleshooting has exceeded the scope of support. If that's the case, further questions should be referred to those operating system(s)' support forums.

**Note:** At this time, it is recommended to use the NVIDIA driver from the Arch and Fedora repositories.

### Arch - Manual install

First, install some build dependencies for the <u>System76 Firmware Daemon</u>, <u>System76 Driver</u> and the <u>Firmware Manager</u> packages:

```bash
sudo pacman -S --needed base-devel git linux-headers
```

#### System76 Firmware Daemon

These commands will clone, build and install the <u>System76 Firmware Daemon</u> service.

```bash
git clone https://aur.archlinux.org/system76-firmware.git
cd system76-firmware
makepkg -srcif
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

#### System76 Firmware Manager

These commands will clone, build and install the <u>System76 Firmware Manager</u> application.

```bash
git clone https://aur.archlinux.org/firmware-manager.git
cd firmware-manager
makepkg -srcif
```

#### System76 Driver

Next, the <u>System76 Driver</u> package can be cloned, built, and installed using these commands:

```bash
git clone https://aur.archlinux.org/system76-driver.git
cd system76-driver
makepkg -srcif
sudo systemctl enable --now system76
```

Reboot the system so that our user is added to the `adm` group, then we are done!

### Arch - Using an AUR helper

Arch users can alternatively use an AUR helper to automate some of the steps for installation and upgrading; in this example, we'll use the <u>Paru</u> application. <u>Paru</u> can be installed from the AUR using these commands:

```bash
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

**Note:** By default, <u>Paru</u> uses VIM keyboard shortcuts, so when you see a `:`, press the <kbd>q</kbd> key to continue. You may also need to confirm the import of some public keys using the <kbd>y</kbd> key.

```bash
paru -S system76-firmware-daemon-git
sudo systemctl enable --now system76-firmware-daemon
sudo gpasswd -a $USER adm
```

```bash
paru -S firmware-manager-git
```

```bash
paru -S system76-driver
# choose the first software option listed
sudo systemctl enable --now system76
```

### Fedora

Run these commands in a <u>Terminal</u> to enable the [community Fedora COPR](https://copr.fedorainfracloud.org/coprs/szydell/system76/) and install the <u>System76 Driver</u> :

```bash
sudo dnf copr enable szydell/system76
sudo dnf install system76-driver
```
