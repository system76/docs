---
title: Pop!_OS Basics
description: >
  Learn how to navigate your new Pop!_OS desktop environment.
keywords:
  - Support
  - Pop!
  - Pop!_OS
  - Pop!_OS Beginner
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

Welcome to the Pop!_OS desktop! Pop!_OS provides all the features you would expect from a modern operating system. The basic elements are outlined below.

## COSMIC Desktop Environment

Pop!\_OS 24.04 includes the [COSMIC desktop environment](https://system76.com/cosmic). COSMIC is written in the Rust programming language and is an acronym for _Computer Operating System Main Interface Components_.

## The Launcher

The <u>Launcher</u> is a search-based utility for accessing and opening applications and files. This video demonstrates the powerful funcationality of the COSMIC Launcher:

<div class='embed-container'><iframe src='https://www.youtube.com/embed/zHuXKCPbX9E' frameborder='0' allowfullscreen></iframe></div>

To open the Launcher, press the <kbd>SUPER</kbd> key, which is usually located between the `Fn` and `Alt` keys (and may have an icon with a window on it). You can also click the Launcher magnifying glass icon in the dock.

![Activating the Launcher in Pop!_OS 24.04](/images/pop-basics/pop-basics-launcher-example.png)

To switch between open applications, you can click one of the windows listed in the launcher, or use the up and down arrow keys to select one followed by `Enter`. Installed applications available to launch are listed below the open windows. Keyboard shortcuts to activate the first ten results are listed on the right side.

### Launcher Features

Additional features can be accessed by starting your search with specific characters or terms.

- **Built-in Calculator:** Type <kbd>=</kbd> and the equation, then press <kbd>Enter</kbd> for the result.
- **File Search:** Find files by typing `find` followed by the search term or file name, then select a result to open it.
- **Internet Search:** Search a variety of popular search engines from the Launcher. You can type the name of the search engine, like `google` or `duckduckgo`, or use abbreviations (`gs` and `ddg`, respectively), followed by your search term. When the Launcher result is selected, the default web browser will open with the search results.
  - The Launcher's GitHub repository contains [a full list of supported search engines and abbreviations](https://github.com/pop-os/launcher/blob/master/plugins/src/web/config.ron).

## The Dock

By default, the <u>Dock</u> is located at the bottom of the screen and consists of pinned application icons, running applications, and minimized windows. To customize the dock, as well as other aspects of the desktop environment, navigate to `Settings` -> `Desktop`. To change settings for the Dock, select the `Dock` submenu.

![Access Dock Settings in Pop 24.04](/images/pop-basics/pop-basics-access-dock-in-cosmic-settings.png)

![Pop 24.04 COSMIC Dock Settings](/images/pop-basics/pop-basics-dock-settings-view.png)

Dock settings include the following options:

- Whether to enable or disable the Dock
- Whether to hide the Dock when it's not in use
- Whether to extend the Dock to the screen edges or only take up space in the middle
- Which screen(s) and where on the screen the Dock should appear
- The size and background opacity of the Dock
- Which applets are present on the Dock, and in what order
  - Click `Configure dock applets` to rearrange existing applets on the Dock, and then `Add applet` to view the list of available applets.

![Add Applets in Pop 24.04 COSMIC Dock Settings](/images/pop-basics/pop-basics-add-applet.png)

The Launcher, Workspaces, and Applications shortcuts are their own applets; all other pinned applications are part of the `App Tray` applet. To remove pinned applications from the Dock or pin running applications to the Dock, right-click their icon in the Dock and select the appropriate option.

## The Panel

By default, the <u>Panel</u> is the top bar of the desktop with a clock in the middle. The Panel is made up of the same type of applets that make up the Dock. The default applets in the Panel can be used to adjust various settings like volume, Bluetooth, and accessibility, or to connect to WiFi networks, change power or graphics settings, and log out/restart/shut down the computer. Quick access to applications can also be added to the panel.

Open COSMIC Settings and click `Desktop`, then select `Panel` to customize the behavior, style, and placement of applets on the Panel. The Panel settings include the same options as the Dock settings.

![Access COSMIC Panel Settings in Pop!_OS 24.04](/images/pop-basics/pop-basics-access-panel-settings.png)

## COSMIC Settings

Adjust system settings and personal preferences like the look and feel of the desktop in the <u>COSMIC Settings</u> application. To view available configuration options, click the icon with the button toggle symbol in the Dock, or activate the Launcher and search 'settings'.

## Automatic Window Tiling

This video shows the auto-tiling and window stacking features of the COSMIC desktop:

<div class='embed-container'><iframe src='https://www.youtube.com/embed/xTb5VhctG50' frameborder='0' allowfullscreen></iframe></div>

- Click the tiling icon in the top right of the panel to access tiling settings.
  - Toggle the `Tile current workspace` option to activate or deactivate tiling in the current workspace.
  - The `Active hint` option highlights the border of the active application window in a color of your choice.

![Tile current workspace in Pop!_OS 24.04](/images/pop-basics/pop-basics-activate-tiling.png)

### Window Stacking

- <kbd>SUPER</kbd> + <kbd>S</kbd> converts a window to a stack. Dragging a window out of the stack and repeating the <kbd>SUPER</kbd> + <kbd>S</kbd> combination again converts back to a standard window.
- In tiling mode, you can add windows to a stack by dragging them into the stack.
- While on an active stack, launching an application from the launcher will automatically add it to the stack.
- Switch between windows in the stack by pressing <kbd>SUPER</kbd> + <kbd>←</kbd> / <kbd>→</kbd>, or using the tabs at the top of the stack.

## Workspaces

Accessing <u>Workspaces</u> will show an overview of all open windows, available workspaces, and the placement of application windows in the workspaces.

This video shows the Workspaces functionality in Pop!\_OS 24.04:

<div class='embed-container'><iframe src='https://www.youtube.com/embed/hqgk5tMfI3A' frameborder='0' allowfullscreen></iframe></div>

By default, there are three ways to access the Workspaces overview:

1. Click on the Workspaces icon in the Dock.
2. Click on the word Workspaces in the top left of the screen.
3. Press <kbd>SUPER</kbd> + <kbd>w</kbd>.

From the Workspaces overview, you can switch between the current workspaces by clicking on them, drag windows between different workspaces, rearrange workspaces by dragging them, and pin workspaces to keep them even when empty.

### Workspaces Shortcuts

You can use <kbd>SUPER</kbd> + <kbd>CTRL</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> to switch to workspaces above or below the current one without opening the Workspaces menu. You can also move the selected window to the previous or next workspace using <kbd>SUPER</kbd> + <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> <kbd>←</kbd> / <kbd>→</kbd>.

## Applications

<u>Applications</u> opens the application library, which shows installed programs in alphabetical order. There's a search box located at the top of the page to quickly find a desired application or to search the COSMIC Store. A list of folders to organize the applications is at the bottom.

![Applications overview in Pop!_OS 24.04](/images/pop-basics/pop-basics-applications-overview.png)

Individual applications will have variations in their sub-menus. Many applications have a menu button located in the top-right or left of the application window for application-specific settings and functions. This menu button is usually represented by either three stacked vertical lines or three vertical dots, sometimes referred to as the "hamburger menu."

Default applications included with Pop!_OS 24.04 are outlined in [the Default Apps article](/articles/default-apps).

## COSMIC Store (Application Installation and Software Updates)

The <u>COSMIC Store</u> can be used to install additional software and update currently installed software. Search for programs or browse for them by category, then click the `Install` button to add them to your computer.

![COSMIC Store](/images/pop-basics/pop-basics-cosmic-store.png)

Manage repositories by clicking the gear icon in the top right of the COSMIC Store. For more information about package management in Pop!\_OS, see the [Manage Repos article](/articles/manage-repos-pop/).

To update currently installed software, click `Updates` in the left menu of the COSMIC Store. Buttons to `Check for updates` and `Update all` are located in the top right corner of the page.

![Update Software in Pop!_OS 24.04 COSMIC Store](/images/pop-basics/pop-basics-software-updates-cosmic-store.png)

## Keyboard Shortcuts

For a more detailed overview of Pop!\_OS keyboard shortcuts, refer to [the Keyboard Shortcuts article](/articles/pop-keyboard-shortcuts).

You can read more about Pop!\_OS features on the [Pop!_OS homepage](https://system76.com/pop/), or view the source code in [the Pop!_OS GitHub organization](https://github.com/pop-os/).
