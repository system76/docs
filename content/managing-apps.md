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

## Types of Packages in Pop!_OS

There are multiple package formats that can be used for installing applications on Pop!_OS.

- **Flatpaks** are a modern type of package that utilize containerization and sandboxing for increased stability and security. Installing a Flatpak also installs all of its dependencies and libraries, and different Flatpak applications can use different versions of their dependencies at the same time if necessary.
  - [Flathub](https://flathub.org/) is the default source for most Flatpak applications in Pop!_OS.
  - Flatpak applications are generally more up-to-date than system (.deb) packages.
  - In Pop!_OS, Flatpak applications will only be available to the user who installed them by default.

- **.deb files** (short for Debian files), sometimes called "system packages," are an older packaging format that forms the base of the operating system. They're installed by the `dpkg` or `apt` utilities (with `apt` also handling dependency resolution). Only one version of a dependency can usually be installed at a time with .deb files.
  - [The Ubuntu repositories](https://packages.ubuntu.com/) are the primary source of non-default .deb packages available to install in Pop!_OS and Ubuntu. (System packages installed by default are sometimes sourced from the first-party Pop!_OS repositories instead.)
  - System (.deb) packages sometimes offer older versions of applications than Flatpaks, since applications installed from the Ubuntu repositories only receive feature updates during major version upgrades of Pop!_OS.
  - Installed system (.deb) packages are available to all user accounts on the computer. For this reason, only administrators can install or update .deb packages.

## Using the COSMIC Store

### Installing an Application

COSMIC includes a graphical user interface (GUI) called the COSMIC Store for easy installation and management of applications.

1. Open the COSMIC Store by clicking the icon in the dock, or by pressing `Super` to open the launcher and then searching for “COSMIC Store”.

![COSMIC Store icon in the Dock](/images/managing-apps/cosmic-store-icon.png)

2. Explore apps or type the application name in the search field.

![Search bar in the COSMIC Store](/images/managing-apps/cosmic-store-search.png)

3. Select the system (.deb) or Flathub (Flatpak) version.

![Selecting the app type in the COSMIC Store](/images/managing-apps/cosmic-store-select-type.png)

### Installing an Application Not Listed in the COSMIC Store

The COSMIC Store lists applications available in the configurated software repositories. By default, these are [Flathub](https://flathub.org), [the Ubuntu repositories](https://packages.ubuntu.com), and the first-party Pop!\_OS repositories. If an application isn't available from one of these repositories, you can use the web to search for and install it from another source instead.

1. Search for the application download link and instructions online.

![Pop!_OS 24.04 browser search](/images/managing-apps/browser-search-2404.png)

2. Download the application. When given multiple options of file type, look for a 64-bit .deb or Debian/Ubuntu option.

![Selecting the .deb type on the download webpage](/images/managing-apps/browser-select-type.png)

3. After downloading, go to the Downloads folder and double-click the .deb file.

![Downloaded .deb file in Pop!_OS 24.04](/images/managing-apps/downloaded-deb-file-2404.png)

4. The COSMIC Store will open and present you with the option to install the file.
  - When installing this way, the application may install a new repository so COSMIC Store can check for updates in the future, or you may need to download updates manually the same way you downloaded the initial installer.

![Installing a .deb file with the COSMIC Store](/images/managing-apps/cosmic-store-file-install.png)

### Managing Repositories

You can add, remove, and edit software repositories using Repoman. This includes .deb software repositories (sometimes called PPAs, or Personal Package Archives), and Flatpak software repositories.

**Caution:** Third-party repositories allow users to install software that has not been validated by System76 or other trusted Pop!_OS maintainers. Security vulerabilities or other bugs could be present in third-party software. Users should take caution and only add software repositories they trust.

1. Press `Super` to open the launcher, then search for “Repoman".

![Searching for Repoman in the COSMIC Launcher](/images/managing-apps/repoman-launcher.png)

2. Click on the Extra Sources tab to manage .deb repositories (PPAs), or the Flatpak tab to manage Flatpak repositories.

![Repoman's Extra Sources page in Pop!_OS 24.04](/images/managing-apps/repoman-extra-sources-2404.png)

#### Adding a Repository

1. Click the `+` button in the bottom-left corner.

![Add button in Repoman (24.04)](/images/managing-apps/repoman-add-button-2404.png)

2. Enter the source details for the repository and click Add.

![Adding a source in Repoman (24.04)](/images/managing-apps/repoman-adding-2404.png)

3. After entering your password (if prompted), the repository will appear in the sources list.

![Added source in Repoman (24.04)](/images/managing-apps/repoman-added-2404.png)

#### Removing a Repository

Select a repository from the list, then click on the trashcan icon to delete the repository.

![Remove button in Repoman (24.04)](/images/managing-apps/repoman-remove-button-2404.png)

### Updating Installed Applications

The COSMIC Store can update any applications installed from the software repositories configured on the system.

1. Open the COSMIC Store.
2. Click `Updates` on the sidebar.
3. Select `Update all` in the top-right corner.

![Updates page & button in the COSMIC Store](/images/managing-apps/cosmic-store-updates.png)

## Using the Terminal

### Searching for Applications

You can discover the package names for new applications using the respective websites for [Flathub](https://flathub.org/) and [the Ubuntu repositories](https://packages.ubuntu.com/), or you can search for applications with a command line interface. Launch the Terminal (`SUPER` + `T`), then use the commands below.

#### Flatpaks

Search with the following command:

```
flatpak search [search term]
```

The package name for each search result is displayed in the `Application ID` column.

![Flatpak search results](/images/managing-apps/search-flatpak.webp)

#### .deb (System) Packages

Search with the following command:

```
apt search [search term]
```

The package name for each search result is displayed in green, before the `/` character.

![apt search results](/images/managing-apps/search-apt.webp)

### Installing and Removing Applications

Launch the Terminal (`SUPER` + `T`) to install applications using a command line interface. The command to use depends on which package manager you're using for an app.

#### Flatpaks

To install an application as a Flatpak:

```
flatpak install --app [packagename]
```

Flatpak will ask which app to install if multiple apps match the package name you provided. If you omit the `--app` flag, you'll also see libraries that match the package name.

To uninstall an application as a Flatpak:

```
flatpak uninstall [packagename]
```

#### .deb Packages

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

2. After each command, enter your password or answer `Y` as prompted.
    - When prompted for your password in the terminal, no onscreen feedback will appear while typing the password; press `Enter` after you're done typing the password.

![Bad screenshot that needs to be replaced](/images/managing-apps/terminal-dist-upgrade.webp)

3. If an error appears, read the error message and run any commands it suggests.

![Bad screenshot taht needs to be replaced](/images/managing-apps/terminal-error.webp)

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

![Pop!_Shop icon in the dock](/images/managing-apps/pop-shop-icon.png)

2. Explore apps in categories, or type the application name in the search field.

![Pop!_Shop search bar](/images/managing-apps/pop-shop-search.png)

3. Select the Pop!_OS/Ubuntu (.deb) or flathub (Flatpak) version.

![Selecting the app type in the Pop!_Shop](/images/managing-apps/pop-shop-select-type.png)

4. Click **Install**.

### Installing an Application Not Listed in the Pop!_Shop

The Pop!_Shop lists applications available in the configurated software repositories. By default, these are [Flathub](https://flathub.org), [the Ubuntu repositories](https://packages.ubuntu.com), and the first-party Pop!\_OS repositories. If an application isn't available from one of these repositories, you can use the web to search for and install it from another source instead.

1. Search for the application download link and instructions online.

![Pop!_OS 22.04 browser search](/images/managing-apps/browser-search-2204.png)

2. Download the application. When given multiple options of file type, look for a 64-bit .deb or Debian/Ubuntu option.

![Selecting the .deb type on the download webpage](/images/managing-apps/browser-select-type.png)

3. After downloading, go to the Downloads folder and double-click the .deb file.

![Downloaded .deb file in Pop!_OS 22.04](/images/managing-apps/downloaded-deb-file-2204.png)

4. Open the file in Eddy, the default hanlder for .deb files in older versions of Pop!_OS.

![Opening a .deb file with Eddy in Pop!_OS 22.04](/images/managing-apps/eddy-open-with.png)

5. Click Install, then enter your password if prompted.

![Installing a package with Eddy in Pop!_OS 22.04](/images/managing-apps/eddy-install.png)

### Managing Repositories

You can add, remove, and edit software repositories using Repoman. This includes .deb software repositories (sometimes called PPAs, or Personal Package Archives), and Flatpak software repositories.

**Caution:** Third-party repositories allow users to install software that has not been validated by System76 or other trusted Pop!_OS maintainers. Security vulerabilities or other bugs could be present in third-party software. Users should take caution and only add software repositories they trust.

1. Access Repoman by launching the Pop!_Shop, then clicking the `System Software Sources` option in the top-right menu or pressing the `Ctrl` + `S` keyboard shortcut in the Pop!_Shop.

![Pop!_Shop System Software Sources menu item](/images/managing-apps/pop-shop-sources.png)

2. Click on the Extra Sources tab to manage .deb repositories (PPAs), or the Flatpak tab to manage Flatpak repositories.

![Repoman's Extra Sources page in Pop!_OS 22.04](/images/managing-apps/repoman-extra-sources-2204.png)

#### Adding a Repository

1. Click the `+` button in the bottom-left corner.

![Add button in Repoman (22.04)](/images/managing-apps/repoman-add-button-2204.png)

2. Enter the source details for the repository and click Add.

![Adding a source in Repoman (22.04)](/images/managing-apps/repoman-adding-2204.png)

3. After entering your password (if prompted), the repository will appear in the sources list.

![Added source in Repoman (22.04)](/images/managing-apps/repoman-added-2204.png)

#### Removing a Repository

Select a repository from the list, then click on the trashcan icon to delete the repository.

![Remove button in Repoman (22.04)](/images/managing-apps/repoman-remove-button-2204.png)

### Updating Installed Applications

The Pop!_Shop can update any applications installed from the software repositories configured on the system.

1. Open the Pop!_Shop.

2. Click `Updates & Installed Software` in the top-right menu, or press the `Ctrl` + `I` keyboard shortcut in the Pop!_Shop.

![Pop!_Shop Updates & Installed Software menu button](/images/managing-apps/pop-shop-updates-menu.png)

3. Select `Update All`.

![Updates page & button in the Pop!_Shop](/images/managing-apps/pop-shop-updates-page.png)
