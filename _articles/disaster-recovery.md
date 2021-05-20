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

For more information about doing this process in the Pop Recovery see [here](/articles/pop-recovery).

For more information about doing this process in a live disk see [here](/articles/bootlaoder).

We do not need to chroot into the installed OS and only need to mount the OS. Once this is done we can install the software that we will use for this process which is `Deja Dup`. 

## Software 

### Deja Dup

[Déjà Dup](https://wiki.gnome.org/Apps/DejaDup) is a popular, straightforward backup option. It can be used to back up user data locally, remotely, or to a cloud server. It can also be set up to run automatically on a regular basis.

#### Installation

To install Deja Dup, search for it in the Pop!\_Shop, Ubuntu Software or run this command:

```
sudo apt install deja-dup
```

Once Deja Dup is installed, it will be labeled as "Backups" in the Activities overview.

#### Selecting Data to Backup

With Deja Dup (Backups) open, you can select the folders you wish to save or ignore using the pages listed on the left. By default, Deja Dup will backup your entire home directory, which includes your Documents, Pictures, Music, and Videos folders. It ignores your Downloads folder and any items in the Trash. Use the plus and minus buttons as needed to modify both categories.

![Selecting data to backup in Deja-Dup](/images/backup/deja_selection.png)

#### Choosing a Backup Location

On the **Storage location** page, you can configure the location where your backup will be stored.

![Selecting a backup location in Deja-Dup](/images/backup/deja_location.png)

#### Restoring Your Data

Once we have our data backed up we can reinstall the OS if we are ready to do that step. Now that we reinstalled the OS we can start restoring our data. To restore your data with Deja Dup, select the **Overview** page, then click the **Restore...** button. This will allow you to select the location containing the Deja Dup backup folder, and will copy the data from the most recent backup to its original location.

![Restoring data in Deja-Dup](/images/backup/deja_overview.png)

