---
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

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Apt/Dpkg (system-wide packages)

If your system complains about a failed upgrade, package manager conflicts, broken upgrades, or other package-related issues, there are several common fixes to these problems. Some package manager issues can be resolved with the graphical update program, but many require the command line. Try running these commands to fix your package manager:

```bash
sudo apt clean
sudo apt update
sudo dpkg --configure -a
sudo apt install -f
sudo apt full-upgrade
sudo apt autoremove --purge
```

### What Do These Do?

- `apt clean` - The `clean` command clears out the local repository of retrieved package files.
- `apt update` - the `update` option fetches indexes from all configured sources. These indexes are used by other apt options to determine which packages can be upgraded or installed.
- `dpkg --configure -a` - The `--configure -a` command configures any unpacked but not yet configured packages.
- `apt install -f` - The `-f` option attempts to correct broken dependencies
- `apt full-upgrade` - In addition to downloading and installing package updates, `full-upgrade` downgrades or removes dependencies as necessary when upgrading packages.
- `apt autoremove --purge` - Running this command with no specified package will remove any packages that were previously dependencies for other installed packages but are no longer required (either because the dependent package was removed, or because the package was updated to no longer depend on certain packages.)

### Fix Individual Packages

Sometimes, you may see some packages that are still broken and need to be installed manually or purged manually. There may be broken dependencies or cyclical dependencies. If so, these commands can help:

```bash
sudo apt install --reinstall [packagename]
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

If the Pop!_Shop indicates that some remote repositories can't be reached, open [Repoman](/articles/manage-repos-pop) and look in the **Extra Sources** page for the broken repository.  Either disable or remove the repository, or search for the software vendor to determine what has happened to their software server. Sometimes the version of the repo (xenial, bionic, focal, groovy, etc) needs changed to match the current version of the operating system.

## Flatpak

If the Pop!_Shop is showing an update available, but there are no updates listed on the update page, there may be a Flatpak runtime (a backend program that another Flatpak depends on) with an update available. Run these commands to update all Flatpaks and remove any Flatpak runtimes that are no longer required by any installed programs:

```bash
flatpak update
flatpak uninstall --unused
flatpak repair --user
```

## Useful Programs

The program <u>Synaptic Package Manager</u> is a very powerful GUI frontend for the package manager. Packages can be installed, removed, selectively upgraded, or pinned, and information can be gained about their purpose and dependencies. It also provides a comprehensive list of available packages and programs that can be downloaded. It can be installed in the <u>Pop!_Shop</u> or with this command:

```bash
sudo apt install synaptic
```

## Sending information to support

The following commands will send the output of the commands to two different files so that they can be attached to support emails.

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
