---
layout: article
title: Switching Graphics in Pop!_OS
description: >
   How to switch between integrated, NVIDIA, and Hybrid graphics
keywords:
  - System76
  - Pop
  - 18.04
  - 19.10
  - 20.04
  - NVIDIA
  - Hybrid
  - Integrated
image: http://support.system76.com/images/pop.png
hidden: false
section: pop

---

The following laptops have switchable graphics:

- Oryx Pro (oryp4, oryp4-b, oryp5)
- Gazelle (gaze14, gaze15)
- Adder Workstation (addw1, addw2)

### Graphics modes

#### Integrated

Integrated graphics mode uses the integrated GPU only and turns off the NVIDIA
GPU. This mode uses less power, leading to a longer battery life and less fan
noise.

#### NVIDIA

NVIDIA graphics mode uses the discrete NVIDIA GPU only. This provides a better
graphical experience, but reduces battery life. Most external display ports on
System76 laptops are connected to the NVIDIA GPU only. (Some models, such as the
Gazelle, may also have external ports connected to the integrated GPU.)

#### Hybrid

Hybrid graphics mode uses both the integrated GPU and the discrete NVIDIA GPU.
Applications will use the integrated GPU unless explicitly requested to use the
discrete GPU.

Vulkan applications must be launched with this command to be rendered on the dGPU (NVIDIA):

```
__NV_PRIME_RENDER_OFFLOAD=1 <application>
```

GLX applications must be launched with this command to be rendered on the dGPU (NVIDIA):

```
__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia <application>
```

### Switch graphics

Pop!_OS by System76 includes the system76-power package, which includes the
ability to switch between integrated, NVIDIA, and hybrid graphics modes.

#### From GNOME Desktop

Click the system menu in the top right corner of your screen to access graphics
switching.

![Graphics](/images/graphics-switch-pop/system-menu.png)

Click on NVIDIA, Intel, or Hybrid, depending on your use case.

Once you select a mode, you will be prompted to reboot.

#### From the command line

If you are not using the GNOME Desktop Environment, you can use the system76-power 
command line tool. You can see the options with this command:

```
system76-power help
```

For seeing which graphics mode the system is using:

```
sudo system76-power graphics
```

For switching to NVIDIA graphics:

```
sudo system76-power graphics nvidia
```

For switching to integrated graphics:

```
sudo system76-power graphics integrated
```

For switching to hybrid graphics:

```
sudo system76-power graphics hybrid
```

### Sources

The source code for the system76-power utility and the GNOME Shell extension can be found on GitHub:

 - [system76-power](https://github.com/pop-os/system76-power)
 - [gnome-shell-extension-system76-power](https://github.com/pop-os/gnome-shell-extension-system76-power)
