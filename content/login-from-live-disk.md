---
title: Log in from Live Disk (Chroot)
description: >
    Access an installed OS from a Live Disk/Recovery.
keywords:
  - recovery
  - reset
  - locked out
  - crash
  - reinstall
  - refresh
  - repair

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Log in from Live Disk (Chroot)

It is possible to mount an OS drive and log into the installed OS with root access. This is called gaining "chroot" (change to root) access. This process is useful when [rescuing files](/articles/disaster-recovery), [fixing package manager issues](/articles/package-manager-pop), or [resetting forgotten user passwords](/articles/password).

>**Note**: The live environment will not have your WiFi password saved. Once booted into the live environment, you will need to reconnect manually to your WiFi in order to access the internet.

You'll need a Live OS Environment from which to mount your drive, and log in. This can be done from a [live USB](/articles/live-disk), or on Pop!_OS from the [recovery partition](/articles/pop-recovery).
Boot the computer while holding down the [boot menu key for your system](/articles/boot-menu), or the <kbd>SPACE</kbd> bar to access Systemd, and the Pop!\_OS Recovery partition.

Once booted into the Live Environment, press <kbd>SUPER</kbd>+<kbd>T</kbd> to open a terminal (Pop!\_OS), or <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> (Ubuntu) then type this command:

```bash
lsblk
```

This will show you the name of the main internal drive, which will have 4 partitions (Pop!\_OS), or 3 (Ubuntu) on it.  We will be working with the 3rd partition.  If the main drive is an NVMe drive, it will be called `/dev/nvme0n1p3` (p2 on Ubuntu) and if the drive is a SATA or regular M.2 drive, it will be called `/dev/sda3` (sda2 on Ubuntu).

>**Note:** The rest of these instructions assume partition labeling consistent with a Pop!_OS install. For an Ubuntu install, change the partition number accordingly; the instructions are otherwise the same.

Next, run this command:

| **SATA Drives**           | **NVMe Drives**                |
|:-------------------------:|:------------------------------:|
| ```sudo mount /dev/sda3 /mnt``` | ```sudo mount /dev/nvme0n1p3 /mnt``` |

If the command fails and says `mount: /mnt: unknown filesystem type 'crypto_LUKS'`, then the hard drive has been encrypted, and additional commands are needed to unlock it.  

### Encrypted Disk

To access an encrypted disk, run these additional commands to unlock the encrypted volume.

>**Note**: The drive names listed below (e.g. `/dev/sda3`) may not match your drive configuration. Use the `lsblk` command described above to determine the correct drive and partition.

| **SATA Drives**                                    | **NVMe Drives**                                   |
|:--------------------------------------------------:|:-------------------------------------------------:|
| ```sudo cryptsetup luksOpen /dev/sda3 cryptdata```       | ```sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata``` |

>**Note:** You will see "Enter passphrase for /dev/nvme0n1p3 (or the name of your exact drive):" - Enter your encryption password here. You will "enter this blind," i.e. you won't see the characters typed out. Then press Enter.

```bash
# scan for logical volumes
sudo lvscan
# scan and setup volume groups
sudo vgchange -ay
```

>**Note:** Pay attention to what the `cryptdata` group is called. If it is named something other than `data-root`, substitute the correct info into this next command.  Make sure that `-root` is on the end:

```bash
# setup access to the encrypted file system on '/mnt'
sudo mount /dev/mapper/data-root /mnt
```

**Note:** If you want to backup your files, you can do so at this point in the process if you don't already have a [backup of your data](/articles/backup-files/)

## Chroot

`chroot` is the way to run commands as if the existing operating system had been booted.  Once these commands are run, then package manager (`apt`) and other system-level commands can be run.

The EFI partition is the next partition to be mounted. To help identify it, this partition is usually around 512MB, and is labeled as `/boot/efi`.

| **SATA Drives**                       | **NVMe Drives**                          |
|:-------------------------------------:|:----------------------------------------:|
| ```sudo mount /dev/sda1 /mnt/boot/efi```    | ```sudo mount /dev/nvme0n1p1 /mnt/boot/efi```  |

```bash
# mount several "kernel" virtual file systems from the live system to '/mnt/'
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo chroot /mnt
```

With this last command, you will have root access to your installed system. Once the drive is accessed, commands for maintenance can be run on the installed system. For example, [package manager repair commands](article/package-manager-pop). You can also access your files with <u>Files</u> via `+ Other Locations` -> `Computer` -> `/mnt`.

### After Chroot

Once you are done accessing files or running commands in your installed OS, you can exit from `chroot` and reboot the computer, by running these commands:

```bash
exit
reboot
```
