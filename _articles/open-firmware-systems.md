---
layout: article
title: System76 Open Firmware Models
description: >
  A list of systems that run our Open Firmware and Open EC.
keywords:
  - Laptop
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

### System76 Open Firmware 

When we say Open Firmware, we're referring to open-source firmware that uses the following technologies:

- coreboot
- EDK2
- System76 Firmware Apps

The source code for our Open Firmware can be found [here](https://github.com/system76/firmware-open).

### System76 Open EC

When we say Open EC, we're talking about the <b>E</b>mbedded <b>C</b>ontroller firmware, which handles components on the system such as:

- Keyboard
- Touchpad 
- Power Button

The source code for our Open EC can be found [here](https://github.com/system76/ec).

### Hardware utilizing Open Firmware/Open EC:

| System | Open Firmware | Open EC |
|:------:|:-------------:|:-------:| 
| addw2  | Yes           | Yes     |
| bonw14 | Yes           | Yes     |
| darp7  | Yes           | Yes     |
| darp6  | Yes           | Yes     |
| galp5  | Yes           | Yes     |
| galp4  | Yes           | No      |
| lemp10 | Yes           | Yes     |
| lemp9  | Yes           | Yes     |
| oryp7  | Yes           | Yes     |
| oryp6  | Yes           | Yes     |

#### Additional Notes

Both the `addw2` and `darp6` shipped with closed firmware/EC, but have since been updated to Open Firmware/EC. [This article](/articles/transition-firmware) can be used to move your system from closed to Open Firmware/EC.
