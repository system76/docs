---
layout: article
title: Disaster Recovery
description: >
 How to backup your files if your OS doesn't boot
keywords:
 - files
 - backup
 - deja-dup
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

## If you can't boot your installed OS

If you are not able to boot into your installed OS then we will want to boot from a live disk or if you have Pop installed we can use the Pop Recovery.

### Creating the live disk (Bootable OS)

We can use this [article](/articles/live-disk) to create a live disk of Ubuntu if you aren't using Pop. For more information about doing this process in the Pop Recovery see [here](/articles/pop-recovery) and for Ubuntu see [here](/articles/bootloader).

We do not need to chroot into the installed OS and only need to mount the OS. Once this is done we can install the software that we will use for this process which is <u>Deja Dup</u> using the steps below. 

### Connect to the Internet

![Top Left Menu](/images/disaster-recovery/Dialog.png)

Use the top left menu like in the screenshot above to connect to your Wi-Fi once booted into the live disk. 

### Mount the installed OS

Once connected to the Internet open <u>Firefox</u>, log into your System76 account to access your ticket (if you have our hardware) and/or the [bootloader](/articles/bootloader) to copy and paste the encryption commands (if the OS is encrypted) and the mount commands.

## Software 

### Deja Dup

[Déjà Dup](https://wiki.gnome.org/Apps/DejaDup) is a popular, straightforward backup option. It can be used to back up user data locally, remotely, or to a cloud server. It can also be set up to run automatically on a regular basis.

#### Installation

To install <u>Deja Dup</u>, search for it in the <u>Pop!\_Shop</u>, <u>Ubuntu Software</u> or run this command:

```bash
sudo apt install deja-dup
```

Once Deja Dup is installed, it will be labeled as "Backups" in the Activities overview.

#### Selecting Data to Backup

With Deja Dup (Backups) open, you can select the folders you wish to save or ignore using the pages listed on the left. By default, Deja Dup will backup your entire home directory, which includes your Documents, Pictures, Music, and Videos folders. It ignores your Downloads folder and any items in the Trash. Use the plus and minus buttons as needed to modify both categories.

![Selecting data to backup in Deja-Dup](/images/backup/deja_selection.png)

#### Choosing a Backup Location

On the **Storage location** page, you can configure the location where your backup will be stored.

![Selecting a backup location in Deja-Dup](/images/backup/deja_location.png)

## Hardware

An external or internal drive can be used as a local backup location. 

### External

For external drives see the specs below for an idea on what to look for:

- USB 3.0/2.0
- Match your OS drive size or larger

### Internal

For internal drives if your system included a second drive besides the OS drive we have this [article](/articles/extra-drive/) that goes over setting up the drive to auto-mount once the OS is either repaired or reinstalled. If we have the installed OS mounted in the live disk open the <u>Files</u> application then go to ***Other Locations*** to access the drive which is labeled "ExtraDrive" on System76 systems.

#### Restoring Your Data

Once we have our data backed up we can reinstall the OS if we are ready to do that step. Now that we reinstalled the OS we can start restoring our data. To restore your data with Deja Dup, select the **Overview** page, then click the **Restore...** button. This will allow you to select the location containing the Deja Dup backup folder, and will copy the data from the most recent backup to its original location.

![Restoring data in Deja-Dup](/images/backup/deja_overview.png)

## Future Steps

Now that we have our data, and a clean install of the OS, let's prepare for if this issue happens again. It's good practice to set up scheduled backups. Our [backup article](/articles/backup-files) can help.

