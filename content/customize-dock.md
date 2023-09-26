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

Pop!\_OS and Ubuntu both contain an application dock on the left side of the screen. You can adjust this preference, move the dock to the bottom of the screen, and more in <u>Settings</u>.

## Default Dock on Pop!\_OS

![Stock Pop Dock](/images/customize-dock/pop-dock.png)

## Dash to Dock on Pop!\_OS

When using Dash to Dock on Pop!\_OS it can effect the default Dock as it was forked from that project. To install Dash to Dock on Pop!\_OS, visit [the extension's page](https://extensions.gnome.org/extension/307/dash-to-dock/) in Firefox.

![Dash to Dock page in Firefox](/images/dash-to-dock/pop-firefox1.png)

If you see a purple message at the top about GNOME Shell integration, click the link to install the Firefox browser extension, then click the blue "Continue to Installation" button, and finally the blue "Add" button.

![Installing the Firefox extension](/images/dash-to-dock/pop-firefox2.png)

![Installing the Firefox extension](/images/dash-to-dock/pop-firefox3.png)

After refreshing the web page, you should see an On/Off switch at the top right of the page. Click the switch to toggle it to the "On" position.

![Enabling Dash to Dock](/images/dash-to-dock/pop-firefox4.png)

On the resulting pop-up, click Install to download and install the extension.

![Enabling Dash to Dock](/images/dash-to-dock/pop-install-extension.png)

At this point, Firefox can be closed. The dock will display on the left side of the screen.

![Dock on left side](/images/dash-to-dock/pop-launcher1.png)

To customize the dock's settings, right-click on the "Show Applications" button and click "Dash to Dock Settings."

![Dash to Dock Settings](/images/dash-to-dock/pop-launcher2.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the launcher on, such as the bottom of the screen:

![Dock at bottom of screen](/images/dash-to-dock/pop-launcher3.png)

You can also choose to extend the dock into "Panel mode," which looks similar to Ubuntu:

![Dock with Panel Mode](/images/dash-to-dock/pop-launcher4.png)

## Default Dock on Pop!\_OS

Ubuntu includes a lightweight version of Dash to Dock, which is why the dock already displays on the left side of the screen by default. 

![Stock Ubuntu Dock](/images/customize-dock/ubuntu-dock.png)

## Dash to Dock on Ubuntu

When using Dash to Dock on Ubuntu it can effect the default Dock as it was forked from that project. When you enable the full version of Dash to Dock, it will override the built-in version.

To install Dash to Dock on Ubuntu, you will first need to install the "native host connector," which allows Firefox to install and remove GNOME Shell extensions. This component is installed by default in Pop!\_OS, but it is not installed by default in Ubuntu. Open a terminal and run this command to install the native host connector:

```bash
sudo apt install chrome-gnome-shell
```

Enter your password and press "y" to confirm if necessary.

![Installing the native host connector](/images/dash-to-dock/ubuntu-native-host-connector.png)

Next, visit [the extension's page](https://extensions.gnome.org/extension/307/dash-to-dock/) in Firefox.

![Dash to Dock page in Firefox](/images/dash-to-dock/ubuntu-firefox1.png)

If you see a purple message at the top about GNOME Shell integration, click the link to install the Firefox browser extension, then click the blue "Continue to Installation" button, and finally the blue "Add" button.

![Installing the Firefox extension](/images/dash-to-dock/ubuntu-firefox2.png)

![Installing the Firefox extension](/images/dash-to-dock/ubuntu-firefox3.png)

After refreshing the web page, you should see an On/Off switch at the top right of the page. Click the switch to toggle it to the "On" position.

![Enabling Dash to Dock](/images/dash-to-dock/ubuntu-firefox4.png)

On the resulting pop-up, click Install to download and install the extension.

![Enabling Dash to Dock](/images/dash-to-dock/ubuntu-install-extension.png)

At this point, Firefox can be closed. The dock will now display on the left side of the screen, but not in Panel mode.

![Dock on left side](/images/dash-to-dock/ubuntu-launcher1.png)

To customize the dock's settings, right-click on the "Show Applications" button and click "Dash to Dock Settings."

![Dash to Dock Settings](/images/dash-to-dock/ubuntu-launcher2.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the dock on, such as the bottom of the screen:

![Dock at bottom of screen](/images/dash-to-dock/ubuntu-launcher3.png)
