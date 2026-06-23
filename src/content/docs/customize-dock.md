---
title: Dock (Move or Customize)
description: >
  Move the Dock to different areas of the screen and customize.
keywords:
  - Launcher
  - Bottom
  - Left
  - Moving
  - Dock
  - Dash to Dock
  - COSMIC Dock
  - Ubuntu Dock

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true

redirect_from:
  - /movelauncher
  - /articles/move-launcher
---

Pop!\_OS and Ubuntu both contain an application dock on the screen. The location of the dock, as well as other dock settings, can be adjusted in <u>Settings</u>.

## Default Dock on Pop!\_OS

Pop!\_OS's dock is positioned along the bottom edge of the screen by default.

![Stock Pop Dock](/images/customize-dock/pop-dock.png)

## Default Dock on Ubuntu

Ubuntu's dock is positioned along the left edge of the screen by default.

![Stock Ubuntu Dock](/images/customize-dock/ubuntu-dock.png)

## dconf Editor

Since both Ubuntu Dock and COSMIC Dock are based on Dash to Dock they have the same settings which can be changed using <u>dconf editor</u>. This can be installed either though the <u>Pop!\_Shop</u> (if you are on Pop!\_OS), <u>Ubuntu Software</u> (if you are on Ubuntu) or with this command on either OS:

```bash
sudo apt install dconf-editor
```

![Dash to Dock in dconf](/images/customize-dock/dash-to-dock.png)
