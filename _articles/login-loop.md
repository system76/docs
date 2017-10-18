---
layout: article
title: Ubuntu - Can't Log In or No Icons On Desktop
description: >
  Are you getting stuck in a login loop, even though your password is correct? Are you logged in with no desktop icons?
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
section: articles

---

Sometimes after an upgrade or under certain conditions, your system might not bring you to the desktop after logging in. If you try logging in and Ubuntu just brings you back to the login screen even though your password was correct, you're experiencing a login loop. There are several causes for login loop:

* NVIDIA driver issue
* An update broke the window manager
* Attempted to start the window manager as root
* An issue with your user account

Each cause has a different solution, and certain items (e.g., NVIDIA) might not be applicable to your system. In most cases, you can drop down to a terminal (called a *TTY*) to log in and fix the issue.

**Alternately,** if you can log in but there's no icons on your desktop, see the [Update Broke The Window Manager](#update-broke-window-manager) section below.

### Switch To Terminal

First, confirm that you can log in to your user account. At the login screen, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd> to switch to a TTY. You'll be prompted to enter a login. At the `login` prompt, enter your username and press <kbd>Enter</kbd>. You'll then be prompted for your password. As you type your password, it won't be displayed nor will it be obfuscated.

Once you're logged in, you'll be presented with a prompt showing your username, hostname, and a tilde (~) representing your home directory.

![Login and initial prompt](/images/login-loop/login-initial.png)

If you're not able to log in, there could be a few reasons:

* Wrong username
* Something is blocking the login
* Wrong password (you're notified of this at the graphical login greeter)

The easiest way to confirm your login (username) is by booting into recovery mode, starting a root shell, and running `ls` in the `/home` directory, as outlined in the [Password Reset](/articles/password/) article. If your login is correct (both username and password) then something else is blocking the login. This is a difficult issue to troubleshoot, and you might want to consider backing up your files from a live disk and [Reinstall Ubuntu](/articles/restore/) or contacting Support for more assistance.

If you get logged in without issue, move on to the next steps.

Note that you can always return to the graphical login screen by pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F7</kbd>

### Reinstall NVIDIA Driver

If your system is equipped with NVIDIA graphics, a recent update might be causing the login issues. Refer to the table below to determine if your system contains NVIDIA graphics.

Always        | Maybe                | Never
:-------------|:---------------------|:-----
Oryx Pro      | Wild Dog Pro         | Lemur
Serval WS     | Ratel                | Gazelle
Bonobo WS     | Galago Pro (w/ eGPU) | Kudu
Leopard WS    |                      | Meerkat
Silverback WS |                      |

Even if your system doesn't have NVIDIA graphics, there's no harm in uninstalling the driver. If it's not installed, nothing will happen. 

To remove the NVIDIA drivers, run the following:

```
sudo apt purge nvidia*
```

Wait for `apt` to complete, then reboot by typing `reboot` at the prompt.

![Removing NVIDIA](/images/login-loop/purge-nvidia.png)

After you've rebooted, try logging in. Since the NVIDIA driver was removed, your display might be using a different resolution. This will be corrected after reinstalling the NVIDIA driver. If you can successfully log in, open a terminal by pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> and run the following command:

```
sudo apt install system76-driver-nvidia
```

After the installation has completed, type `reboot` and confirm you can still log in. If it works, you're all set! If not, try some of the next steps.

### Update Broke Window Manager

In rare cases, you can log in, but there are no icons or launcher on the desktop. Follow the steps above to [Switch To Terminal](#switch-to-terminal), then run the following commands once logged in:

```
mv ~/.cache/compizconfig-1 ~/cconfig-old
reboot
```

After the system reboots, confirm that you can log in and that your icons and launcher are restored. This might change some of your desktop settings such as launcher icon position or desktop background, but it does not affect your files. If you still can't log in, or if this doesn't apply, see the next section.

### Attempted to Start The Window Manager as Root

Perhaps you logged in to the terminal and tried to run `sudo startx` while logged in as your user. X runs as an individual user, so you should *never* run `sudo startx` to start the window manager. Usually, it only changes the permissions on a single file, `~/.Xauthority` which can be reverted from the terminal. Follow the steps above to [Switch To Terminal](#switch-to-terminal) then run the following commands to:

* Confirm the file ownership of .Xauthority
* Change ownership back to your user *replacing username:username with your actual username*
* Confirm the updated file ownership of .Xauthority

```
ls -lah .Xauthority
sudo chown username:username .Xauthority
ls -lah .Xauthority
```

![chown Xauth](/images/login-loop/chown-xauth.png)

Switch back to the graphical login with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F7</kbd> and confirm you can log in.

### If These Steps Don't Work

Contact Support: we have a few more things to try. There are a significant number of processes and files required for your graphical desktop environment to be loaded, and much fewer for the terminal login. As such, you can usually recover your desktop using the command line interface!
