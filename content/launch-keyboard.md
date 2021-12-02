---
title: Configuring your new Launch keyboard
description:
  View, add, or modify keys in your OS.
keywords:
  - keyboard shortcuts
  - launch
  - pop
  - ubuntu

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
---

## The Launch and Accessories

The following items are included with your Launch:

![Accessories](/files/launch-keyboard/launch-accessories.webp)

## QMK firmware

The Launch keyboard uses our version of [QMK firmware](https://github.com/system76/qmk_firmware) and it is built using our changes that are not in upstream [QMK firmware](https://github.com/qmk/qmk_firmware). You can read more about QMK [here](https://github.com/system76/qmk_firmware).

## Layers

The core idea of "Layers" is that one key can be used for different actions. For example, on our laptops, holding the <kbd>Fn</kbd> then pressing the <kbd>F5</kbd> will lower the volume. Pressing <kbd>F5</kbd> on it's own will perform a different action, like refreshing a web page, if you are in a web browser like <u>Firefox</u>. You can read more about layers [here](https://beta.docs.qmk.fm/using-qmk/software-features/feature_layers).

## Firmware Updates

Firmware updates for the Launch are handled using [fwupd](https://fwupd.org/) and our <u>Firmware Manager</u> can be used to apply the update. When you get a notification about a firmware update, you will need to unlock the device using Fn+Esc (note that this will be the default keys even if you remapped them in the Keyboard Configurator) before you can apply the update. When the keyboard is unlocked, you will see the following keys light up:

- U N L O C K E D

Once the keyboard is in this mode, you can apply the firmware update. When the update is complete, you will need to unplug and reconnect the keyboard to exit this mode.

## Keyboard Configurator

You can download the `AppImage` for Ubuntu and other OSes and use the <u>Pop!\_Shop</u> on Pop!\_OS. Use this [link](https://github.com/pop-os/keyboard-configurator/releases) to download the application.

YYou can also download the configurator from the Arch Linux User Repository (AUR). The main version is built from the latest release, which is recommended for most users. You can find more information [here](https://aur.archlinux.org/packages/keyboard-configurator/). The git version is built from the latest commits to the project (this version will have the very latest fixes and features) which can be found [here](https://aur.archlinux.org/packages/keyboard-configurator-git/).

## Remapping Keys

<iframe width="900" height="500" src="/files/launch-keyboard/remapping-function-keys.webm" title="Remapping keys" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The keys are defined in the firmware of your keyboard, and you can remap the keys using the <u>Keyboard Configurator</u>. After opening the <u>Keyboard Configurator</u>, select the key you would like to re-map, then select an item from the available mapping options shown in the list below the keyboard diagram. Refer to the included video for more details. Please note the "Layer 1" and "Layer 2" at the top of the configurator. Layer 1 is what the keys will do normally and Layer 2 shows what the keys do when "Fn" is held down.

## Changing LEDs

<video width="900" height="900" controls>
  <source src="/files/launch-keyboard/video-soothing.mp4" type="video/mp4">
</video>

In the <u>Keyboard Configurator</u>, you can change keyboard back light color and behavior for the whole keyboard in the LEDs section of the application by changing the 'Layer Color Pattern' using the dropdown. If you want to change the lights per key use the 'Per Key Solid' from the 'Layer Color Patter' dropdown.

## Tech Docs

We have documentation that goes over changing the keycaps, switches, and more in the tech docs, which can be found [here](https://tech-docs.system76.com/models/launch_1/repairs.html).
