---
layout: article
title: Upgrade Pop!_OS
description: >
  Get the newest version of Pop!_OS on your System76 computer! Check out our upgrade directions.
keywords:
  - Pop!_OS 17.10
  - Pop!_OS 18.04
  - Pop!_OS 18.10
  - Pop!_OS 19.04
  - Pop!_OS 19.10
  - LTS
  - Non-LTS
  - Upgrade
  - Update
  - Release
  - System76
  - apt
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: pop

---
Pop!\_OS 20.04 LTS was released April 30, 2020. View the [Release Notes](/articles/Pop!_OS-20.04-LTS-Release-Notes) to learn about new features.

### Upgrading to Pop!\_OS to 20.04 from 19.10 or 18.04 (For all other operating system versions, scroll down to the instructions for upgrading from an earlier release)

First, make sure you have applied all updates to your system. You can do this through the Pop!\_Shop, or through the terminal:

```
sudo apt update
sudo apt full-upgrade
```

Once the updates are applied, a notification should appear at the top of your screen saying that an upgrade is available. Click on this notification, or go to Settings -> Details -> About.

On the system's "About" page, you will notice a new feature has been added. The System76 upgrade package will display a message that Pop!\_OS 20.04 is available with a "Download" button.

Click the "Download" button and the download will begin.

Once the download is complete, you will receive a second notification saying the upgrade is ready.

Click on the notification and your computer will restart to the upgrade screen.

After the upgrade is finished, you will be taken back to the login page, and voila! Your system is now running Pop!\_OS 20.04!

### Backup Your Files

The upgrade process will leave your files intact, but it's always a good idea to play it safe and create a backup of any important files. Please read our article on [how to backup your files](/articles/backup-files/) for helpful instructions.

### Create Installation USB (Optional)

Some users may prefer to have Pop!\_OS installation media handy before starting any upgrades in case they need to reinstall the operating system. Instructions on creating a USB with Pop!\_OS are located in our [live disk](/articles/live-disk/) article.

### Advanced Install (Terminal)

Users wishing to use the Terminal to apply the upgrade may do so by running the following commands:

```
sudo apt update
```
You'll be prompted to enter your system password, but when you type it, the letters won't show. Just continue typing the password and press <kbd>Enter</kbd>.

```
sudo apt full-upgrade
```

Once any updates are applied, initiate the upgrade with this command:

```
pop-upgrade release upgrade systemd
```

Please check the terminal window at different times during the update process to make sure you answer any prompts asking you to type <kbd>Y</kbd> or <kbd>Enter</kbd>. Some of the prompts to expect are described below.

If you have 3rd party sources enabled, you will be prompted about the sources being disabled during the upgrade. Press <kbd>Enter</kbd> to continue.

Type <kbd>Y</kbd> and press enter when prompted about starting the upgrade.

If you have your lock screen set to enabled, you will receive a prompt about the screen being disabled during the update. Press <kbd>Enter</kbd> to continue.

Near the end of the upgrade process, you'll be prompted to remove obsolete packages. Type <kbd>Y</kbd> and press <kbd>Enter</kbd>  when prompted.

You may receive a notice about the keyboard layout and the option to use the package maintainer's version of a certain package. If you haven't specifically made a change to a configuration file in your system, go ahead and press <kbd>Y</kbd> to use the package maintainer's version. If you have made a change you would like to keep, press <kbd>N</kbd> to use the local version, or press <kbd>D</kbd> to inspect the changes and see which version you would like to use.

Finally, you will get a notice to restart your computer to complete the upgrade. Make sure all files are saved and any open programs are closed. You can reboot via the terminal by typing `[sudo] reboot` and pressing <kbd>Enter</kbd>. If you prefer, you can also use the graphical interface to reboot.

---

Once restarted, the computer will be on the newly upgraded system! If you run into any issues, check out our troubleshooting section below.

### Upgrading older releases

Upgrading Pop!\_OS 18.10 or 19.04.

These older Pop!\_OS releases are now unsupported and no new updates are available. After unsupported versions have been removed from the archive and mirror network, you will need to change where your system checks for un-applied updates to be able to upgrade. Open a terminal and follow the next set of instructions to upgrade from Pop!\_OS 18.10 or 19.04.

1) Get your current system fully updated:
```
sudo sed -i 's/us.archive/old-releases/g' /etc/apt/sources.list
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt full-upgrade
sudo apt install pop-desktop
```

2) Move any PPA additions out of the way, and get all of the sources pointed at the 20.04 versions:
```
sudo mkdir -p /etc/apt/sources.list.d/backup
sudo mv /etc/apt/sources.list.d/* /etc/apt/sources.list.d/backup
sudo apt-add-repository -yn ppa:system76-dev/stable
sudo apt-add-repository -yn ppa:system76/pop
sudo sed -i 's/old-releases/us.archive/g' /etc/apt/sources.list
sudo sed -i 's/disco/focal/g' /etc/apt/sources.list /etc/apt/sources.list.d/*.list
```

3) Now,do the upgrade! This will have a three phases and once the download is complete, you can't change your mind. This works from a new install of 19.04, but some packages may add complications, so make sure you have a backup of important data before moving forward. There may be a question about restarting services, and it is safe to answer "Yes". There may be some questions about using "maintainer" version of configuration files and using the that new version is also very likely what you want to do (and the default answer will work):
```
sudo apt update
sudo apt install dpkg apt
sudo apt full-upgrade | tee ~/upgrade.log
```

4) Now put the PPAs back; You will want to take a look at the files that end in "list" in "/etc/apt/sources.list.d/backup" to see if you want to enable that again by moving them back to the /etc/apt/sources.list.d/ directory.

## Troubleshooting

Most upgrades proceed without a hitch, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then the following steps can help repair your broken OS.

### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the **Terminal** item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support and we'll be able to provide assistance.

### Broken Upgrade

If the upgrade fails it will most likely be due to a package manager issue.  First, run the upgrade again with this command, and see if it will get further:

```
do-release-upgrade
```

If it fails again, the package manager will need to be repaired manually.  Please follow the steps as outlined in this document about [repairing the package manager](/articles/package-manager-pop/)

Make sure to get the package manager to a fully upgraded status before rebooting your computer.  You should see this line after running all 6 of the repair package manager commands:

> 0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
