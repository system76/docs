---
title: Pop!_OS Incomplete Upgrade
description: >
  What to do if your upgrade is incomplete or not working correctly
keywords:
  - Pop!_OS 21.04
  - Pop!_OS 20.10
  - Pop!_OS 20.04
  - LTS
  - Non-LTS
  - Upgrade
  - Update
  - Release
  - System76
  - apt

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Repairing Upgrade Errors

Due to the overwhelming demand for Pop!\_OS, users may occasionally experience bandwidth issues. If you are still experiencing any connection errors after waiting a short time (15-30 minutes), please run the following commands in a terminal.

```bash
sudo rm -f /etc/apt/sources.list.d/pop-os-ppa.sources
sudo systemctl restart pop-upgrade
pop-upgrade release upgrade
```

## Backup Your Files

The upgrade process will leave your files intact, but it's always a good idea to play it safe and create a backup of any important files. Please read our article on [how to backup your files](/articles/backup-files/) for helpful instructions.

## If you can't boot the OS

Refer to the [data recovery article](/articles/disaster-recovery) to boot from an live disk or the Pop Recovery to backup your files before working on either repairing or reinstalling the OS.

## Recovery Partition is full

If you see a notification about the Recovery Parititon being full or see it in this output:

```bash
df -h
```

You can run this command to empty the Recovery Partition and then redownload the Recovery files to correct the issue:

```bash
sudo bash -c "rm -rf /recovery/casper-*" && pop-upgrade recovery upgrade from-release
```

## FStab Error Message

This can be caused by the `pop-upgrade` command checking for an `/etc/fstab` file and finding an entry that it does not understand. If you have manually added drives to your fstab, adding a '#' to comment out the drive while the upgrade is ongoing should work.  You would then remove the comment after the upgrade is complete to have access to those drive paths again. To edit this file, run the following command in a terminal:

```bash
sudo -H gedit /etc/fstab
```

For example:

```bash
/dev/disk/by-id/usb-ST1000LM_02123AD2-0:0-part1 /media/system76/game_drive auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

would become:

```bash
#/dev/disk/by-id/usb-ST1000LM_02123AD2-0:0-part1 /media/system76/game_drive auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

If it is showing by UUID, the example would change from:

```bash
/dev/disk/by-uuid/ed6c6976-973f-40e5-969b-9d4238fb7e00 /media/system76/ExtraDrive auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

To:

```bash
#/dev/disk/by-uuid/ed6c6976-973f-40e5-969b-9d4238fb7e00 /media/system76/ExtraDrive auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

After you have made the edit, save the file and start the upgrade again.

## Repair Package Manager after Failed/Incomplete Upgrade

1. If you’re able to log in and have a graphical interface, let’s try running a set of commands in a terminal (click your Activities menu and type ‘t’ for ‘terminal’) to clean up the installed packages:

    **If this is your first time running commands:**, just a heads up- after each command, press the enter key. When the system prompts you for your password, type it in the terminal and press the enter key. The password will not show in the terminal, but it is taking the password)

    ```bash
    sudo apt clean
    sudo apt update -m
    sudo dpkg --configure -a
    sudo apt install -f
    sudo apt dist-upgrade
    sudo apt autoremove --purge
    ```

    If you are not able to get to the desktop to run those commands, try to get to a TTY (Ctrl+Alt+F5). Enter the username and password as requested and proceed with the commands above.

    **NOTE:** your username would be your first and last name combined though all lower case unless it was changed during the initial setup.

    If you cannot access the desktop or TTY, we can run the package repair commands in Pop Recovery instead. To do this,

    - 1A. Turn your computer off, then turn it back on and hold down the space bar immediately. In the menu that appears, select Pop!_OS Recovery, and let it boot.
    - 1B. Once it boots, close out of the installation window or choose “Try Demo Mode” (be sure not to choose any install or repair options, as this could result in data loss).

    **If you do not have a Pop Recovery option:** you can create a live disk image of the OS and follow the next steps to mount the installed OS while running in a live disk. To create a live disk, use the instructions in the following [article](/articles/live-disk), then proceed to the next step.

2. Connect to your network

3. Mount the installed OS and "chroot" into the main OS. Chroot or "change root" lets us run commands as if we were logged in normally.

    To mount the OS, make note of what type of drive your OS is installed on. Is it an NVME or a SATA drive? You can run the following command to confirm:

    ```bash
    sudo parted -ls
    ```

    Look for the name of your main hard drive. It could be `/dev/sda` or `/dev/nvme0n1`, depending on if you have a standard SATA drive, or an NVMe drive, respectively. Input the following commands based on your drive type:

    | **SATA Drives**           | **NVMe Drives**                |
    |:-------------------------:|:------------------------------:|
    | ```sudo mount /dev/sda3 /mnt``` | ```sudo mount /dev/nvme0n1p3 /mnt``` |

    If the command fails and says `mount: /mnt: unknown filesystem type 'crypto_LUKS'`, then the hard drive has been encrypted, and additional commands are needed to unlock it.

    **If disk is encrypted:** start with these first 3 commands using the correct drive name in the /dev filepath

    For SATA Drives:

    ```bash
    sudo cryptsetup luksOpen /dev/sda3 cryptdata
    sudo lvscan
    sudo vgchange -ay
    ```

    For NVMe Drives:

    ```bash
    sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata
    sudo lvscan
    sudo vgchange -ay
    ```

    Next we will mount the now decrypted drive:

    **NOTE:** Pay attention to what the cryptdata group is called. If it is named something other than ‘data-root’ then you will need to substitute the correct info into this next command. Make sure that -root is on the end.

    ```bash
    sudo mount /dev/mapper/data-root /mnt
    ```

    Next we will need to mount the required paths for the chroot to function.

    For SATA Drives:

    ```bash
    sudo mount /dev/sda1 /mnt/boot/efi
    for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
    sudo cp -n /etc/resolv.conf /mnt/etc/
    sudo chroot /mnt
    ```

    For NVMe Drives:

    ```bash
    sudo mount /dev/nvme0n1p1 /mnt/boot/efi
    for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
    sudo cp -n /etc/resolv.conf /mnt/etc/
    sudo chroot /mnt
    ```

    If you get an error about the `/etc/resolv/conf` file being the same, you can safely ignore it.

4. Once the installed OS is mounted, we can attempt to repair it by running the following commands:

    ```bash
    sudo apt clean
    sudo apt update -m
    sudo dpkg --configure -a
    sudo apt install -f
    sudo apt dist-upgrade
    sudo apt autoremove --purge
    ```

5. If there are no errors, run the next commands to exit the terminal and reboot.

    ```bash
    exit
    reboot
    ```

## If you are still not able to upgrade

You can Refresh the OS without losing user account information and data in the home directory. You can find out more about this option [here](/articles/pop-recovery)

If the system is still not able to upgrade and you have a System76 system, please open a [support ticket](https://system76.com/my-account/support-tickets/new) and include this file:

```bash
journalctl -u pop-upgrade > ~/pop-upgrade.log
```

If it is not a System76 system, go to our Pop!\_OS Mattermost chat for community support [here](https://chat.pop-os.org/pop-os/channels/upgrade-help).
