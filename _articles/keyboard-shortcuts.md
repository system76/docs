---
layout: article
title: Pop! - View and Modify Keyboard Shortcuts
description:
  View, add, or modify keyboard shortcuts in Pop!_OS.
keywords:
  - keyboard shortcuts
  - pop
  - settings
hidden: false
section: community

---

### Modifying existing keyboard shortcuts in Pop!_OS.

To view keyboard shortcuts open keyboard settings by pressing super and typing "settings", then from the menu on the left select "Keyboard"

![Keyboard]({{site.baseurl}}/images/keyboard-shortcuts/settings.png)

Next click "Customize Shortcuts"

From here, use the search box to find the shortcut you want to modify, in this example we'll change the shortcut used to open Terminal. Once you have found the shortcut, click the verticle elipsis and select Remove

![Remove existing]({{site.baseurl}}/images/keyboard-shortcuts/remove-existing.png)

Click the verticle elipsis again and this time select "Add Shortcut". You will be presented with a window to enter your key combination.

![Key combination]({{site.baseurl}}/images/keyboard-shortcuts/add-shortcut.png)

Press your desired key combination then click set. If the key combination exists for another shortcut you will be given the option to replace it.

---

### Adding custom keyboard shortcuts in Pop!_OS.

From the Keyboard Shortcuts list, select "Custom Shortcuts" at the bottom

![Add Custom shortcut window]({{site.baseurl}}/images/keyboard-shortcuts/custom-shortcut.png)

Then select "Add Shortcut".

![Add Custom shortcut window]({{site.baseurl}}/images/keyboard-shortcuts/add-custom-shortcut-window.png)

Enter a name for the shortcut, the application to launch and your key combination then click "Add" 

![Custom shortcut]({{site.baseurl}}/images/keyboard-shortcuts/add-custom-shortcut.png)

Note: In order to execute a shell script, use its absolute path instead of its relative path. Example: `sh /home/$USER/Documents/script.sh` instead of `sh ~/Documents/script.sh`

---
This article was contributed by [kylecorry31](https://github.com/kylecorry31) and updated by [Mark Pendlebury](https://github.com/markpendlebury).