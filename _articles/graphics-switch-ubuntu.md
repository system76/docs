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

### Hardware

Currently the only laptop that supports this feature is the Oryx Pro (oryp4).

### Software

Pop!_OS by System76 includes the system76-power package that includes the ability to switch between NVIDIA and Intel graphics.

You'll only need to install this software if you did a fresh install of Ubuntu as our installations will include these packages by default. You can do this with the following commands:

```
sudo apt-add-repository ppa:system76-dev/stable
sudo apt install gnome-shell-extension-system76-power system76-power
```

Then we need to load the extension with this command:

```
gnome-shell-extension-prefs
```

Now enable the System76 Power extension with the toggle to the right.

### Switch graphics

Click the system menu in the top right corner of your screen to access graphics switching.

![Graphics](/images/graphics-switch-ubuntu/system-menu.png)

#### Selecting NVIDIA or Intel

Select either NVIDIA or Intel depending on which GPU you would like to use.

#### Rebooting

Once you select either NVIDIA or Intel you will be prompted to reboot.

#### For other Desktop Environments

If you are not on the GNOME Desktop Environment there is a command line option to use system76-power. You can see these options with this command:

```
system76-power help
```

For seeing which Graphics the system is using:

```
sudo system76-power graphics
```

For switching to NVIDIA Graphics:

```
sudo system76-power graphics nvidia
```

For switching to Intel Graphics:

```
sudo system76-power graphics intel
```

All of the packages have their source on Github at the following links:

### Sources

- [gnome-shell-extension-system76-power](https://github.com/pop-os/gnome-shell-extension-system76-power)
- [system76-power](https://github.com/pop-os/system76-power)
