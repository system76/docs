---
title: Battery Thresholds
description: >
  Set battery charging thresholds on your System76 laptop.
keywords:
  - Battery
  - Battery Life
  - Charging Thresholds
  - FlexiCharge

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware
tableOfContents: true
---

Charging thresholds allow your System76 laptop to avoid charging the battery until it has dropped below a lower bound (the start threshold), and to stop charging when it reaches an upper bound (the end threshold). This is useful when your laptop is plugged into an AC power adapter for extended periods of time, as it prevents unnecessary micro-charging that would reduce battery longevity.

The default charging profile for System76 laptops with Open Firmware has a start threshold of 90 and a stop threshold of 100. This increases battery longevity while keeping the battery very close to a full charge.

To determine if your laptop has Open Firmware or proprietary firmware, see [this article](/articles/open-firmware-systems). (If a system has Open Firmware, then it must also have Open EC to work with charging thresholds.) See [Charging Thresholds](#configuring-charging-thresholds-open-firmware) for Open Firmware systems or [FlexiCharger](#configuring-flexicharger-proprietary-firmware) for proprietary firmware systems.

## Models that do not support either Charging Thresholds or FlexiCharge

| Model | Codename |
|:-----:|:---------:|
| Pangolin | pang12 |
| Pangolin | pang13 |
| Pangolin | pang14 |
| Pangolin | pang15 |

## Configuring Charging Thresholds (Open Firmware)

### Using the terminal

You can see the thresholds that are currently set using this command:

```bash
system76-power charge-thresholds
```

You can list the available charging profiles using this command:

```bash
system76-power charge-thresholds --list-profiles
```

Then, you can select a profile using one of these commands:

```bash
system76-power charge-thresholds --profile full_charge
system76-power charge-thresholds --profile balanced
system76-power charge-thresholds --profile max_lifespan
```

You can also set custom thresholds without using a profile. For example, this command will set the start threshold to `40` and the end threshold to `80`:

```bash
system76-power charge-thresholds 40 80
```

### Via sysfs

Charging thresholds are exposed by the firmware through ACPI, and the `system76_acpi` kernel module makes them available through standard sysfs entries:

- `/sys/class/power_supply/BAT0/charge_control_start_threshold`
- `/sys/class/power_supply/BAT0/charge_control_end_threshold`

The thresholds can be controlled by reading from and writing to these sysfs files.

### At boot (for older firmware)

Firmware versions beginning with the date `2025-07-24` or earlier did not persist charging thresholds across EC resets (which occur when the system is shut down and the power is unplugged). To work around this lack of persistence, you can use systemd to set thresholds at boot.

To do so, create a file called
`/etc/systemd/system/charge-thresholds.service` with the following contents:

```
[Unit]
Description=Set the charge threshold at startup.
After=default.target

[Service]
Type=simple
ExecStart=system76-power charge-thresholds 40 80

[Install]
WantedBy=default.target
```

Then, enable the service using this command:

```
sudo systemctl enable charge-thresholds.service
```

Finally, start the service using `sudo systemctl start charge-thresholds.service` or reboot to apply the thresholds.

## Configuring FlexiCharger (proprietary firmware)

FlexiCharger is an implementation of charging thresholds in proprietary firmware, made available as a UEFI setting.

To adjust the thresholds, reboot the computer and enter the UEFI setup utility by holding down <kbd>F2</kbd> and selecting `Setup Utility`. Navigate to Advanced, then Advanced Chipset Control, and set FlexiCharger to Enabled. Two new options will appear where you can set the start and stop thresholds.

![Enabling FlexiCharger](/images/laptop-charging-thresholds/flexicharger.jpg)

Once configured, save and exit the setup utility. The thresholds can be disabled at any time by setting FlexiCharger back to Disabled.
