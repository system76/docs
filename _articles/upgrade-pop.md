---
layout: article
title: Upgrade to Pop!_OS 18.04 LTS
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
image: http://support.system76.com/images/upgrade-ubuntu/Ubuntu-17-04.jpg
hidden: false
section: articles

---
### Create Installation USB

First, we recommend having Pop!_OS installation media handy before starting any upgrades in case something goes wrong. You can find instructions on creating a a USB with Pop!_OS from [support.system76.com](http://support.system76.com/articles/live-disk/).

### Backup Your Files

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong. Please read our article on [How to Backup Your Files](articles/backup-files/) for helpful instructions.

### Upgrade

Open a terminal by right-clicking on your desktop background and choose **Open Terminal.**

Type the following command, followed by the enter key.

```
sudo do-release-upgrade
```

You'll be prompted to enter your system password, but when you type it, the letters won't show. Just continue typing the password and press <kbd>Enter</kbd>

Type <kbd>Y</kbd> and press enter when prompted

---

Once the process is finished, restart your computer for the changes to take effect.

#### Done!

Once restarted the computer will be on the newly upgraded system! If you run into any issues, check out Troubleshooting below.

## Troubleshooting

Most upgrades proceed without a hitch, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then the following steps can help repair your broken OS.

### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the **Terminal** item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support and we'll be able to provide assistance.

### Broken Upgrade

Please see the steps above to create a bootable USB. Restart your computer and start your computer from the bootable USB. When given the option select your Language and Keyboard then choose **Try Demo Mode**.

Next follow the steps to repair grub first:

[Repair Grub](/articles/grub/)

And then the steps to repair the package manager next:

[Repair Package Manager](/articles/package-manager/)

And continue the upgrade with this command:

```
do-release-upgrade
```

After that, if all of the grub, apt package manager, and release upgrade commands successfully complete, the computer should be able to boot normally.
