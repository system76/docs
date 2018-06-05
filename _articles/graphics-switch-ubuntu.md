---
layout: article
title: Ubuntu - Switching graphics
description: >
   How to switch between Intel and NVIDIA graphics
keywords:
  - System76
  - Ubuntu
  - 18.04
  - NVIDIA
  - Intel
image: http://support.system76.com/images/ubuntu.png
hidden: false
section: articles

---

### Software

Pop!_OS by System76 includes our system76-power package that includes the ability to switch between NVIDIA and Intel graphics. But for if you reinstalled Ubuntu you will need to install this package:

```
sudo add-apt-repository ppa:system76-dev/stable
sudo apt install system76-power
```

Then reboot your computer

### Switch graphics

Click the top right corner of your screen where your Power, WiFi/Wired, and Sound settings are then click the battery icon.

![Graphics](/images/graphics-switch-ubuntu/screenshot2.png)

#### Selecting NVIDIA or Intel

Then select either NVIDIA or Intel depending on which GPU you would like to use.

![Graphics](/images/graphics-switch-ubuntu/screenshot3.png)
