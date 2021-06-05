---
layout: article
title: Change Your Password in Ubuntu
description: >
    Forgot your main password?  Locked out of your computer? Need to change your encryption passphrase? Follow these instructions to change both!
keywords:
  - password
  - reset
  - locked out
  - crash
image: http://support.system76.com/images/system76.png
hidden: false
section: ubuntu

---

# Change Your Password in Ubuntu 

If you can't log into your computer, you can follow these instructions to reset the password for any user. Pop!_OS and Ubuntu allow for the root user to reset the password for any user account. In order to get to the root user, we need to restart the computer and use what's called "single user mode", which is the low level repair system for the computer.

### Pop!_OS 18.04 and Later

On a fresh install Pop!_OS 18.04 and later, <u>systemd-boot</u> is used rather than <u>GRUB</u>.  Please follow these instructions to reset your password.  If your operating system is anything other than Pop!_OS 18.04 and later, please use the [GRUB](#grub) section.

First, bring up the <u>systemd-boot</u> menu by holding down <kbd>SPACE</kbd> or the <kbd>ESC</kbd> key.  On the menu, choose **Recovery Mode**.

![systemd-boot](/images/password/systemd-boot.png)

Once the recovery operating system has opened, click **Install Pop!_OS** in the top left, and choose **quit**.  Then, press <kbd><span class="fl-pop-key"></span></kbd>+<kbd>T</kbd>/<kbd><i class="fl-ubuntu"></i></kbd> to open a terminal, and type in these commands:

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

### GRUB

There are two ways to enter into the GRUB boot menu. The first is to restart your computer and tap <kbd>ESC</kbd> while the computer starts. The second is to power it off while it is starting up, which will make the menu show up on the next boot. Make sure to stop tapping <kbd>ESC</kbd> when the menu appears:

![Grub1](/images/password/grub1.png)

If you do tap <kbd>ESC</kbd> when the menu appears, a GRUB command prompt will appear:

![Prompt](/images/password/prompt.png)

If you get to the GRUB command prompt, type in `normal`, then press <kbd>ENTER</kbd> and immediately press <kbd>ESC</kbd>.

Once in the GRUB menu, choose the second option **Advanced options for Ubuntu**, then, choose the 3rd option **Ubuntu, with Linux &lt;current kernel number&gt; (recovery mode)**.

![Grub2](/images/password/grub2.png)

At the recovery menu, choose the **root** option, then press <kbd>Enter</kbd> to drop to a root prompt.

![Recovery](/images/password/recovery.png)

### Root Prompt

**A note on the root prompt:** Since the system is operating with only a single console, all output is printed to the screen. This can be really confusing, but nothing has changed -- it's just output. **If your screen looks like the image below, with a timeout notice or similar,** press Ctrl+C to return to the prompt and continue working. You will need to re-enter the command you were typing.

![Timeout in recovery mode](/images/password/timeout.png)

Now, type this command to make your hard drive editable:

```bash
mount -o rw,remount /
```

Then type this command to show what usernames are present on the computer:

```bash
ls /home
```

Then, to change your password, type in this command:

```bash
passwd april
```

(Change `april` to the actual user whose password you would like to reset, as seen in the output of `ls /home`)

Enter a new password, then press <kbd>Enter</kbd>. Even though you are typing, no text will be displayed as seen in the image below.

![Full commands to reset password](/images/password/example.png)

Enter the same password again to confirm, then press <kbd>Enter</kbd>.

If successful, you will see a message confirming `passwd: password updated successfully

You can now reboot:

```bash
reboot
```

### Change the encryption passphrase using the Terminal:

This can be done in the operating system or in the recovery mode/partition.

First list the drives and partitions with this command:

```bash
lsblk
```

Then to change the passphrase:

```bash
sudo cryptsetup luksChangeKey /dev/sda3 -S 0
```

### Change the encryption passphrase using Disks:

Click on the drive that has the OS installed on it on the left side of the <u>Disks</u> application. Then click on the LUKS partition (where the root partition is) and then click on the gear icon under the 'Volumes' section.

![GNOME Disks](/images/password/disks-change-passphrase.png)



---

- Document Version: 1.0.0
- Date: (Apr 17, 2020)
- Author: Aaron Honeycutt
- Contributing Editor(s): Nathaniel Warburton.