---
layout: article
title: Manage Repositories (Pop!_OS)
description: >
  Add, remove and edit repositories in Pop!_OS
keywords:
  - Pop!_OS 18.04
  - Pop!_OS 19.10
  - repoman
  - System76
  - apt
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: software

---

# Manage Repositories (Pop!_OS) 

### Accessing Repoman

Pop!_OS' tool for adding, removing and editing repositiories is called <u>Repoman</u> which is a part of the Pop!_Shop.

![Pop!_OS Shop](/images/manage-repos/Pop!_Shop-button.png)

Click on the gear icon in the top right of the <u>Pop!_Shop</u> window. Once <u>Repoman</u> is opened, click on the **Extra Sources** tab there will be options to add repositories with the **Plus** button (on the bottom left). Select a repository from the list and then click on the **Edit** button (next to the **Plus** button) to edit the selected repository.

![Repoman window](/images/manage-repos/Repoman-Flatpak.png)

<u>Repoman</u> can be also be used to add, remove and edit Flatpak Sources starting with Pop!_OS 20.04 LTS. For command-line use of Flatpak the following commands can be used:

```bash
flatpak remotes
```

This is used to list the remote/sources configured on your system.

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

This command is used to add a remote/source if it doesn't exist on your system and in this example the Flathub remove/source is being added. 

```bash
flatpak remote-delete flathub
```

If we want to remove a remote/source the following command can be used.

```bash
flatpak search inkscape
```

This command is used to search for a certain package (inkscape in this case) in the coufigured remotes/sources on this system.

```bash
flatpak install flathub org.inkscape.Inkscape
```

Here we are installing inkscape using the Flathub remote/source.

```bash
flatpak uninstall org.inkscape.Inkscape
```

This will remove the inkscape package from this system.

```bash
flatpak run org.inkscape.Inkscape
```

This command will run inkscape once it is installed on the system.

```bash
flatpak update
```

This will update all of your installed Flatpak applications and runtimes to their latest versions.

```bash
flatpak list
```

This will list all of the installed applications and runtimes.

For more information about Flatpak commands look [here.](https://docs.flatpak.org/en/latest/using-flatpak.html)
