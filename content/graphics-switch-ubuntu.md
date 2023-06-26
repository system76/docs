---
title: Graphics Switching (Ubuntu)
description: >
   How to use systems with switchable graphics
keywords:
  - System76
  - Ubuntu
  - 18.04
  - 19.10
  - 20.04
  - 20.10
  - 21.04
  - 21.10
  - 22.04
  - NVIDIA
  - Hybrid
  - Integrated
  - Compute

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

Many modern laptops with NVIDIA graphics cards have switchable graphics, which allows users to switch their primary GPU between the CPU's integrated graphics processor and the dedicated NVIDIA graphics card. The following System76 laptops have these switchable graphics capabilities:

- Adder WS (addw1, addw2)
- Bonobo WS (bonw15)
- Galago Pro (galp5 - NVIDIA models only)
- Gazelle (gaze14, gaze15, gaze16, gaze17, gaze18)
- Kudu (kudu6)
- Oryx Pro (oryp4, oryp4-b, oryp5, oryp6, oryp7, oryp8, oryp9, oryp10)
- Serval WS (serw13)

## Graphics modes

### Integrated

Integrated graphics mode uses the integrated GPU only and turns off the NVIDIA
GPU. This mode uses less power, leading to a longer battery life and less fan
noise.

### NVIDIA

NVIDIA graphics mode uses the discrete NVIDIA GPU only. This provides a better
graphical experience, but reduces battery life. Most external display ports on
System76 laptops are connected to the NVIDIA GPU only. (Some models, such as the
Gazelle, may also have external ports connected to the integrated GPU.)

### Hybrid

Hybrid graphics mode uses both the integrated GPU and the discrete NVIDIA GPU.
Applications will use the integrated GPU unless explicitly requested to use the
discrete GPU.

Vulkan applications must be launched with the following command to be rendered on the dGPU (NVIDIA):

```bash
__NV_PRIME_RENDER_OFFLOAD=1 <application>
```

GLX applications must be launched with the following command to be rendered on the dGPU (NVIDIA):

```bash
__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia <application>
```

Hybrid graphics mode is available on 19.10 and later.

### Compute

Compute graphics mode uses the integrated GPU for all rendering. The NVIDIA
GPU is left available, allowing it to be used as a compute node.

## Switch graphics

Pop!_OS by System76 includes the system76-power package, which includes the
ability to switch between integrated, NVIDIA, and hybrid graphics modes.

You'll only need to install this software manually if you did a fresh install of Ubuntu,
as our installations will include these packages by default. You can do this
with the following commands:

```bash
sudo apt-add-repository ppa:system76-dev/stable
sudo apt install gnome-shell-extension-system76-power system76-power
```

Then we need to load the extension with this command:

```bash
gnome-shell-extension-prefs
```

Now enable the System76 Power extension with the toggle to the right.

### From GNOME Desktop

Click the system menu in the top right corner of your screen to access graphics
switching.

![Graphics](/images/graphics-switch-ubuntu/system-menu.png)

Click on NVIDIA, Integrated, Hybrid, or Compute depending on your use case.

Once you select a mode, you will be prompted to reboot.

### From the command line

If you are not using the GNOME Desktop Environment, you can use the system76-power
command line tool. You can see the options with this command:

```bash
system76-power help
```

For seeing which graphics mode the system is using:

```bash
sudo system76-power graphics
```

For switching to NVIDIA Graphics:

```bash
sudo system76-power graphics nvidia
```

For switching to integrated Graphics:

```bash
sudo system76-power graphics integrated
```

For switching to hybrid graphics:

```bash
sudo system76-power graphics hybrid
```

For switching to compute mode:

```bash
sudo system76-power graphics compute
```

## Sources

The source code for the system76-power utility and the GNOME Shell extension can be found on GitHub:

- [system76-power](https://github.com/pop-os/system76-power)
- [gnome-shell-extension-system76-power](https://github.com/pop-os/gnome-shell-extension-system76-power)
