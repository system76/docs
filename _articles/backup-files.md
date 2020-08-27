---
layout: article
title: Backup Files
description: >
 Here is how to backup your important files.
keywords:
 - files
 - backup
 - deja-dup
 - rsync
 - Nextcloud
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Backup Files

- Document Version: 2.0.0
- Date: (8-1-2020)
- Author: Nathan Dyer, James Gross
- Contributing Editor(s): Nathaniel Warburton


There are many ways to backup important files on your computer. The choice of what one to use is largely a personal one based on habits, preferences, and what is being backed up. We will outline a few options here, but the final solution may be a mix of several of these options.

## Data Policy

The key to good backups is having the data automatically backed up, accessible, secure, and distributed. All backup solutions should be evaluated against these 4 criteria:

-  Automatic: Data is automatically backed up. Manual copies work well in some cases, but automatic backups makes sure it's always fresh, and that nothing is lost if a manual backup isn't performed
-  Accessible: Data needs to be able to be retrieved. Data has to be able to be restored easily if the original is lost.
-  Secure: Data needs to be only accessible by the owner. Cloud solutions are great, but additional steps need taken to make sure the data is private.
-  Distributed: Data needs to be in multiple places. If all the data is in one location, the risk for data loss increases (for example, if your data is saved to a USB disk in your house, but there is a fire, all copies could potentially be lost).

As a rule of thumb, a good backup consists of three copies: the original copy, a quickly accessible copy, and then an off-site copy.

## User Files

User files are the most common data to be backed up. This includes documents, pictures, and other personal files. Typically, these documents are all saved in your Home directory.

### Deja-Dup

Deja-dup is a popular, straight-forward backup option. It can be used to backup user data locally, remotely, or to a cloud server. It can also be setup to run automatically on a regular basis.

#### Installation

To install deja-dup, download it from the Pop!\_Shop, or run this command:

```
sudo apt install deja-dup
```

Once Deja-Dup is installed, the program will be labeled "Backups," and can be searched using the Activities overview.

#### Selecting Data to Backup

With Deja-Dup open, you can select the folders you wish to save, as well as any folders you wish to ignore. To do this, select either option from the list on the left. By default, Deja-Dup will backup your entire Home directory, which includes your Documents, Pictures, Music, and Videos. It ignores your Downloads folder, as well as any items in the Trash can. Use the plus and minus buttons as needed to modify both categories.

![Selecting data to backup in Deja-Dup](/images/backup/deja_selection.png)

#### Choosing a Backup Location

By selecting the **Storage location** item in the list, you can configure the location in which you would like to store your backup

![Selecting a backup location in Deja-Dup](/images/backup/deja_location.png)

**Local Folder** - Backup data to another internal or external hard drive, or USB disk.

<u>Pros:</u>
Easy to setup, automatic, accessible, and secure. Backups typically happen quickly because it's using a high-speed direct connection.

<u>Cons:</u>
Single point of failure. If the computer is lost or if both drives fail, the data is lost.

**Network Server** - Backup data to another computer or storage device (NAS) on your network.

<u>Pros:</u>
Same as the local backup, but with less of a single point of failure.

<u>Cons:</u>
Requires some networking knowledge, and the ability to setup another computer or storage device to hold the data.
Backups typically take longer because of slower transfer speeds due to data having to move across your network.

**Google Drive** - Backup to Google's cloud service

<u>Pros:</u>
Remote location is geographically different (off-site), and is accessible anywhere there is an Internet connection.

<u>Cons:</u>
Requires a Google Account
Your data could be accessible by Google or third-parties (including law enforcement)
Uses your Internet connection and may be an issue with data caps
Will be slower to back up, depending on your Internet speed

#### Scheduling Regular Backups

To schedule backups to run automatically, select **Scheduling** from the list on the left, then flip the switch to enable automatic backups, and set it on a schedule that makes sense for you. You'll want to schedule it for when you know that the location you selected will be available (for example, when you know you'll have the USB drive plugged in). Many people choose to let their backups run overnight, or on weekends.

![Scheduling backups in Deja-Dup](/images/backup/deja_scheduling.png)

#### Restoring Your Data

To restore your data with Deja-Dup, select the **Overview** item from the list, then click the **Restore** button. Doing this will allow you to select the location containing the Deja-Dup backup folder, and will copy the data into the appropriate directories based on the location from the last backup.

![Restoring data in Deja-Dup](/images/backup/deja_overview.png)

### Cloud Desktop Clients

Many online services offer free storage up to a certain amount of data, and offer a desktop client to make synchronization automatic. These companies give away tens of gigabytes of data for free, and have a native Linux/Windows/macOS/Android/iOS/Web client, making the data easily accessible anywhere.

[Dropbox](https://www.dropbox.com)
[Box.com](https://www.box.com)
[Mega.nz](https://www.mega.nz)

[Google drive](https://drive.google.com) does not have a native Linux client, but there is built-in support within the OS. Please note that the built in support does not copy and keep files locally as the above desktop clients do.

To keep the data from being read by everyone, one solution is to keep all of the files into passworded archives. A .zip or .7z file with a password is encrypted, and can't be easily accessed by anyone without the password.

Another option is [Nextcloud](https://nextcloud.com/). Nextcloud is a cloud solution that is completely controlled by the user. The remote server needs setup by the individual, or a 3rd party needs paid to setup and maintain the server.

### Copy Data Manually Using the Files App

With an external drive attached, data can be manually copied over to the drive. Use the file browser to copy data from the internal drive to the external drive.

<u>Pros:</u>
Easy and straight forward to copy data from one place to another.

<u>Cons:</u>
Manual, so may miss updates and changes to data over time. Geographically centric.


### Terminal Only (Advanced)

In certain situations, you may only have access to a command-line interface. To copy files using the command-line, you can use a program called rsync.

An example of a the rsync command would be:

```
rsync -a ~/ OUTPUT_DIRECTORY
```

where -a tells rsync to output as an archive, ~/ refers to your home directory as the source location, and OUTPUT_DIRECTORY is the location of your external disk or your remotely mounted server.

## E-mail

If all access to email is through a web browser, there is little to worry about, as the data is always being held on a remote computer. If a cell phone or local client, such as Thunderbird or Evolution, is used, then the data may be stored in both locations, or only in one. If the IMAP protocol is used, the data is synchronized between all clients. If the POP protocol is used, then the data is only in one location.

**Web Browser**

<u>Pros:</u>
All data is always on a remote server.

<u>Cons:</u>
Requires internet access.

**IMAP**

<u>Pros:</u>
Data is synchronized between the remote server and local devices. No single failure point.

<u>Cons:</u>
Requires internet access.

**POP**

<u>Pros:</u>
Data is more secure, as it's only in one location at any time.

<u>Cons:</u>
One location means one point of failure.

### User Configuration Files

Most user configuration files are stored in the home folder. Generally, these can be copied and saved just like any other user file. There is a caveat though, because restoring these files may not always work. Occasionally, the system has changed how configuration files are stored, where they are stored, or in what format. That means that they won't always be restored, or may not function as intended. Go ahead and back these up as needed, but remember that they may not restore correctly.

Most user configuration files can be found in the home directory, and begin with a period.

### Programs

Since programs are readily available online and through the software repositories, we don't recommend backing them up. They are spread throughout the file system and are difficult to directly backup. To backup programs, we recommend keeping a list of programs that you like, so that they can be reinstalled with a single package manager command, like so:

```
sudo apt install gnome-tweak-tool mousepad aptitude thunar
```

### Program Configuration Files

Program configuration files can be found in many locations of the OS. The most common location is the `/etc` folder. Most of these can be backed up in the same ways that user configuration files can, with the same caveat about changes in program versions when restoring these files.
