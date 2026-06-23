---
title: Encrypt Extra Drive
description: Encrypt Extra Drive(s)
keywords:
  - System76
  - Security
  - Encrypt
  - Extra Drive
  - Linux

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

The <u>Disks</u> application can be used to encrypt the extra drive and it comes pre-installed on Pop!_OS and Ubuntu.

In this screenshot, the extra drive can be seen. Select the **Gear icon** under Volumes. Then select the **Format Partition...** option to open the 'Format Volume' dialog.

![Disks](/images/encrypt-extra/Disk-Menu.png)

When the 'Format Volume' dialog window opens, set the volume name(Optional) and select the `Ext4` type with `LUKS`. Click on `Next` at the top right of the dialog, then click on format.

![Disks](/images/encrypt-extra/Disk-Encrypt.png)

## Decrypt on Login

If we would like to decrypt the drive on login into the system there are settings for the encryption. In the <u>Disks</u> application, select the drive that is encrypted then click on the LUKS partition. Click on the **Gear icons** on the bottom of the Volumes table, then click on **Edit Encryption Options...**. Unclick **User Session Defaults**. Now enter the Passphrase for the encrypted drive and hit the **OK** button. It will ask for your password and once entered, the drive will be decrypted on login.

![Disks](/images/encrypt-extra/Encrypt-Options.png)

### Editing Mount Options

The Extra Drive [article](/articles/extra-drive/) goes over changing the mounting options for the drive.
