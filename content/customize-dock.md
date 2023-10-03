---
title: Dock (Move or Customize)
description: >
  How to move the Dock to different areas of the screen and customize other settings.
keywords:
  - Launcher
  - Bottom
  - Left
  - Moving
  - Dock
  - Dash to Dock
  - Pop Dock

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true

redirect_from:
  - /movelauncher
  - /articles/move-launcher
---

Pop!\_OS and Ubuntu both contain an application dock on the bottom of the screen. You can adjust this preference, move the dock to the bottom of the screen, and more in <u>Settings</u>.

## Default Dock on Pop!\_OS

Pop!\_OS includes a lightweight version of Dash to Dock, which is why the dock already displays on the bottom of the screen by default.

![Stock Pop Dock](/images/customize-dock/pop-dock.png)

## Default Dock on Ubuntu

Ubuntu includes a lightweight version of Dash to Dock, which is why the dock already displays on the left side of the screen by default.

![Stock Ubuntu Dock](/images/customize-dock/ubuntu-dock.png)

## dconf Editor

Since both Ubuntu Dock and COSMIC Dock are based on Dash to Dock they have the same settings which can be changed using <u>dconf editor</u>. This can be installed either though the <u>Pop!\_Shop</u> (if you are on Pop!\_OS), <u>Ubuntu Software</u> (if you are on Ubuntu) or with this command on either OS:

```bash
sudo apt install dconf-editor
```

![Dash to Dock in dconf](/images/customize-dock/dash-to-dock.png)
