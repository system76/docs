---
layout: article
title: Files - Backup Files
description: >
  Here is how to backup your important files.
keywords:
  - files
  - backup
  - deja-dupe
  - Nextcloud
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

There are many ways to backup important files on your computer.  The choice of what one to use is largely a personal one based on habits, preferences, and what is being backed up.  We will outline a few options here, but the final solution may be a mix of several of these options.

### Data Policy

The key to good backups is having the data automatically backed up, accessible, secure, and distributed.  All backup solutions should be evaluated against these 4 criteria:

-   Automatic: Data is automatically backed up.  Manual copies work well in some cases, but automatic backups makes sure it's always fresh, and that nothing is lost if a manual backup isn't performed
-   Accessible: Data needs to be able to be retrieved.  Data has to be able to be restored easily if the original is lost.
-   Secure: Data needs to be only accessible by the owner.  Cloud solutions are great, but additional steps need taken to make sure the data is private.
-   Distributed: Data needs to be in multiple places.  If all the data is in one location, the risk for data loss increases.

### User Files

User files are the most common data to be backed up.  This includes documents, pictures, and other personal files.

#### Deja-dup

Deja-dup is a popular backup option.  It can be used to backup user data locally, remotely, or to a cloud server.  It can be setup to run automatically on a regular basis.

To install deja-dup, download it from the Pop!_Shop, or run this command:

```
sudo apt install deja-dup
```

**Local** - Backup data to another internal or external hard drive.

<u>Pros:</u>
Easy to setup, automatic, accessible, and secure.

<u>Cons:</u>
Single point of failure. If the computer is lost or if both drives fail, the data is lost.

**Remote** - Backup data to another computer on your network.

<u>Pros:</u>
Same as the local backup, but with less of a single point of failure.

<u>Cons:</u>
Requires some networking knowledge, and the ability to setup another computer to hold the data.

**Cloud Server** - Backup to a computer not on your network

<u>Pros:</u>
Remote location is geographically different, and is accessible anywhere there is an Internet connection.

<u>Cons:</u>
More difficult to setup.

#### Cloud Desktop Client

Many online services offer free storage up to a certain amount of data, and offer a desktop client to make synchronization automatic.  These companies give away tens of gigabytes of data for free, and have a native Linux/Windows/macOS/Android/iOS/Web client, making the data easily accessible anywhere.

[Dropbox](https://www.dropbox.com)  
[Box.com](https://www.box.com)  
[Mega.nz](https://www.mega.nz)  

[Google drive](https://drive.google.com) does not have a native Linux client, but there is built-in support within the OS.  Please note that the built in support does not copy and keep files locally as the above desktop clients do.

To keep the data from being read by everyone, one solution is to keep all of the files into passworded archives.  A .zip or .7z file with a password is encrypted, and can't be easily accessed by anyone without the password.

Another option is [Nextcloud](https://nextcloud.com/).  Nextcloud is a cloud solution that is completely controlled by the user.  The remote server needs setup by the individual, or a 3rd party needs paid to setup and maintain the server.

#### Manual

With an external drive attached, data can be manually copied over to the drive.  Use the file browser to copy data from the internal drive to the external drive.

<u>Pros:</u>
Easy and straight forward to copy data from one place to another.

<u>Cons:</u>
Manual, so may miss updates and changes to data over time.  Geographically centric.

### E-mail

If all access to email is through a web browser, there is little to worry about, as the data is always being held on a remote computer.  If a cell phone or local client, such as Thunderbird or Evolution, is used, then the data may be stored in both locations, or only in one.  If the IMAP protocol is used, the data is synchronized between all clients.  If the POP protocol is used, then the data is only in one location.

**Web Browser**

<u>Pros:</u>
All data is always on a remote server.

<u>Cons:</u>
None

**IMAP**

<u>Pros:</u>
Data is synchronized between the remove server and local devices.  No single failure point.

<u>Cons:</u>
None

**POP**

<u>Pros:</u>
Data is more secure, as it's only in one location at any time

<u>Cons:</u>
One location means one point of failure.

### User Configuration Files

Most user configuration files are stored in the home folder.  Generally, these can be copied and saved just like any other user file. There is a caveat though, because restoring these files may not always work.  Occasionally, the system has changed how configuration files are stored, where they are stored, or in what format.  That means that they won't always be restored, or may not function as intended.  Go ahead and back these up as needed, but remember that they may not restore correctly.

Most user configuration files can be found in the home directory, and begin with a period.

### Programs

Since programs are readily available online and through the software repositories, we don't recommend backing them up.  They are spread throughout the file system and are difficult to directly backup.  To backup programs, we recommend keeping a list of programs that you like, so that they can be reinstalled with a single package manager command, like so:

```
sudo apt install gnome-tweak-tool mousepad aptitude thunar
```

### Program Configuration Files

Program configuration files can be found in many locations of the OS.  The most common location is the `/etc` folder.  Most of these can be backed up in the same ways that user configuration files can, with the same caveat about changes in program versions when restoring these files.
