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
  - FDE
image: http://support.system76.com/images/pop.png
hidden: false
section: security

---

With Full Disk Encryption more then one password to decrypt the drive may be needed if more then one person is using the computer. In this situation seven extra passwords can be added with the instructions below.

#### List Partitions

First let's list the partitions of all of the installed drives:

```
lsblk -f
```

The output may be different based on the drive setup and partition table. You can see the root partition at mountpoint '/'. From there we can use that output to run this command:

```
sudo cryptsetup luksDump /dev/sda3
```

Replacing '/dev/sda3' with the location of the root partition on your system. With the output of this command we can see the seven extra slots that we have for passwords to decrypt the drive. Slots 1-7 are the open ones and Slot 0 is the current one the system has set.

#### Set Extra Password

Following the partition scheme from the previous command we can form the next command to add a new key to the open Key Slot:

```
sudo cryptsetup luksAddKey /dev/sda3
```

This command will require the current encryption password before new password can be added.

#### Confirm The Password

Let's run this command again to confirm that the additional password is set:

```
sudo cryptsetup luksDump /dev/sda3
```

You should see that Key Slot 1 is now enabled so this confirms the new password is set.
