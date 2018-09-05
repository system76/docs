---
layout: article
title: Software - Full Disk Encryption Passwords
description: >
   How to add extra passwords for your Full Disk Encryption setup
keywords:
  - System76
  - Pop
  - Ubuntu
  - LUKS
image: http://support.system76.com/images/pop.png
hidden: false
section: articles

---

With Full Disk Encryption you may want more then one password to decrypt the drive if more then one person is using the computer. In this situation we can add up to seven extra passwords with the instructions below.

#### List Partitions

First let's list the partitions of all of our drives:

```
lsblk -f
```

The output may be different based on the drive setup and partition setup. You can see the root partition at mountpoint '/'.

From here we can use that output to run this command:

```
sudo cryptsetup luksDump /dev/sda3
```

Replacing '/dev/sda3' with the location of the root partition on your system. With the output of this command we can see the seven extra slots that we have for passwords to decrypt the drive.

#### Set Extra Password

Following the above example this command will add a new key to the next available Key Slot:

```
sudo cryptsetup luksAddKey /dev/sda3
```

This command will require the current encryption password before you can add a new password.

#### Confirm The Password

Let's run this command again to confirm that the additional password is set:

```
sudo cryptsetup luksDump /dev/sda3
```

You should see Key Slot 1 is now enabled.
