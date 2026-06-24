---
title: Manage Repositories (Pop!_OS)
description: >
  Add, remove and edit repositories and sources in Pop!_OS
keywords:
  - Pop!_OS
  - Pop!_OS 18.04
  - Pop!_OS 19.10
  - Pop!_OS 20.04
  - Pop!_OS 20.10
  - Pop!_OS 21.04
  - Pop!_OS 21.10
  - Pop!_OS 22.04
  - repoman
  - System76
  - apt
  - Flatpak

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

## Repositories and Sources

Pop!\_OS comes pre-installed with a number of sources for installing additional software, but additional sources can be added as well, either by hand or by installing a third-party package. Sources for system-wide software packages are called _repositories_ (or "repos" for short), and sources for Flatpak software are called just _sources_.

## Repoman and System Repositories

Pop!\_OS's tool for adding, removing and editing repositories and sources is called <u>Repoman</u>, and it is accessible through the Pop!_Shop.

![Pop!_OS Shop](/images/manage-repos/pop-shop-button.png)

Click on the menu icon in the top right of the <u>Pop!_Shop</u> window and then click `System Software Sources`. Alternatively <kbd>Ctrl</kbd> + <kbd>S</kbd> will also open <u>Repoman</u>. Once <u>Repoman</u> is opened, click on the `Extra Sources` tab to view the configured repositories for system-wide software packages.

![Repoman Extra Sources window](/images/manage-repos/Repoman-extra-sources.png)

There will be three buttons on the lower left. The `Plus` button is for adding new repositories by hand, although third-party software will usually do this automatically. The `Pencil` button will open up a selected repository for editing, including the ability to disable it without completely removing it.

![Repoman repository edit window](/images/manage-repos/Repoman-edit-repo.png)

The `Trash` button will delete a selected software repository completely.

## Repoman and Flatpak Sources

<u>Repoman</u> can be also be used to add, remove, and edit Flatpak sources starting with Pop!_OS 20.04 LTS. Click on the **Flatpak** tab to view them, and there will be similar buttons for adding, editing, or removing sources.

![Repoman Flatpak tab](/images/manage-repos/Repoman-Flatpak-tab.png)

Editing a Flatpak source will allow you to disable it without removing it, and can also show you what software has been installed from that source.

![Repoman Flatpak edit window](/images/manage-repos/Repoman-Flatpak-edit.png)

## Repositories, Sources, and the Command Line

The <u>Repoman</u> tool can also be run from the command line:

```bash
repoman
```

There may also be situations where repositories and Flatpak sources need to be adjusted from the terminal. Editing system repositories from the command line is not recommended without the aid of technical support, as this can lead to a system that will not receive updates correctly, but Flatpak sources are normally safe to edit from the terminal.

To list the currently configured Flatpak sources:

```bash
flatpak remotes
```

To add a new Flatpak source (with Flathub as the example):

```bash
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

To delete an existing Flathub source:

```bash
flatpak remote-delete --user flathub
```

For more information about Flatpak commands look [here.](https://docs.flatpak.org/en/latest/using-flatpak.html)
