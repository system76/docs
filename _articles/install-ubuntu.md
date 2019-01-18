---
layout: article
title: Ubuntu - Install Ubuntu On Your System76 Computer
description: >
  Full instructions on installing Ubuntu your computer.
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
image: http://support.system76.com/images/upgrade/Ubuntu-18-04.jpg
hidden: false
section: articles

---

System76 computers use a standard Ubuntu installation disc and the System76 Driver to fully restore the system to factory settings.

#### Oryx Pro (oryp2) Touchpad

On our second generation Oryx Pro (oryp2), the System76 driver is required for the touchpad.  Please use the keyboard or an external mouse for the initial install steps and until the driver is installed.

#### Recent Upgrade

If your recently upgraded system does not boot, it can often be recovered.  If you see a flashing underscore on the screen after booting, then it's likely that Ubuntu's bootloader (GRUB) was not properly updated. To restore it, see [How to Restore GRUB Bootloader](/articles/grub)

---

### Create Install Media

First, you'll need to create bootable media you can restore or install Ubuntu with.

Create an Installation USB | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) | [Using Mac OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

### Boot From Install Media

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. Immediately after you turn the computer on:

Laptops                             | Desktops
----------------------------------- | ------------------------------------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F12</kbd>, <kbd>F8</kbd>, or <kbd>F10</kbd>

---

#### NVIDIA Graphics

Ubuntu may need a special option enabled to install and boot from Ubuntu until the NVIDIA driver can be installed as described below. If the installer doesn't show an image after this screen, please follow the next instructions:

![First](/images/install-ubuntu/first.png)

When you see the above screen, press the 'e' key to enter the boot parameter configuration screen.

![Second](/images/install-ubuntu/second.png)

Then on the above screen at the end of the 'linux' line add the following line:

```
nomodeset
```

---

Once Ubuntu starts, you will be asked to **Try Ubuntu** or to **Install Ubuntu**. If you are attempting to restore a broken operating system, please choose **Try Ubuntu**. First, we recommend backing up all important files from your computer. The restore process can leave your files intact, but it's best to be safe in case something goes wrong. Next, double-click on the **Install Ubuntu** icon on the desktop.

![Try or Install](/images/install-ubuntu/try-install.png)

If all of your files are backed up, or if you are installing from scratch, you'll need to pick the **Install Ubuntu** option to continue with the installation. Please check the box labeled **Download updates while installing Ubuntu** to ensure that your new installation is fully up to date once the installation is complete.

![Download Updates](/images/install-ubuntu/updates.png)

### Install Ubuntu

Ubuntu will present several options when installing:

![Install Ubuntu](/images/install-ubuntu/install.png)

Option | Action
----------- | ----------------
**Upgrade** | To preserve everything in the `/home` directory and attempt to restore Ubuntu to a working condition. This option can also be used to upgrade Ubuntu to the version currently on the bootable media. Choose this option if you would like to repair your OS. This is the least destructive of the options.
**Erase Ubuntu** | To erase only the partitions related to Ubuntu. Choose this option if you would like to preserve an existing installation of Windows or another operating system, while still reinstalling Ubuntu.
**Install Ubuntu Alongside** | To allow you to add an additional operating system to your computer. Choose this option if you already have an operating system, such as Windows or another version of Linux, and would like to also install Ubuntu. Please note that the existing operating system's partition will need to be reduced before installing Ubuntu in the extra space.
**Erase Disk** | To erase everything on the hard drive and install Ubuntu. The is the most destructive of the options, and will guarantee a clean slate. This option also has to be selected if you would like to encrypt the entire drive. When encrypting the drive, select **Use LVM with the new Ubuntu Installation** option for flexibility with partitions later.
**Something Else** | To do a manual installation of the partitions. This can be used to customize the partition or put certain directories on separate partitions or disks.

### Install System76 Driver

Once you've reinstalled Ubuntu, you'll need to download and install the <u>System76 Driver</u>. Open the <u>Terminal</u> (search <u>Terminal</u> from the Ubuntu (<i class="fl-ubuntu"></i>) dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

```
sudo apt-add-repository -y ppa:system76-dev/stable
sudo apt update
sudo apt install system76-driver
```

#### NVIDIA Graphics

If you ordered a system with a discrete NVIDIA graphics card, you will need to manually install the drivers for your card to get the optimum performance. Please run the following command after the above commands to install the driver:

```
sudo apt install system76-driver-nvidia
```

#### If 'nomodeset' Was Used

The `nomodeset` modifier needs to be removed after installing the NVIDIA driver. Please run this command to edit the startup options file:

```
sudo gedit /etc/default/grub
```

Update this line:

> GRUB_CMDLINE_LINUX="nouveau.modeset=0"

to:

> GRUB_CMDLINE_LINUX=""

Then save the file, exit the editor, and run this command to make the change permanent:  

```
sudo update-grub
```

Once the process is finished, restart your computer for all changes to take effect.
