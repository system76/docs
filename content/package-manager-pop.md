---
layout: article
title: Package Manager Issues (Pop!_OS)
description: >
  Here are ways to fix update, upgrade, and other package manager issues.
keywords:
  - package manager
  - apt
  - aptitude
  - apt-get
  - upgrades
  - updates
image: http://support.system76.com/images/system76.png
hidden: false
section: software-troubleshooting

---

# Package Manager Issues (Pop!_OS) 

### Apt/Dpkg (system-wide packages)

If your system complains about a failed upgrade, package manager conflicts, broken upgrades, or other package-related issues, there are several common fixes to these problems. Some package manager issues can be resolved with the graphical update program, but many require the command line. Try running these commands to fix your package manager:

```bash
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt full-upgrade
sudo apt autoremove --purge
```

Sometimes, you may see some packages that are still broken and need to be installed manually or purged manually. There may be broken dependencies or cyclical dependencies. If so, these commands can help:

```bash
sudo apt install --reinstall <packagename>
```

This command reinstalls the package. This can be convenient when the package has many reverse dependencies.

```bash
sudo apt purge <package name>
```

This command will remove a package and its system-wide configuration files. Use it to remove a package that is causing issues, and reinstall it with this command:

```bash
sudo apt install <package name>
```

**Important:** Please pay attention when using a purge command. If the command looks like it will remove several additional packages besides the one you are trying to fix, don't run it! If it's only a few packages, it's most likely safe. If additional packages are removed, make sure to install them again before restarting the computer. This command will make sure the core Pop!_OS components are installed after any purge commands:

```bash
sudo apt install pop-desktop
```

If the Pop!_Shop indicates that some remote repositories can't be reached, open [Repoman](/articles/manage-repos-pop) and look in the **Extra Sources** page for the broken repository.  Either disable or remove the repository, or search for the software vendor to determine what has happened to their software server. Sometimes the version of the repo (xenial, bionic, focal, groovy, etc) needs changed to match the current version of the operating system.

### Flatpak

If the Pop!_Shop is showing an update available, but there are no updates listed on the update page, there may be a Flatpak runtime (a backend program that another Flatpak depends on) with an update available. Run these commands to update all Flatpaks and remove any Flatpak runtimes that are no longer required by any installed programs:

```bash
flatpak update
flatpak uninstall --unused
```

### Useful Programs

The program <u>Synaptic Package Manager</u> is a very powerful GUI frontend for the package manager. Packages can be installed, removed, selectively upgraded, or pinned, and information can be gained about their purpose and dependencies. It also provides a comprehensive list of available packages and programs that can be downloaded. It can be installed in the <u>Pop!_Shop</u> or with this command:

```bash
sudo apt install synaptic
```
