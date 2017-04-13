---
layout: article
title: Repair GRUB Bootloader
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

GRUB is the Ubuntu bootloader. It takes care of getting the operating system started up. It is also responsible for allowing the user to select between multiple operating systems at boot. Sometimes, GRUB can break, and it may not let you boot into Ubuntu to fix the problem.

#### Important Note About GRUB Updates

If you need to configure grub-pc (for example, after an update), installing grub to all devices will break GRUB. You will need to install to `/dev/sda` _not_ `/dev/sda1`. Installing everywhere will break the bootloader.

### Create Ubuntu Live Disk

Create an Installation USB | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
[Using Mac OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx)| [Using OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

### Reinstall GRUB Bootloader

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. When you see the System76 logo on the screen:

Laptops  | Desktops
-------- | --------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F8</kbd> or <kbd>F10</kbd>

Choose **try ubuntu without installing**. Once the desktop is shown, connect the computer to the Internet.  Next, open a terminal (search <u>Terminal</u> from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>) and run the following command:

```
sudo parted -ls
```

And then look for the name of your main hard drive. It could be `/dev/sda` or `/dev/nvme0n1`, depending on if you have a standard SATA drive, or an NVMe drive, respectfully. If you have multiple drives, look at the sizes of the partitions and for the `linux-swap` partition to help identify the main OS drive. 

---

### EFI Boot

If `boot, esp` is listed under `flags`, the system is installed in UEFI mode.  Run these commands based on what type of disk you have:

#### For NVMe Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/nvme0n1p2 /mnt
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64
```

#### For SATA Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/sda2 /mnt
sudo mount /dev/sda1 /mnt/boot/efi
for i in /dev /dev/pts /proc /sys; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64
```

---

### BIOS Boot

If `bios_grub` is listed under `flags`, the system is installed in BIOS mode.  Run these commands based on what type of disk you have:

#### For NVMe Drives:

```
sudo mount /dev/nvme0n1p2 /mnt
for i in /dev /dev/pts /proc /sys; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64
```

#### For SATA Drives:

```
sudo mount /dev/sda2 /mnt
for i in /dev /dev/pts /proc /sys; do sudo mount -B $i /mnt$i; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64
```

---

After this, reboot your computer, removing the disk when prompted, and Ubuntu should boot.

## Troubleshooting

If the `chroot` command returns with the error: `chroot: cannot run command '/bin/bash': Exec format error`, this probably indicates that the Ubuntu Install CD is not compatible with that of the installed system.

For example, the error is most frequently seen when trying to `chroot` to a 64-bit system (amd64) from a 32-bit Install CD (x86).

The solution is to use an Install CD which is using the same architecture as the installed system (32-bit Install CD for 32-bit targets / 64-bit Install CD for 64-bit targets).

Make sure to use `/dev/sda1` (the partition) and `/dev/sda` (the disk) or `/dev/nvme0n1p1` (the partition) and `/dev/nvme0n1` (the disk) correctly in the commands above.
