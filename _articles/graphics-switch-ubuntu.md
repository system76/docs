---
layout: article
title: Ubuntu - Switching Graphics
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

For longer battery life and a quieter laptop use Intel graphics and switch to NVIDIA graphics when you need additional performance or to use external displays on certain laptops. _External display ports are connecting the the NVIDIA GPU on System76 laptops_.

### Software

Pop!_OS by System76 includes the system76-power package that includes the ability to switch between NVIDIA and Intel graphics. 

You'll need to install this software with the following commands:

```
sudo apt-add-repository ppa:system76-dev/stable
sudo apt install gnome-shell-extension-system76-power system76-power
```

Then we need to load the extension with this command:

```
gnome-shell-extension-prefs
```

Now enable the extension with the toggle to the right.

### Switch graphics

Click the system menu in the top right corner of your screen to access graphics switching.

![Graphics](/images/graphics-switch-ubuntu/system-menu.png)

#### Selecting NVIDIA or Intel

Select either NVIDIA or Intel depending on which GPU you would like to use.

#### Rebooting

Once you select either NVIDIA or Intel you will be prompted to reboot. 
