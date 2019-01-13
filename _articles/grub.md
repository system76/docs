---
layout: article
title: GRUB - Repair GRUB Bootloader
description: >
   How to repair and reinstall Grub bootloader.
keywords:
  - Support
  - Grub
  - Bootloader
  - Refresh
  - Reinstall
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

GRUB is the bootloader. It takes care of getting the operating system started up. It is also responsible for allowing the user to select between multiple operating systems at boot. Sometimes, GRUB can break, and it may not let you boot into your computer to fix the problem.

#### Important Note

If you need to configure grub-pc (for example, after an update), installing grub to all devices will break GRUB. You will need to install to `/dev/sda` _not_ `/dev/sda1`. Installing everywhere will break the bootloader.

On a fresh install of Pop!_OS 18.04, <u>systemd-boot</u> is used rather than the <u>GRUB</u> bootloader, and the following instructions do not apply please refer to the <u>systemd-boot</u> section on this page. 

### Create Live Disk

Please see our instructions for making a live disk of Pop!_OS [here](/articles/live-disk/).

### Reinstall GRUB Bootloader

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. When you see the System76 logo on the screen:

Laptops  | Desktops
-------- | --------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F8</kbd> or <kbd>F10</kbd>

Once the desktop is shown, connect the computer to the Internet.  Next, open a terminal (search <u>Terminal</u> after pressing the Super Key) and run the following command:

```
sudo parted -ls
```

And then look for the name of your main hard drive. It could be `/dev/sda` or `/dev/nvme0n1`, depending on if you have a standard SATA drive, or an NVMe drive, respectively. If you have multiple drives, look at the sizes of the partitions and for the `linux-swap` partition to help identify the main OS drive. 

---

## GRUB

### EFI Boot

Most computers sold after 2014 use UEFI mode.  If `boot, esp` is listed under `flags`, the system is installed in UEFI mode. You can also use this command to see if the OS is installed in UEFI mode:

```
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```
Run these commands based on what type of disk you have:

#### For NVMe Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

#### For SATA Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/sda2 /mnt
sudo mount /dev/sda1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

---

### BIOS Boot

If `bios_grub` is listed under `flags`, the system is installed in BIOS mode. You can also use this command to see if the OS is installed in BIOS mode:

```
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

Run these commands based on what type of disk you have:

#### For NVMe Drives:

```
sudo mount /dev/nvme0n1p2 /mnt
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

#### For SATA Drives:

```
sudo mount /dev/sda2 /mnt
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

## systemd-boot

### EFI Boot

Most computers sold after 2014 use UEFI mode.  If `boot, esp` is listed under `flags`, the system is installed in UEFI mode. You can also use this command to see if the OS is installed in UEFI mode:

```
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

Run these commands based on what type of disk you have:

#### For NVMe Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall linux-generic linux-headers-generic
update-initramfs -c -k all
sudo bootctl --path=/boot/efi install
```

#### For SATA Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/sda2 /mnt
sudo mount /dev/sda1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall linux-generic linux-headers-generic
update-initramfs -c -k all
sudo bootctl --path=/boot/efi install
```

---

### Encrypted Disk

To get access to an encrypted disk, these additional commands need run to unlock the disk.  Please use the `lsblk` command described above to determine the correct drive and partition.

```
sudo cryptsetup luksOpen /dev/sda3 volume
sudo lvscan
sudo vgchange -ay
```

And take note as to what the volume group is called.  Substitute the correct info into this next command.  Make sure that `-root` is on the end:

```
sudo mount /dev/mapper/data-root /mnt
```

And now the existing hard drive can be accessed by going to the `/mnt` folder.  To use the <u>Files</u> program, go to '+ Other Locations' -> 'Computer' and then click on the `/mnt` folder.

### Chroot

<u>chroot</u> is the way to run commands as if the existing operating system had been booted.  Once these commands are run, then package manager (<u>apt</u>) and other system level commands can be run.

The EFI partition is usually around 512MB so that would be the partition that we replace in the next command. The Recovery Partition is around 4GB as well.

```
sudo mount /dev/sda1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo chroot /mnt
```

To exit from the <u>chroot</u> and reboot the computer, run these commands:

```
exit
reboot
```

---

After this, reboot your computer, removing the disk when prompted, and the computer should boot.

## Troubleshooting

If the `chroot` command returns with the error: `chroot: cannot run command '/bin/bash': Exec format error`, this probably indicates that the Install DVD/CD or USB is not compatible with that of the installed system.

For example, the error is most frequently seen when trying to `chroot` to a 64-bit system (amd64) from a 32-bit Install CD (x86).

The solution is to use an Install CD which is using the same architecture as the installed system (32-bit Install CD for 32-bit targets / 64-bit Install CD for 64-bit targets).

Make sure to use `/dev/sda1` (the partition) and `/dev/sda` (the disk) or `/dev/nvme0n1p1` (the partition) and `/dev/nvme0n1` (the disk) correctly in the commands above.
