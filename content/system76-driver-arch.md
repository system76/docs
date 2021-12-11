---
title: System76 Driver (Install - Arch)
description: >
  Learn how to add the System76 Driver to your System76 computer after installing Arch
keywords:
  - system76
  - driver
  - NVIDIA
  - support
  - Arch

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

> Parent article: [System76 Driver (Install)](/articles/system76-driver)

First let's install some packages needed for the build process of the <u>System76 Firmware Daemon</u> and the <u>System76 Driver</u>:

```bash
sudo pacman -S --needed base-devel git linux-headers
```

### Install Paru

```bash
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

**NOTE** that by default <u>Paru</u> uses vim standards so when you see a ":" press the <kbd>q</kbd> key to continue. You may also need to import some public keys by using the <kbd>y</kbd> key.

Now the <u>System76 Driver</u> can be cloned, built and installed using these commands:

```bash
git clone https://aur.archlinux.org/system76-driver.git
cd system76-driver
makepkg -srcif
sudo systemctl enable --now system76
```

**NOTE** choose the first software option listed after running the <u>Paru</u> command.

```bash
paru -s system76-driver
sudo systemctl enable --now system76
```
