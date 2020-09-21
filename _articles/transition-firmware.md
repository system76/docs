---
layout: article
title: Switching Between Proprietary Firmware and System76 Open Firmware
description: >
  How to transition from proprietary firmware to System76 Open Firmware on supported models.
keywords:
  - Firmware
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

## Switching Between Proprietary Firmware and System76 Open Firmware

Some models shipped with proprietary firmware, but later received support for [System76 Open Firmware](https://github.com/system76/firmware-open) and [System76 Open EC](https://github.com/system76/ec). Below is a list of these models:

- Adder WS (addw2)
    - Was shipped with proprietary firmware. Switching will install System76 Open Firmware and System76 Open EC.
- Darter Pro (darp6)
    - Was shipped with System76 Open Firmware, but proprietary EC. Switching will install System76 Open EC.
- Gazelle (gaze15)
    - Was shipped with proprietary firmware. Switching will install System76 Open Firmware and System76 Open EC.

### Differences between Open and Proprietary Firmware

System76 Open Firmware is primarily open-source, meaning the source code is available for users and developers to read and modify as they please. Proprietary firmware is developed by the upstream motherboard manufacturers, and its source code is not available for viewing or modification. You can read about the benefits of using open-source firmware [here](https://blog.system76.com/post/623810010985742337/open-up-benefits-of-open-source-firmware).

Because System76 Open Firmware is intended to be lightweight and simple to use, there are less options available in the UEFI setup menu than for proprietary firmware. Notably:

* Many features are enabled by default in Open Firmware, but are not present in the UEFI setup menu. This includes:
  * Hardware virtualization (Intel VT-D/AMD-V) - can be disabled by the OS via a kernel boot option.
  * Hyperthreading - can be disabled by the OS via a kernel boot option.
  * Thunderbolt security - devices must be allowed by the user within the OS.
  * Battery thresholds - can be set by the user within the OS.
* Some features are present in proprietary firmware but are not available in Open Firmware, including:
  * Intel ME - always disabled.
  * Secure Boot - always disabled.
  * Self-encryptiong storage drives - not supported (note that the full-disk encryption used in Pop!\_OS does not require this firmware-level feature.)

Below is a comparison between the UEFI setup menu on proprietary firmware (left) and System76 Open Firmware (right):

![Proprietary vs. Open Firmware](/images/system-firmware/proprietary-vs-open.webp)

### Checking the Current Firmware Version

You can check your current firmware version using this command:

```
cat /sys/class/dmi/id/bios_version
```

If the output is a short, decimal-separated number such as `1.07.05`, then you are running proprietary firmware. If the output is a longer, date-based number such as `2020-09-03_9c310f0`, then you are running System76 Open Firmware.

### Installing the command-line updater

Before switching between proprietary firmware and System76 Open Firmware, the command line updater must be installed by running the following commands in a terminal:

```
sudo apt update
sudo apt install system76-firmware
```

### Transitioning to System76 Open Firmware

If you are running proprietary firmware and would like to transition to System76 Open Firmware, follow the [steps above](#installing-the-command-line-updater) to install the updater from the command line, then run the following command to schedule the update:

```
sudo system76-firmware-cli schedule --open
```

You may then follow the [steps below](#performing-the-update) to perform the update.

### Reverting to Proprietary Firmware

If you are running System76 Open Firmware and need to revert to proprietary firmware (for example, if you require a specific feature not yet present in System76 Open Firmware), follow the [steps above](#installing-the-command-line-updater) to install the updater from the command line, then run the following command to schedule the update:

```
sudo system76-firmware-cli schedule --proprietary
```

You may then follow the [steps below](#performing-the-update) to perform the update.

### Performing the update

Reboot the system using `sudo systemctl reboot` to proceed with the update, or use `sudo system76-firmware-cli unschedule` to cancel the update. For more information about the firmware upgrade process, please view the [Update System Firmware](/articles/system-firmware) article.
