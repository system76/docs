---
layout: article
title: Switching Graphics in Ubuntu
description: >
   How to switch between Intel, NVIDIA, and Hybrid graphics
keywords:
  - System76
  - Ubuntu
  - 18.04
  - NVIDIA
  - Intel
image: http://support.system76.com/images/ubuntu.png
hidden: false
section: pop-ubuntu

---

The following laptops have switchable graphics:

- Oryx Pro (oryp4, oryp4-b, oryp5)
- Gazelle (gaze14)
- Adder Workstation (addw1)

### Graphics modes

#### Intel

Intel graphics mode uses the integrated Intel GPU only and turns off the NVIDIA
GPU. This mode uses less power, leading to a longer battery life and less fan
noise.

#### NVIDIA

NVIDIA graphics mode uses the discrete NVIDIA GPU only. This provides a better
graphical experience, but reduces battery life. Most external display ports on
System76 laptops are connected to the NVIDIA GPU only. (Some models, such as the
Gazelle, may also have external ports connected to the integrated GPU.)

#### Hybrid

Hybrid graphics mode uses both the integrated Intel GPU and the discrete NVIDIA GPU.
Applications will use the integrated GPU unless explicitly requested to use the
discrete GPU.

### Switch graphics

Pop!_OS by System76 includes the system76-power package, which includes the
ability to switch between Intel, NVIDIA, and hybrid graphics modes.

You'll only need to install this software manually if you did a fresh install of Ubuntu,
as our installations will include these packages by default. You can do this
with the following commands:

```
sudo apt-add-repository ppa:system76-dev/stable
sudo apt install gnome-shell-extension-system76-power system76-power
```

Then we need to load the extension with this command:

```
gnome-shell-extension-prefs
```

Now enable the System76 Power extension with the toggle to the right.

#### From GNOME Desktop

Click the system menu in the top right corner of your screen to access graphics
switching.

![Graphics](/images/graphics-switch-ubuntu/system-menu.png)

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

For switching to NVIDIA Graphics:

```
sudo system76-power graphics nvidia
```

For switching to Intel Graphics:

```
sudo system76-power graphics intel
```

For switching to hybrid graphics:

```
sudo system76-power graphics hybrid
```

### Sources

The source code for the system76-power utility and the GNOME Shell extension can be found on GitHub:

 - [system76-power](https://github.com/pop-os/system76-power)
 - [gnome-shell-extension-system76-power](https://github.com/pop-os/gnome-shell-extension-system76-power)
