---
title: Pop!_OS Customization
description: >
  Pop with the GNOME desktop is highly customizable!  See here to get started making your desktop just right for you.
keywords:
  - Pop_OS!
  - GNOME
  - Extensions
  - Customize
  - Desktop
  - Tweaks

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

The GNOME desktop environment is highly customizable. Visit [extensions.gnome.org](https://extensions.gnome.org) to install, remove, and configure currently installed extensions.  A web browser plugin is needed to interact with the site, and it will prompt for installation if needed.  Remember to refresh the page after the plugin is installed.

**NOTE:** There are many extensions to choose from! If one isn't currently working, or breaks with an update, then try a different extension to see if it works better.

---

## Included Extensions

Pop!\_OS includes the GNOME Extensions app by default. Which lists both system-installed, and user-installed extensions.

![extensions-app-window](/images/customize-gnome/extensions-app-window.png)

Each extension has options for customizing settings (if supported in Extension metadata), or viewing the webpage for the extension to learn more information. The Extensions app also allows you to quickly enable and disable installed extensions.

Pop!\_OS includes the following extensions by default. In most cases, these extensions should be left **enabled**.

### [Cosmic Dock](https://github.com/pop-os/cosmic-dock)

A fork of Dash to Dock customized for Pop!\_OS.

![cosmic-dock-close](/images/customize-gnome/cosmic-dock-close.png)

**NOTE:** It is **not** recommended to have both Cosmic Dock and Dash-t0-Dock installed an enabled at the same time. User Interface (UI) bugs will occur. Choose one or the other.

### [Cosmic Workspaces](https://github.com/pop-os/cosmic-workspaces)

A fork of this [extension](https://github.com/RensAlthuis/vertical-overview) designed to return the GNOME workspaces to a vertical layout rather than the horizontal view introduced in GNOME 40.

Workspace behaviors can be edited in Settings.

![workspaces-and-settings](/images/customize-gnome/workspaces-and-settings.png)

### [Desktop Icons NG (DING)](https://gitlab.com/rastersoft/desktop-icons-ng)

Since Desktop icons have been deprecated in mainline GNOME, Pop!_OS includes a GNOME extension to return this feature.

### [Pop COSMIC](https://github.com/pop-os/cosmic)

![cosmic-dock](/images/customize-gnome/cosmic-dock.png)

Computer Operating System Main Interface Components **(C.O.S.M.I.C.)**

COSMIC is the name for the main shell components in Pop_Shell (separate from the tiling and window-management components). It makes the following changes to the standard GNOME Shell environment:

- Dock
- Multi-Monitor improvements
- Configuration options
- Separated Workspaces overview from Applications.

Most components can be configured to fit the user's workflow and preferences, with two main presets for both keyboard-focused and mouse-focused navigation and use.

### [Pop Shell](https://github.com/pop-os/shell)

![pop-shell](/images/customize-gnome/pop-shell.png)

An extension designed to add `i3wm`-style auto-tiling and related keyboard navigation features to the GNOME Desktop.

For details refer to the Github page (linked above) or view the tutorial content [here](/articles/pop-basics)

### [System76 Power](https://github.com/pop-os/gnome-shell-extension-system76-power)

This extension assists with power-management and battery conservation. It adds options for switching CPU performance modes, and enabling/disabling GPU hardware on applicable models.

For more information on System76 Power refer to the Github page (above) and/or this [support article](/articles/graphics-switch-pop)

### [Ubuntu AppIndicators](https://github.com/ubuntu/gnome-shell-extension-appindicator)

The Ubuntu AppIndicators extension enables user-installed applications to display an icon or app-menu in the `top-bar`. For example, in the screenshots below, the **Discord** and **Slack** [icons](/articles/customize-gnome#pop-shell) are present because of this extension.

The appearance and features of each icon vary by the application and the developer features enabled.

## GNOME Tweaks Tool

Adding and customizing certain features in GNOME desktop environments requires either editing system files or using a tool like GNOME Tweaks.

GNOME Tweaks is available in the **Pop!\_Shop**.

Once installed, users can use GNOME Tweaks (appears as Tweaks after install) to:

- Customize their GNOME theme (icons, colors, etc.).
- Edit additional mouse and keyboard settings.
- Change window decorations, such as adding a maximize button, or choosing where app menus appear.

![gnome-tweaks-theming](/images/customize-gnome/gnome-tweaks-themeing.png)

![tweaks-keyboard-mouse](/images/customize-gnome/tweaks-keyboard-mouse.png)

![tweaks-winow-titlebars](/images/customize-gnome/tweaks-window-bars.png)

**NOTE:** GNOME Tweaks is the easiest way to apply installed GNOME themes. However, installing custom themes also requires the [User Themes](#user-themes) extension be installed (see below).

## 3rd Party Extension Examples

### [User Themes](https://extensions.gnome.org/extension/19/user-themes/)

This extension allows for the desktop to be themed in further ways than default. Many themes and extensions can be installed from [opendesktop.org](https://www.opendesktop.org/s/Gnome), among others. This extension is not installed by default in Pop!_OS.

---

### [Backslide](https://extensions.gnome.org/extension/543/backslide/)

![backslide](/images/customize-gnome/backslide-new.png)

This extension is a wallpaper slideshow for your desktop.  After choosing a folder of pictures, they will be rotated automatically at a predefined time period.

---

### [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)

![caffeine](/images/customize-gnome/caffeine.png)

Caffeine is an extension that keeps your computer "awake" by allowing users to enable/disable auto suspend or screensaver with the touch of a button.

It's represented by a small coffee-cup icon on the `top-bar`. When activated, steam-lines come out of the cup, when disabled, there is no steam.

---

### [GSConnect](https://extensions.gnome.org/extension/1319/gsconnect/)

GSConnect is a re-implementation of the popular KDE application KDE Connect. GS connect allows users to pair their phone with GNOME (mobile app required). GSConnect will then sync SMS messages and/or all phone notifications with the desktop. It also allows for file transfer or remote-control options.

---

### [Lock keys](https://extensions.gnome.org/extension/36/lock-keys/)

![lock keys](/images/customize-gnome/lock-keys-3.png)

The lock keys extension notifies you when you press the Caps Lock or the Num Lock and let's you know at all times if you have either button active.

---

## [Sound Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)

Extension Disabled | Extension Enabled
---------|----------
 ![sound-output-no](/images/customize-gnome/without-sound-devices.png) | ![sound-input-yes](/images/customize-gnome/with-sound-devices.png)

The Sound Output Chooser adds a quick change option to the system menu in the top right of the screen.  This allows for changing audio inputs and outputs and adjusting volume levels quickly.
