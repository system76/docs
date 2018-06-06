---
layout: article
title: Software - Setting Custom Mouse Actions
description: >
   How to set custom mouse actions with xbindkeys
keywords:
  - Support
  - Pop
  - Ubuntu
  - xbindkeys
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

### Software

For using <u>xbindkeys</u> open a terminal with the following keys:

Pop!_OS : <kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd>

Ubuntu : <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>

Then install the following packages:

```
sudo apt install xbindkeys xautomation
```

Then create the default config file for <u>xbindkeys</u> with this command:

```
xbindkeys --defaults > $HOME/.xbindkeysrc
```

### Setting custom actions

Now let's open the config file with this command:

```
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
"xte 'keydown Super_L' 'key Up' 'keyup Super_L'"
   b:9

# Workspace Down
"xte 'keydown Super_L' 'key Down' 'keyup Super_L'"
   b:8
```

This will cause the forward and back mouse button to emulate pressing the <kbd><span class="fl-pop-key"></span></kbd>+<kbd>Up</kbd> and <kbd>Down</kbd>. This is useful for switching workspaces very quickly while leaving your hand on the mouse. This will be the same as pressing <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Up</kbd> and <kbd>Down</kbd>

### Changes

If any changes are made to the config file then xbindkeys need to be restarted with these commands:

```
killall xbindkeys
xbindkeys
```

By default xbindkeys does not start on reboot and you will need to add it using the <u>Startup Application Preferences</u>. 

![Startup Applications Pref](/images/custom-mouse-buttons/startup-applications-pref.png)

Once the application is opened then click the **Add** button then name the program to something like 'xbindkeys', enter the command for the application which is 'xbindkeys'. Now click the **Add** button and your done!

### Caveats

Once the mouse buttons for forward and back are set to a different action they will no longer work in a web browser for going back and forth between web pages.
