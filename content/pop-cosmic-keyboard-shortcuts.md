---
title: Pop!_OS New COSMIC Keyboard Shortcuts
description: Learn how master using COSMIC with your keyboard.
keywords:
  - keyboard
  - shortcuts
  - cosmic

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

## Super key

The Super key is the OS key on your keyboard.

- On recent System76 products the key is labelled with a rectangle and two two vertical lines, one on either side of the rectangle.

  ![Super Key](/images/super_key_vector_x64.png)

- On older System76 products, the Super key is represented by the Ubuntu logo (<kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>).
- On the Launch keyboard it is the <kbd>SUPER</kbd> key.
- On generic third-party products, it may be labeled with a Windows logo.
- On Mac accessories, it may be labeled `command`.

In Pop!\_OS, the Super key handles the majority of OS and window actions. All key bindings can be modified in COSMIC Settings (Input devices > Keyboard > Keyboard shortcuts).

### Direction keys

Directional actions can use either the standard arrow keys or their Vim equivalents:

| Key                                                    | Description                    |
| ------------------------------------------------------ | ------------------------------ |
| <kbd>←</kbd>, <kbd>↓</kbd>, <kbd>↑</kbd>, <kbd>→</kbd> | Direction keys (arrow keys)    |
| <kbd>H</kbd>, <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd> | Direction keys (Vim shortcuts) |

## Keyboard Shortcuts

### Use the Launcher

The launcher allows searching through open windows and installed applications. It also has the additional functions listed below.

| Shortcut                                                                | Action                                   |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| <kbd>SUPER</kbd>                                                        | Activate the launcher                    |
| <kbd>SUPER</kbd> + <kbd>/</kbd>                                         | Secondary option to activcate the launcher|
| `recent filename`                                                       | Browse and search recent files           |
| `/` or `~/`                                                             | Browse the file system                   |
| `find` with `filename`                                                  | Search the file system for a certain file|
| `t:`                                                                    | Execute a command in the terminal        |
| `:`                                                                     | Execute a command in sh                  |
| `=` or start typing an equation                                         | Calculate and equation                   |
| `?`                                                                     | Help menu                                |


### Navigation

| Shortcut                                                                | Action                                   |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| <kbd>SUPER</kbd></kbd> + <kbd>Direction keys</kbd>                      | Navigate between windows                 |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd>                                       | Switch between windows                   |
| <kbd>Shift</kbd> + <kbd>Super</kbd> + <kbd>Tab</kbd>                    | Switch between windows in reverse order  |
| <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>Direction keys</kbd>           | Navigate between displays                |
| <kbd>SUPER</kbd> + <kbd>Ctrl</kbd> + <kbd>Direction keys</kbd>          | Navigate between workspaces              |
| <kbd>SUPER</kbd> + <kbd>1-9 keys</kbd>                                  | Switch to workspace 1-9                  |
| <kbd>SUPER</kbd> + <kbd>0</kbd>                                         | Switch to last workspace                 |

### Move windows

| Shortcut                                                                                  | Action                                     |
| ----------------------------------------------------------------------------------------- | ------------------------------------------ |
| <kbd>Shift</kbd> + <kbd>SUPER</kbd> + <kbd>Direction keys</kbd>                           | Move window (the window moves to adjacent workspaces, followed by displays |
| <kbd>Shift</kbd> + <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>Direction keys</kbd>          | Move window between displays               |
| <kbd>Shift</kbd> + <kbd>SUPER</kbd> + <kbd>Ctrl</kbd> + <kbd>Direction keys</kbd>         | Move window between workspaces             |
| <kbd>Shift</kbd> + <kbd>SUPER</kbd> + <kbd>1-9 keys</kbd>                                 | Move window to workspaces 1-9 respectively |
| <kbd>Shift</kbd> + <kbd>SUPER</kbd> + <kbd>0</kbd>                                        | Move window to the last workspace          |

### Manage windows

| Shortcut                                                                          | Action                                              |
| --------------------------------------------------------------------------------- | --------------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Q</kbd>                                                   | Close window                                        |
| <kbd>SUPER</kbd> + <kbd>M</kbd>                                                   | Maximize window                                     |
| <kbd>SUPER</kbd> + <kbd>F11</kbd>                                                 | Fullscreen window                                   |
| <kbd>SUPER</kbd> + <kbd>R</kbd> and <kbd>SUPER</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>  | Resize window using each side                 |

### Manage tiled windows

| Shortcut                                                   | Action                          |
| ---------------------------------------------------------- | ------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Y</kbd>                            | Toggle window tiling for the current workspace |
| <kbd>SUPER</kbd> + <kbd>G</kbd>                            | Toggle floating window                         |
| <kbd>SUPER</kbd> + <kbd>O</kbd>                            | Change window orientation inside the tiled layout from vertical to horizontal |
| <kbd>SUPER</kbd> + <kbd>X</kbd>                            | Swap windows using direction keys to indicate a window for swap | 
| <kbd>SUPER</kbd> + <kbd>U</kbd>                            | Select additional windows up in the tiling tree (which then can be manged together) |
| <kbd>SUPER</kbd> + <kbd>I</kbd>                            | Select fewer windows up in the tiling tree (which then can be manged together) | 

### Other system shortcuts

| Shortcut                                                                        | Action                                         |
| ------------------------------------------------------------------------------- | ---------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>A</kbd>                                                 | Toggle Applications Library                    |
| <kbd>SUPER</kbd> + <kbd>W</kbd>                                                 | Toggle Workspaces Overview                     |
| <kbd>SUPER</kbd> + <kbd>F</kbd>                                                 | Open Files                                     |
| <kbd>SUPER</kbd> + <kbd>T</kbd>                                                 | Open Terminal                                  |
| <kbd>SUPER</kbd> + <kbd>Escape</kbd>                                            | Lock screen                                    | 
| <kbd>SUPER</kbd> + <kbd>Shift</kbd> + <kbd>Escape</kbd>                         | Log out                                        |
| <kbd>Print</kbd>                                                                | Take a screenshot                              |
| <kbd>Print</kbd> + <kbd>Space</kbd>                                             | Switch between added language/input sources    |

### Accessibility shortcuts

| Shortcut                                                       | Action                                             |
| -------------------------------------------------------------- | -------------------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>               | Toggle screen reader (not yet implemented)         |
| <kbd>SUPER</kbd> + <kbd>= or -</kbd> and <kbd>SUPER</kbd> + <kbd>. or ,</kbd> | Zoom in/out                         |
