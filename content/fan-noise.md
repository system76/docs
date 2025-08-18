---
title: System Fan Noise and Expectactions
description: >
  Ways to manage fan noise and design constraints.
keywords:
  - Fans
  - Loud

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Noise Levels

System76 sets custom fan curves for laptops to maximize their performance while minimizing fan noise. Current firmware keeps the fan off until 65°C and will ramp the fan speeds to max speed by 90°C.

### Monitoring Fan Speeds

Fan Speeds can be monitored with <u>psensor</u>, which can be installed from either the <u>Pop!_Shop</u> or the <u>Ubuntu Software</u> applications. Below is an example from a Oryx Pro (the number of cores/threads/GPU present will be different depending on the system).

![psensor on an oryp7](/images/fan-noise/psensor-oryp7.png)

### Fan Modes

Our [Open Firmware laptops](/articles/open-firmware-systems) have fan controls to swap between max or automatic thermal control. Use Fn+1 to toggle between the modes. (Your model will show support on the key section of their [tech-docs](https://tech-docs.system76.com)).

### Easy settings to affect fan noise

Fan speed is based on thermal output of the system. There are some settings that will indirectly limit how much heat is created during use:

1. Run the laptop while on battery: This will limit power consumption for the CPU and GPU and will lower thermal output.
2. Set the laptop to Battery Life mode in either Power Profiles in the system menu or using `system76-power`. This limits the CPU's boost frequency, a side effect is to also limit how much heat is created.
