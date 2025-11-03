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

### Mechanical Troubleshooting

## Clicking or Grinding Sounds

A clicking or grinding noise may indicate a dirty or physically damaged fan.

1. Inspect the fan blades for cracks, chips, or foreign objects.

2. Clean the fan using a can of compressed air to remove dust and debris.

Be sure to hold the fan blades still while blowing air to prevent them from spinning. If you suspect a damaged fan or want to locate the fan for inspection, refer to your model’s [service manual](https://tech-docs.system76.com/README.html).

## Rattling Noise

A rattling sound may indicate a loose screw or component near the fan.

1. Carefully check around the fan housing and nearby panels for loose screws.

2. Tighten any that may have come loose over time.

## Loud Whirring or Constant High-Speed Fan

If the fan is consistently running at high speed or making a loud whirring noise, it may be working harder than usual to keep the system cool.

1. Ensure air vents are not blocked. Place the computer on a hard, flat surface that allows airflow.

2. Avoid using laptops on soft surfaces such as beds, couches, or laps, as these can trap heat.

If proper ventilation doesn’t resolve the issue, the thermal paste between your CPU/GPU and heatsink may have dried out and need to be reapplied.

### Replacing the Cooling System or Thermal Paste on your System76 Computer

Depending on the age of your system, warranty status and your comfort level for at home repairs, you can either send your system in for repair or you can follow step by step instructions in your model’s [service manual](https://tech-docs.system76.com/README.html).

If you are unable to source the part for your System76 computer, System76 may be able to help. Please have your serial number ready to [open a support ticket](https://system76.com/contact/support).
