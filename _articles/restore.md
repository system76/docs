---
layout: article
title: Restore or Reinstall Ubuntu on your System76 Computer
description: >
  Full instructions on restoring or reinstalling Ubuntu your computer.
keywords:
  - Ubuntu
  - Ubuntu 16.04
  - Ubuntu 16.10
  - LTS
  - Restore
  - Reinstall
  - Installation
  - Driver
  - system76-driver
  - system76-driver-nvidia
  - Release
  - System76
image: https://d1vhcvzji58n1j.cloudfront.net/images/newsletter/2016-10/16-c1f27f8de8.10.jpg
hidden: false
faq: true # If it shows in the "Frequently Answered Questions" section
---

System76 computers use a standard Ubuntu installation disc and the System76 Driver to fully restore the system to factory settings.

\* On our second generation Oryx (oryp2), the Sytem76 driver is required for the touchpad.  Please use the keyboard or an external mouse for the initial install steps and until the driver is installed.

#### Important Note!

If you recently updated your system and it does not boot, you may not need to reinstall Ubuntu.  If you start your computer and you see a flashing underscore on the screen ("\_"), then it is likely that Ubuntu's boot-loader, GRUB, was not updated properly.  To restore it, see [How to Restore Grub Boot-loader](http://docs.system76.com/articles/grub)


## 1. Create Bootable Media

First, you'll need to create bootable media you can restore or install Ubuntu with.

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)


## 2. Boot From Ubuntu Media

Once you have the disk made, reboot your system.  You'll need to tell the computer to boot from the Live Disk.  Immediately after you turn the computer on:

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

---

**For nVidia Graphics:** Ubuntu may need a special option enabled to install and boot from Ubuntu until the nVidia driver can be installed as described below.  If the installer doesn't show an image after this first screen, please follow the next instructions.

![First](/images/restore/first.png)

When you see the above screen, press any key to enter the initial configuration screen.  Now, push <kbd>F6</kbd> to choose additional options.  Move the box down to 'nomodeset', press <kbd>Enter</kbd> to select it, then <kbd>ESC</kbd> to go back to the installer choices.  Pick either "Try Ubuntu" or "Install Ubuntu" as described next.

![Second](/images/restore/second.png)

Once the operating system abd the nVidia driver is successfully installed as described below, we need to remove the nomodeset modifier.  Please run this command to edit the startup options file:

`sudo gedit /etc/default/grub`

And change this line: `GRUB_CMDLINE_LINUX="nomodeset"`

to: `GRUB_CMDLINE_LINUX=""`

Then save the file, exit the editor, and run this command to make the change permanent:  

`sudo update-grub`

---

Once Ubuntu starts, you will be asked to "Try Ubuntu" or to "Install Ubuntu".  If you are attempting to restore a broken operating system, please choose "Try Ubuntu".  First, we recommend backing up all important files from your computer.  The restore process can leave your files intact, but it's best to be safe in case something goes wrong.  Next, double-click on the "Install Ubuntu" icon on the desktop.

If all of your files are backed up or you are installing from scratch, you'll need to pick the "Install Ubuntu" option to continue with the installation.  Please check the box labeled "Download updates while installing Ubuntu". This step will ensure that your new installation is fully up to date once the installation is complete.

![Download Updates](/images/restore/updates.png)


## 3. Install Ubuntu

Ubuntu will present several options when installing:

![Install Ubuntu](/images/restore/install.png)

- Choose the first option, **Upgrade**, to preserve everything in the /home directory and attempt to restore Ubuntu to a working condition.  This option can also be used to upgrade Ubuntu to the version currently on the bootable media.  Choose this option if you would like to repair your OS.  This is the least destructive of the options.
- Choose the second option, **Erase Ubuntu**, to erase only the partitions related to Ubuntu.  Choose this option if you would like to preserve an existing installation of Windows or another operating system, while still reinstalling Ubuntu.
- Choose the third option, **Install Ubuntu Alongside**, to allow you to add an additional operating system to your computer.  Choose this option if you already have an operating system, such as Windows or another version of Linux, and would like to also install Ubuntu.  Please note that the existing operating system's partition will need to be reduced before installing Ubuntu in the extra space.
- Choose the fourth option, **Erase Disk**, to erase everything on the hard drive and install Ubuntu.  This option is the most destructive of the options, and will guarantee a clean slate.  This option also has to be selected if you would like to encrypt the entire drive.  When encrypting the drive, use the LVM option for flexibility with partitions later.
- Choose the fifth option, **Something Else**, to do a manual installation of the partitions.  This can be used to customize the partition or put certain directories on separate partitions or disks.


## 4. Install the System76 Driver

Once you've reinstalled Ubuntu, you'll need to download and install the System76 Driver.  Open the Terminal (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>) and then enter the following commands.

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt update
sudo apt install system76-driver
```

**For NVIDIA Graphics:** If you ordered a system with a discrete Nvidia graphics card, you will need to manually install the drivers for your card to get the optimum performance.  Please run the following command after the above commands to install the driver:

```
sudo apt install system76-driver-nvidia
```

Once the process is finished, restart your computer for all changes to take effect.
