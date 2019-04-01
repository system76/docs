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

**This guide assumes you are running Pop!_OS**

Once completed, this guide will configure your encrypted hard drive to be unlocked with a password and the presence of the configured Yubikey.  **This is in addition to whatever password you had previously configured.  Existing LUKS keys/passwords will be preserved.**

## Install Packages

To install the necessary packages, please run:

    sudo apt install -y yubikey-luks yubikey-personalization

yubikey-luks is maintained by Markus Frosch at [https://github.com/cornelinux/yubikey-luks](https://github.com/cornelinux/yubikey-luks).

## Configure Challenge-Response for your Yubikey

To enable challenge-response on your Yubikey, type the following command:

    ykpersonalize -2 -ochal-resp -ochal-hmac -ohmac-lt64 -oserial-api-visible

This configures slot 2 for challenge-response, and leaves slot 1 alone.

## Check LUKS Header for Available Key Slots

Before modifying the LUKS header to add the Yubikey's challenge response, it's a good idea to see which slots are available.

To see which slots are available, please run:

    sudo cryptsetup luksDump /dev/sda1 | grep Slot

Replace **/dev/sda1** with the path to your desired FDE partition.

You shoudl see something similar to:

    Key Slot 0: ENABLED
    Key Slot 1: ENABLED
    Key Slot 2: DISABLED
    Key Slot 3: DISABLED
    Key Slot 4: DISABLED
    Key Slot 5: DISABLED
    Key Slot 6: DISABLED
    Key Slot 7: DISABLED

Choose an available Key Slot and use it with the **-s** option in the next step.

## Modify LUKS Header

The last step is to modify the LUKS header to support the Yubikey.  There are 8 key slots available in a LUKS header.  We need to add your Yubikey's challenge and response key to one of them.

To do this, run the command:

    yubikey-luks-enroll -s 7 -d /dev/sda3

See the man page for full details, but the two basic options are: **-s**, and **-d**.  The default key slot is slot 7 and **/dev/sda3** is the default partition.  At a minimum, replace the -d option with the path to your partition.

## References

Reference the following for more information:
- [LUKS Key Slot Examples](https://www.thegeekstuff.com/2016/03/cryptsetup-lukskey/) (From the Geek Stuff).
- [yubikey-luks](https://developers.yubico.com/yubico-pam/) (From GitHub).

---

This article was contributed by [71nuxadd1ct](https://github.com/71nuxadd1ct).
