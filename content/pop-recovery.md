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
section: pop
tableOfContents: true
---

The Recovery Partition is a full copy of the Pop!\_OS installation disk. It can be used exactly the same as if a live disk copy of Pop!\_OS was booted from a USB drive. The existing operating system can be repaired or reinstalled from the recovery mode. You can perform a refresh install, which allows you to reinstall without losing any user data or data in your home directory. Recovery can also perform a clean install, which resets all OS data.

To boot into recovery mode, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> while the system is booting, or by holding/tapping any function keys **NOT** used to [Access the BIOS/Boot Menu](/articles/boot-menu) (On non-System76 hardware, try the keys <kbd>F1</kbd> through <kbd>F12</kbd>).

 >**Note:** These instructions assume Pop!\_OS is the only OS running on your system. If you are booting more than one operating system you may need to change your boot order first, or manually select the Pop!\_OS Disk from your BIOS/Boot menu.

Once the menu is shown, choose **Pop!_OS Recovery**.

>**Note**: The Pop!\_OS recovery environment will not have your WiFi password saved. Once booted into the live environment, you will need to reconnect manually to your WiFi in order to access the internet.

![systemd-boot](/images/pop-recovery/systemd-boot.png)

## Clean Install

This option erases the current install along with all user files. It reformats the drive partitions and installs the version of Pop!\_OS contained in the Recovery partition.

Steps to back up user-files from a Live Disk/Recovery can be found [here](https://support.system76.com/articles/disaster-recovery).

>**Note:** The Recovery partition OS version will either be the same as the OS version that shipped with your computer, or the latest version to which the Recovery partition has been [updated](#update-recovery-partition).

## Refresh Install

The Refresh Install option allows you to reinstall the OS without losing user account information and data in the home directory.

>**Note:** User-installed applications not stored in the Home folder (e.g. .deb or apt installed versions) will need to be re-installed.

If the `Refresh Install` option is not present on the install screen, one of two things may be true.

1. Your drive is encrypted. The Refresh install option may appear after decrypting the drive. A notice about decrypting the drive will be present above the install options.

2. The Recovery version is out of date. See the [update instructions](#update-recovery-partition).

![Refresh Install Option](/images/pop-recovery/recovery-install-page-20.04.png)

### Reinstall

Once Recovery has booted, the <u>Pop Installer</u> will start automatically.  If the system needs to be reinstalled, go ahead and continue the installation steps as demonstrated [here](/articles/install-pop/).

If the existing install is encrypted, please see the [encrypted disk](#encrypted-disk) instructions.

## Repair

If the existing OS install needs to be repaired, the installer application should be closed. Use the installer app to select keyboard and language settings, then click the `Try Demo Mode` button in the lower-left corner of the Install page. Alternatively, right-click the installer icon in the dock and select `Quit`.

>**Caution:** Do not choose any install or refresh options. Choosing install options could result in data loss.  
>**Note:** Once you have set up or accessed any of the filesystems, you will need to reboot the recovery environment to use any of the install options.

Follow the instructions below to access the existing OS drive:

First, press <kbd>SUPER</kbd>+<kbd>T</kbd> to open a terminal, then type this command:

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

`Chroot` runs commands as if the existing operating system had been booted. Once these commands are run, package manager (`apt`) and other system-level commands can be run.

The EFI partition is the next partition to be mounted. To help identify it, this partition is usually around 512MB, and is labeled as `/boot/efi`.

| **SATA Drives**                       | **NVMe Drives**                          |
|:-------------------------------------:|:----------------------------------------:|
| ```sudo mount /dev/sda1 /mnt/boot/efi```    | ```sudo mount /dev/nvme0n1p1 /mnt/boot/efi```  |

```bash
for i in /dev /dev/pts /proc /sys /run; do sudo mount -R $i /mnt$i; done
sudo chroot /mnt
```

With this last command, you will have root access to your installed system. Once the drive is accessed, commands for maintenance can be run on the installed system. For example, [package manager repair commands](/articles/package-manager-pop). You can also access your files with <u>Files</u> via "Other Locations" -> "Computer" -> "mnt."

### After Chroot

Once you are done accessing files or running commands in your installed OS, you can exit from `chroot` and reboot the computer, by running these commands:

```bash
exit
reboot
```

## Update Recovery Partition

It is important to keep the Recovery Partition up to date as it is not updated with the installed OS. Updating the Recovery partition will allow you to [reinstall](#reinstall) the newest OS, instead of the previous Recovery version.

The Recovery Partition can be updated from within the OS by either using Settings or from a terminal.

If using Settings, click on OS Upgrade like in the screenshot below:

![Pop Recovery Update Available](/images/pop-recovery/pop-recovery-update.png)

Once the `Update` button is pressed you will see the below screenshot:

![Pop Recovery Updating](/images/pop-recovery/pop-recovery-update-updating.png)

The screenshot below shows that the Recovery Partition has been upgraded successfully:

![Pop Recovery Updated](/images/pop-recovery/pop-recovery-update-upgraded.png)

### Update Recovery Partition from the command-line

Alternatively you can also upgrade the recovery partition from the command-line

```bash
pop-upgrade recovery upgrade from-release
```

You should see an output similar to what is pictured below confirming the recovery partition had been updated:

```
checking if pop-upgrade requires an update
Recovery event: fetching recovery files
Fetched 2932/2932 MiB
Recovery event: verifying checksums of fetched files
Recovery event: syncing recovery files with recovery partition
Recovery event: recovery partition upgrade completed
Recovery upgrade status: recovery partition refueled and ready to go
```
