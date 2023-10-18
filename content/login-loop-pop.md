---
title: Black Screen or Login Issues (Pop!_OS 22.04 LTS)
description: >
  Are you getting stuck in a login loop, even though your password is correct? Do you see a black screen after you log in?
keywords:
  - Support
  - Guides
  - Login
  - NVIDIA
  - Loop
  - Password
  - session
  - greeter

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

Sometimes after an upgrade, your system might not bring you to the desktop after logging in. If you try logging in and you just see a black screen, or Pop!_OS brings you back to the login screen, you're experiencing a login loop. There are several causes for login loops:

* Issues with decryption, or the GUI decryption screen.
* Configuration files in your home directory are not compatible with new versions of software
* The display/login manager is not working correctly
* The NVIDIA driver has been updated and is causing an issue
* The AMD Radeon driver is being loaded and causing issues

Each cause has a different solution, and certain items (such as NVIDIA) might not be applicable to your system. In most cases, you can switch to a full-screen terminal (called a *TTY*) to log in and fix the issue.

## Encryption Screen Issues

### Enryption Passphrase

If entering your decryption passphrase does not unlock your disk, one of two things is likely the cause:

1. The decryption passphrase is incorrect.
2. Your keyfile has been corrupted (rare).

![bad-password](/images/login-loop/bad-password.png)

In either case, unless you have set an [alternative decryption key](https://support.system76.com/articles/advanced-luks), the drive will need to be erased and re-imaged to regain acess. This is the cost/benefit of drives secured by encryption. It's important to have current [backups](https://support.system76.com/articles/backup-files) of your files to avoid data-loss.

### Correct Passphrase, No Login Screen

If your decryption passphrase is correct, but you're unable to reach the login screen, some of the packages that first run on login may need reinstalled. One symptom of this situation, will be if the screen freezes on "cryptdata setup successfully" (pictured below):

![decryption freeze](/images/login-loop/good-password.png)

To correct this, follow the steps below. If you're unable to reach a Terminal, refer to the "Recovery" section below.

### Switch to a Terminal

At the login screen, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F5</kbd> to switch to a TTY. You'll be prompted to enter a login. At the `login` prompt, enter your username and press <kbd>Enter</kbd>. You'll then be prompted for your password. You will not see your password as you are typing it; just type it and press "Enter."

If you're not able to log in, the reason could be:

* **Wrong username**: your username may not be the same as your display name. It is often your first name all lowercase, first and last name all lowercase, or first initial and last name all lowercase.
* **Wrong password**: you're notified of this at the graphical login screen.
* Something else is blocking the login.

The easiest way to confirm your username is by booting into recovery mode, entering a chroot, and running `ls` in the `/home` directory, as outlined in the [Password Reset](/articles/password/) article. If your username and password are both correct, then something else is blocking the login. This is a difficult issue to troubleshoot, and you might want to consider backing up your files from a live disk and [Reinstalling Pop!_OS](/articles/install-pop/) or contacting Support for more assistance.

After logging in, you'll be presented with a prompt showing your username, hostname, and a tilde (~) representing your home directory.

![Login and initial prompt](/images/login-loop/login-initial.png)

Note that you can always return to the graphical login screen by pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd>, or by typing `sudo systemctl restart gdm`.

### Move old configuration files out of the way

To determine whether configuration in your home directory is causing the issue, you can create a new user account for testing purposes:

```bash
sudo adduser test
sudo systemctl reboot
```

If you're able to log in with the test user, the issue is somewhere in your regular user's home folder. Log into the full-screen terminal with your regular user again, and move some of the common configuration files out of the way:

```bash
mv ~/.config ~/.config.old
mv ~/.local ~/.local.old
mv ~/.cache ~/.cache.old
mv ~/.nvidia-settings-rc ~/.nvidia-settings-rc.old
mv ~/.nv ~/.nv.old
sudo systemctl reboot
```

After moving those files and rebooting, try logging in again. (There may be files you need to move other than the common ones listed above.)

### Move `xorg.conf` file out of the way

If display settings have been corrupted or modified incorrectly, it's good to remove the `xorg.conf`.

```bash
mv /etc/X11/xorg.conf /etc/X11/xorg.conf.old
```

By default, X11 config files are instead stored here:

```bash
/usr/share/X11/xorg.conf.d
```

`xorg.conf` files saved in `/etc/X11` can cause displays issues on boot, and should be avoided wherever possible.

### Reinstall the login manager

You can reinstall GNOME Display Manager (which handles the login screen), along with the desktop environment. On Pop!_OS:

```bash
sudo apt install --reinstall gdm3 pop-desktop gnome-shell
sudo systemctl reboot
```

After reinstalling those packages and rebooting, try logging in again.

### Reinstall NVIDIA Driver

If your system is equipped with NVIDIA graphics, a recent update might be causing the login issues. (Usually, NVIDIA driver issues will prevent the login screen from loading at all; however, it's still worth reinstalling if you are unable to log in after the above steps.) Run these commands to determine if your system has NVIDIA graphics:

```bash
lspci -v | grep VGA
```

To remove the NVIDIA driver, run the following:

```bash
sudo apt purge ~nnvidia
sudo apt autoremove
sudo apt clean
```

![Removing NVIDIA](/images/login-loop/purge-nvidia.png)

After the NVIDIA driver has been removed, add it back using the following commands:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt install system76-driver-nvidia
```

After the installation has completed, type `sudo systemctl reboot` and try logging in again.

### Blacklist Radeon Driver

If you are using an AMD graphics card, the radeon driver might be causing issues as it does not support newer versions of Ubuntu.  The amdgpu driver that comes with the kernel does however. To blacklist the radeon driver and ensure amdgpu is loaded:

Open `/etc/modprobe.d/blacklist.conf` for editing and add `blacklist radeon` to the file. Then run:

```bash
sudo update-initramfs -c -k all
sudo shutdown -r now
```

### Recovery

We have an article on accessing the Recovery Partition [here](https://support.system76.com/articles/pop-recovery/)

To access Recovery, turn your computer off, then turn it back on and hold down the space bar immediately. In the menu that appears, select PopOS Recovery, and let it boot.

Once it boots, close out of the installation window or choose “try demo mode” (be sure not to choose any install or repair options, as this could result in data loss).

With the installation window closed, open a Terminal, mount the drive, and chroot (change to root) into the system (refer to the Repair and Chroot sections of the Recovery article).

Once chrooted in, run the following commands:

```bash
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt full-upgrade
sudo apt autoremove --purge
```

Then:

```bash
sudo apt install --reinstall plymouth gdm3 gnome-shell pop-desktop linux-generic linux-headers-generic
```

The command above is one line, and will reinstall plymouth (the graphical encryption screen), gnome display manager (gdm3), gnome-shell, the pop-desktop environment, and the linux-kernel.

Once the reinstallation has finished, we'll want to run:

```bash
update-initramfs -c -k all
```

And finally:

```bash
exit
reboot
```

To exit the chroot environment, and then reboot the system.

### If these steps don't work

Contact Support! We have a few more things to try. There are a significant number of processes and files required for your graphical desktop environment to be loaded, and much fewer for the terminal login. As such, you can usually recover your desktop using the command line interface!
