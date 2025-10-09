---
title: Software Troubleshooting Triage
description: >
 A troubleshooting triage to help you self-diagnose software issues.
keywords:
 - support
 - software
 - self-help
 - tech-support
 - troubleshooting

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software-troubleshooting
tableOfContents: true
---

## Gather Tools

- [Backups](/articles/backup-files)
- [Live Disk](/articles/live-disk)
- [Logs](/articles/log-files)

## Suspend, Reboot, Shut Down

Do the symptoms go away if the system is suspended, rebooted or shut down and then started up again? Sometimes repeated suspends or reboots are all that are needed to clear an issue out. It's also a good idea to test reboot and shutdown separately as they handle memory and power-management differently.

## Symptoms

- System or Applications Crashing or [Freezing](/articles/freezing-behavior)
- Black Screen or No Login Screen
    Symptoms like those described [here](/articles/login-loop-pop) or [here](/articles/login-loop-ubuntu)
- Applications will not open.
    Clicking on the application icon in the Dock does not launch the program, and/or entering the package name in the terminal will not launch the program.
- Updates will not complete.
    "Dependency errors"
    "Held broken packages."
    "DKMS Errors"
    "DPKG Errors"
    "you have requested an impossible situation."
    404 Errors when trying to update repositories.
- Strange Input or Graphical Behavior.
- Application Windows not drawn correctly, or overlapping.
    E.g. windows frozen in place, windows will not resize. Stuck in full-screen mode, etc.
    Mouse freezes intermittently or stutters it moves across the screen, or keyboard input lags.

## Causes

- GNOME Extension bugs.
- Bugs inherent in applications.
- Corrupted software updates/installs.
    Files may have been corrupted as they were downloaded, for example, by a network interruption.
- Out of date OS libraries.
    Many applications refer to system libraries. Some programs may be expecting to find a specific version of a library.
- Out of date drivers.
    Older kernels may be using out of date driver software.
- Incorrect Drivers.
    If an unneeded or incorrect driver is installed this can cause unexpected side effects.
- Kernel Bugs

## Solutions

We troubleshoot issues with the approach of taking small steps, then gradually larger steps:

 0. Backups - Preserve
 1. Get logs - Observe

    **Non Invasive**

 2. Check for updates.
 3. Fix the package manager.
 4. Test 2nd Admin User.
 5. Test in a Live Disk

    **Surgical - Invasive but Reversible**

 6. Remove or install individual packages.
 7. Try a Different Kernel

     **Global - Invasive and Irreversible**

 8. Upgrade OS
 9. Reinstall the OS.

### 1. Get Logs

To generate the logs we need, please click on **Activities** in the top left of your screen, search for System76, and then click on the System76 Driver application.

Then click on the **Create Log Files** button and the log file will be in your home directory when you first open the Files application.

For more information, please see this support article: [Creating Log Files](/articles/log-files)

### 2. Update the Installed OS

Make sure the version of the OS that is installed is fully up to date.

NOTE: The following instructions can be used in either Ubuntu or Pop!\_OS.

You can open the terminal by clicking Activities in the upper-left corner and searching for "Terminal", after pressing <kbd>SUPER</kbd>.
When you run the first command with "sudo" it will ask you to enter your password.
Typing your password will not show anything in the Terminal window. That is normal and for security.
Just enter your password as you normally would, and then hit <kbd>ENTER</kbd>. You'll also need to hit <kbd>ENTER</kbd> after each command.

```bash
sudo apt update
sudo apt full-upgrade
reboot
```

### 3. Fix Package Manager Issues

```bash
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt dist-upgrade
sudo apt autoremove --purge
reboot
```

<!--> May want to switch this to the version with extra steps and built in log collecting. -->

For more detailed information on troubleshooting the package manager, or managing software repositories, please refer to the sources below.

Sources:

[Fix Package Manager](/articles/package-manager-pop)

[Manage Repositories](/articles/manage-repos-pop)

### 4. Test Second Admin User

That can be done by:

- Navigate to Settings -> Users
- Click the Unlock button
- Click the  **Add User** button that appears.
- Create a user with whatever name and credentials you want.
- Make sure click the **Administrator** option for the user.
- Reboot and log into the new user.

If the problem is not present in the new user, the issue is tied to a specific file, setting or configuration of the previous user.

[Users (Manage)](/articles/other-accounts)

### 5. Test in a Live Environment

We have help articles on the Recovery Partition and how to access the Boot Menu listed below.

[Recovery Partition](/articles/pop-recovery)

[Boot Menu](/articles/boot-menu)

### 6. Remove or Reinstall Specific Packages

> **NOTE:** the apt package manager is used in both PopOS and Ubuntu. PopOS also offers flatpak variations of programs in the Pop!\_Shop.
If you need to remove flatpak packages you can also remove or reinstall them from the **Installed** tab of the Pop!\_Shop. Ubuntu uses snap packages for some programs by default. Snap packages (snapd) can be installed manually on Pop!\_OS.

Typically the Terminal commands to reinstall a program are:

```bash
sudo apt remove [packagename]
```

OR, for a more thorough cleaning:

```bash
sudo apt purge [packagename]
```

FOR FLATPAKS:

```bash
flatpak uninstall [packagename]
```

FOR SNAPS:

```bash
sudo snap remove [packagename]
```

Where "[packagename]" is replaced with the program name, without angle-brackets.

You can also inspect and edit your software sources using the instructions in these help articles:

[Manage Repositories in Pop!\_OS](/articles/manage-repos-pop)

[Manage Repositories in Ubuntu](/articles/manage-repos-ubuntu)

### 7. Try a Different Kernel

To see the kernel currently in use, run:

```bash
uname -r
```

To show all of the kernels installed, run:

```bash
sudo dpkg --list | grep linux-image
```

### Install Different Kernel with Mainline

Installing a newer or older kernel via the "mainline" application can help in diagnosing software issues.

#### Install Mainline

Instructions for adding the Mainline PPA can be found [here](https://github.com/bkw777/mainline) Please follow the instructions under "Downloads & Source Code."

```bash
sudo add-apt-repository ppa:cappelikan/ppa
sudo apt update
sudo apt install mainline
```

After running these three commands to install the mainline app, open the application.

>**NOTE:** Mainline is only compatible with Ubuntu, Pop or other debian based distributions at this time.

- On Ubuntu, or on Pop!\_OS versions (20.04 and earlier) click **Activities** in the top left, then type "Mainline" in the search field and open the "Ubuntu Mainline Kernel Installer" application.

- If on Pop!\_OS 21.04 with the new COSMIC Desktop, click **Applications** in the top left, then type "Ubuntu Mainline" and the app should come up as a selectable option.

On first launch, the application may take a few moments to refresh its databases.

1. Once the application is open, select the desired version number, and then click the Install button. You may be prompted to enter your admin password.

2. Once the application alert confirms the kernel version has been installed, press the "Close" button.

3. Close the application.

4. Reboot your machine.

5. After reboot, check whether you're on the new kernel. Open a Terminal with <kbd>Super</kbd> + <kbd>T</kbd> or by searching for "Terminal" in the **Applications** menu. With the Terminal open, run the following command:

```bash
uname -a
```

This will print out the current kernel version the system is running.

> **IMPORTANT NOTE:** There is NO going back from steps 8 and 9. If you haven't backed up your files yet, do so *now.* Steps 8 and 9 will change/reinstall the entire OS. Use these steps when all other steps have failed. This is the "nuclear" option. It's not a long or complicated process, but it is irreversible.

### 8. Upgrade the OS

Upgrading to the latest OS version usually includes newer kernel modules and software packages, as well as security updates and bug-fixes.
These updates may directly or indirectly resolve the issue.

[Upgrade Pop](/articles/upgrade-pop)

[Upgrade Ubuntu](/articles/upgrade-ubuntu)

> **NOTE:** Not all OS releases are the same. Every other ##.04 release is a Long Term Release (LTS). Meaning that it continues to receive standard updates for 5 years and security updates for 10 years (total) after it is released. All other releases stop receiving support after 9 months.
Some users prefer to run only LTS releases so they don't have to upgrade as often.

### 9. Reinstall the OS

Certain packages and library files are so intertwined with the rest of the OS that trying to fix or replace them surgically can leave the system in a worse, or even non-booting state. Specifically, anything to do with C libraries (libc) or Python, are particularly sensitive.

0. Back Up Personal Files

    [Backups](https://support.system76.com/articles/backup-files)

1. Create a Live Disk, OR, Boot into Recovery:

    A: [Live Disk](https://support.system76.com/articles/live-disk)

    B: [Recovery](https://support.system76.com/articles/pop-recovery)

2. Access the Boot Menu (if not Recovery)

    [BIOS/Boot Menu](https://support.system76.com/articles/boot-menu)

    > **NOTE:** It may be helpful/necessary to format the drive before reinstalling the OS. This should only be done with a Live Disk, not the recovery partition; the recovery partition is on the same drive you would be trying to format.

    2.5 [Format Drive](https://support.system76.com/articles/format-drive)

3. Install the OS:

[Install PopOS](https://support.system76.com/articles/install-pop)

OR

[Install Ubuntu](https://support.system76.com/articles/install-ubuntu)

## Next Steps

If the issue is not resolved with any of the above steps, or if the problem is showing up in a Live Environment, then the issue is probably not software. More likely, [Hardware](/articles/hardware-failure) is the source of the problem.
