---
layout: article
title: Mouse Customization
description: >
   How to customize the buttons on your mouse
keywords:
  - Support
  - Pop
  - Ubuntu
  - xbindkeys
  - Solaar
  - Piper
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware

---

### Graphical Software

#### Piper

![Piper Buttons Window](/images/custom-mouse-buttons/Piper-2.png) 

<u>Piper</u> is a frontend to the <u>libratbag</u> backend for setting custom actions to mouse buttons like the Logitech MX Master 3 (sold by System76). In this section we will be using that mouse as an example for using <u>Piper</u>. You can see the source code of <u>Piper</u> [here](https://github.com/libratbag/piper).

![Piper Buttons Assign Window](/images/custom-mouse-buttons/Piper-3.png)

In this window the button that has been clicked can be reassigned to a differet function like changing the Left-click to the Right-click or swapping the Forward button to the Back button for web pages.

#### Solaar

![Solaar Main Window](/images/custom-mouse-buttons/Solaar.png) 

![Solaar Main Window with information](/images/custom-mouse-buttons/Solaar-2.png) 

<u>Solaar</u> is a graphical tool for adding more devices to your Logitech USB Unify receiver. It also provides information on the following:

- Battery life
- Firmware and Bootloader version
- Serial number
- Sensitivity (DPI) settings

You can find the source code of <u>Solaar</u> [here](https://github.com/pwr-Solaar/Solaar/) and more information about <u>Solaar</u> [here](https://pwr-solaar.github.io/Solaar/devices).

### Command Line Software

#### xbindkeys

For using <u>xbindkeys</u> open a terminal with the following keys:

Pop!_OS : <kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd>

Ubuntu : <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>

Then install the following packages:

```bash
sudo apt install xbindkeys xautomation
```

Then create the default config file for <u>xbindkeys</u> with this command:

```bash
xbindkeys --defaults > $HOME/.xbindkeysrc
```

### Setting custom actions

Now let's open the config file with this command:

```bash
gedit ~/.xbindkeysrc
```

Then scroll down to the bottom of the file right below this line:

```
"xbindkeys_show"
   control+shift + q
```

From here you can add your own custom actions like the ones below.

#### Examples

Below are some examples that you can do:

```
# Refresh
"xte 'key F5'"
  b:9 + control
```

This will cause the forward mouse button and the <kbd>Ctrl</kbd> key to emulate pressing the F5 key. This is useful for refreshing a web page without moving your hand off the mouse.

```
# Workspace Up
"xte 'keydown Control_L' 'keydown Super_L' 'key Up' 'keyup Super_L' 'keyup Control_L'"
   b:9

# Workspace Down
"xte 'keydown Control_L' 'keydown Super_L' 'key Down' 'keyup Super_L' 'keyup Control_L'"
   b:8
```

This will cause the forward and back mouse button to emulate pressing the <kbd>Ctrl</kbd>+<kbd><span class="fl-pop-key"></span></kbd>+<kbd>Up</kbd> and <kbd>Down</kbd>. This is useful for switching workspaces very quickly while leaving your hand on the mouse.

### Changes

If any changes are made to the config file then xbindkeys need to be restarted with these commands:

```bash
killall xbindkeys
xbindkeys
```

By default xbindkeys does not start on reboot and you will need to add it using the <u>Startup Application Preferences</u>. 

![Startup Applications Pref](/images/custom-mouse-buttons/startup-applications-pref.png)

Once the application is opened then click the **Add** button then name the program to something like 'xbindkeys', enter the command for the application which is 'xbindkeys'. Now click the **Add** button and your done!

### Caveats

#### xbindkeys

Once the mouse buttons for forward and back are set to a different action they will no longer work in a web browser for going back and forth between web pages.
