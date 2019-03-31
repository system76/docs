---
layout: article
title: Unlock Encrypted Drive with Yubikey
description: >
   Configure Pop!_OS to support unlocking an encrypted disk with a Yubikey and a password.
keywords:
  - Yubikey
  - Administration
image: http://support.system76.com/images/system76.png
hidden: false
section: community
---

# Unlock Encrypted Drive with Yubikey

If you have a Yubikey, and you have set up Full Disk Encryption (FDE) with Pop!_OS, you can use it to unlock your encrypted hard drive.  You still need a password, but since you're pairing the password with something you know, it doesn't need to be as complex as a password by itself.

To do this, you must configure install the yubikey-luks package, add a challenge-response slot on the Yubikey, and then add a new key slot to your luks partition.

Once completed, this setup will configure your encrypted hard drive to be unlocked with a password, and the presence of the configured Yubikey.  The chosen password will only work if the Yubikey is present.

The ideal setup for this is to: use a long complex password for your encrypted drive, and another password (still strong, but not as complex) with your Yubikey.  Either will unlock the encrypted drive.  In this way, you can use your Yubikey and a simpler password, and if your Yubikey gets lost or damaged, you can still unlock with the stronger password.

## Install Packages

To install the necessary packages, please run:

    sudo apt install -y yubikey-luks yubikey-personalization

## Configure Challenge-Response for your Yubikey

To enable challenge-response on your Yubikey, type the following command:

    ykpersonalize -2 -ochal-resp -ochal-hmac -ohmac-lt64 -oserial-api-visible

This configures slot 2 for challenge-response, and leaves slot 1 alone.

## Add Key to LUKS Header

The last step is to add a key to an available slot in the LUKS header of the partition you wish to allow unlock with your Yubikey and password.

    yubikey-luks-enroll -s 7 -d **/dev/sda3**

**/dev/sda3** is the default partition.  Replace it with the path to your partition.

## References

The following sites were used to build this guide:



---

This article was contributed by [71nuxadd1ct](https://github.com/71nuxadd1ct).
