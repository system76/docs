---
title: Graphics Switching (Pop!_OS)
description: >
   How to use systems with switchable graphics
keywords:
  - System76
  - Pop
  - 18.04
  - 19.10
  - 20.04
  - NVIDIA
  - Hybrid
  - Integrated

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

Many laptops these days have _switchable graphics_, which allow users to switch between several GPU modes spanning power use and performance.
The following System76 laptops have these switchable graphics capabilities:

- Adder WS (addw1, addw2)
- Galago Pro (galp5 - NVIDIA models only)
- Gazelle (gaze14, gaze15, gaze16)
- Oryx Pro (oryp4, oryp4-b, oryp5, oryp6, oryp7, oryp8)

Pop!\_OS includes utilities for switching between these modes, which you can learn more about below.

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

Vulkan applications must be launched with this command to be rendered on the dGPU (NVIDIA):

```
__NV_PRIME_RENDER_OFFLOAD=1 <application>
```

GLX applications must be launched with this command to be rendered on the dGPU (NVIDIA):

```
__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia <application>
```

Hybrid graphics mode is available on 19.10 and later. Applications can be launched using Hybrid graphics on a per-application basis and through inheritance of launch state from a game launcher.

#### Hybrid Graphics Integration with Steam: GUI Method

When Steam is favorited, can be launched using Discrete Graphics by right clicking on the Pop Dock and selecting the following option: 
```
Launch Using Dedicated Graphics Card
```
As a result of this, Steam will utilize the discrete graphics card in the laptop for all games launch via the Steam client. Conversely when this option is not selected when Steam is opened, games can be played on the integrated Intel graphics which may prove advantageous depending on the title for compatibilty reasons.


#### Hybrid Graphics Integration with Steam: Command Arguments

If Hybrid Graphics is the preferred hardware configuration, it may be convient to set flags on a per-game basis if the GUI method proves cumbersome over time. There are two ways of achieving this:

1. **This method applies for games launched through the Steam client**: Open the Steam client, right click on a game and click "Properties". Under the "General" tab, copy and paste the PRIME Render Offload flags mentioned above into this field, then click OK. As a result of this flag Steam can be launched without the Dedicated Graphics Card button in the Pop Dock, but the game in question will use the Nvidia graphics card.
2. **This method applies for games launched through the Gnome application menu**: Navigate to the directory where Steam stores the .desktop files, this will be: *~/.local/share/applications*. For the games that need Dedicated Graphics to run, append the PRIME flag to the end of the Exec line. Then save an exit. An example .desktop entry for for Fallout 3 is below:
```
[Desktop Entry]
Name=Fallout 3
Comment=Play this game on Steam
Exec=steam steam://rungameid/22300 __NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia 
Icon=steam_icon_22300
Terminal=false
Type=Application
Categories=Game;
```


### Compute

Compute graphics mode uses the integrated GPU for all rendering. The NVIDIA
GPU is left available, allowing it to be used as a compute node.

## Switch graphics

Pop!_OS by System76 includes the system76-power package, which includes the
ability to switch between integrated, NVIDIA, and hybrid graphics modes.

### From GNOME Desktop

Click the system menu in the top right corner of your screen to access graphics
switching.

![Graphics](/images/graphics-switch-pop/system-menu.png)

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

For switching to NVIDIA graphics:

```bash
sudo system76-power graphics nvidia
```

For switching to integrated graphics:

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
