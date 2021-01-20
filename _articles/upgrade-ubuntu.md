---
layout: article
title: Upgrade Ubuntu
description: >
  Get the newest version of Ubuntu on your System76 computer! Check out our upgrade directions.
keywords:
  - Ubuntu 16.04
  - Ubuntu 18.04
  - Ubuntu 20.04
  - LTS
  - Point Release
  - Upgrade
  - Update
  - Release
  - System76
  - apt
image: http://support.system76.com/images/upgrade-ubuntu/Ubuntu-18-04.jpg
hidden: false
section: ubuntu

---

First, we recommend having Ubuntu installation media (a DVD or USB drive) handy before starting any upgrades in case something goes wrong. You'll need to download a copy of Ubuntu from [ubuntu.com](http://www.ubuntu.com/download/desktop).

### Create Install Media

Create an Installation USB | Create an Installation DVD
-------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your computer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong. We have a support article that goes over creating backups [here.](/articles/backup-files)

### Upgrade

#### Open Software Updater

Open the Activities Overview by clicking on the Activities button in the top left and then search for <u>Software Updater</u>.

![Updater in Overview](/images/upgrade-ubuntu/Step-1.png)

#### Configure Version Updates

Click on **Settings…** and then select **Updates**. You can choose to receive all updates or only LTS updates using the drop-down menu at the bottom, labeled "Notify me of a new Ubuntu version".

Option | Result
------ | ------
For any new version | Will show both Standard and LTS updates.
For long-term support versions | Will show only LTS updates.
Never | Will prevent upgrades to newer versions.

![Update Preference](/images/upgrade-ubuntu/notification-preference.png)

Changing this option will require your user password. After selecting your update preference, close the window.

#### Check For Updates

The system will automatically check for updates. You may need to update (and sometimes, restart) before continuing with the upgrade process. If you have to restart after installing updates, launch the updater again as described above.

![Software Updater](/images/upgrade-ubuntu/Step-2.png)

![Software Updater](/images/upgrade-ubuntu/Step-2b.png)

#### Install The Upgrade

A message will appear informing you of the availability of the new release. Click **Yes, Upgrade Now**  or **Upgrade…** depending on the window that you have and follow the on-screen instructions.

![Upgrade Message](/images/upgrade-ubuntu/Step-3.png)

#### Install The System76 Driver

Once you've upgraded Ubuntu, you'll need to download and install the current System76 Driver. Open the Terminal app (search <u>Terminal</u> from the Activities Overview or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

```
sudo apt-add-repository ppa:system76-dev/stable
sudo apt update
sudo apt install system76-driver
```

For NVIDIA Graphics: If you ordered a system with a discrete NVIDIA graphics card, you will need to manually install the closed source drivers for your card to get the optimum performance. Please run the following command:

```
sudo apt install system76-driver-nvidia
```

Once the process is finished, restart your computer for the changes to take effect.

#### Done!

Once restarted the computer will be on the newly upgraded system! If you run into any issues, check out Troubleshooting below.

If you use any third-party packages, you'll need to re-enable them in the **Software & Updates** app on the **Other Software** tab. Check any sources that you might need, then close the window.

![Other Software tab](/images/upgrade-ubuntu/Other-Software.png)

---

### Information

For more information about releases and how long they are supported for, please see the [Ubuntu Release Wiki](https://wiki.ubuntu.com/Releases).

For more information about what end of life means, please see the [End of Life](https://www.ubuntu.com/info/release-end-of-life) document.

For more information on LTS support and the Hardware Enablement Stack, please see the [HWE Wiki](https://wiki.ubuntu.com/Kernel/LTSEnablementStack).

---

## Troubleshooting

Most upgrades proceed without a hitch, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then these steps can help repair your broken OS.

Most upgrades proceed without issues, but occasionally things go wrong. If your system hangs on the upgrade process or if it reboots and won't start, then these steps can help repair your broken OS.

### Stuck Upgrades

If your upgrade appears to hang in place for an extended period of time, click on the **Terminal** item to expand the terminal section. Check what action is available there, then complete the steps to unhang your upgrade. For help, contact support and we'll be able to provide assistance.

### Broken Upgrade

Please see the steps above to create bootable media. Restart your computer and use the keys above to start your computer from the bootable media. When given the option, choose **Try Ubuntu**.

Next, follow the steps to repair grub first:

[Repair Bootloader](/articles/bootloader/)

And then the steps to repair the package manager next:

[Repair Package Manager](/articles/package-manager-ubuntu/)

And continue the upgrade with this command:

```
do-release-upgrade
```

After that, if all of the grub, apt package manager, and release upgrade commands successfully complete, the computer should be able to boot normally.
