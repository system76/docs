---
layout: article
title: Laptop Battery Thresholds
description: >
  Switch between battery thresholds on your system76 laptop
keywords:
  - Battery
  - Battery Life
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

## What are Battery Thresholds?



### FlexiCharger

FlexiCharger is the implementation of charging thresholds in proprietary
firmware, made available as a BIOS setting.

To adjust the top charge, reboot the computer and enter into BIOS by holding
down <kbd>F2</kbd>, and navigate to Advanced, then Advanced Chipset Control,
and set Flexicharger to Enabled. Two new sub-menus will appear, and can be set
to the user's desired percentages. Once configured, save and exit the BIOS.

FlexiCharger can be disabled at any time in the BIOS, which reverts the
charging profile to factory defaults.

### Charging Thresholds

Configuring charging thresholds will allow your System76 laptop to disable the
charger and run off the AC connection when the battery reaches a specified
capacity. This is particularly useful when your laptop is plugged into AC power
adapter for extended periods of time as it prevents unnecessary micro-charging
which reduces battery longevity.

The longevity of lithium batteries is dependent on the number of charge cycles
they go through. The larger the percentage of spread between start and end
charge percentages, the longer the physical battery will last. For optimal
longevity, charge cycles of 40%~80% are a good idea.

Before heading out into the wild blue yonder, disable this feature to charge
your laptop battery to 100%.

#### Open Firmware

On laptops with System76 Open Firmware, charging thresholds are exposed through
ACPI. The `system76_acpi` kernel module then makes these available through
standard sysfs entries.

- `/sys/class/power_supply/BAT0/charge_control_start_threshold`
- `/sys/class/power_supply/BAT0/charge_control_end_threshold`

The default values of 0 for the start threshold and 100 for the end threshold
disable the feature.

### Using the command line

You can see the thresholds that are currently set using this command:

```
system76-power charge-thresholds
```

To set thresholds use this command:

```
system76-power charge-thresholds <start> <end>
```

Here are some examples:

```
system76-power charge-thresholds 70 90
```

```
system76-power charge-thresholds 85 60
```

