---
layout: article
title: Fix Package Manager Issues
description: >
  Here are ways to fix update, upgrade, and other package manager issues.
keywords:
  - package manager
  - apt
  - aptitude
  - apt-get
  - upgrades
  - updates
hidden: false
section: faq

---

If your system complains about about a failed upgrade, package managers conflicts, broken upgrades, or other package related issues, there are several common fixes to these problems.  Some package manager issues can be resolved with the graphical update program, but many require the command line.  If you get the red circle in the status bar, run these commands to fix your package manager:

```
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt dist-upgrade
sudo apt autoremove
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

If <u>Software Updater</u>u indicates that some remote repositories can't be reached, open the <u>Software & Updates</u> program and look in the **Other Software** tab for the broken repository.  Either remove the repository, or search for the software vendor to determine what has happened to their software server.

## Useful Programs

The program <u>Synaptic</u> is a very powerful GUI of the package manager.  Packages can be installed, removed, selectively upgraded, pinned, and information gained about their purpose and dependencies.  It also provides a comprehensive list of available packages and programs to be downloaded.  It can be installed in the <u>Software Center</u> or with this command:

```
sudo apt install synaptic
```
