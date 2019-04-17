---
layout: article
title: Use The Recovery Partition
description: >
    Here is how to use the recovery partition to repair, refresh or reinstall your operating system.
keywords:
  - recovery
  - reset
  - locked out
  - crash
  - reinstall
  - refresh
  - repair
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: pop-ubuntu

---

The recovery partition on this operating system is a full copy of the Pop!_OS installation disk. It can be used exactly the same as if a live disk copy of Pop!_OS was booted from a USB drive. The existing operating system can be repaired or reinstalled from the recovery mode. You can also perform a refresh install, which allows you to reinstall without losing any user data or data in your home directory, or opt to do a fresh install, which will essentially reset all OS data. Refresh Installs are only available on a fresh install of Pop!_OS 19.04.

To boot into recovery mode, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> or the <kbd>ESC</kbd> key while the system is booting.  On the menu, choose **Pop!_OS Recovery**.

![systemd-boot](/images/pop-recovery/systemd-boot.png)

## Table of Contents

- [Repair](/articles/pop-recovery/#repair) 
- [Refresh Install](/articles/pop-recovery/#refresh) 
- [Reinstall](/articles/pop-recovery/#reinstall) 

### Repair

If the existing system needs to be repaired, then click the **Install Pop!_OS** in the top left, and choose **quit**.

To get access to the existing drive to run the package manager [repair commands](/articles/package-manager/), the following commands will need run:

First, press <kbd><span class="fl-pop-key"></span></kbd>+<kbd>T</kbd>/<kbd><i class="fl-ubuntu"></i></kbd>+<kbd>T</kbd> to open a terminal, then type this command:

```
lsblk
```

This will show you the name of the main internal drive, which will have 4 partitions on it.  We will be working with the 3rd partition.  If the main drive is an NVMe drive, it will be called `/dev/nvme0n1p3` and if the drive is a SATA or regular M.2 drive, it will be called `/dev/sda3`.

Next, run this command:

```
sudo mount /dev/sda3 /mnt
```

If the command fails and says `mount: /mnt: unknown filesystem type 'crypto_LUKS'`, then the hard drive has been encrypted, and additional commands are needed to unlock it.  

### Encrypted Disk

To get access to an encrypted disk, these additional commands need run to unlock the disk.  Please use the `lsblk` command described above to determine the correct drive and partition.

```
sudo cryptsetup luksOpen /dev/sda3 cryptdata
sudo lvscan
sudo vgchange -ay
```

And take note as to what the cryptdata group is called.  Substitute the correct info into this next command.  Make sure that `-root` is on the end:

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
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
```

To exit from the <u>chroot</u> and reboot the computer, run these commands:

```
exit
reboot
```

### Refresh

Starting with new installations of Pop!_OS 19.04 (not though upgrading) the installer will include a new Refresh Install option which will allow the Operating System to be reinstalled but will not wipe the user account information and user data. Applications will still need to be reinstalled but data in the home directory will not be touched. 

![Refresh Install Option](/images/pop-recovery/refresh-install-option.png)

### Reinstall

Once the recovery operating system has opened, the <u>Pop Installer</u> will start automatically.  If the system needs reinstalled, go ahead and continue the installation steps as demonstrated [here](/articles/install-pop/).

If files need to be copied off before reinstall, open the <u>Files</u> program to get access to the existing install.  If the existing install is encrypted, please see the [encrypted disk](#encrypted-disk) instructions below.
