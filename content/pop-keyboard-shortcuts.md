---
title: Pop!_OS Keyboard Shortcuts
description: Learn how master using Pop!_OS with your keyboard.
keywords:
  - keyboard
  - shortcuts

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
---

## Notable Keys

### Super key

The Super key is the OS key on your keyboard.

- On recent System76 products, it's the Pop key (<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>).
- On older System76 products, it's the Ubuntu key (<kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>).
- On the Launch keyboard it is the <kbd>SUPER</kbd> key.
- On generic third-party products, it may be labeled with a Windows logo.
- On Mac accessories, it may be labeled `command`.

In Pop!\_OS, the Super key handles the majority of OS and window actions. This key is represented by <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> in the lists below.

### Direction keys

Directional actions can use either the standard arrow keys or their Vim equivalents:

| Key                                                    | Description                    |
| ------------------------------------------------------ | ------------------------------ |
| <kbd>←</kbd>, <kbd>↓</kbd>, <kbd>↑</kbd>, <kbd>→</kbd> | Direction keys (arrow keys)    |
| <kbd>H</kbd>, <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd> | Direction keys (Vim shortcuts) |

## Keyboard Shortcuts

### Move, resize, and swap windows

| Shortcut                                                                | Action                                   |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Direction keys</kbd> | Switch focus between windows             |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Enter</kbd>          | Enter window adjustment mode             |
| <kbd>Direction keys</kbd>                                               | Move window (while in adjustment mode)   |
| <kbd>Shift</kbd> + <kbd>Direction keys</kbd>                            | Resize window (while in adjustment mode) |
| <kbd>Ctrl</kbd> + <kbd>Direction keys</kbd>                             | Swap windows (while in adjustment mode)  |
| <kbd>Enter</kbd>                                                        | Apply changes (exit adjustment mode)     |
| <kbd>ESC</kbd>                                                          | Cancel (exit adjustment mode)            |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + Left click + Drag         | Move window (without adjustment mode)    |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + Right cick + Drag         | Resize window (without adjustment mode)  |

### Manipulate windows

| Shortcut                                                                                  | Action                                     |
| ----------------------------------------------------------------------------------------- | ------------------------------------------ |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>S</kbd>                                | Toggle stacking                            |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>O</kbd>                                | Change window orientation (while stacking) |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>G</kbd>                                | Float/unfloat window (while stacking)      |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>M</kbd>                                | Maximize/unmaximize window                 |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>/<kbd>→</kbd> | Snap window to left/right side of display  |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Q</kbd>                                | Close window                               |

### Manage workspaces and displays

| Shortcut                                                                                   | Action                                         |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>  | Navigate between workspaces                    |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Home</kbd>/<kbd>End</kbd>               | Navigate to first/last workspace               |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Shift</kbd> + <kbd>Direction keys</kbd> | Move active window between workspaces/displays |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>ESC</kbd>                               | Lock the screen                                |

### Use the launcher

The launcher allows searching through open windows and installed applications, and also has the additional functions listed below.

| Shortcut/command                                           | Action                          |
| ---------------------------------------------------------- | ------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>                 | Activate the launcher on Pop 21.04+ |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>/</kbd>  | Activate the launcher on Pop 20.10 and below |
| `d:` or `recent filename                                   | Browse and search recent files  |
| `/` / `~` / file filename                                  | Browse the filesystem           |
| `t:`                                                       | Execute a command in a terminal |
| `:`                                                        | Execute a command in sh         |
| `=`                                                        | Calculate an equation           |

### Switch between apps and windows

| Shortcut                                                                        | Action                                         |
| ------------------------------------------------------------------------------- | ---------------------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Tab</kbd>                    | Switch apps                                    |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Tab</kbd> + <kbd>Shift</kbd> | Switch apps in reverse order                   |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>`</kbd>                      | Switch windows of current app                  |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>`</kbd> + <kbd>Shift</kbd>   | Switch windows of current app in reverse order |

### Miscellaneous OS shortcuts

| Shortcut                                                       | Action                                             |
| -------------------------------------------------------------- | -------------------------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>                    | Toggle Activities overview                         |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>A</kbd>     | Toggle applications menu                           |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>V</kbd>     | Toggle notifications menu                          |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>T</kbd>     | Open a terminal                                    |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>F</kbd>     | Open Files                                         |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>P</kbd>     | Cycle display layout                               |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Space</kbd> | Cycle between configured input sources (languages) |
| <kbd>Alt</kbd> + <kbd>F2</kbd>                                 | Run command                                        |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>              | Log out                                            |

### Accessibility shortcuts

| Shortcut                                                                                 | Action                                  |
| ---------------------------------------------------------------------------------------- | --------------------------------------- |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>              | Toggle screen reader                    |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Alt</kbd> + <kbd>8</kbd>              | Toggle magnifier                        |
| <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd> + <kbd>Alt</kbd> + <kbd>+</kbd>/<kbd>-</kbd> | Zoom in/out (when magnifier is enabled) |
