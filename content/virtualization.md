---
title: Virtualization on Linux
description: Create a VM on Linux with GNOME Boxes or Virtual Machine Manager
keywords:
  - VM
  - libvirt
  - GNOME Boxes
  - virt-manager
  - Virtual Machine Manager
  - VMM
  - VirtualBox
  - VMWare
  - Virtual Machine

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

![GNOME Boxes with VMs](/images/gnome-boxes/boxes-full.png)

This is a quick tutorial on running virtual machines, or VMs, on Linux. Virtual machines allow you to run other operating systems from within your primary operating systems. This is a great way to run applications that require older software, run applications that require an OS other than Linux, or to try out other operating systems.

This article will cover the GNOME Boxes application for running virtual machines. GNOME Boxes uses the open source [libvirt](https://libvirt.org/) hypervisor, which is the software that manages and runs the VMs.

## Set Up

First things first, we will need to a Linux operating system installed on your computer. We will be using Pop!_OS as the operating system running the virtualization software, called the Host operating system. Then, we will use Ubuntu as the "Guest" operating system, which runs inside the VM.

- Install [Pop!_OS](/articles/install-pop) on your computer
- Download the [Ubuntu ISO](https://ubuntu.com/download/desktop)

## Install GNOME Boxes

![GNOME Boxes Empty](/images/gnome-boxes/boxes-empty.png)

On Pop!_OS, you can install [GNOME Boxes](https://wiki.gnome.org/Apps/Boxes) from the Pop! Shop. On Ubuntu, it is available in the Software Center.

Alternatively, on either Pop!_OS or Ubuntu, you can install GNOME Boxes by running the below command in a Terminal

```bash
sudo apt install gnome-boxes
```

For other Linux distributions, GNOME Boxes is likely available in their software store or software repositories. GNOME Boxes is also available as a [Flatpak](https://flathub.org/apps/details/org.gnome.Boxes). If your Linux distribution supports Flatpak, you can install GNOME Boxes with the below command.

```bash
flatpak install org.gnome.Boxes
```

## Creating a VM

Now that GNOME Boxes has been installed, we can begin to create the virtual machine. To start, open or navigate to GNOME Boxes, then select the <kbd>+</kbd> button at the top left. This will open the "Create a Virtual Machine" dialog box.

### Selecting the Operating System

![Create a VM](/images/gnome-boxes/boxes-create-1.png)

![Select ISO File](/images/gnome-boxes/boxes-create-2.png)

The first step in the VM creator, is to select the OS installer you would like to use. Most often, these installers will be provided as `.iso` files. To use the ISO file, select "Operating System Image File" at the bottom of the "Select an OS Source" window. Then, a file explorer window will open, and you can navigate to and select your ISO file.

![Identify OS](/images/gnome-boxes/boxes-create-3.png)

After selecting your ISO file, the following window will ask you to identify your operating system. If your operating system is listed in the "Templates" drop down, you can select it. Otherwise, select "Unknown OS" from the list of templates.

### Resource Allocation

![Resource Allocation](/images/gnome-boxes/boxes-create-4.png)

At this point, you should see the Resource Allocation screen where you can select the amount of RAM and the disk size for the VM. The amount of RAM and drive space you give to the VM will be dependant on the hardware requirements for the OS you are looking to install.

If you are unsure what values to use, 8GB of RAM and 60GB for the maximum disk size will be enough for most operating systems to install, with some room for growth as you use the VM.

### Performing the OS Install

![Install the VM](/images/gnome-boxes/boxes-vm-install.png)

After selecting the resources for your VM, the VM will boot the selected operating system installer. Likely, you will see some odd graphical behavior, such as the black bars shown in the above screenshot. This is because some of the drivers needed for the VM are not installed yet. These oddities can be ignored for now, and we will install the drivers later.

The install process for your chosen operating system will be just like any other install, with nothing VM specific at this time. Proceed through the OS install using the OS's guides, or possibly one of the System76 guides linked below:

#### Linux

Install Pop!_OS - [https://support.system76.com/articles/install-pop/](https://support.system76.com/articles/install-pop/)

Install Ubuntu - [https://support.system76.com/articles/install-ubuntu/](https://support.system76.com/articles/install-ubuntu/)

#### Windows

![Windows Express Install](/images/gnome-boxes/boxes-windows-expressinst.png)

When you attempt to create a Windows VM, you will likely see a prompt for the "Express Install" feature of GNOME Boxes. You can certainly use the Express Install with your Windows product key. However, for this article turn off the Express Install, then click "Next" at the top right to move to the standard installer set up.

Install Windows - [https://support.system76.com/articles/windows/](https://support.system76.com/articles/windows/)

### Install GNOME Boxes Drivers

GNOME Boxes has some features that require drivers to be installed into the Guest operating system for better performance and to better integrate the VM with the VM software.

#### Linux Guests

There are 2 drivers needed to get the full functionality out of your Linux VM with GNOME Boxes. The first is the `spice-vdagent` driver, and the other is the `spice-webdavd` driver. Both drivers are provided by the Open Source [Spice Project](https://www.spice-space.org/).

Some Linux distributions include one or both of these drivers out of the box, while others will need them both installed. Additionally, your Linux distribution may not use the names used above, so you may need to reach out to those maintainers for more information. You can see an example of this discrepency below in the Arch Linux section. On Arch, the `spice-webdavd` package does not exist, but the `phodav` package works as a replacement.

- Ubuntu

```bash
sudo apt update
sudo apt install spice-webdavd
```

- Pop

```bash
sudo apt update
sudo apt install spice-vdagent spice-webdavd
```

- Fedora

```bash
sudo dnf install spice-webdavd
```

- Arch

```bash
sudo pacman -Sy spice-vdagent phodav
```

##### VD Agent

This driver brings in support for what most users will need. After installing this package and rebooting the VM, you will notice the VM will resize to match the size of your GNOME Boxes window. Additionally you will now be able to copy and paste between the Host and the VM. Both of these features are enabled by default once the driver is installed, so no configuration necessary.

##### WebDAVd

This driver allows you to share folders and files between the Host's Operating system, and the VM's Operating System.

#### Windows Guests

On Windows, there are also 2 drivers that will need installed for all the features of GNOME Boxes to be supported by Windows. These drivers are available on the [Spice Project's](https://www.spice-space.org/download.html#windows-binaries) download page. There are a number of downloads listed in this section, but the 2 drivers we need are the [Windows guest tools](https://gitlab.freedesktop.org/spice/win32/spice-nsis) and the [Spice WebDAVd](https://git.gnome.org/browse/phodav/tree/spice) drivers.

##### Windows Driver Downloads

- Windows Guest Tools: [https://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exe](https://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exe)
- Spice WebDAVd: [https://www.spice-space.org/download/windows/spice-webdavd/spice-webdavd-x64-latest.msi](https://www.spice-space.org/download/windows/spice-webdavd/spice-webdavd-x64-latest.msi)

> While trying to download the Spice WebDAVd file in the Edge browser, if I clicked the link, I was taken to a page trying to display the file as text instead of downloading the file. This ends up showing a lot of odd letters and characters.
>
> When trying the download a few more times, I either saw same window with random text, or I received a "This page isn't responding" prompt.
>
> If either of these happen when you download, right-click the link above and select "Save Link As..." and save the file to your Downloads folder.

## Virtualiaztion Features

Now that the VM is set up, and drivers are installed, we can now use the advanced features of GNOME Boxes.

Most of these features can be found in the VM's settings menu. To reach the VM settings menu, click on your VM in the GNOME Boxes list to start the VM. You can now select the <kbd>&vellip;</kbd> button at the top right of GNOME Boxes, then select "Properties" to open the VM settings menu.

### Copy and Paste

Once your VM has the `spice-vdagent` or an equivelent package installed on your VM, reboot the VM once to load this driver. At this point, you will now be able to copy and paste between your VM and the Host just like copy and pasting between applications.

### Share a USB Device

![Devices and Shares](/images/gnome-boxes/boxes-vmprefs-devices_and_shares.png)

One of the features of GNOME Boxes, is the ability to transfer a USB device connected to your Host to the VM. You can find this option in the VM settings menu, under the "Devices & Shares" tab. On this tab, under the "USB devices" heading, you will see a list of the USB devices found on your system. If you click the toggle bottom on the right, the USB device will disappear from your Host operating system, and it will appear inside your VM.

### Share a Folder

_For this guide, we used GNOME-based Linux distributions, so the VMs UI closely matched Pop!_OS and Ubuntu. Accessing shared folders with other desktop environments is possible, but you will need to refer to their documentation for the details_

![Folder Shares](/images/gnome-boxes/boxes-folder-shares.png)

To share a folder from the Host with your VM, you will need the `spice-webdavd` or an equivelent package installed on your VM. From the VM settings menu, select the "Devices and Shares" tab and scroll to the bottom. At the bottom of this menu, you will see the "Folder Shares" section. Click the <kbd>+</kbd> button to show the folder share pop-up.

#### Selecting the Host's Folder

In this pop-up, the "Local Folder" refers to the folder's name on the Host system. This defaults to the "Public" folder in your Home directory. If you click the drop down, you can quickly select some of the important folders on your system. If you do not wish to use one of these folders, select "Other..." This will open a folder selection window, where you can then navigate to the folder you wish to share with the VM. Once you are in the folder you wish to share, click "Open" in the top right corner.

#### Accessing a Shared Folder

![Accessing a Shared Folder](/images/gnome-boxes/boxes-vm-access-folder-share.png)

Now that GNOME Boxes is sharing the folder, we can close the VM settings menu and move back to the VM. In the VM, open your Files application, then navigate to "Other Locations" on the left hand side. You will likely see a spinning loading wheel under "Networks" for a moment, so wait for that to finish. Once the loading is done, you should see "Spice client folder" listed under "Networks." Click on "Spice client folder" once, and you will a 2nd "Spice client folder" entry appear. This new entry will have a folder icon, and has an eject icon on the far right (see the photo below). If you click on this new "Spice client folder" entry, or click the "Spice client folder" item listed on the left hand side and you will see your shared folder inside.

![Mounted Shared Folder](/images/gnome-boxes/boxes-vm-folder-share-mounted.png)

### Snapshots

![Snapshots](/images/gnome-boxes/boxes-snapshots.png)

Snapshots are another feature of GNOME Boxes found in the VM settings menu under the "Snapshots" tab. A snapshot is similar to a backup of your VM. When you take a snapshot of your VM, you are taking a picture of the state of the VM at that moment. So, if you take a snapshot, then make changes to your VM that breaks something or you later want to undo, you can click the gear icon next to the snapshot and select "Revert to this state." After restarting the VM, you will see all your changes undone, and the VM will be back to the state it was when you took the snapshot.
