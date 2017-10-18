---
layout: article
title: Apt - Fix Package Manager Issues
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
section: faq

---

If your system complains about a failed upgrade, package managers conflicts, broken upgrades, or other package related issues, there are several common fixes to these problems.  Some package manager issues can be resolved with the graphical update program, but many require the command line.  If you get the red circle in the status bar, run these commands to fix your package manager:

```
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt dist-upgrade
sudo apt autoremove --purge
```

Sometimes, you may see some packages that are still broken and need to be installed manually or purged manually.  There may be broken dependencies or cyclical dependencies.  If so, these commands can help:

```
sudo apt install --reinstall <packagename>
```

This command reinstalls the package.  This can be convenient when the package has many reverse dependencies.

```
sudo apt purge <package name>
```

This will remove a package and it's configuration files.  Use this command to remove a package that is causing issues, and reinstall it with this command:

```
sudo apt install <package name>
```

**Important:** Please pay attention when using a purge command.  If the command looks like it will remove several additional packages besides the one you are trying to fix, don't run it!  If it's only a few packages, most likely it's safe.  If additional packages are removed, make sure to install them again before restarting the computer.  This command will make sure the core Pop!_OS components are installed after any purge commands:

```
sudo apt install pop-desktop
```

If <u>Software Updater</u> indicates that some remote repositories can't be reached, open the <u>Software & Updates</u> program and look in the **Other Software** tab for the broken repository.  Either remove the repository, or search for the software vendor to determine what has happened to their software server.  Sometimes the version of the repo (xenial, yakkety, zesty, artful, etc) needs changing to match the current version of the operating system.

## Useful Programs

The program <u>Synaptic</u> is a very powerful GUI of the package manager.  Packages can be installed, removed, selectively upgraded, pinned, and information gained about their purpose and dependencies.  It also provides a comprehensive list of available packages and programs to be downloaded.  It can be installed in the <u>Software Center</u> or with this command:

```
sudo apt install synaptic
```
