---
title: Firmware Switching (Proprietary Firmware or System76 Open Firmware)
description: >
  How to transition from proprietary firmware to System76 Open Firmware on supported models.
keywords:
  - Firmware

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: about-your-computer
tableOfContents: true
---

## Firmware Switching (Proprietary Firmware or System76 Open Firmware)

Some models shipped with proprietary firmware, but later received support for [System76 Open Firmware](https://github.com/system76/firmware-open) and [System76 Open EC](https://github.com/system76/ec). Below is a list of these models:

- Adder WS (addw2)
- Darter Pro (darp6)
  - Model shipped wih System76 Open Firmware and proprietary EC. Firmware transition installs System76 Open EC.
- Gazelle (gaze15)
- Oryx Pro (oryp5)

This list may expand in the future as more models are ported.

### Differences between System76 Open Firmware and Proprietary Firmware

System76 Open Firmware is primarily open-source, meaning the source code is available for users and developers to read and modify as they please. Proprietary firmware is developed by the upstream motherboard manufacturers, and its source code is not available for viewing or modification. You can read about the benefits of using open-source firmware [here](https://blog.system76.com/post/623810010985742337/open-up-benefits-of-open-source-firmware).

System76 Open Firmware is designed to be lightweight and performant with a simple and straightforward user interface.

- Many features are configured by default in System76 Open Firmware
  - Enabled: Hardware virtualization (Intel VT-x and VT-d/AMD-V). Can be disabled by the OS via a kernel boot option.
  - Enabled: Hyperthreading. Can be disabled by the OS via a kernel boot option.
  - Enabled: Thunderbolt security. Devices must be allowed by the user within the OS.
  - Disabled: Intel ME (Management Engine)
  - Disabled: Secure Boot
- Some features are present in proprietary firmware but are not available in Open Firmware, including:
  - Flexicharger (battery threshold). This feature is currently in development for System76 Open Firmware.
  - Self-encrypting storage drives. Not supported (note that the full-disk encryption used in Pop!\_OS does not require this firmware-level feature.)
- Some features behave differently in System76 Open Firmware
  - Galago Pro units running System76 EC require pressing the <kbd>Fn</kbd> key to use the number pad, regardless of <kbd>Num Lk</kbd> state

Below is a comparison between the UEFI setup menu on proprietary firmware (left) and System76 Open Firmware (right):

![Proprietary vs. Open Firmware](/images/system-firmware/proprietary-vs-open.webp)

### Checking the Current Firmware Version

You can check your current firmware version using this command:

```bash
cat /sys/class/dmi/id/bios_version
```

If the output is a short, decimal-separated number such as `1.07.05`, then you are running proprietary firmware. If the output is a longer, date-based number such as `2020-09-03_9c310f0`, then you are running System76 Open Firmware.

### Installing the command-line updater

Before switching between proprietary firmware and System76 Open Firmware, the command line updater must be installed by running the following commands in a terminal:

```bash
sudo apt update
sudo apt install system76-firmware
```

### Transitioning to System76 Open Firmware

If you are running proprietary firmware and would like to transition to System76 Open Firmware, follow the [steps above](#installing-the-command-line-updater) to install the updater from the command line, then run the following command to schedule the update:

```bash
sudo system76-firmware-cli schedule --open
```

You may then follow the [steps below](#performing-the-update) to perform the update.

### Reverting to Proprietary Firmware

If you are running System76 Open Firmware and need to revert to proprietary firmware (for example, if you require a specific feature not yet present in System76 Open Firmware), follow the [steps above](#installing-the-command-line-updater) to install the updater from the command line, then run the following command to schedule the update:

```bash
sudo system76-firmware-cli schedule --proprietary
```

You may then follow the [steps below](#performing-the-update) to perform the update.

### Performing the update

Reboot the system using `sudo systemctl reboot` to proceed with the update, or use `sudo system76-firmware-cli unschedule` to cancel the update. For more information about the firmware upgrade process, please view the [Update System Firmware](/articles/system-firmware) article.
