---
title: Package Manager Issues (Ubuntu)
description: >
  Here are ways to fix update, upgrade, and other package manager issues.
keywords:
  - package manager
  - apt
  - aptitude
  - apt-get
  - upgrades
  - updates

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## APT/Dpkg (system-wide packages)

If your system complains about a failed upgrade, package manager conflicts, broken upgrades, or other package-related issues, there are several common fixes to these problems.  Some package manager issues can be resolved with the graphical update program, but many require the command line.  If you get the red circle in the status bar, run these commands to fix your package manager:

```bash
sudo apt clean
sudo apt update
sudo dpkg --configure -a
sudo apt install -f
sudo apt dist-upgrade
sudo apt autoremove --purge
```

## What Do These Do?

- `apt clean` - The `clean` command clears out the local repository of retrieved package files.
- `apt update` - the `update` option fetches indexes from all configured sources. These indexes are used by other apt options to determine which packages can be upgraded or installed.
- `dpkg --configure -a` - The `--configure -a` command configures any unpacked but not yet configured packages.
- `apt install -f` - The `-f` option attempts to correct broken dependencies
- `apt dist-upgrade` - In addition to downloading and installing package updates, `dist-upgrade` downgrades or removes dependencies as necessary when upgrading packages. Dist-upgrade also has a conflict resolution system that will prioritize upgrading more important packages if needed.
- `apt autoremove --purge` - Running this command with no specified package will remove any packages that were previously dependencies for other installed packages but are no longer required (either because the dependent package was removed, or because the package was updated to no longer depend on certain packages.)

### Fix Individual Packages

Sometimes, you may see some packages that are still broken and need to be installed manually or purged manually.  There may be broken dependencies or cyclical dependencies.  If so, these commands can help:

```bash
sudo apt install --reinstall <packagename>
```

This command reinstalls the package.  This can be convenient when the package has many reverse dependencies.

```bash
sudo apt purge <package name>
```

This will remove a package and its configuration files.  Use this command to remove a package that is causing issues, and reinstall it with this command:

```bash
sudo apt install <package name>
```

**Important:** Please pay attention when using a purge command.  If the command looks like it will remove several additional packages besides the one you are trying to fix, don't run it!  If it's only a few packages, most likely it's safe.  If additional packages are removed, make sure to install them again before restarting the computer.  This command will make sure the core Pop!_OS components are installed after any purge commands:

```bash
sudo apt install ubuntu-desktop
```

If <u>Software Updater</u> indicates that some remote repositories can't be reached, open the <u>Software & Updates</u> program and look in the **Other Software** tab for the broken repository.  Either remove the repository, or search for the software vendor to determine what has happened to their software server.  Sometimes the version of the repo (xenial, yakkety, zesty, artful, etc) needs changing to match the current version of the operating system.

### Update with Packages Held

If a problem presents itself immediately after updating a particular package, sometimes holding that package back temporarily can help narrow down the cause.

> **NOTE:** This process is meant to be used on a temporary basis for testing *only.* System76 does not recommend holding back packages unless specifically instructed to by support.

First, remove the newer package using this Terminal command:

```bash
sudo apt remove [packagename]
```

Next, search for the package name in the apt repositories:

```bash
apt policy [packagename]
```

Then, install the desired version:

```bash
sudo apt install [packagename including version number]
```

To perform an update while keeping some packages on their current version, use the following Terminal command:

```bash
sudo apt-mark hold [packagename]
```

If the package is not central to OS functions, it can be held at the current version and the other packages updated around it. If the problem doesn't present itself when a package has been held, it was likely being updated to a newer version that was causing instability.

To remove the hold on an application run:

```bash
sudo apt-mark unhold [packagename]
```

Show which packages are currently held with:

```bash
apt-mark showhold
```

If the Terminal returns nothing, no packages are held.

If the Ubuntu Store indicates that some remote repositories can't be reached, open <u>Software & Updates</u> and look in the **Extra Sources** page for the broken repository.  Either disable or remove the repository, or search for the software vendor to determine what has happened to their software server. Sometimes the version of the repo (xenial, bionic, focal, groovy, etc) needs changed to match the current version of the operating system.

## Snap Pacakges

Snaps are designed to update themselves as needed, but if you'd like to manually update the Snaps on your Ubuntu system, run these commands:

```bash
snap refresh --list
sudo snap refresh 
```

To remove a Snap package run:

```bash
sudo snap remove <packagename>
```

## Useful Programs

The program <u>Synaptic</u> is a very powerful GUI of the package manager.  Packages can be installed, removed, selectively upgraded, pinned, and information gained about their purpose and dependencies.  It also provides a comprehensive list of available packages and programs to be downloaded.  It can be installed in the <u>Software Center</u> or with this command:

```bash
sudo apt install synaptic
```

## Sending information to support

The following commands will save the output to `upgrade.txt` and `sources.txt` so that they can be attached to support emails.

```bash
sudo apt clean | tee -a ~/upgrade.txt
sudo apt update -m | tee -a ~/upgrade.txt
sudo dpkg --configure -a | tee -a ~/upgrade.txt
sudo apt install -f | tee -a ~/upgrade.txt
sudo apt full-upgrade | tee -a ~/upgrade.txt
sudo apt autoremove --purge | tee -a ~/upgrade.txt

cat /etc/apt/sources.list | tee -a ~/sources.txt
cat /etc/apt/sources.list.d/* | tee -a ~/sources.txt
ls /etc/apt/sources.list.d/ | tee -a ~/sources.txt
cat /etc/apt/sources.list.d/system.sources | tee -a ~/sources.txt
cat /etc/apt/sources.list.d/pop-os-apps.sources | tee -a ~/sources.txt
```
