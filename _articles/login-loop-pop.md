---
layout: article
title: Can't Log In or Black Screen After Logging In with Pop!_OS
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
image: http://support.system76.com/images/system76.png
hidden: false
section: pop

---

Sometimes after an upgrade, your system might not bring you to the desktop after logging in. If you try logging in and you just see a black screen, or Pop!_OS brings you back to the login screen, you're experiencing a login loop. There are several causes for login loops:

* Configuration files in your home directory are not compatible with new versions of software
* The display/login manager is not working correctly
* The NVIDIA driver has been updated and is causing an issue
* The AMD radeon driver is being loaded and causing issues

Each cause has a different solution, and certain items (such as NVIDIA) might not be applicable to your system. In most cases, you can switch to a full-screen terminal (called a *TTY*) to log in and fix the issue.

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

```
sudo adduser test
sudo systemctl reboot
```

If you're able to log in with the test user, the issue is somewhere in your regular user's home folder. Log into the full-screen terminal with your regular user again, and move some of the common configuration files out of the way:

```
mv ~/.config ~/.config.old
mv ~/.local ~/.local.old
mv ~/.cache ~/.cache.old
mv ~/.nvidia-settings-rc ~/.nvidia-settings-rc.old
mv ~/.nv ~/.nv.old
sudo systemctl reboot
```

After moving those files and rebooting, try logging in again. (There may be files you need to move other than the common ones listed above.)

### Reinstall the login manager

You can reinstall GNOME Display Manager (which handles the login screen), along with the desktop environment. On Pop!_OS:

```
sudo apt install --reinstall gdm3 pop-desktop gnome-shell
sudo systemctl reboot
```

Or on Ubuntu:

```
sudo apt install --reinstall gdm3 ubuntu-desktop gnome-shell
sudo systemctl reboot
```

After reinstalling those packages and rebooting, try logging in again.

### Reinstall NVIDIA Driver

If your system is equipped with NVIDIA graphics, a recent update might be causing the login issues. (Usually, NVIDIA driver issues will prevent the login screen from loading at all; however, it's still worth reinstalling if you are unable to log in after the above steps.) Refer to the table below to determine if your system contains NVIDIA graphics:

Always        | Maybe                | Never
:-------------|:---------------------|:-----
Oryx Pro      | Wild Dog Pro         | Lemur
Adder WS      | Ratel                | Kudu
Serval WS     | Gazelle              | Meerkat
Bonobo WS     | Thelio               | Galago Pro
Leopard WS    | Thelio Major         | Darter Pro
Silverback WS | Thelio Massive       |

To remove the NVIDIA driver, run the following:

```
sudo apt purge ~nnvidia
sudo apt autoremove
sudo apt clean
```

![Removing NVIDIA](/images/login-loop/purge-nvidia.png)

After the NVIDIA driver has been removed, add it back using the following commands:

```
sudo apt update
sudo apt full-upgrade
sudo apt install system76-driver-nvidia
```

After the installation has completed, type `sudo systemctl reboot` and try logging in again.

### Blacklist Radeon Driver

If you are using an AMD graphics card, the radeon driver might be causing issues as it does not support newer versions of Ubuntu.  The amdgpu driver that comes with the kernel does however. To blacklist the radeon driver and ensure amdgpu is loaded:

Open `/etc/modprobe.d/blacklist.conf` for editing and add `blacklist radeon` to the file. Then run:

```
sudo update-initramfs -c -k all
sudo shutdown -r now
```

### If these steps don't work...

Contact Support! We have a few more things to try. There are a significant number of processes and files required for your graphical desktop environment to be loaded, and much fewer for the terminal login. As such, you can usually recover your desktop using the command line interface!
