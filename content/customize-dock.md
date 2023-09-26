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

Pop!\_OS includes a lightweight version of Dash to Dock, which is why the dock already displays on the bottom of the screen by default. 

![Stock Pop Dock](/images/customize-dock/pop-dock.png)

If you need more options or want to make more changes to the dock you can install Dash to Dock using the steps below.

## Dash to Dock on Pop!\_OS

When using Dash to Dock on Pop!\_OS it can effect the default Dock as it was forked from that project. To install Dash to Dock on Pop!\_OS, visit [the extension's page](https://extensions.gnome.org/extension/307/dash-to-dock/) in Firefox.

![Dash to Dock page in Firefox](/images/customize-dock/dash-to-dock-page.png)

If you see a purple message at the top about GNOME Shell integration, click the link to install the Firefox browser extension, then click the blue "Continue to Installation" button, and finally the blue "Add" button.

![Installing the Firefox extension](/images/customize-dock/pop-install-dash-to-dock1.png)

After refreshing the web page, you should see an On/Off switch at the top right of the page. Click the switch to toggle it to the "On" position.

![Installing the Firefox extension](/images/customize-dock/pop-install-dash-to-dock2.png)

On the resulting pop-up, click Install to download and install the extension.

![Installing the Firefox extension](/images/customize-dock/pop-install-dash-to-dock3.png)

At this point, Firefox can be closed. The dock will display on the bottom of the screen. You will want to disable COSMIC Dock in the <u>Extension</u> application as well.

![Pop!_OS Extension application](/images/customize-dock/pop-gnome-extensions.png)

To customize the dock's settings, click on the settings button for Dash to Dock in the <u>Extension</u> application"

![Dash to Dock Settings](/images/customize-dock/pop-dash-to-dock-settings.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the launcher on, such as the bottom of the screen. You can also choose to extend the dock into "Panel mode," which looks similar to Ubuntu:

## Default Dock on Ubuntu

Ubuntu includes a lightweight version of Dash to Dock, which is why the dock already displays on the left side of the screen by default. 

![Stock Ubuntu Dock](/images/customize-dock/ubuntu-dock.png)

If you need more options or want to make more changes to the dock you can install Dash to Dock using the steps below.

## Dash to Dock on Ubuntu

When using Dash to Dock on Ubuntu it can effect the default Dock as it was forked from that project. When you enable the full version of Dash to Dock, it will override the built-in version.

To install Dash to Dock on Ubuntu, you will first need to install the "native host connector," which allows Firefox to install and remove GNOME Shell extensions and the GNOME Shell <u>Extension</u> application. This component is installed by default in Pop!\_OS, but it is not installed by default in Ubuntu. Open a terminal and run this command to install the native host connector:

```bash
sudo apt install chrome-gnome-shell gnome-shell-extensions
```

Enter your password and press "y" to confirm if necessary.

![Installing the needed packages](/images/customize-dock/ubuntu-packages.png)

Next, visit [the extension's page](https://extensions.gnome.org/extension/307/dash-to-dock/) in Firefox.

![Dash to Dock page in Firefox](/images/customize-dock/dash-to-dock-page.png)

If you see a purple message at the top about GNOME Shell integration, click the link to install the Firefox browser extension, then allow the chrome-gnome-shell addon to access the desktop to make changes. Now click the blue "Continue to Installation" button, and finally the blue "Add" button.

![Installing the Firefox extension](/images/customize-dock/ubuntu-install-dash-to-dock1.png)

![Installing the Firefox extension](/images/customize-dock/ubuntu-install-dash-to-dock2.png)

After refreshing the web page, you should see an On/Off switch at the top right of the page. Click the switch to toggle it to the "On" position. On the resulting pop-up, click Install to download and install the extension.

![Installing the GNOME Shell extension](/images/customize-dock/ubuntu-install-dash-to-dock3.png)

At this point, Firefox can be closed. The dock will now display on the bottom of the screen, but not in Panel mode. You will want to disable Ubuntu Dock in the <u>Extensions</u> application:

![Ubuntu Extension application 1](/images/customize-dock/ubuntu-gnome-extensions1.png)

Then enable Manually Installed extensions and then enable Dash to Dock:

![Ubuntu Extension application 2](/images/customize-dock/ubuntu-gnome-extensions2.png)

To customize the dock's settings, right-click on the "Show Applications" button and click "Dash to Dock Settings."

![Dash to Dock Settings](/images/customize-dock/ubuntu-dash-to-dock-settings1.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the dock on, such as the left or right of the screen:

![Dash to Dock Settings](/images/customize-dock/ubuntu-dash-to-dock-settings2.png)
