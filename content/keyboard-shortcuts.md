---
layout: article
title: Modify Keyboard Shortcuts (Pop!_OS)
description:
  View, add, or modify keyboard shortcuts in Pop!_OS.
keywords:
  - keyboard shortcuts
  - pop
  - settings
hidden: false
section: community

---

# Modify Keyboard Shortcuts (Pop!_OS)

You can view and change keyboard shortcuts in Pop!\_OS using the Settings app.

### Viewing Keyboard Shortcuts

To view keyboard shortcuts, open Settings and select the "Keyboard" page on the left.

![Settings](/images/keyboard-shortcuts/settings.png)

Click on "Customize Shortcuts" (at the bottom of the settings page) to view all active shortcuts.

![Keyboard Shortcuts dialog](/images/keyboard-shortcuts/shortcuts.png)

### Modifying Keyboard Shortcuts

To modify an existing shortcut, locate the shortcut by browsing to its category or using the search box, then click on the three dots next to it and select `Remove` to remove the existing keybinding.

![Removing an existing shortcut](/images/keyboard-shortcuts/remove-existing.png)

Next, click the three dots again and select `Add shortcut` (or `Add another shortcut` if you're adding more than one keybinding for the same action.) This will open a window where you can enter your new keybinding.

![New shortcut entry](/images/keyboard-shortcuts/shortcut-entry.png)

After entering your desired key combination, click `Set`. If the key combination is already bound to another shortcut, you will be given the option to replace the old shortcut or cancel.

### Adding Keyboard Shortcuts

Select the `Custom Shortcuts` category at the bottom of the Keyboard Shortcuts list.

![Custom Shortcuts category](/images/keyboard-shortcuts/custom-shortcuts.png)

Click the `Add Shortcut` button.

![Custom Shortcuts list](/images/keyboard-shortcuts/custom-shortcuts-list.png)

Enter a name for the shortcut, the application or command to launch, and the key combination, then click `Add`.

![Adding a custom shortcut](/images/keyboard-shortcuts/add-custom-shortcut.png)

**Note:** In order to execute a shell script, use its absolute path instead of its relative path. For example: `sh /home/username/Documents/script.sh` instead of `sh ~/Documents/script.sh`.

---

This article was contributed by [kylecorry31](https://github.com/kylecorry31) and updated by [Mark Pendlebury](https://github.com/markpendlebury).
