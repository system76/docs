---
title: Configuring Your New Launch Keyboard
description:
  View, add, or modify keys in your OS.
keywords:
  - keyboard shortcuts
  - launch
  - launch-lite
  - pop
  - ubuntu
  - arch
  - fedora

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## QMK firmware

The Launch keyboard uses a System76 version of [QMK firmware](https://github.com/system76/qmk_firmware) and it may differ from upstream [QMK firmware](https://github.com/qmk/qmk_firmware). You can read more about QMK [here](https://github.com/system76/qmk_firmware).

## Layers

The core idea of "Layers" is that one key can be used for different actions. For example, on our laptops, holding the <kbd>Fn</kbd> then pressing the <kbd>F5</kbd> will lower the volume. Pressing <kbd>F5</kbd> on its own will perform a different action, like refreshing a web page in the browser. You can read more about layers [here](https://docs.qmk.fm/#/feature_layers).

## Firmware Updates

Firmware updates for the Launch line are handled using [fwupd](https://fwupd.org/) and our <u>Firmware Manager</u> (which can be installed on Arch and Fedora using this [article](https://support.system76.com/articles/system76-driver/)) can be used to apply the update. When you get a notification about a firmware update, you will need to unlock the keyboard using <kbd>Fn</kbd> + <kbd>Esc</kbd> (Launch Lite is <kbd>Left Ctrl</kbd> + <kbd>Right Ctrl</kbd> + <kbd>Esc</kbd>).

> ℹ️ If you changed your layout and moved any of these keys, you will need to press them wherever they are now located.

When the keyboard is unlocked, you will see the following keys light up in sequence:

- U N L O C K E D

Once the keyboard is in this mode, you can apply the firmware update. When the update is complete, you will need to unplug and reconnect the keyboard to exit this mode.

## Keyboard Configurator

You can download the configurator application [here](https://github.com/pop-os/keyboard-configurator/releases) On Pop!\_OS the configurator is available in the <u>Pop!\_Shop</u>. An `AppImage` is provided for Ubuntu and other Linux OSes as a standalone file. Recent changes to Ubuntu will require that you install the `libfuse2` package for `AppImage` support and can be done with the following command run in a terminal:

```bash
sudo apt update
sudo apt install libfuse2
```
You can also download the configurator from the Arch Linux User Repository (AUR). The main version is built from the latest release, which is recommended for most users. You can find more information [here](https://aur.archlinux.org/packages/system76-keyboard-configurator). The git version is built from the latest commits to the project (this version will have the very latest fixes and features) which can be found [here](https://aur.archlinux.org/packages/keyboard-configurator-git/).

There are also builds of the Keyboard Configurator for [Windows and macOS](https://github.com/pop-os/keyboard-configurator/releases) at the same location.

## Remapping Keys

<video width="900" height="900" controls>
  <source src="/files/launch-keyboard/remapping-function-keys.webm" type="video/mp4">
</video>

The keys are defined in the firmware of your keyboard, and you can re-map the keys using the <u>Keyboard Configurator</u>. After opening the <u>Keyboard Configurator</u>, select the key you would like to re-map, then select an item from the available mapping options shown in the list below the keyboard diagram. Refer to the included video for more details. Please note the "Layer 1" and "Layer 2" at the top of the configurator. Layer 1 is what the keys will do normally and Layer 2 shows what the keys do when "Fn" is held down.

## Changing LEDs

<video width="900" height="900" controls>
  <source src="/files/launch-keyboard/video-soothing.mp4" type="video/mp4">
</video>

In the <u>Keyboard Configurator</u>, you can change keyboard back light color and behavior for the whole keyboard in the LEDs section of the application by changing the 'Layer Color Pattern' using the dropdown. If you want to change the lights per key use the 'Per Key Solid' from the 'Layer Color Patter' dropdown.

## Tech Docs

We have documentation that goes over changing the keycaps, switches, and more on our Tech Docs site:

- [Launch (launch_1)](https://tech-docs.system76.com/models/launch_1/repairs.html)
- [Launch (launch_2)](https://tech-docs.system76.com/models/launch_2/repairs.html)
- [Launch (launch_3)](https://tech-docs.system76.com/models/launch_3/repairs.html)
- [Launch Lite (launch_lite_1)](https://tech-docs.system76.com/models/launch_lite_1/repairs.html)
- [Launch Heavy (launch_heavy_1)](https://tech-docs.system76.com/models/launch_heavy_1/repairs.html)
- [Launch Heavy (launch_heavy_3)](https://tech-docs.system76.com/models/launch_heavy_3/repairs.html)
