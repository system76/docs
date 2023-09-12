---
title: System Fan Noise and Expectactions
description: >
  Ways to manage fan noise what what to expect
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

We set custom fan curves for some laptops to maximize their performance so that you get as much power as possible but still keep the system in safe temperature ranges. 

### Monitoring Fan Speeds

Fan Speeds can be reviewed in the <u>psensor</u> which can be installed from either the <u>Pop!_Shop</u> or the <u>Ubuntu Software</u> applications. Here is what it should look like (the number of cores/threads will be different depending on the system as well as having a GPU fan or not). 

![psensor on an oryp7](/images/fan-noise/psensor-oryp7.png)

### Fan Modes

Most laptops other then the Pangolin (pang12 and pang13) have fan modes which are max or automatic. Changing between these modes can be done with the Fn+1 key combo (if you model supports this it will be in their [tech-docs](https://tech-docs.system76.com)).

### Ways to lower fan noise

A few ways to lower the RPM (revolutions per minute) include:

1. Run the laptop while on battery, this will lower the clock speed for the CPU and GPU which will lower the demand of the fans to cool the system.
2. Set the laptop to Battery Life mode in system76-power, this will also lower the clock speeds. 

