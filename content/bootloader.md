---
layout: article
title: Repair the Bootloader
description: >
   How to repair and reinstall the bootloader.
keywords:
  - Support
  - Grub
  - systemd-boot
  - Bootloader
  - Refresh
  - Reinstall
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: software-troubleshooting
tableOfContents: true
---

A bootloader takes care of getting the operating system started up. It is also responsible for allowing the user to select between multiple operating systems at boot. Systemd-boot is the bootloader for Pop!_OS 18.04 and newer while GRUB is the bootloader for Ubuntu and Pop!_OS when installed in Legacy BIOS mode. If you are unable to reach the log in screen, your bootloader may be the cause.

### Important Note

If you need to configure grub-pc (for example, after an update), installing GRUB to all devices will break GRUB. You will need to install to `/dev/sda` or `/dev/nvme0n1` _not_ `/dev/sda1` or `/dev/nvme0n1p1`.

On a fresh install of Pop!_OS 18.04 and newer, <u>systemd-boot</u> is used rather than the <u>GRUB</u> bootloader. The following instructions only apply to systems using the GRUB bootloader, otherwise refer to the <u>systemd-boot</u> section of this article.

### Create Live Disk

Please see our instructions for making a live disk of Pop!_OS [here](/articles/live-disk/).

>**Note**: The live environment will not have your WiFi password saved. Once booted into the live environment, you will need to reconnect manually to your WiFi in order to access the internet.

### Boot from Live Disk

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the live disk. When you see the System76 logo on the screen, press and hold the appropriate key for your system based on this [article](/articles/boot-menu).

Use the arrow keys and Enter key to select the live disk from the boot menu.

Once the desktop is shown, connect to the Internet.  Next, open a terminal (search <u>Terminal</u> after pressing the Super Key) and run the following command:

```bash
sudo parted -ls
```

In the output, look for the name of your main hard drive. It could be `/dev/sda` or `/dev/nvme0n1`, depending on if you have a standard SATA drive or an NVMe drive, respectively. If you have multiple drives, look at the sizes of the partitions and for the `linux-swap` partition to help identify the main OS drive. Here are some OS partition layout examples:

Ubuntu 20.04 LTS

```
      Number  Start   End     Size    File system     Name      Flags
       1      2097kB  524MB   522MB   fat32                     boot, esp
       2      524MB   496GB   491GB   ext4            root
       3      496GB   500GB   4295MB  linux-swap(v1)            swap
```

Pop!_OS 20.04 LTS

```
      Number  Start   End     Size    File system     Name      Flags
       1      2097kB  524MB   522MB   fat32                     boot, esp
       2      524MB   4819MB  4295MB  fat32           recovery  msftdata
       3      4819MB  496GB   491GB   ext4            root
       4      496GB   500GB   4295MB  linux-swap(v1)            swap
```

Ubuntu 22.04 LTS

```
      Number  Start   End     Size    File system     Name                          Flags
       1      1047kB  538MB   537MB   fat32           EFI System Partition          boot, esp
       2      538MB   496GB   491GB   ext4            
```

Pop!_OS 22.04 LTS

```
      Number  Start   End     Size    File system     Name      Flags
       1      2097kB  524MB   522MB   fat32                     boot, esp
       2      524MB   4819MB  4295MB  fat32           recovery  msftdata
       3      4819MB  496GB   491GB   ext4            root
       4      496GB   500GB   4295MB  linux-swap(v1)            swap
```

>**NOTE:** A BIOS install of Pop!\_OS will not have a Recovery Partition and the Flags for the Boot Partition will not note esp. 

---

## How to tell if your system is EFI-based or legacy boot

Most computers sold after 2014 use UEFI mode.  If `boot, esp` is listed under `flags` in the earlier `parted` output, then the system is installed in UEFI mode. You can also use this command to verify that your OS is installed in UEFI mode:

```bash
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

The expected output is:

```bash
support@pop-os:~$ [ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
Installed in UEFI mode
support@pop-os:~$
```

Additionally, if `esp` is not listed under `flags` for the Boot Partition, the system is installed in legacy BIOS mode.

### EFI Boot - Pop!_OS (systemd-boot)

If the echo command at the beginning of this page says that the OS is installed in EFI mode **and** you are using Pop!_OS, follow this section. Please note that if you have an encrypted disk, you will need to first unlock it as described below. If you see the error below then your drive is encrypted with LUKS:

```
mount: /mnt: unknown filesystem type 'crypto_LUKS'.
```

Follow these [steps](/articles/bootloader#encrypted-disk) to decrypt the drive first.

First, we need to mount the OS partitions. Run these commands based on what type of disk you have:

| NVMe Drive                                | SATA Drive                           |
| :---------------------------------------- | :----------------------------------- |
| `sudo mount /dev/nvme0n1p3 /mnt`          | `sudo mount /dev/sda3 /mnt`          |
| `sudo mount /dev/nvme0n1p1 /mnt/boot/efi` | `sudo mount /dev/sda1 /mnt/boot/efi` |

>**NOTE:** If you are using a non-default partitioning scheme (such as a dual boot), replace `nvme0n1p3` or `sda3` with the Pop!_OS root partition and `nvme0n1p1` or `sda1` with the EFI system partition (ESP).

Then continue with the following commands for either disk type:

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo chroot /mnt
apt install --reinstall linux-image-generic linux-headers-generic
update-initramfs -c -k all
exit
sudo bootctl --path=/mnt/boot/efi install
```

### EFI Boot - Ubuntu (GRUB)

If the echo command at the beginning of this page says that the OS is installed in EFI mode **and** you are using Ubuntu, follow this section. Please note that if you have an encrypted disk, you will need to first unlock it as described below. If you see the error below then your drive is encrypted with LUKS:

```
mount: /mnt: unknown filesystem type 'crypto_LUKS'.
```

Follow these [steps](/articles/bootloader#encrypted-disk) to decrypt the drive first.

First, we need to mount the OS partitions. Run these commands based on what type of disk you have:

| NVMe Drive                                | SATA Drive                           |
| :---------------------------------------- | :----------------------------------- |
| `sudo mount /dev/nvme0n1p2 /mnt`          | `sudo mount /dev/sda2 /mnt`          |
| `sudo mount /dev/nvme0n1p1 /mnt/boot/efi` | `sudo mount /dev/sda1 /mnt/boot/efi` |

If you are using a non-default partitioning scheme (such as a dual boot), replace `nvme0n1p2` or `sda2` with the Ubuntu root partition and `nvme0n1p1` or `sda1` with the EFI system partition (ESP).

Then continue with the following commands for either disk type:

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo chroot /mnt
apt install --reinstall linux-image-generic linux-headers-generic
update-initramfs -c -k all
exit
sudo update-grub
```

## Legacy BIOS Boot - Ubuntu (GRUB)

If the echo command at the beginning of this page says that the OS is installed in Legacy mode **and** you are using Ubuntu, follow this section. Please note that if you have an encrypted disk, you will need to first unlock it as described below. If you see the error below then your drive is encrypted with LUKS:

```
mount: /mnt: unknown filesystem type 'crypto_LUKS'.
```

Follow these [steps](/articles/bootloader#encrypted-disk) to decrypt the drive first.

```bash
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

Run these commands based on what type of disk you have:

| NVMe Drive                       | SATA Drive                  |
| :------------------------------- | :-------------------------- |
| `sudo mount /dev/nvme0n1p2 /mnt` | `sudo mount /dev/sda2 /mnt` |

If you are using a non-default partitioning scheme (such as a dual boot), replace `nvme0n1p2` or `sda2` with the Pop!_OS root partition.

Then continue with the following commands for either disk type:

After the partitions are mounted, we'll ensure the internet settings from the OS are coped over, as well as reinstall the kernel and the bootloader.

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

## Encrypted Disk

Pop!_OS supports full-disk encryption as an option by default, whereas, Ubuntu does not. If you are on Ubuntu, you likely don't need to follow this section.

To get access to an encrypted disk, these additional commands need to be run in order to unlock the disk. Please use the `parted` command described above to determine the correct drive and partition. The encrypted partition will typically be the largest one on the main drive.

| NVMe Drive                                          | SATA Drive                                     |
| :-------------------------------------------------- | :--------------------------------------------- |
| `sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata` | `sudo cryptsetup luksOpen /dev/sda3 cryptdata` |

```bash
sudo lvscan
sudo vgchange -ay
```

Take note as to what the volume group is called.  Substitute the correct info into this next command.  Make sure that `-root` is on the end.

After running the `vgchange` command, take note of what the volume group is called. Substitute the correct info into this next command. Make sure that `-root` is added to the end of the volume group name:

```bash
sudo mount /dev/mapper/data-root /mnt
```

Now the existing hard drive can be accessed by going to the `/mnt` folder. To use the <u>Files</u> program, go to `+ Other Locations` -> `Computer` and then click on the `/mnt` folder.

As your system reboots, remove the disk when prompted. The computer should now boot normally.

## Troubleshooting

### chroot

If the `chroot` command returns with the error: `chroot: cannot run command '/bin/bash': Exec format error`, this probably indicates that the Install DVD/CD or USB is not compatible with that of the installed system. If you need more information on how to chroot, and what it it does, visit the chroot article here.

#### Live disk compatibility

If the `chroot` command returns with the error: `chroot: cannot run command '/bin/bash': Exec format error`, it probably indicates that the Install DVD/CD or USB is not compatible with that of the installed system.

For example, the error is most frequently seen when trying to `chroot` to a 64-bit system (amd64) from a 32-bit Install CD (x86).

The solution is to use an Install CD which is using the same architecture as the installed system (32-bit Install CD for 32-bit targets / 64-bit Install CD for 64-bit targets).

#### Disk and partition names

Make sure to use `/dev/sda1` (the partition) and `/dev/sda` (the disk) or `/dev/nvme0n1p1` (the partition) and `/dev/nvme0n1` (the disk) correctly in the commands above.

### systemd-boot fails to start the OS

If the system boots into a `BusyBox` environment, try running `exit` to show potential failure causes.

A message like `ALERT! UUID:xxx does not exist. Dropping to a shell!` indicates an issue with the loader entry in `systemd-boot`.

Ensure that `/boot/efi/loader/entries/Pop_OS-current.conf` contains the correct UUID for the disk. For an encrypted setup, the line `options root=UUID=xxx ro quiet loglevel=0 systemd.show_status=false splash` should match the UUID reported by `lsblk -f` for the `data-root` partition on a standard installation with LUKS.

#### LUKS volume name

If you validate that the UUID entry is correct and are using LUKS encryption, be sure that there is no `cryptsetup: WARNING: target 'cryptdata' not found in /etc/crypttab` entry when running the `update-initramfs -c -k all` command above.

If there is, check to be sure that `/etc/crypttab` does not have a string of characters after `cryptdata` such as this:

```bash
cryptdata_U0qNZ UUID=b7bb66dd-8690-4eca-b881-bf7e662a9336 none luks cryptswap UUID=c44ec301-f416-46da-8454-a731e074682c /dev/urandom swap,offset=1024,cipher=aes-xts-plain64,size=512
```

If it does, remove the characters after `cryptdata` (`_U0qNZ`, in this example) so that the entry starts only with `cryptdata`. Then, re-run the `update-initramfs -c -k all` command and continue with recovery.
