---
title: Change User Password and LUKS Passphrase
description: >
    Forgot your main password?  Locked out of your computer? Need to change your encryption passphrase? Follow these instructions to change both!
keywords:
  - password
  - reset
  - locked out
  - crash
  - pop
  - ubuntu

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Changing user password

If you can't log into your computer, you can follow these instructions to reset the password for any user. Pop!_OS and Ubuntu allow for the root user to reset the password for any user account. In order to get to the root user, we need to restart the computer and use what's called "single user mode", which is the low level repair system for the computer.

### Pop!_OS 18.04 and Later

On a fresh install Pop!_OS 18.04 and later, <u>systemd-boot</u> is used rather than <u>GRUB</u>.  Please follow these instructions to reset your password.  If your operating system is anything other than Pop!_OS 18.04 and later, please use the [GRUB](#grub) section.

First, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> or the <kbd>ESC</kbd> key.  On the menu, choose **Recovery Mode**.

![systemd-boot](/images/password/systemd-boot.png)

Once the live disk boots move to a new workspace, to do this on Ubuntu use the Activities button in the top left and on Pop!\_OS use the Workspaces button in the top left (be sure not to choose any install or repair options in the installer window, as this could result in data loss).

### Ubuntu

If you are using Ubuntu we can boot from a live disk and [here](/articles/live-disk) are instructions for creating the live disk. Once the live disk has been created refer to this [article](/articles/boot-menu) for booting from the live disk.

#### Mounting the Installed OS

On Pop!\_OS press <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>+<kbd>T</kbd> or on Ubuntu press <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> to open a terminal, and type in these commands:

```bash
lsblk
```

This will show what the main internal drive is named, which will have 4 partitions on it.  We will be working with the 3rd partition.  If the main drive is an NVMe drive, it will be `/dev/nvme0n1p3` and if the drive is a SATA or regular M.2 drive, it will be `/dev/sda3`.

Next, run this command:

```bash
sudo mount /dev/sda3 /mnt
```

If the command fails and says `mount: /mnt: unknown filesystem type 'crypto_LUKS'`, then the hard drive has been encrypted, and additional commands are needed to unlock it.  If the command succeeds (no output), then skip these next steps:

```bash
sudo cryptsetup luksOpen /dev/sda3 volume
sudo lvscan
sudo vgchange -ay
```

Take note as to what the volume group is called, substituting the correct info into this command.  Make sure that '-root' is on the end:

```bash
sudo mount /dev/mapper/data-root /mnt
```

Next, regardless of whether the drive is encrypted or not, run these commands:

```bash
sudo chroot /mnt
ls /home
```

Take note of the users on this computer, then run this command to change a user's password:

```bash
passwd john
```

Type in your new password, and then enter these commands:

```bash
exit
reboot
```

## Changing LUKS passphrase

If you would like to change the password on a LUKS encrypted partition, run this command (replace the example partition with your root partition):

```bash
cryptsetup luksChangeKey /dev/sda3 -S 0
```

Enter the original pass-phrase, and follow the prompts for the new pass-phrase ( and to confirm the new pass-phrase).

## Adding LUKS passphrases

Full Disk Encryption supports up to 8 total pass-phrases to unlock the encryption. This is useful if you would like to allow more than a single user to unlock the encryption and not share a pass-phrase. The default pass-phrase is in slot 0, with space for additional pass-phrases in slots 1 through 7 (for a total of 8).

### List Partitions

First let's list the partitions of all of the installed drives:

```bash
lsblk -o name,mountpoints
```

The output may be different based on the drive setup and partition table. You can see the root partition at mountpoint '/'. From there we can use that output to run this command:

```bash
sudo cryptsetup luksDump /dev/sda3
```

Replacing '/dev/sda3' with the location of the root partition on your system. With the output of this command we can see the seven extra slots that we have for passwords to decrypt the drive. On a normal install Slot 0 is the initial passphrase and you can add up to 6 more for a total of 7.

#### Set Extra Password

Following the partition scheme from the previous command we can form the next command to add a new key to the open Key Slot:

```bash
sudo cryptsetup luksAddKey /dev/sda3
```

This command will require the current encryption password before new password can be added.

#### Confirm The Password

Let's run this command again to confirm that the additional pass-phrase is set:

```bash
sudo cryptsetup luksDump /dev/sda3
```

You should see that Key Slot 1 is now enabled so this confirms the new pass-phrase is set.
