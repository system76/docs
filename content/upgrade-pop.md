---
title: Upgrade Pop!_OS
description: >
  Upgrade to the newest version of Pop!_OS on your computer!
keywords:
  - Pop!_OS 17.10
  - Pop!_OS 18.04
  - Pop!_OS 18.10
  - Pop!_OS 19.04
  - Pop!_OS 19.10
  - Pop!_OS 20.04
  - Pop!_OS 20.10
  - Pop!_OS 21.04
  - Pop!_OS 21.10
  - Pop!_OS 22.04
  - Pop!_OS 24.04
  - COSMIC
  - Cosmic Desktop
  - LTS
  - Non-LTS
  - Upgrade
  - Update
  - Release
  - System76
  - apt
  - the repository 'https://us.archive.ubuntu.com/ubuntu' does not have a Release file
  - 404 Not Found

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

## What to Expect

Pop!_OS 24.04 now includes the COSMIC Desktop. Some changes to expect are outlined in the following articles;

- [New keyboard shortcuts](articles/pop-cosmic-keyboard-shortcuts)
- [New default Applications](/articles/default-apps)
- [Desktop customization and window behavior](/articles/pop-basics)

## Upgrade Versus Fresh Installation

A fresh installation is recommended for any release prior to Pop!_OS 22.04. Instructions for a fresh installation can be found [here](articles/install-pop).

The likelihood of complications during the upgrade process increases on systems that are:

- upgrading more than one release at a time
- running older releases that have already reached the end-of-life period
- using a large number of third-party software repositories (PPAs)

## Before the Upgrade

[Back up your files](/articles/backup-files/) before beginning the upgrade. The upgrade process will leave your files in place, but no matter which system or version you are running, we always recommend creating a good backup of your files, just to be on the safe side in case anything unexpected happens during the upgrade.

The Pop upgrade process can take up to an hour to complete depending on download speeds and the speed of the components in the system you are upgrading.

## Upgrade Pop!_OS 22.04 to 24.04

Pop!_OS 22.04 can be upgraded to the next release via the Pop! Shop or by using terminal commands.

### Pop! Shop Upgrade

Open Pop! Shop by clicking the shopping bag icon in the application menu. Or, press the `SUPER` key and type 'pop shop' to access through the launcher.

To begin, confirm the current installation is fully up to date. Click the icon with three stacked bars in the top right corner and select software and updates to update the existing packages.

![Check for updates in the Pop! Shop](/images/upgrade-pop/uprade-pop2404-check-for-updates.png)

Once the updates are applied, a notification should appear at the top of your screen saying that an upgrade is available. Click on this notification, or go to `Settings` -> `OS Upgrade & Recovery`. The upgrade page will display a message that Pop!_OS 24.04 is available with a `Start Upgrade` button.

![Pop!_OS 24.04 Upgrade Dialog box which describes the COSMIC Desktop and other changes to expect after the upgrade is complete](/images/upgrade-pop/upgrade-pop2404-dialog.png)

If you are planning on staying on the Pop!_OS 22.04 release, this is also the page where you can dismiss upgrade notifications.
![Settings OS Upgrade](/images/upgrade-pop/Pop-22.04-Upgrade.png)

**NOTE:** Refreshing is **not** part of the upgrade process. `Refresh` will reinstall the Operating System with the version stored in Recovery, and will erase all user-installed applications.

A dialog box will open when the operating system upgrade is ready. Select `Restart and Install` to reboot the computer to Pop!_OS 24.04 with COSMIC Desktop.

## Terminal Upgrade

Open a terminal by pressing `SUPER` + `t` and type the following command and press `Enter`:

```bash
sudo apt update
```

You'll be prompted to enter your system password, but when you type it, the letters won't show. Just continue typing the password and press `ENTER`.

Perform updates by entering the following command:

```bash
sudo apt full-upgrade
```

Update the Recovery partition with this command:

```
pop-upgrade recovery upgrade from-release
```

Once updates have been applied (including the Recovery partition), initiate the upgrade with this command:

```bash
pop-upgrade release upgrade
```

Check the terminal window at different times during the update process to make sure you answer any prompts asking you to type `Y` or `ENTER`. Some of the prompts to expect are described below.

If you have 3rd party sources enabled, you will be prompted about the sources being disabled during the upgrade. Press `ENTER` to continue.

Type `Y` and press `ENTER` when prompted about starting the upgrade.

If you have your lock screen set to enabled, you will receive a prompt about the screen being disabled during the update. Press `ENTER` to continue.

Near the end of the upgrade process, you'll be prompted to remove obsolete packages. Type `Y` and press `ENTER` when prompted.

You may receive a notice about the keyboard layout and the option to use the package maintainer's version of a certain package. If you haven't specifically made a change to a configuration file in your system, go ahead and press `Y` to use the package maintainer's version. If you have made a change you would like to keep, press `N` to use the local version, or press `D` to inspect the changes and see which version you would like to use.

Finally, you will get a notice to restart your computer to complete the upgrade. Make sure all files are saved and any open programs are closed. You can reboot via the terminal by typing `sudo reboot` and pressing `ENTER`. If you prefer, you can also use the graphical interface to reboot.

---

Once restarted, the computer will prompt to login to Pop!_OS 24.04.