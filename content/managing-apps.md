---
title: Installing, Updating, and Removing Applications
description: >
  Quick guide to installing, updating, and removing apps on your device.
keywords:
  - Apps
  - Install
  - Update
  - Remove
  - Delete

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

## Installing & Uninstalling Applications via Terminal

Launch the Terminal `SUPER` + `T` to Install applications using a command line interface. Terminal commands instruct package managers to retrieve application installation packages from repositories.

### Flatpaks & .Deb Files

**Flatpaks** will install a “containerized” version of the software. This means the software runs in its own sandbox, and the installation will include all dependencies and libraries required by the application. Flatpaks pull all dependencies from flathub.org, while installing with apt will pull from Ubuntu repos.

Substitute `[packagename]` with the desired application (do not include brackets in the command).

Apt install:

```bash
apt install [packagename]
```

Apt uninstall:

```bash
sudo apt remove [packagename]
```

Apt uninstall (alternative):

```bash
sudo apt purge [packagename]
```

Flatpak install:

```bash
flatpak install [packagename]
```

Flatpak uninstallL

```bash
flatpak uninstall [packagename]
```

## Updating POP!\_OS via Terminal

1. Open a terminal by pressing `SUPER` + `T` and type the following commands:

```bash
sudo apt update
```

```bash
sudo apt dist-upgrade
```

2. Answer `Y` and enter the password when prompted.

![yes](/images/managing-apps/IURA_22_24.png)

3. If an error appears, read the error message and run any commands it suggests.

![error](/images/managing-apps/IURA_22_25.png)

## Pop!\_OS 24.04

### Installing an Application

Cosmic includes a graphical user interface (GUI) called the Cosmic Store for easy installation and management of open source applications.

1. Open Cosmic Store by clicking the icon in the dock, or press `SUPER` and type “Cosmic Store”.

![cosmic store icon](/images/managing-apps/IURA_24_1.png)

2. Explore apps or type the application name in the search field.

![cosmic store search](/images/managing-apps/IURA_24_2.png)

3. Select the system or flathub version.

![app download type version](/images/managing-apps/IURA_24_3.png)

### Installing an Application Not Included in the Cosmic Store.

The Cosmic Store does not include all applications available for installation in Pop!_OS. Use the web to search for and install additional applications.

1. Search for the application download link and instructions online.

![cosmic app google search](/images/managing-apps/IURA_24_4.png)

2. Download the application. When given file options, choose 64 bit .deb as the file type.

![cosmic deb file on download](/images/managing-apps/IURA_22_5.png)

3. After downloading, go to the Downloads folder and double click the .deb file.

![cosmic store icon](/images/managing-apps/IURA_24_5.png)

4. Cosmic Store will open automatically and present you with the option to install the file.

![cosmic store downloaded file installation](/images/managing-apps/IURA_24_6.png)

### Managing Repositories

Add, remove, and edit repositories using Repoman. Repoman allows users to add Personal Package Archives (PPAs). PPAs are created by developers to distribute software not included in default repositories. Users may want to add a PPA if their software is not included in the Pop!_Shop, or they may want to remove PPA’s after uninstalling a package.

**Caution:** Adding PPA’s allows users to install software that has not been validated by System76 or other trusted linux repositories. PPA’s may not be vetted against packages that introduce security vulnerabilities. Users should take caution and only add PPA’s that they trust.

1. Press `SUPER` and search for “Repoman"

![cosmic repoman](/images/managing-apps/IURA_24_7.png)

2. Click on the Extra Sources tab. There will be options to add repositories with the Plus button.

![cosmic repoman extra sources](/images/managing-apps/IURA_24_8.png)

### Adding a Repository

1. Click the plus button.

![cosmic repoman add icon](/images/managing-apps/IURA_24_9.png)

2. Enter the source details for the repository and click Add.

![cosmic repoman add source](/images/managing-apps/IURA_24_10.png)

3. The repository will appear in the sources list.

![cosmic repoman source list](/images/managing-apps/IURA_24_11.png)

### Removing a Repository

Select a repository from the list and then click on the trashcan icon to delete the repository.

![cosmic repoman removing source list](/images/managing-apps/IURA_24_12.png)

### Launching Applications

Find and start installed applications using these four methods.

Use the Launcher to quickly find and launch installed applications. Pressing The `SUPER` key displays the Launcher. Search for applications by name, then hit `Enter` to launch the application.

![cosmic launch app](/images/managing-apps/IURA_24_13.png)

View installed applications with Show Applications. Display installed applications by clicking Show Applications in the dock.

![cosmic applications icon](/images/managing-apps/IURA_24_14.png)

![cosmic store apps](/images/managing-apps/IURA_24_15.png)

Find applications by clicking Applications in the upper left corner of the home screen.

![cosmic applications](/images/managing-apps/IURA_24_16.png)

### Add Favorite Applications to the Dock

Add frequently used applications to the dock for quicker access. Applications that appear on the dock can be added or removed as favorites.

![cosmic dock](/images/managing-apps/IURA_24_17.png)

Pin applications to the dock by right clicking and selecting `Pin to App Tray`.

![cosmic pin to app tray](/images/managing-apps/IURA_24_18.png)

To remove applications from the dock, right-click the app and select `Pin to app Tray`. This will uncheck the option and remove the application from the dock.

![cosmic remove icon to tray](/images/managing-apps/IURA_24_19.png)

### Switching Between Running Applications

Use keyboard shortcuts to switch between running applications.

| Shortcut                                                                | Action                                   |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| <kbd>SUPER</kbd></kbd> + <kbd>Tab</kbd>                                 | Switch apps                              |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd> + <kbd>Shift</kbd>                    | Switch apps in reverse order             |

### Updating Installed Applications

Update Pop!_OS and installed applications using the Cosmic Store.

1. Open the Cosmic Store by clicking the icon in the dock. Click `Updates` on the sidebar.

2. Select `Update All`.

![cosmic store update](/images/managing-apps/IURA_24_20.png)

#### Updating via Terminal

```bash
sudo apt update
```

```bash
sudo apt upgrade
```

## Pop!\_OS 22.04

### Installing an Application

Pop!_OS includes a GUI (Graphical User Interface) called the Pop!_Shop for easy installation and management of open source applications

1. Open the Pop! Shop by clicking the rocket ship icon in the dock, or press SUPER and type “pop shop”.

![pop shop](/images/managing-apps/IURA_22_1.png)

2. Explore apps in categories, or type the application name in the search field.

![pop shop search](/images/managing-apps/IURA_22_2.png)

3. Select the .deb or flatpak version.

![pop shop select app version](/images/managing-apps/IURA_22_3.png)

4. Click **Install**

### Installing an Application Not Included in the Pop!_Shop (GUI)

The Pop!_Shop does not include all applications available for installation in Pop!_OS. Use the web to search for and install additional applications.

1. Search for the application download link and instructions online.

![pop browser app search](/images/managing-apps/IURA_22_4.png)

2. Download the application. When given file options, choose 64 bit .deb as the file type.

![pop download .deb app ](/images/managing-apps/IURA_22_5.png)

3. After downloading, go to the Downloads folder and double click the .deb file.

![pop downloaded .deb file](/images/managing-apps/IURA_22_6.png)

4. Open the file in Pop!_OS’s default handler for .deb files (Eddy).

![pop downloaded .deb file](/images/managing-apps/IURA_22_7.png)

5. Click in Install, enter the user password if prompted. Install using Eddy.

![pop eddy](/images/managing-apps/IURA_22_8.png)

### Managing Repositories

Add, remove, and edit repositories using Repoman. Repoman allows users to add Personal Package Archives (PPAs). PPAs are created by developers to distribute software not included in default repositories. Users may want to add a PPA if their software is not included in the Pop!_Shop, or they may want to remove PPA’s after uninstalling a package.

**Caution:** Adding PPA’s allows users to install software that has not been validated by System76 or other trusted linux repositories. PPA’s may not be vetted against packages that introduce security vulnerabilities. Users should take caution and only add PPA’s that they trust.

1. Access Repoman by launching the Pop!_Shop and click the `System Software Sources` or `Ctrl` + `S`.

![pop system software sources option](/images/managing-apps/IURA_22_9.png)

2. Click on the Extra Sources tab. There will be options to add repositories with the Plus button.

![pop repoman extrasource](/images/managing-apps/IURA_22_10.png)

### Adding a Repository

1. Click the Plus button.

![pop repoman extra source tab](/images/managing-apps/IURA_22_11.png)

2. Enter the source details for the repository and click Add.

![pop repoman add source](/images/managing-apps/IURA_22_12.png)

3. The repository will appear in the sources list.

![pop repoman added source](/images/managing-apps/IURA_22_13.png)

### Removing a repository

Select a repository from the list and then click on the trashcan icon to delete the repository

![pop repoman remove source](/images/managing-apps/IURA_22_14.png)

### Launching applications

Find and start installed applications using these four methods.

Use the Launcher to quickly find and launch installed applications. Pressing The `SUPER` key displays the Launcher. Search for applications by name, then hit Enter to launch the application.

![pop app launcher](/images/managing-apps/IURA_22_15.png)

**Use a single command to start applications**. Pressing `Alt` + `F2` displays a prompt for running commands. Enter the exact name of the application, then hit **Enter**.

![pop run a command](/images/managing-apps/IURA_22_16.png)

**View installed applications** with **Show Applications**. Display installed applications by clicking **Show Applications** in the dock.

![pop shop view applications](/images/managing-apps/IURA_22_17.png)

Find applications by clicking Applications in the upper left corner of the home screen.

![pop applications](/images/managing-apps/IURA_22_18.png)

### Add Favorite Applications to the dock

Add frequently used applications to the dock for quicker access. Applications that appear on the dock can be added or removed as favorites.

![pop dock](/images/managing-apps/IURA_22_19.png)

Pin applications to the dock by right clicking and selecting **Pin to Dash**.

![pop pin to dash](/images/managing-apps/IURA_22_20.png)

Remove applications from the dock by right clicking and choosing Remove from Favorites.

![pop remove from favorites](/images/managing-apps/IURA_22_21.png)

### Switching Between Running Applications

Use keyboard shortcuts to switch between running applications.

| Shortcut                                                                | Action                                   |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd>                                       | Switch apps                              |
| <kbd>SUPER</kbd> + <kbd>Tab</kbd> + <kbd>Shift</kbd>                    | Switch apps in reverse order             |
| <kbd>SUPER</kbd> + <kbd>`</kbd>                                         | Switch windows of current app            |
| <kbd>SUPER</kbd> + <kbd>`</kbd> + <kbd>Shift</kbd>                      | Switch windows of current app in reverse order |

### Updating Installed Applications

Update Pop!_OS and installed applications using the Pop!_Shop

1. Open the Pop!_Shop by clicking the rocket ship icon in the dock. Click `Updates & Installed Software` in the top middle of the window.

![pop shop updates & installed software](/images/managing-apps/IURA_22_22.png)

2. Select **Update All**.

![pop updates](/images/managing-apps/IURA_22_23.png)
