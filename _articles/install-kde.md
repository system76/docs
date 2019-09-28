---
layout: article
title: Install KDE in PopOS! 
description: 
  How to install KDE Desktop in your PopOS! without miss a single thing of Gnome. 
keywords:
  - KDE
  - Alternative Desktop
hidden: false
section: community

---

With no fuss with specific desktop environments and stuff, Installing a Minecraft Server is an easy task on the command line. The hard part is what you will build.

Make sure you have a powerful server machine above 3.7Ghz and 8G of RAM.

Gnome Desktop shiped with PopOS! by defualt is nice. Look and feel is clean and confortable, keyboard shorcuts are handy. Yet as a power user, I got amazed about the lack of configuration options and after a week, I switched back to KDE (I'm a KDE user since version 3.5). It felt quite bad at the beggining, cause I tried to use Gnome and failed and I tought that switching I will miss some of the fantastic functionality shiped with PopOS!, like nightmode, power management.

### Install KDE desktop
To install KDE just apt install it

```
sudo apt install kubuntu-desktop
```
The look and feel I'm using is Brisa Dark, is quite nice and similar the Gnome one shiped with PopOS! This package also replace the Gnome GDM  by SSDM. You can continue to using GDM or install another greeter.

### Night Mode in KDE
Night mode is a very nice add on on Gnome. Some people have problems sleeping at night and some scientic studies affirm that overuse of screen displays could be one of the problems. Computer and smartphone displays emits light in all visible the spectrum, including red and blue lights, pretty much the same as the sun does. However, our ancestors of ten thousand years ago and not even people living in the XIX century were exposed to blue light after the sunset. This is the main argument behind more and more popular night mode tools that after sunset, just turn the screen to a reddish hue. This is called color temperature of the screen, measure in Kelvin degrees, where the higher the temperature the bluish the color of the screen.
There is an applet not shipped with the kubuntu-desktop package that allows turn the screen to red (or to whatever other color, btw). You need to install it in order to get the same functionallity of NightMode in Gnome.  

```
sudo apt install plasma-applet-redshift-control
```
This tool allows you to set your geolocation, so it will know when the sunrise and sunsets are, and turn on/off the redshift automatically. Color temperature is modificable through mouse scroll over the applet (doesn't work that well) or temperature limits in the config window and can be swithced on/off clicking in the applet. I'm using a 6000K temperature for day use and 2500K for night, but be my guess and try your own configuration. It didn't improve my spleep noticeably (never haver problems while sleeping... to wake up tough, :thinking\_face:), but overuse of screen affects people differently. Don't be affraid and try, can change your life.

#### Power Management in KDE
Power Maranagement in KDE is great, with the ability to configure several power profiles either the computer is on AC, using the battery or when the battery is beyond certain low battery threshold (also configurable). From the applet, is possible to adjust the brightness of the display and the keyboard (didn't see that on Gnome). Yet, is NOT possible to switch between the discrete/built in graphics card NOR change the processor power profiles from KDE Power Management applet.

But don't despair. This is linux workd and there is a solution for almost anything just a couple of commands away. System76 people did an excelent job providing the system76-power command line tool that allows to change CPU power profiles and switch between discrete/built in graphic cards, even remotely (I wish I knew two weeks ago). 

I.e., to query which graphic card is on, you can type in Konsole or whatever you prefer terminal emulator:
```
$ system76-power graphics
intel
```
To check if your system has an hybrid graphic card system, you can use the following command:
```
$ system76-power graphics switchable
switchable
```
And to check the status of the discrete graphic card (if any):
```
$ system76-power graphics power
off (discrete)
```
So, to switch to nvidia graphic card:
```
$ system76-power graphics nvidia
setting graphics to nvidia
```
You should take into account that exactly the same as in Gnome, a reboot is needed in order to the graphic card switch take effect. To go back to the built in graphic card you can run
```
$ system76-power graphics intel
setting graphics to intel
```
At the contrary, CPU power profile changes take effect immediately. You can switch the power profile with
```
$ system76-power profile performance
setting power profile to performance
```
You can query the power profile in use with:
```
$ system76-power profile
Power Profile: Performance
CPU: 50% - 100%, Turbo
Backlight intel_backlight: 120000/120000 = 100%
Keyboard Backlight system76::kbd_backlight: 0/255 = 0%
```
Available power profiles for me are 'battery', 'balanced', and 'performance'. May be different for you but you can always ask system76-power tool to tell you what are the available modes with 
```
$ system76-power profile --help
system76-power-profile 
Queries or sets the power profile.

 - If an argument is not provided, the power profile will be queried
 - Otherwise, that profile will be set, if it is a valid profile

USAGE:
    system76-power profile [profile]

OPTIONS:
    -h, --help    
            Prints help information


ARGS:
    <profile>    
            set the power profile [possible values: battery, balanced, performance]
```
This should solve all your power management needs. Sadly there is no specific version of the power applet for System76 laptops yet, but there is a version that support Intel Power profiles. I didn't try it though.

Hope you find this tutorial helpful. Feel free to send me comments through github.

---

This article was contributed by [Joaquin Bogado](https://github.com/jwackito).
