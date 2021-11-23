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

## QMK firmware

The Launch keyboard uses our version [QMK firmware](https://github.com/system76/qmk_firmware) and it is built using our changes that are not in upstream [QMK firmware](https://github.com/qmk/qmk_firmware). You can read more about QMK [here](https://github.com/system76/qmk_firmware). 

## Layers

The core idea of "Layers" is that one key can be used in different setups for example on our laptops holding the <kbd>Fn</kbd> then pressing the <kbd>F5</kbd> will lower the volume while pressing <kbd>F5</kbd> on it's own will perform a different action like refreshing a web page if you are in a web browser like <u>Firefox</u>. You can read more about layers [here](https://beta.docs.qmk.fm/using-qmk/software-features/feature_layers
).

## Keyboard Configurator

You can download the `AppImage` for Ubuntu and download it from the <u>Pop!\_Shop</u> for Pop!\_OS. Use the link below to download the application.

https://github.com/pop-os/keyboard-configurator/releases 

You can also download it from the Arch Linux AUR from the links below. The main version is built from latest releases which is recommended for most users and the -git version is built from the latest commits to the project.

- https://aur.archlinux.org/packages/keyboard-configurator/
- https://aur.archlinux.org/packages/keyboard-configurator-git/

## Remapping Keys

<video width="900" height="900" controls>
  <source src="/files/launch-keyboard/remapping-function-keys.webm" type="video/mp4">
</video>

The keys are defined in the firmware of your keyboard and you can remap the keys using the <u>Keyboard Configurator</u>. After opening the <u>Keyboard Configurator</u>, you can then select the key you would like to configure, and select an item from the available items below the keyboard showing in the application. I am attaching a video showing the remapping process. Please note the "Layer 1" and "Layer 2" at the top of the configurator. Layer 1 is what the keys will do normally, then Layer 2 shows what the keys do when "Fn" is held down.

## Changing Keycaps and Switches

We have documentation that goes over changing the keycaps and switches in the Launch in the tech docs which can be found [here](https://tech-docs.system76.com/models/launch_1/repairs.html)
