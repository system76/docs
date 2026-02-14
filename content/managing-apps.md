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

## Using the COSMIC Store

### Installing an Application

COSMIC includes a graphical user interface (GUI) called the COSMIC Store for easy installation and management of applications.

1. Open the COSMIC Store by clicking the icon in the dock, or by pressing `Super` to open the launcher and then searching for “COSMIC Store”.

![cosmic store icon](/images/managing-apps/IURA_24_1.png)

2. Explore apps or type the application name in the search field.

![cosmic store search](/images/managing-apps/IURA_24_2.png)

3. Select the system or flathub version.
    - Flatpak packages (installed from Flathub by default) are generally more up-to-date. They'll only be available to the user who installed them.
    - System (.deb) packages (installed from the Ubuntu or Pop!_OS repositories by default) are available to all user accounts on the computer.

![app download type version](/images/managing-apps/IURA_24_3.png)

### Installing an Application Not Listed in the COSMIC Store

The COSMIC Store lists applications available in the configurated software repositories. By default, these are [Flathub](https://flathub.org), [the Ubuntu repositories](https://packages.ubuntu.com), and the first-party Pop!\_OS repositories. If an application isn't available from one of these repositories, you can use the web to search for and install it from another source instead.

1. Search for the application download link and instructions online.

![cosmic app google search](/images/managing-apps/IURA_24_4.png)

2. Download the application. When given multiple options of file type, look for a 64-bit .deb or Debian/Ubuntu option.

![cosmic deb file on download](/images/managing-apps/IURA_22_5.png)

3. After downloading, go to the Downloads folder and double-click the .deb file.

![cosmic store icon](/images/managing-apps/IURA_24_5.png)

4. The COSMIC Store will open and present you with the option to install the file.
    - When installing this way, the application may install a new repository so COSMIC Store can check for updates in the future, or you may need to download updates manually the same way you downloaded the initial installer.

![cosmic store downloaded file installation](/images/managing-apps/IURA_24_6.png)

### Managing Repositories

You can add, remove, and edit software repositories using Repoman. This includes .deb software repositories (sometimes called PPAs, or Personal Package Archives), and Flatpak software repositories.

**Caution:** Third-party repositories allow users to install software that has not been validated by System76 or other trusted Pop!_OS maintainers. Security vulerabilities or other bugs could be present in third-party software. Users should take caution and only add software repositories they trust.

1. Press `Super` to open the launcher, then search for “Repoman".

![cosmic repoman](/images/managing-apps/IURA_24_7.png)

2. Click on the Extra Sources tab to manage .deb repositories (PPAs), or the Flatpak tab to manage Flatpak repositories.

![cosmic repoman extra sources](/images/managing-apps/IURA_24_8.png)

#### Adding a Repository

1. Click the `+` button in the bottom-left corner.

![cosmic repoman add icon](/images/managing-apps/IURA_24_9.png)

2. Enter the source details for the repository and click Add.

![cosmic repoman add source](/images/managing-apps/IURA_24_10.png)

3. The repository will appear in the sources list.

![cosmic repoman source list](/images/managing-apps/IURA_24_11.png)

#### Removing a Repository

Select a repository from the list, then click on the trashcan icon to delete the repository.

![cosmic repoman removing source list](/images/managing-apps/IURA_24_12.png)

### Updating Installed Applications

The COSMIC Store can update any applications installed from the software repositories configured on the system.

1. Open the COSMIC Store.
2. Click `Updates` on the sidebar.
3. Select `Update all` in the top-right corner.

![cosmic store update](/images/managing-apps/IURA_24_20.png)

## Using the Terminal

### Installing Applications

Launch the Terminal (`SUPER` + `T`) to install applications using a command line interface. The command to use depends on which package manager you're using for an app.

### Flatpaks

**Flatpaks** are a modern type of package that utilize containerization and sandboxing for increased stability and security. Installing a Flatpak also installs all of its dependencies and libraries, and different Flatpak applications can use different versions of their dependencies at the same time if necessary. [Flathub](https://flathub.org/) is the default source for most Flatpak applications in Pop!_OS.

To install an application as a Flatpak:

```
flatpak install --app [packagename]
```

Flatpak will ask which app to install if multiple apps match the package name you provided. If you omit the `--app` flag, you'll also see libraries that match the package name.

To uninstall an application as a Flatpak:

```
flatpak uninstall [packagename]
```

### .deb Files

**.deb files** (short for Debian files) are an older packaging format that forms the base of the operating system. They're installed by the `dpkg` or `apt` utilities (with `apt` also handling dependency resolution). Only one version of a dependency can usually be installed at a time with .deb files. [The Ubuntu repositories](https://packages.ubuntu.com/) are the primary source of non-default .deb packages available to install in Pop!_OS and Ubuntu. (System packages installed by default are sometimes sourced from the first-party Pop!_OS repositories instead.)

To install an application with apt:

```bash
sudo apt install [packagename]
```

To uninstall an application with apt:

```bash
sudo apt autoremove --purge [packagename]
```

The `autoremove` command removes dependencies that are no longer needed in addition to the app itself. The `--purge` flag removes system-wide configuration (such as from the `/etc/` directory) when uninstalling the package. User-specific configuration (in the `/home/` directory) is usually retained when removing packages with apt.

### Updating via the Terminal

#### Updating System-wide Software (.deb)

1. Open a terminal by pressing `Super` + `T` and type the following commands:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt autoremove --purge
```

2. After each command, if prompted, answer `Y` and enter your password.

![yes](/images/managing-apps/IURA_22_24.png)

3. If an error appears, read the error message and run any commands it suggests.

![error](/images/managing-apps/IURA_22_25.png)

#### Updating Flatpaks

1. Open a terminal by pressing `Super` + `T` and type the following commands:

```bash
flatpak update
flatpak uninstall --unused
```

## Using the Pop!_Shop (for Pop!_OS 22.04 and below)

### Installing an Application

Pop!_OS 22.04 and below include the Pop!_Shop, which looks different from the COSMIC Store but performs most of the same functions.

1. Open the Pop! Shop by clicking the rocket ship icon in the dock, or press SUPER and search for “pop shop”.

![pop shop](/images/managing-apps/IURA_22_1.png)

2. Explore apps in categories, or type the application name in the search field.

![pop shop search](/images/managing-apps/IURA_22_2.png)

3. Select the .deb or flatpak version.

![pop shop select app version](/images/managing-apps/IURA_22_3.png)

4. Click **Install**.

### Installing an Application Not Listed in the Pop!_Shop

The Pop!_Shop lists applications available in the configurated software repositories. By default, these are [Flathub](https://flathub.org), [the Ubuntu repositories](https://packages.ubuntu.com), and the first-party Pop!\_OS repositories. If an application isn't available from one of these repositories, you can use the web to search for and install it from another source instead.

1. Search for the application download link and instructions online.

![pop browser app search](/images/managing-apps/IURA_22_4.png)

2. Download the application. When given multiple options of file type, look for a 64-bit .deb or Debian/Ubuntu option.

![pop download .deb app ](/images/managing-apps/IURA_22_5.png)

3. After downloading, go to the Downloads folder and double-click the .deb file.

![pop downloaded .deb file](/images/managing-apps/IURA_22_6.png)

4. Open the file in Eddy, the default hanlder for .deb files in older versions of Pop!_OS.

![pop downloaded .deb file](/images/managing-apps/IURA_22_7.png)

5. Click Install, then enter your password if prompted.

![pop eddy](/images/managing-apps/IURA_22_8.png)

### Managing Repositories

You can add, remove, and edit software repositories using Repoman. This includes .deb software repositories (sometimes called PPAs, or Personal Package Archives), and Flatpak software repositories.

**Caution:** Third-party repositories allow users to install software that has not been validated by System76 or other trusted Pop!_OS maintainers. Security vulerabilities or other bugs could be present in third-party software. Users should take caution and only add software repositories they trust.

1. Access Repoman by launching the Pop!_Shop, then clicking the `System Software Sources` option in the top-right menu or pressing the `Ctrl` + `S` keyboard shortcut in the Pop!_Shop.

![pop system software sources option](/images/managing-apps/IURA_22_9.png)

2. Click on the Extra Sources tab to manage .deb repositories (PPAs), or the Flatpak tab to manage Flatpak repositories.

![pop repoman extrasource](/images/managing-apps/IURA_22_10.png)

#### Adding a Repository

1. Click the `+` button in the bottom-left corner.

![pop repoman extra source tab](/images/managing-apps/IURA_22_11.png)

2. Enter the source details for the repository and click Add.

![pop repoman add source](/images/managing-apps/IURA_22_12.png)

3. The repository will appear in the sources list.

![pop repoman added source](/images/managing-apps/IURA_22_13.png)

#### Removing a Repository

Select a repository from the list, then click on the trashcan icon to delete the repository.

![pop repoman remove source](/images/managing-apps/IURA_22_14.png)

### Updating Installed Applications

The Pop!_Shop can update any applications installed from the software repositories configured on the system.

1. Open the Pop!_Shop.

2. Click `Updates & Installed Software` in the top-right menu, or press the `Ctrl` + `I` keyboard shortcut in the Pop!_Shop.

![pop shop updates & installed software](/images/managing-apps/IURA_22_22.png)

3. Select **Update All**.

![pop updates](/images/managing-apps/IURA_22_23.png)
