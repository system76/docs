---
title: What is the Intel Management Engine?
description: >
    This article describes the Intel Management Engine, scenarios in which the IME is disabled, and how to manually disable on systems running coreboot.
keywords:
  - Firmware
  - Intel ME
  - Management Engine
  - Disable Intel ME
  - IME

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

System76 laptops and desktops with Open Firmware will typically have the Intel Management Engine (IME) disabled, unless doing so breaks functionality. Machines running Open Firmware with coreboot can disable the IME manually.

## What is the Intel Management Engine?

The [Intel Management Engine](https://en.wikipedia.org/wiki/Intel_Management_Engine) is a proprietary, mostly undocumented, firmware system that provides many extraneous features that are generally not usable or useful to our users, with multiple known vulnerabilities that compromise the entire system.

## What is System76 Open Firmware?

System76 Open Firmware is an open source distribution of firmware utilizing coreboot, EDK2, and System76 firmware applications. System76 Open Firmware can disable the IME, [among other features](/articles/transition-firmware).

## Is the IME Disabled On My System76 PC?

For Open Firmware systems, the IME is typically disabled by default unless doing so would break functionality (such as suspend/resume). System76 maintains a list of machines that ship with Open Firmware [in this article](/articles/open-firmware-systems/).

For proprietary firmware systems, if the option to disable (or enable) the IME is available, it is typically located under `Advanced` ➞ `Advanced Chipset Control`. This option is usually disabled by default, although there have been some models that required re-disabling after an over-the-air firmware update; see [this section](/articles/system-firmware#disabling-the-me) of the firmware update instructions article.

## Can I Disable the IME Manually?

PCs running coreboot can disable the IME using coreboot's nvramtool. [See this page](https://github.com/system76/firmware-open/blob/master/docs/intel-me.md) for information about manually disabling (or enabling) the ME.
