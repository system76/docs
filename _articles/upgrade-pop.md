---
layout: article
title: Pop! - Upgrade Pop!_OS
description: >
  Get the newest version of Pop!_OS on your System76 computer! Check out our upgrade directions.
keywords:
  - Pop!_OS 17.10
  - Pop!_OS 18.04
  - LTS
  - Upgrade
  - Update
  - Release
  - System76
  - apt
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: faq

---

Pop 18.04 includes a new recovery system feature. If you would like this new feature, please reinstall the operating system as described here: [Install Pop](/articles/install-pop/). Future upgrades will update the recovery partition enabling more reliable upgrades. The recovery partition also provides a live environment that helps speed up diagnosing and fixing support issues. Upgrading in place will not create a recovery partition. 

### Create Installation USB

First, we recommend having Pop!_OS installation media handy before starting any upgrades in case something goes wrong. You can find instructions on creating a a USB with Pop!_OS from [support.system76.com](/articles/live-disk/).

### Backup Your Files

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong. Please read our article on [How to Backup Your Files](/articles/backup-files/) for helpful instructions.

### Upgrade

Open a terminal by right-clicking on your desktop background and choose **Open Terminal**

Type the following command, followed by the <kbd>Enter</kbd> key:

```
sudo do-release-upgrade 
```

You'll be prompted to enter your system password, but when you type it, the letters won't show. Just continue typing the password and press <kbd>Enter</kbd>.  The `-d` flag is needed for early upgrading, and can be omitted once the next version is officially released.

Type <kbd>Y</kbd> and press enter when prompted

Please check the terminal window at different times during the update process to make sure you answer any prompts asking you to type <kbd>Y</kbd>.

You may receive a notice about the keyboard layout and the option to use the package maintainer's version of a certain package. If you haven't specifically made a change to a configuration file in your system, go ahead and press <kbd>Y</kbd> to use the package maintainer's version. If you have made a change you would like to keep, press <kbd>N</kbd> to use the local version, or press <kbd>D</kbd> to inspect the changes and see which version you would like to use.

---

If the upgrade completes sucessfully, restart your computer for the changes to take effect.  Once restarted the computer will be on the newly upgraded system! If you run into any issues, check out Troubleshooting below.

## Troubleshooting

Most upgrades proceed without a hitch, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then the following steps can help repair your broken OS.

### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the **Terminal** item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support and we'll be able to provide assistance.

### Broken Upgrade

If the upgrade fails it will most likely be due to a package manager issue.  First, run the upgrade again with this command, and see if it will get further:

```
sudo do-release-upgrade -d
```

If it fails again, the package manager will need to be repaired manually.  Please follow the steps as outlined in this document to repair the package manager:

[Repair Package Manager](/articles/package-manager/)

Make sure to get the package manager to a fully upgraded status before rebooting your computer.  You should see this line after running all 6 of the repair package manager commands:

> 0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
