---
title: Access BIOS/UEFI or Boot Menu
description: >
  How to access BIOS/UEFI settings or boot from other media.
keywords:
  - boot
  - menu
  - support
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

The BIOS/UEFI or boot menu can be accessed by holding specific keys down during boot. Refer to the table below for the keys on each model:

| Model                                                       | BIOS/UEFI key | Boot Menu key                     |
|:-----------------------------------------------------------:|:--------:|:---------------------------------:|
| Laptops:<br/>All Open Firmware models<br/>Pangolin (pang12 and above) | ESC      | ESC:<br/>Select `One Time Boot` (Open Firmware)<br/>or `Save & Exit` → `Boot Override`. |
| Laptops:<br/>Most proprietary firmware models               | F2       | F7                                |
| Older laptops                                               | Depends on the system | F1                   |
| Thelio desktops                                             | Del/F2      | F8/F11/F12                         |
| Meerkat (mini) desktops                                     | F2       | F10                               |

*In the event that none of the keys listed access the BIOS/UEFI, try holding each of the FX keys during a new boot cycle starting with F1 and moving up in numbers until the BIOS/UEFI appears. Be sure to hold a new key with each new boot cycle until you successfully access the BIOS/UEFI screen*

## Open Firmware Screenshots

The following screenshots show the menus in System76 Open Firmware with Coreboot:

### Main Menu

Displays the computer model, firmware version, and available options.

![Main menu](/images/boot-menu/homepage.jpg)

### One Time Boot

Allows booting to a non-default boot device.

![One Time Boot](/images/boot-menu/one-time-boot.jpg)

### Change Boot Order

Allows changing the order for selecting the default boot device.

![Change Boot Order](/images/boot-menu/change-boot-order.jpg)

### Firmware Configuration Information

Displays information about the firmware's build-time configuration.

![Configuration info](/images/boot-menu/configuration-info.jpg)
