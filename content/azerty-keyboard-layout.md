---
title: AZERTY keyboard layout
description: >
  A simple tutorial to configure AZERTY keyboard using multiple methods.
keywords:
  - keyboard
  - layout
  - french
  - azerty
  - software
  - firmware

hidden: false
section: solutions
---

## Intro

So, as you may know, System76 provides only QWERTY keyboards for their laptops.

In this tutorial we will analyze multiple solutions to adapt the keyboard to any layout.

I will use AZERTY as an example, but it also could be applied to DWORAK and others.

## Hardware

### Stickers 

One of the solutions is to put keyboard stickers of a chosen layout:
* it costs money (up to 10€)
* it takes some time and require some precision

(I recommend taking 1mm less dimension for stickers compared to keyboard, e.g. 14mm sticker for 15mm key)

* can be damaged/unsticked overtime
* can block LED backlight
* can make keys less estethically pleasant

### Key swap

Another possibility is to put other keys or/and swap existing keys (like Q to A):
* it costs even more money (up to 50€)
* it takes significantly more time and effort

(risk to damage the key and/or keyboard bindings)

### My setup

So, taking in count all of the previous points, I decided to do a mix of both, specifically:
* I swap only 3 letters keys (Q-A Z-W M-,), you can watch a [video](https://www.youtube.com/watch?v=qbUpCFT1LX8) on how to do it properly
* I put stickers on numbers and special characters/symbols (1-0 ]=^$ù*,;:!<)

As you may know, AZERTY keyboard has one more key that QWERTY doesn't, the "<>" key, so I decided to use Right-Ctrl instead, more on that later.

![](https://support.system76.com/files/images/azerty-keyboard-layout/keyboard.jpg)

## Firmware

### Hard reprogramming

It is possible to make your keyboard send whatever key codes you would like with any key combination, but it requires to manually program and flash the keyboard [firmware](https://github.com/system76/ec).

Once more, this is a time-consuming and pretty risky operation, plus you have to reprogram you keyboard every time you would like to change the physical layout.

### Soft reprogramming

Nonetheless, one could use [system76-keyboard-configurator](https://github.com/pop-os/keyboard-configurator) to change the keys behavior and remap them.

This is what I used to do 2 things :

1 - Change Right-Ctrl key to map to "." (Numpad-Dot) key, which we will reprogram to "<>" afterwards.

In order to do so, just launch your system76-keyboard-configurator, select Layer1 and select the Right-Control key, then select the Numpad-Dot key below.

This is pretty convenient since, my laptop doesn't have Numpad, so I can do whatever I want with this key, knowing that there should not be any disambiguity in input.

![](https://support.system76.com/files/images/azerty-keyboard-layout/ctrl.png)

2 - My previous laptop was a Dell and it has a pretty nice feature for using Left and Right keys as Home and End with the Fn key.

Since the Fn key in most of the keyboards is non-software programmable key, we can also use this tool to specify any action we want.

So, I just selected the Layer2 (this is what Fn key is referenced to), then selected Left key and Home key below, just like I did previously, same thing for Right and End keys.

You can do this for any key and action you want, like "Fn-L" translating to "3" and so on.

Note that any changes are applied automatically and stay persistent in the firmware, so if you made a mistake you can always use "Reset" option provided by the tool.

![](https://support.system76.com/files/images/azerty-keyboard-layout/home.png)

However, without actually reprogramming the firmware yourself, this utility can only remap already existing keys within QWERTY layout, so can't really add/modify key codes, thus we will need another utility to finalize out setup.

## Software

For this part, we will use [input-remapper](https://github.com/sezanzeb/input-remapper/).

Here we will change Right-Ctrl key (remaped to ".") to map to "<" (less) key.

After launching key-remapper-gtk select you keyboard, rename your empty preset, press "Record", press the Right-Ctrl key which will translate to KP_Delete and add the output "less", finally just click to "Apply" and check "Autostart".

Note than by applying Left-Shift key the remaped Right-Control will automatically map to ">" (greater) if using French keyboard layout on the OS-level.

![](https://support.system76.com/files/images/azerty-keyboard-layout/remap.png)

## Outro

As you may see, sometimes changing keys and putting stickers may not be enough to fully set a different layout and sometimes mixed solutions are required.

Anyway, I hope that this small tutorial/review will be helpful to anyone who would like to use a differnet keyboard setup or even go further and fully customize their keyboard behaviour.

Thanks for reading and have a good luck.
