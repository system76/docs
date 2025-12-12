---
title: Data Recovery
description: >
 How to back up your files if your operating system doesn't boot
keywords:
  - files
  - backup
  - deja-dup

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

This guide helps users recover data and restore system functionality after _OS failure, update issues, bootloader errors, or hardware problems.

## If you can't boot your installed OS

# Pop!\_OS
Use Recovery Partition: 
1. Hold <kbd>Spacebar</kbd>or press <kbd>ESC</kbd> at boot menu. Select **Pop!\_OS Recovery**
  _If Recovery is missing_: Download Pop!\_OS and create a Live USB from this [link](https://pop.system76.com/).
# Ubuntu
  Use Live USB: 
  1. Download Ubuntu ISO from this [link](https://ubuntu.com/download) and create a live [USB](https://support.system76.com/articles/live-disk) using Rufus or Startup Disk Creator.
2. Boot from USB and select **Try Ubuntu**.

### Connect to Internet

1. Use the **top-right system menu** to connect to Wi-Fi or ethernet.
_A stable connection is recommended for installing backup tools or uploading data._

### Mount the Installed OS Drive

# If Disk is Encrypted:
1. Open a terminal by pressing <kbd>Super</kbd> + <kbd>T</kbd> and type the following commands:

```bash
sudo cryptsetup luksOpen /dev/sdX ubuntu-root sudo mount /dev/mapper/ubuntu-root /mnt
```

# If Disk is not Encrypted:
1. Open **Files** > **Other Locations** and locate your system drive.

### Install Backup Software
# Deja Dup
_ Supports local, remote, and cloud backups and has ability to schedule automatic backups._
1. Open **Pop! Shop** if using Pop!\_OS
2. Search for **Deja Dup** in Pop! Shop and download the application. If using Ubuntu, open the **Backups** application, which is also Deja Dup.

# Rsync
_Command line utility that reserves file permissions and supports resumable transfers_
1. Install rsync if not already installed.
```bash
sudo apt install rsync

Deja Dup

* Available via **Pop!_Shop** or **Ubuntu Software Center**.
* Supports local, remote, and cloud backups.
* Can be scheduled for automatic backups.

### Installing Deja Dup

* Appears as **Backups** in the Activities menu.

```bash
sudo apt install deja-dup
```

### Rsync (CLI)

* Preserves file permissions and supports resumable transfers

```bash
rsync -avxP \
/path/to/directory/to/backup \
/path/to/directory/for/storing/backup
```
_Note:_ Upload speeds can vary depending on your internet provider, cloud service, or physical location and may even be subject to throttling. For faster and more reliable file transfer, it's recommended to use a wired Ethernet connection whenever possible.

### Additional backup Tool Options


**Timeshift** -- ideal for system snapshots and rollback
**Duplicati** -- web-based interface, encrypted backups, supports cloud storage

## Command Line Tools

**BorgBackup** -- deduplication, compression, encryption; great for data recovery
* Restic -- fast, secure, cross-platform; supports many backends (SFTP, AWS, etc.)
* **Rsync** -- highly customizable; ideal for scripted or incremental backups

### Enterprise-grade Solutions

* Amanda/Zamanda -- centralized backup management, tape support
* Veeam Agent for Linux -- commercial-grade, agent-based backups with recovery tools

## Selecting Data to Back Up

* By default, Deja Dup backs up the **Home** directory.
* Excludes **Downloads** and **Trash**.
* Use + and -- to customize included/excluded folders.

## Choosing a Backup Location

External Drive

* Use USB 3.0 or 2.0
* Match or exceed the size of you OS drive.

Internal Drive

* Open **Files** > **Other Locations**
2. Identify secondary drives or partitions. On System76 devices, secondary drives may be labeled **Extra Drive**.
* Refer to your model's service manual to remove the drive.
* Use a USB-to-SATA adapter to connect it to another system.
### Initiate the Backup

## If the Drive is the Problem

* Stop using the drive immediately.
* Contact a professional data recovery service.

_Note:_ System76 and Ubuntu do not offer or partner with recovery service. Drive manufacturers may offer recovery options under warranty.

### Set Up Scheduled Backups

Use Deja Dup or rsync to automate backups on a daily or weekly schedule. This ensures your data is protected without manual effort.
Follow the **3-2-1** Backup Rule
To protect your data against hardware failure, theft, or unexpected events:

* **3 total copies** of your important files
* **2 stored locally** (e.g., internal drive + external USB)
* **1 stored off-site**, such as:
  * A cloud storage service (e.g., Dropbox, Google Drive, Backblaze)
  * An external drive kept at a trsuted relative's house
  * A secure location like a safety deposit box
**This layered approach ensures that even if one or two copies are compromised, your data remains recoverable.**

## Restoring Data after Reinstall

1. Open **Backups**.
2. Click **Restore**
3. Select the backup location.
4. Deja Dup will restore the most recent backup to its original location.
