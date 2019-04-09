---
layout: article
title: Two-Factor FDE with Yubikey
description: >
   Full Disk Encryption with two-factor support using Yubikey.
keywords:
  - Yubikey
  - Administration
  - Full Disk Encryption
  - Two-Factor
image: http://support.system76.com/images/system76.png
hidden: false
section: community
---

# Unlock Encrypted Drive with Yubikey

If you have a Yubikey, and you have Full Disk Encryption (FDE) set up, you can use it to unlock your encrypted hard drive.  You will still need a password, but it won't neet to be as complex since your pairing it with another token.

To do this, you must install the yubikey-luks and yubikey-personalization packages, configure a challenge-response slot on the Yubikey, and then add a new key slot to your LUKS partition.

**This guide assumes you are running Pop!_OS.  It is known to work with Pop!_OS 17.10, 18.04, and 18.10.**

Once completed, this guide will configure your encrypted hard drive to be unlocked with a password and the presence of the configured Yubikey.  **This is in addition to whatever password you had previously configured.  Existing LUKS keys/passwords will be preserved.**

# Install Packages

To install the necessary packages, please run:

    sudo apt install -y yubikey-luks yubikey-personalization

yubikey-luks is maintained by Markus Frosch at [https://github.com/cornelinux/yubikey-luks](https://github.com/cornelinux/yubikey-luks).

# Configure Challenge-Response for your Yubikey

The command below will enable challenge-response on your Yubikey.  This configures slot 2 for challenge-response, and leaves slot 1 alone.  Slot 1 is used for the Yubikey's default Static password.  We don't need to modify the default behavior for this guide.

    ykpersonalize -2 -ochal-resp -ochal-hmac -ohmac-lt64 -oserial-api-visible

If prompted, type **y** to commit the changes.



# Modify LUKS Header

The last step is to modify the LUKS header to support the Yubikey.  There are 8 key slots available in a LUKS header.  We need to add your Yubikey's challenge and response key to one of them.

## Check for Available Key Slots

Before modifying the LUKS header to add the Yubikey's challenge response, it's a good idea to see which slots are available.

First, run **lsblk** to list your current partition table.

Every system is different, but you should see something similar to:

    NAME                  MAJ:MIN  RM  SIZE RO  TYPE  DISK
    sda                   8:0       0   20G  0  disk  
    ├─sda1                8:1       0  498M  0  part  /boot
    ├─sda2                8:2       0 15.5G  0  part
    | └─cryptdata       253:0       0 15.5G  0  crypt
    |   └─data-root     253:1       0 15.5G  0  lvm   /
    └─sda3                8:3       0    4G  0  part
      └─cryptswap       253:2       0    4G  0  crypt [SWAP]

Look for a partition of type: **crypt**.  In this example, the associated partition is **/dev/sda2**.  This example is from a freshly installed Pop!_OS 18.04 system, so you should see something very similar.

To see which Key Slots are available on this partition, run:

    sudo cryptsetup luksDump /dev/sda2 | grep Slot

Replace **/dev/sda2** with the path to your encrypted partition identified in the previous step with **lsblk**.

You should see something similar to:

    Key Slot 0: ENABLED
    Key Slot 1: ENABLED
    Key Slot 2: DISABLED
    Key Slot 3: DISABLED
    Key Slot 4: DISABLED
    Key Slot 5: DISABLED
    Key Slot 6: DISABLED
    Key Slot 7: DISABLED

Choose an available Key Slot and use it with the **-s** option in the next step.

## Add Yubikey Challenge to Key Slot

Use **yubikey-luks-enroll** to add your Yubikey's challenge-resonse to a Key Slot:

    sudo yubikey-luks-enroll -s 7 -d /dev/sda3

**NOTE:  Ensure your Yubikey is inserted when completing this step.**

See the man page for full details, but the two basic options are: **-s**, and **-d**.  The default key slot is slot 7 and **/dev/sda3** is the default partition.  At a minimum, replace the **-d** option with the path to your partition.

Enter the password you want to use in conjunction with your Yubikey to unlock the encrypted partition when prompted.  Then enter it again to confirm.  Finally, you will be asked to enter any existing password.

Once complete, your encrypted partition can be unlocked with your Yubikey and the password you set up.

**If you encounter issues, your original password will still unlock the encrypted partition.**

## References

Reference the following for more information:
- [LUKS Key Slot Examples](https://www.thegeekstuff.com/2016/03/cryptsetup-lukskey/) (From the Geek Stuff).
- [yubikey-luks](https://developers.yubico.com/yubico-pam/) (From GitHub).

---

This article was contributed by [71nuxadd1ct](https://github.com/71nuxadd1ct).
