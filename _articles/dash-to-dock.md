---
layout: article
title: Move or Customize the Launcher
description: >
    Learn how to move the launcher to the bottom of the screen and customize other settings.
keywords:
    - Launcher
    - Bottom
    - Left
    - Moving
    - Dock
    - Dash to Dock
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /moveLauncher
  - /movelauncher
  - /articles/move-launcher/
section: pop-ubuntu

---

Pop!\_OS and Ubuntu both contain an application launcher on the left side of the screen. In Pop!\_OS, the launcher is only visible when the Activities menu is open. In Ubuntu, the launcher is always visible. By installing a GNOME extension called Dash to Dock, you can adjust this preference, move the launcher to the bottom of the screen, and more.

# Dash to Dock on Pop!\_OS

To install Dash to Dock on Pop!\_OS, visit [the extension's page](https://extensions.gnome.org/extension/307/dash-to-dock/) in Firefox.

![Dash to Dock page in Firefox](/images/dash-to-dock/pop-firefox1.png)

If you see a purple message at the top about GNOME Shell integration, click the link to install the Firefox browser extension, then click the blue "Continue to Installation" button, and finally the blue "Add" button.

![Installing the Firefox extension](/images/dash-to-dock/pop-firefox2.png)

![Installing the Firefox extension](/images/dash-to-dock/pop-firefox3.png)

After refreshing the web page, you should see an On/Off switch at the top right of the page. Click the switch to toggle it to the "On" position.

![Enabling Dash to Dock](/images/dash-to-dock/pop-firefox4.png)

On the resulting pop-up, click Install to download and install the extension.

![Enabling Dash to Dock](/images/dash-to-dock/pop-install-extension.png)

At this point, Firefox can be closed. The launcher will now display on the left side of the screen, similar to Ubuntu.

![Launcher on left side](/images/dash-to-dock/pop-launcher1.png)

To customize the launcher's settings, right-click on the "Show Applications" button and click "Dash to Dock Settings."

![Dash to Dock Settings](/images/dash-to-dock/pop-launcher2.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the launcher on, such as the bottom of the screen:

![Launcher at bottom of screen](/images/dash-to-dock/pop-launcher3.png)

You can also choose to extend the dock into "Panel mode," which looks more similar to Ubuntu:

![Launcher with Panel Mode](/images/dash-to-dock/pop-launcher4.png)

# Dash to Dock on Ubuntu

Ubuntu includes a lightweight version of Dash to Dock, which is why the launcher already displays on the left side of the screen by default. When you enable the full version of Dash to Dock, it will override the built-in version.

To install Dash to Dock on Ubuntu, you will first need to install the "native host connector," which allows Firefox to install and remove GNOME Shell extensions. This component is installed by default in Pop!\_OS, but it is not installed by default in Ubuntu. Open a terminal and run this command to install the native host connector:

```
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

At this point, Firefox can be closed. The launcher will now display on the left side of the screen, but not in Panel mode.

![Launcher on left side](/images/dash-to-dock/ubuntu-launcher1.png)

To customize the launcher's settings, right-click on the "Show Applications" button and click "Dash to Dock Settings."

![Dash to Dock Settings](/images/dash-to-dock/ubuntu-launcher2.png)

In the Dash to Dock Settings window, you can choose which screen edge to display the launcher on, such as the bottom of the screen:

![Launcher at bottom of screen](/images/dash-to-dock/ubuntu-launcher3.png)

---

# Moving the Launcher in 16.04 LTS

Ubuntu 16.04 LTS includes its own launcher as part of the Unity desktop environment. If you'd like to put the launcher at the bottom of the screen in 16.04, enter this command in a terminal:

```
gsettings set com.canonical.Unity.Launcher launcher-position 'Bottom'
```

![Setting the Launcher to the bottom](/images/move-launcher/Step-1.png)

This will set the launcher to the bottom of the screen:

![Lanncher on the bottom](/images/move-launcher/Step-2.png)

To reset the position of the launcher to the left, run this command instead:

```
gsettings set com.canonical.Unity.Launcher launcher-position 'Left'
```

![Resetting the Launcher](/images/move-launcher/Step-3.png)
