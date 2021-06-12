---
layout: article
title: Change User Password (Pop!_OS)
description: >
    Forgot your main password?  Locked out of your computer? Need to change your encryption passphrase? Follow these instructions to change both!
keywords:
  - password
  - reset
  - locked out
  - crash
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---

# Change User Password (Pop!_OS)

If you can't log into your computer, you can follow these instructions to reset the password for any user. Pop!_OS and Ubuntu allow for the root user to reset the password for any user account. In order to get to the root user, we need to restart the computer and use what's called "single user mode", which is the low level repair system for the computer.

### Pop!_OS 18.04 and Later

On a fresh install Pop!_OS 18.04 and later, <u>systemd-boot</u> is used rather than <u>GRUB</u>.  Please follow these instructions to reset your password.  If your operating system is anything other than Pop!_OS 18.04 and later, please use the [GRUB](#grub) section.

First, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> or the <kbd>ESC</kbd> key.  On the menu, choose **Recovery Mode**.

![systemd-boot](/images/password/systemd-boot.png)

Once the recovery operating system boots, close out of the installation window or choose **“try demo mode”** (be sure not to choose any install or repair options, as this could result in data loss).   Then, press <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>+<kbd>T</kbd> to open a terminal, and type in these commands:

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

Now, enter the original passphrase. Here you will be prompted for the new passphrase, and then to confirm the new passphrase.
