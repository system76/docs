---
layout: article
title: Software - Encrypt Extra Drive
description: Learn how to encrypt the extra drive
keywords:
  - System76
  - Security
  - Encrypt
  - Extra Drive
  - Linux
image: http://support.system76.com/images/system76.png
hidden: false
section: security

---

#### Encrypt the Extra Drive

The <u>Disks</u> application can be used to encrypt the extra drive and it comes pre-installed on Pop!_OS and Ubuntu.

In this screenshot the extra drive can be seen and then select the **Gear icon** under Volumes. Then select the **Format Partition...** option to open the 'Format Volume' window.

![Disks](/images/encrypt-extra/Disk-Menu.png)

Then use the 'Format Volume' window to format the volume with the options to name the volume and use the Ext4 partition with LUKS.

![Disks](/images/encrypt-extra/Disk-Encrypt.png)

###  Decrypt on Login

If we would like to decrypt the drive on login into the system there are settings for the encryption. In the <u>Disks</u> application on the drive that is encrypted then click on the LUKS partition and then the **Gear icons** on the bottom of the Volumes table. Then click on **Edit Encryption Options...** then unclick 'User Session Defaults'. Now enter the Passphrase for the encrypted drive and hit **OK** button. It will ask for your password and once it is entered the drive will be decrypted on login.

![Disks](/images/encrypt-extra/Encrypt-Options.png)

#### Editing Mount Options

The Extra Drive [article](/articles/extra-drive/) goes over changing the mounting options for the drive.
