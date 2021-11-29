---
title: Access BIOS or Boot Menu
description: >
  How to access BIOS settings or boot from other media.
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

To enter BIOS for most System76 laptops, hold the <kbd>F2</kbd> key immediately after turning your computer on.  For the boot menu, hold down the <kbd>F7</kbd> key.  For older laptops, hold the <kbd>F1</kbd> key.

| Firmware               | BIOS key | Boot Menu key                    |
|:----------------------:|:--------:|:--------------------------------:|
| Laptop - Open Firmware | ESC      | ESC(select one time boot option) |
| Laptop - Proprietary   | F2       | F7                               |
| Older Laptops          | Depends on the system | F1                  |
| Thelio                 | Del      |  F8 or F12                       |
| Meerkat                | F2       | F10                              |

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
