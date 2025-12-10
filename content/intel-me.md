---
title: What is the Intel Management Engine?
description: >
    How to manually disable on systems running coreboot.
keywords:
  - Firmware
  - Intel ME
  - Management Engine
  - Disable Intel ME
  - IME

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-computer
tableOfContents: true
---

System76 laptops will have the Intel Management Engine (IME) disabled when it does not break functionality. System76 Open Firmware systems provide some control to [enable and disable the IME](https://github.com/system76/firmware-open/blob/master/docs/intel-me.md).

## What is the Intel Management Engine?

The [Intel Management Engine](https://en.wikipedia.org/wiki/Intel_Management_Engine) is a proprietary, mostly undocumented, firmware system that provides many extraneous features that are generally not usable or useful to our users, with multiple known vulnerabilities that compromise the entire system.

## What is System76 Open Firmware?

System76 Open Firmware is an open source distribution of firmware utilizing coreboot, EDK2, and System76 firmware applications. System76 Open Firmware can disable the IME, [among other features](/articles/transition-firmware).

## Is the IME Disabled On My System76 PC?

You can confirm if the IME is enabled on your PC by booting into the firmware menu and navigating to `Firmware Configuration Information`. See [this article](/articles/boot-menu/) for instructions to access the firmware menu for your System76 machine.

![Firmware Config Menu](/images/intel-me/firmwareconfiginfo.png)

For Open Firmware systems, the IME is typically disabled by default unless doing so would break functionality (such as suspend/resume). System76 maintains a list of machines that ship with Open Firmware in [this article](/articles/open-firmware-systems/).

For proprietary firmware systems, if the option to disable (or enable) the IME is available, it is typically located under `Advanced` ➞ `Advanced Chipset Control`. This option is usually disabled by default, although there have been some models that required re-disabling after an over-the-air firmware update; see [this section](/articles/system-firmware#disabling-the-me) of the firmware update article for instructions.

## Can I Disable the IME Manually?

PCs running coreboot can disable the IME using coreboot's nvramtool. See [this page](https://github.com/system76/firmware-open/blob/master/docs/intel-me.md) for information about manually disabling (or enabling) the ME. Using the Coreboot Configurator you can turn off the Intel ME using the steps in [this article](https://github.com/system76/coreboot/tree/system76/util/coreboot-configurator). This tool will only work if your firmware version is higher than 2022-01-06. You can check the version with this command:

```bash
sudo dmidecode -t 0
```
