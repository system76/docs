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

System76 sets custom fan curves for laptops to maximize their performance while minimazing fan noise. Current firmware keeps the fan off until 65c and will ramp the fan speeds to max speed by 90c. 

### Monitoring Fan Speeds

Fan Speeds can be reviewed in the <u>psensor</u> which can be installed from either the <u>Pop!_Shop</u> or the <u>Ubuntu Software</u> applications. Below is an example from a Oryx Pro (the number of cores/threads will be different depending on the system as well as having a GPU fan or not).

![psensor on an oryp7](/images/fan-noise/psensor-oryp7.png)

### Fan Modes

Our Open Firmware laptops (so other than the Pangolin) have fan controls to swap between max or automatic thermal control. Use Fn+1 to toggle between the modes. (Your model will show support on the key section of their [tech-docs](https://tech-docs.system76.com)).

### Easy settings to effect fan noise

Fan speed is based on termal output of the system. There are some settings that will indirectly limit how much heat is created during use:
1. Run the laptop while on battery: This will limit power budget for the CPU and GPU and will lower thermal output.
2. Set the laptop to Battery Life mode in either Power Profiles in the system menu or using `system76-power`: This limits the turbo mode on the CPU and dim the display to prolong battery life. A side effect is to also limit how much heat is created.
