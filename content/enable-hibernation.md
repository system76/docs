---
title: Enable Hibernation (Suspend to Disk)
description: >
    How to partition your drive and set up hibernation in Pop!_OS.
keywords:
  - Suspend
  - Suspend to Disk
  - Hibernate
  - Hibernation
  - Swap
  - Swap Partition
  - Encrypted Swap
  - Encryption

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## State of Hibernation on Pop!_OS

Hibernation is not currently enabled on Pop!\_OS by default. There are several limitations that keep this from being a default:

- Pop!\_OS' Default Partition Layout
- Use of a non-persistent encryption key for SWAP.
- Additional drive I/O used on Solid State Drives (SSDs)
- Depending on alloted RAM in a system, and size of NVMe/SSD drive(s), hibernation could add notable delay on resuming a hibernation session.

However, these limitations aside, hibernation is an often requested feature for Pop!\_OS. The purpose of this article is to provide steps for enabling hibernation for any users that would like it.

## Enable Hibernation on an Encrypted Drive

1. Boot into [Pop!_OS Recovery](https://support.system76.com/articles/pop-recovery)

    Turn your computer off, then turn it back on and hold down the `SPACE` bar immediately. In the menu that appears, select `PopOS Recovery`, and let it boot.

    Once it boots, close out of the installation window or choose `Try Demo Mode` (be sure not to choose any install or repair options, as this could result in data loss. It will also mount the drive and make the next steps harder).

2. Open `Gparted` by clicking `Activities`/`Applications` and searching for "Gparted" or by pressing `SUPER`+`T` to open a Terminal, and running:

    ```bash
    gparted
    ```

3. Disable and remove the SWAP partition. You can either right-click on the SWAP partition, and select `swapoff` or issue that same command in the Terminal:

    ```bash
    sudo swapoff
    ```

    Then click on the swap partition, click the red `X` to mark it for deletion, and then press the green checkmark to approve the changes.

4. Extend the `luks` partition to the end of the drive.

    Click on the encrypted `luks` partition and select the "Resize/Move" button. Use the GUI drag tools, or number fields, to make sure the OS partition extends to the end of the drive (after `EFI` and `recovery`).

    ![gparted](/images/hibernation/gparted.png)

    Open the encrypted partition using these Terminal commands:

    | **SATA Drives**                                    | **NVMe Drives**                                   |
    |:--------------------------------------------------:|:-------------------------------------------------:|
    | ```sudo cryptsetup luksOpen /dev/sda3 cryptdata```       | ```sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata``` |

    **NOTE:** In the screenshot example, the partition is called `/dev/vda3`. Adjust the drive name to your case (sda# or nvme#n#p#).

    ```bash
    sudo lvscan
    sudo vgchange -ay
    ```

5. Reduce the size of the root volume by the size of main memory. If you have 16GB of memory, reduce the `data-root` volume by 16GB. If you have 32GB, reduce by 32GB, etc. Use these Terminal commands:

    ```bash
    free -h
    sudo lvreduce -r -L-16G /dev/mapper/data-root
    ```

6. Create a `swap` volume (instead of a drive partition):

    ```bash
    sudo lvcreate -L 16G --alloc contiguous --name swap data
    sudo mkswap /dev/data/swap
    ```

7. Mount the `root` filesystem and edit `crypttab` and `fstab` to update for the new `swap` location:

    Mount the `data-root` volume:

    ```bash
    sudo mount /dev/mapper/data-root /mnt
    ```

    Edit `crypttab` to remove the original swap partition entry.

    ```bash
    sudo nano /mnt/etc/crypttab
    ```

    ![crypttab](/images/hibernation/crypttab.png)

    Open `fstab` to copy the UUID of the `swap` volume.

    ```bash
    sudo nano /mnt/etc/fstab
    ```

    ![fstab](/images/hibernation/fstab.png)

8. Reboot your computer and allow it to load Pop!\_OS normally.

9. Add a resume target for the kernel:

    Using the UUID retrieved from `fstab` run this command:

    ```bash
    sudo kernelstub -a "resume=UUID=xxxxxxxx-xxxx-xxxx-xxxxxxxx"
    ```

    **NOTE:** Replace everything after `UUID=` with the ID of your new `swap` volume.

    ![blkid](/images/hibernation/blkid.png)

    The system is now ready to suspend to, and resume from disk.

    You can test if hibernation works by booting back into your install and running:

    ```bash
    sudo systemctl hibernate
    ```

    **CAUTION:** Hibernation, if used often, will add additional write traffic (equal to the total amount of RAM) onto SSDs, shortening the lifespan of the drives.

## Desktop Integration

## GNOME Extension

1. Add Extension:

    To add `Hibernate` and `Hybrid Sleep` to the power menu, we'll need to add this GNOME-Shell extension: [Hibernate Status Button](https://extensions.gnome.org/extension/755/hibernate-status-button/)

2. Add `.pkla` file:

    **NOTE:** Pop!OS and Ubuntu require a file at `/etc/polkit-1/localauthority/10-vendor.d/com.ubuntu.desktop.pkla`

    To create this file, run:

    ```bash
    sudo nano /etc/polkit-1/localauthority/10-vendor.d/com.ubuntu.pkla
    ```

    Then copy these contents into the newly created file:

    ```bash
    [Enable hibernate in upower]
    Identity=unix-user:*
    Action=org.freedesktop.upower.hibernate
    ResultActive=yes

    [Enable hibernate in logind]
    Identity=unix-user:*
    Action=org.freedesktop.login1.hibernate;org.freedesktop.login1.handle-hibernate-key;org.freedesktop.login1;org.freedesktop.login1.hibernate-multiple-sessions;org.freedesktop.login1.hibernate-ignore-inhibit
    ResultActive=yes
    ```

Save and close the file.

Your system is now ready to hibernate!
