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
tableOfContents: true
---

## Super key

The Super key is the OS key on your keyboard.

- On recent System76 products, it's between the <kbd>Fn</kbd> and the <kbd>Alt</kbd> keys. The key is labelled with a rectangle and two two vertical lines, one on either side of the rectangle.

  ![Super Key](/images/super_key_vector_x64.png)

- On older System76 products, the Super key is between the <kbd>Fn</kbd> and the <kbd>Alt</kbd> keys and is represented by the Ubuntu logo (<kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>).
- On the Launch keyboard it is the <kbd>SUPER</kbd> key.
- On generic third-party products, it may be labeled with a Windows logo.
- On Mac accessories, it may be labeled `command`.

In Pop!\_OS, the Super key handles the majority of OS and window actions. This key is represented by Pop in the lists below.

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
| <kbd>SUPER</kbd></kbd> + <kbd>Direction keys</kbd>                        | Switch focus between windows             |
| <kbd>SUPER</kbd> + <kbd>Enter</kbd>                                       | Enter window adjustment mode             |
| <kbd>Direction keys</kbd>                                               | Move window (while in adjustment mode)   |
| <kbd>Shift</kbd> + <kbd>Direction keys</kbd>                            | Resize window (while in adjustment mode) |
| <kbd>Ctrl</kbd> + <kbd>Direction keys</kbd>                             | Swap windows (while in adjustment mode)  |
| <kbd>Enter</kbd>                                                        | Apply changes (exit adjustment mode)     |
| <kbd>ESC</kbd>                                                          | Cancel (exit adjustment mode)            |
| <kbd>SUPER</kbd> + Left click + Drag                                      | Move window (without adjustment mode)    |
| <kbd>SUPER</kbd> + Right click + Drag                                     | Resize window (without adjustment mode)  |

### Manipulate windows

| Shortcut                                                                                  | Action                                     |
| ----------------------------------------------------------------------------------------- | ------------------------------------------ |
| <kbd>SUPER</kbd> + <kbd>S</kbd>                                                             | Toggle stacking                            |
| <kbd>SUPER</kbd> + <kbd>O</kbd>                                                             | Change window orientation (while stacking) |
| <kbd>SUPER</kbd> + <kbd>G</kbd>                                                             | Float/un-float window (while stacking)      |
| <kbd>SUPER</kbd> + <kbd>M</kbd>                                                             | Maximize/un-maximize window                 |
| <kbd>SUPER</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>/<kbd>→</kbd>                              | Snap window to left/right side of display  |
| <kbd>SUPER</kbd> + <kbd>Q</kbd>                                                             | Close window                               |

### Manage workspaces and displays

| Shortcut                                                                          | Action                                              |
| --------------------------------------------------------------------------------- | --------------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>                    | Navigate between workspaces                         |
| <kbd>SUPER</kbd> + <kbd>Home</kbd>/<kbd>End</kbd>                                 | Navigate to first/last workspace                    |
| <kbd>SUPER</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>                   | Move active window between upper/lower workspaces   |
| <kbd>SUPER</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd>/<kbd>→</kbd>                   | Move active window between left/right displays      |
| <kbd>SUPER</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> | Move the active window between upper/lower displays |
| <kbd>SUPER</kbd> + <kbd>ESC</kbd>                                                 | Lock the screen                                     |

### Use the launcher

The launcher allows searching through open windows and installed applications. It also has the additional functions listed below.

| Shortcut/command                                           | Action                          |
| ---------------------------------------------------------- | ------------------------------- |
| <kbd>SUPER</kbd>                                         | Activate the launcher on Pop 21.04+ |
| <kbd>SUPER</kbd> + <kbd>/</kbd>                 | Activate the launcher on Pop 20.10 and below |
| `recent filename`                                          | Browse and search recent files  |
| `/` / `~/`                                                 | Browse the filesystem           |
| `find filename`                                            | Search the filesystem for a certain file |
| `t:`                                                       | Execute a command in a terminal |
| `:`                                                        | Execute a command in sh         |
| `=`                                                        | Calculate an equation           |
| `?`                                                        | Help menu                       |

### Switch between apps and windows

| Shortcut                                                                        | Action                                         |
| ------------------------------------------------------------------------------- | ---------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd>                                                 | Switch apps                                    |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd> + <kbd>Shift</kbd>                              | Switch apps in reverse order                   |
| <kbd>SUPER</kbd> + <kbd>`</kbd>                                                   | Switch windows of current app                  |
| <kbd>SUPER</kbd> + <kbd>`</kbd> + <kbd>Shift</kbd>                                | Switch windows of current app in reverse order |

### Miscellaneous OS shortcuts

| Shortcut                                                       | Action                                             |
| -------------------------------------------------------------- | -------------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>D</kbd>                                  | Toggle workspace menu                              |
| <kbd>SUPER</kbd> + <kbd>A</kbd>                                  | Toggle applications menu                           |
| <kbd>SUPER</kbd> + <kbd>V</kbd>                                  | Toggle notifications menu                          |
| <kbd>SUPER</kbd> + <kbd>T</kbd>                                  | Open a terminal                                    |
| <kbd>SUPER</kbd> + <kbd>F</kbd>                                  | Open Files                                         |
| <kbd>SUPER</kbd> + <kbd>P</kbd>                                  | Cycle display layout                               |
| <kbd>SUPER</kbd> + <kbd>Space</kbd>                              | Cycle between configured input sources (languages) |
| <kbd>Alt</kbd> + <kbd>F2</kbd>                                 | Run command                                        |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>              | Log out                                            |

### Accessibility shortcuts

| Shortcut                                                                                 | Action                                  |
| ---------------------------------------------------------------------------------------- | --------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>                                           | Toggle screen reader                    |
| <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>8</kbd>                                           | Toggle magnifier                        |
| <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>+</kbd>/<kbd>-</kbd>                              | Zoom in/out (when magnifier is enabled) |
