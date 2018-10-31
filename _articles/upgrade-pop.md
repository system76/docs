---
layout: article
title: Pop! - Upgrade Pop!_OS
description: >
  Get the newest version of Pop!_OS on your System76 computer! Check out our upgrade directions.
keywords:
  - Pop!_OS 17.10
  - Pop!_OS 18.04
  - Pop!_OS 18.10
  - LTS
  - Non-LTS
  - Upgrade
  - Update
  - Release
  - System76
  - apt
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: faq

---

Pop!_OS 18.10 was released in October, 2018. This article explains how to upgrade from Pop!_OS 18.04 to Pop!_OS 18.10. If you are on Pop!_OS 17.10, please backup your files and reinstall the operating system as described here: [Install Pop](/articles/install-pop/).

### Create Installation USB

First, we recommend having Pop!_OS installation media handy before starting any upgrades in case you need to reinstall the operating system. Instructions on creating a USB with Pop!_OS are located in our [live disk](/articles/live-disk/) article.

### Backup Your Files

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe! Please read our article on [how to backup your files](/articles/backup-files/) for helpful instructions.

### Upgrade from Pop!_OS 18.04 to Pop!_OS 18.10

By default LTS releases are set to only upgrade to another LTS such as 16.04 LTS to 18.04 LTS. To change this, first upgrade all current packages with this these commands:

```
sudo apt update
```
You'll be prompted to enter your system password, but when you type it, the letters won't show. Just continue typing the password and press <kbd>Enter</kbd>. 

```
sudo apt full-upgrade
```

Before beginning the upgrade, it is important to ensure that the `pop-desktop` metapackage is installed. If it is not installed, the ability to boot into an encrypted install may be lost. The `pop-desktop` metapackage includes `cryptsetup` as a dependency, which is included in the initramfs for decrypting LUKS partitions at boot.

```
sudo apt install pop-desktop
```

If you receive a notice that you have an unmet dependency for `sessioninstaller`, you'll need to install that before you can successfully install the `pop-desktop` package.

```
sudo apt install sessioninstaller
```

Now to change from LTS to Non-LTS release with this command:

```
sudo sed -i s/Prompt=lts/Prompt=normal/ /etc/update-manager/release-upgrades
```
Initiate the upgrade with this command:

```
do-release-upgrade
```
Please check the terminal window at different times during the update process to make sure you answer any prompts asking you to type <kbd>Y</kbd> or <kbd>Enter</kbd>. Some of the prompts to expect are described below.

If you have 3rd party sources enabled, you will be prompted about the sources being disabled during the upgrade. Press <kbd>Enter</kbd> to continue. 

Type <kbd>Y</kbd> and press enter when prompted about starting the upgrade.

If you have your lock screen set to enabled, you will receive a prompt about the screen being disabled during the update. Press <kbd>Enter</kbd> to continue.

Near the end of the upgrade process, you'll be prompted to remove obsolete packages. Type <kbd>Y</kbd> and press <kbd>Enter</kbd>  when prompted.

You may receive a notice about the keyboard layout and the option to use the package maintainer's version of a certain package. If you haven't specifically made a change to a configuration file in your system, go ahead and press <kbd>Y</kbd> to use the package maintainer's version. If you have made a change you would like to keep, press <kbd>N</kbd> to use the local version, or press <kbd>D</kbd> to inspect the changes and see which version you would like to use.

The last prompt will ask you to restart your computer to complete the upgrade. Make sure all files are saved and programs are closed, then type <kbd>Y</kbd> and <kbd>Enter</kbd>. The computer will immediately restart. 

---

If the upgrade completes successfully, restart your computer for the changes to take effect.  Once restarted the computer will be on the newly upgraded system! If you run into any issues, check out our troubleshooting section below.

## Troubleshooting

Most upgrades proceed without a hitch, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then the following steps can help repair your broken OS.

### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the **Terminal** item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support and we'll be able to provide assistance.

### Broken Upgrade

If the upgrade fails it will most likely be due to a package manager issue.  First, run the upgrade again with this command, and see if it will get further:

```
do-release-upgrade
```

If it fails again, the package manager will need to be repaired manually.  Please follow the steps as outlined in this document about [repairing the package manager](/articles/package-manager/)

Make sure to get the package manager to a fully upgraded status before rebooting your computer.  You should see this line after running all 6 of the repair package manager commands:

> 0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
