---
layout: article
title: Before You Open a Ticket
description: >
 A troubleshooting triage to help you self-diagnose a variety of issues.
keywords:
 - support
 - software
 - hardware
 - environment
 - warranty
 - self-help
 - tech-support
 - troubleshooting
image: http://support.system76.com/images/system76.png
hidden: false
section: getting-help

---

# Before You Open a Support Ticket

This article is designed to provided a range of self-help resources from our other support articles, all in one place. Please review this article and familiarize yourself with the kind of information we will need to help diagnose your issue. Instructions for some of the testing we perform on support tickets is included.

Any information, or test results, you can provide when opening your support case, will help us resolve your issue faster.
If you’ve already done some of these items, just let us know! Otherwise, feel free to skip that item in this list, and check the others. Please do provide the outcomes of any testing you've already done.

**NOTE**

You can use this article as a guide for your messaging when opening a support case. Please answer as many of the questions as you can.
The first message sent on a ticket does not support file attachments; however, the second message will.

If you're having difficulty attaching a file, you can also email the file to info@system76.com. Please be sure to tell us on the ticket if you have sent an email attachment.

If you encounter problems signing into your account, or opening a ticket, please [follow these steps](/articles/clear-cache-and-cookies)

## Before We Begin:

### 1. Do you have a current backup of your files?

Depending on how time sensitive your issue is, the fastest resolution may be to reinstall the operating system. Re-imaging is much easier to do if we know that your important files are safe.

We have a help article on backing up your system [here](/articles/backup-files)

### 2. Do you have a Live USB drive with a copy of either Ubuntu or PopOS available in case we need to use it as a rescue disk?

This will provide us an outside OS environment to access your installed system, potentially rescue files that have not been backed up, or quickly reinstall the OS if necessary.

We have a help article on creating [Live USBs here](/articles/live-disk)

# Common Issue Sources

## Software

### 3. Have you tested in either the Recovery Partition or a Live USB to see if the issue is present there?

We have help articles on the Recovery Partition and how to access the Boot Menu listed below.

[Recovery Partition](/articles/pop-recovery)

[Boot Menu](/articles/boot-menu)


### 4. Is your system fully up to date?

NOTE: The following instructions can be used in either Ubuntu or Pop!\_OS.

You can open the terminal by clicking Activities in the upper-left corner and searching for "Terminal", by pressing
<kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>, or
<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>
When you run the first command with "sudo" it will ask you to enter your password.
Typing your password will not show anything in the Terminal window. That is normal and for security.
Just enter your password as you normally would, and then hit <kbd>ENTER</kbd>. You'll also need to hit <kbd>ENTER</kbd> after each command.

```bash
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt dist-upgrade
sudo apt autoremove --purge
reboot
```

Then let's run:

```bash
sudo apt update
sudo apt full-upgrade
reboot
```

Source: [Fix Package Manager](/articles/package-manager-pop)

### 5. Have you tried creating an administrative Test User account to see if the issue is present in a different user?

That can be done by:

- Navigate to Settings -> Users
- Click the Unlock button
- Click the  **Add User** button that appears.
- Create a user with whatever name and credentials you want.
- Make sure click the **Administrator** option for the user.
- Reboot and log into the new user.

[Creating User Accounts](/articles/other-accounts)

### 6. Is there a new OS version available?
Upgrading to the latest OS version usually includes newer kernel modules and software packages, as well as security updates and bug-fixes.
These updates may directly or indirectly resolve your issue.

[Upgrade Pop](/articles/upgrade-pop)

[Upgrade Ubuntu](/articles/upgrade-ubuntu)

### 7. Have you tried reinstalling the packages or programs that are giving you trouble?

We are happy to provide instructions on how to reinstall packages if need be. Just let us know which program(s) are misbehaving and we can explain how to uninstall it/them.

NOTE: the apt package manager is used in both PopOS and Ubuntu. PopOS also offers flatpak variations of programs in the Pop!\_Shop.
If you need to remove flatpak packages you can also remove or reinstall them from the **Installed** tab of the Pop!\_Shop. Ubuntu uses snap packages for some programs by default, and snapd can be installed manually on Pop!\_OS as well.

Typically the Terminal commands to reinstall a program are:

```bash
sudo apt remove <packagename>
```
OR:

```bash
flatpak uninstall <packagename>
```

OR:

```bash
sudo snap remove <packagename>
```
Where "<packagename>" is replaced with the program name, without angle-brackets.


You can also inspect and edit your software sources using the instructions in these help articles:

[Manage Repositories in Pop!\_OS](/articles/manage-repos-pop)

[Manage Repositories in Ubuntu](/articles/manage-repos-ubuntu)


### 8. Let’s collect some system logs to get more information on what’s happening with your system.


To generate the logs we need, please click on **Activities** in the top left of your screen, search for System76, and then click on the System76 Driver application.

Then click on the **Create Log Files** button and the log file will be in your home directory when you first open the Files application.

For more information, please see this support article: [Creating Log Files](/articles/log-files)

## Environment

### 9. Are any other machines or users in your home or workspace experiencing the same issue?

### 10. If the issue involves networking, have you tried resetting your modem/router?
 **NOTE:** Please try this again, even if it appears no other devices are affected.

### 11. Are there any devices in proximity with your system that could be causing Wi-Fi or Bluetooth interference?

### 12. Is your work environment a stable temperature or has it been particularly warm or cold lately?

### 13. Have you added any external devices or accessories to your machine and workflow lately?

### 14. Has the machine ever suffered any fall or liquid damage?

## Hardware

### 15. If this is a hardware issue, steps 3 and 5 will help confirm it.

We also have an article on diagnosing hardware failures which can be found [here](/articles/hardware-failure)

We have several repair or replacement options available depending on the circumstances.

### Advance Replacement Whole System - Within 30 days of Shipment
We build and ship a replacement system with the same configuration, and have you return the defective system once the new one is received. More details will be provided if this process is requested.

### Advance Replacement Part - Within Warranty Period
We send a replacement part for self-service or service at a local repair shop, then have you return the defective part. We also provide the service manual for your machine if applicable. You can see the available [service manuals here](/articles/service-manuals) and [here](https://tech-docs.system76.com/)

More details will be provided if this process is requested.

### Repair - Within Warranty
We bring the system in for diagnosis and repairs. Costs covered under warranty, except for accidental damage or misuse.
More details will be provided if this process is requested.

### Repair - Out of Warranty
We bring the system in for paid diagnosis and repairs. Costs no longer covered.
More details will be provided if this process is requested.

### Parts Purchase
We create and offer a quote to purchase the part in question. We usually can also offer the part number if you prefer to source the part elsewhere.
More details will be provided if this process is requested.

# Warranty Information

You can read the details of our warranty coverage [here](https://system76.com/warranty)


---

<!-- 
- Document Version: 1.2.0
- Date: (5-21-2021)
- Author: Nathaniel Warburton
- Contributing Editor(s): Aaron Honeycutt 
-->
