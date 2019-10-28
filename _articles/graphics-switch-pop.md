---
layout: article
title: Switching Graphics in Pop!_OS
description: >
   How to switch between Intel, NVIDIA, and Hybrid graphics
keywords:
  - System76
  - Pop
  - 18.04
  - NVIDIA
  - Intel
image: http://support.system76.com/images/pop.png
hidden: false
section: pop-ubuntu

---

The following laptops have switchable graphics:

- Oryx Pro (oryp4, oryp4-b, oryp5)
- Gazelle (gaze14)
- Adder Workstation (addw1)

### Graphics modes

#### Intel

Intel graphics uses in the integrated Intel GPU only and turns off the NVIDIA
GPU. This mode uses less power, leading to a longer battery life and less fan
noise.

#### NVIDIA

NVIDIA graphics uses the discrete NVIDIA GPU only. This provides a better
graphical experience, but reduces battery life. External display ports on
System76 laptops are connected to the NVIDIA GPU. (Some models, such as the
Gazelle, may also have external ports connected to the integrated GPU.)

#### Hybrid

Hybrid graphics uses both the integrated Intel GPU and the discrete NVIDIA GPU.
Applications will use the integrated GPU unless explicitly requested to use the
discrete GPU.

### Switch graphics

Pop!_OS by System76 includes the system76-power package that includes the
ability to switch between Intel, NVIDIA, and hybrid graphics modes.

#### From GNOME Desktop

Click the system menu in the top right corner of your screen to access graphics
switching.

![Graphics](/images/graphics-switch-pop/system-menu.png)

Click on NVIDIA, Intel, or Hybrid, depending on your use case.

Once you select a mode you will be prompted to reboot.

#### From the command line

If you are not on the GNOME Desktop Environment there is a command line option
to use system76-power. You can see these options with this command:

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

For switching to Hybrid Graphics:

```
sudo system76-power graphics hybrid
```

All of the packages have their source on Github at the following links:

### Sources

 - [gnome-shell-extension-system76-power](https://github.com/pop-os/gnome-shell-extension-system76-power)
 - [system76-power](https://github.com/pop-os/system76-power)
