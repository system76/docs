---
title: Recovery Partition
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

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

The recovery partition on this operating system is a full copy of the Pop!\_OS installation disk. It can be used exactly the same as if a live disk copy of Pop!\_OS was booted from a USB drive. The existing operating system can be repaired or reinstalled from the recovery mode. You can also perform a refresh install, which allows you to reinstall without losing any user data or data in your home directory, or opt to do a fresh install, which will essentially reset all OS data. Refresh Installs are only available on a fresh install of Pop!\_OS 19.04 and above.

To boot into recovery mode, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> while the system is booting, or by holding/tapping any function keys **NOT** used to [Access the BIOS/Boot Menu](/articles/boot-menu) (On non-System76 hardware, try the keys <kbd>F1</kbd> through <kbd>F12</kbd>)

 **NOTE:** These instructions assume Pop!\_OS is the only OS running on your system. If you are booting more than one operating system you may need to change your boot order first, or manually select the Pop!\_OS Disk from your BIOS/Boot menu.

Once the menu is shown, choose **Pop!_OS Recovery**.

![systemd-boot](/images/pop-recovery/systemd-boot.png)

## Repair

If the existing system needs to be repaired, then click the **Install Pop!_OS** in the top left, and choose **quit**, or choose “try demo mode” after the language and keyboard selection screens. 

**NOTE:** be sure not to choose any install or repair options, as this could result in data loss.

To access to the existing OS drive and run the package manager [repair commands](/articles/package-manager-pop/), the following commands will need to be run:

First, press `SUPER`+`T` to open a terminal, then type this command:

```bash
lsblk
```

This will show you the name of the main internal drive, which will have 4 partitions on it.  We will be working with the 3rd partition.  If the main drive is an NVMe drive, it will be called `/dev/nvme0n1p3` and if the drive is a SATA or regular M.2 drive, it will be called `/dev/sda3`.

Next, run this command:

| **SATA Drives**           | **NVMe Drives**                |
|:-------------------------:|:------------------------------:|
| ```sudo mount /dev/sda3 /mnt``` | ```sudo mount /dev/nvme0n1p3 /mnt``` |

If the command fails and says `mount: /mnt: unknown filesystem type 'crypto_LUKS'`, then the hard drive has been encrypted, and additional commands are needed to unlock it.  

### Encrypted Disk

To get access to an encrypted disk, these additional commands need to be run in order to unlock the disk.  Please use the `lsblk` command described above to determine the correct drive and partition.

| **SATA Drives**                                    | **NVMe Drives**                                   |
|:--------------------------------------------------:|:-------------------------------------------------:|
| ```sudo cryptsetup luksOpen /dev/sda3 cryptdata```       | ```sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata``` |

```bash
sudo lvscan
sudo vgchange -ay
```

**Note:** Pay attention to what the `cryptdata` group is called. If it is named something other than `data-root`, substitute the correct info into this next command.  Make sure that `-root` is on the end:

```bash
sudo mount /dev/mapper/data-root /mnt
```

And now the existing hard drive can be accessed by going to the `/mnt` folder.  To use the <u>Files</u> program, go to '+ Other Locations' -> 'Computer' and then click on the `/mnt` folder.

## Chroot

`chroot` is the way to run commands as if the existing operating system had been booted.  Once these commands are run, then package manager (`apt`) and other system level commands can be run.

The EFI partition is the next partition to be mounted. To help identify it, this partition is usually around 512MB, and is labelled as `/boot/efi`.

| **SATA Drives**                       | **NVMe Drives**                          |
|:-------------------------------------:|:----------------------------------------:|
| ```sudo mount /dev/sda1 /mnt/boot/efi```    | ```sudo mount /dev/nvme0n1p1 /mnt/boot/efi```  |

```bash
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
sudo cp -n /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
```

With this last command you will have root access to your installed system. You can also access your files with <u>files</u> via "Other Locations" -> "Computer" -> "mnt."

### After Chroot

Once you are done accessing files or running commands in your installed OS, you can exit from `chroot` and reboot the computer, by running these commands:

```bash
exit
reboot
```

## Refresh Install

The Refresh Install option allows you to reinstall the OS without losing user account information and data in the home directory.
**NOTE:** user-installed applications are not preserved and will need to be reinstalled.

![Refresh Install Option](/images/pop-recovery/recovery-install-page-20.04.png)

### Reinstall

Once Recovery has booted, the <u>Pop Installer</u> will start automatically.  If the system needs to be reinstalled, go ahead and continue the installation steps as demonstrated [here](/articles/install-pop/).

If files need to be copied off before reinstall, open the <u>Files</u> program to get access to the existing install.  If the existing install is encrypted, please see the [encrypted disk](#encrypted-disk) instructions above.

## Upgrade

It is important to keep the Recovery Partition up to date as it is not updated with the installed OS. Updating the Recovery partition will allow you to [reinstall](#reinstall) the newest OS, instead of the previous Recovery version.

The Recovery Partition can be updated from within the OS in Settings -> OS Upgrade like in the screenshot below:

![Pop Recovery Update Available](/images/pop-recovery/pop-recovery-update.png)

Once the `Update` button is pressed you will see the below screenshot:

![Pop Recovery Updating](/images/pop-recovery/pop-recovery-update-updating.png)

The screenshot below shows that the Recovery Partition has been upgrade successfully:

![Pop Recovery Updated](/images/pop-recovery/pop-recovery-update-upgraded.png)
