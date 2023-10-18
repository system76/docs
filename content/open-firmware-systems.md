---
title: System76 Open Firmware Models
description: >
  A list of systems that run our Open Firmware and Open EC.
keywords:
  - Laptop

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: general-hardware-info
tableOfContents: true
---

## System76 Open Firmware

When we say Open Firmware, we're referring to open-source firmware that uses the following technologies:

- coreboot
- EDK2
- System76 Firmware Apps

The source code for our Open Firmware can be found [here](https://github.com/system76/firmware-open).

## System76 Open EC

When we say Open EC, we're talking about the **E**mbedded **C**ontroller firmware, which handles components on the system such as:

- Keyboard
- Touchpad
- Power Button

The source code for our Open EC can be found [here](https://github.com/system76/ec).

## Hardware utilizing Open Firmware/Open EC

| System | Open Firmware | Open EC |
|:------:|:-------------:|:-------:|
| Adder WS (addw1) | No | No |
| Adder WS (addw2) | Yes\* | Yes\* |
| Adder WS (addw3 and newer) | Yes | Yes |
| Bonobo WS (bonw13 and older) | No | No |
| Bonobo WS (bonw14 and newer) | Yes | Yes |
| Darter Pro (darp5 and older) | No  | No |
| Darter Pro (darp6) | Yes  | Yes\* |
| Darter Pro (darp7 and newer) | Yes | Yes |
| Galago Pro (galp3 and older) | No | No |
| Galago Pro (galp4) | Yes | No |
| Galago Pro (galp5 and newer) | Yes | Yes |
| Gazelle (gaze14 and older) | No | No |
| Gazelle (gaze15) | Yes\* | Yes\* |
| Gazelle (gaze16 and newer) | Yes | Yes |
| Lemur Pro (lemp8 and older) | No | No |
| Lemur Pro (lemp9 and newer) | Yes | Yes |
| Oryx Pro (oryp5 and older) | No | No |
| Oryx Pro (oryp6 and newer) | Yes | Yes |

\* These models shipped with closed firmware/EC, but have since been updated to Open Firmware/EC. [This article](/articles/transition-firmware) can be used to move your system from closed to Open Firmware/EC.
