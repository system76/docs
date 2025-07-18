---
title: Pop!_OS Initial Setup
description: >
    Get started using Pop!\_OS.
keywords:
  - Pop!\_OS
  - initial setup
  - Reinstall
  - Installation
  - Release
  - setup
  - new Linux

facebookImage: /_social/article
twitterImage: /_social/article

hidden: true
section: switching
tableOfContents: true
---

Welcome to Pop!\_OS! Here's what to expect during initial setup! After the first power on of Pop!\_OS, a series of screens will guide through the setup process.

1. Select your language:

    ![Language](/images/install-pop/select-lang.png)

2. Select a locale.

    ![Select Locale](/images/install-pop/select-locale.png)

3. Select a keyboard input language.

    ![Keyboard](/images/install-pop/keyboard-input.png)

4. Select a keyboard layout.

    ![Select Keyboard Layout](images/install-pop/keyboard-layout.png)

5. Choose the `Clean Install` option for a standard installation. This is the best option for new Linux users, but be aware that this will erase all contents of the target drive. Alternatively, you can select `Try Demo Mode` to continue testing Pop!\_OS in the live environment.

    ![Try or Install](/images/install-pop/clean-install.png)

    Select `Custom (Advanced)` to access GParted. This tool allows configuring advanced features like dual booting, creating a separate `/home` partition, or placing the `/tmp` partition on a different drive.

6. Click `Erase and Install` to install Pop!\_OS to your selected disk.

    ![Disk setup](/images/install-pop/erase-install.png)

### User Account Setup

The next section of the installer will guide you through creating a user account so you can log in to your new Pop!\_OS installation.

Provide a full name (this can include any text you want, uppercase or lowercase), as well as a username (which must be lowercase):

![Username setup](/images/install-pop/enter-username.png)
Once the account has been created, you will be prompted to set a new password.

![Password setup](/images/install-pop/enter-password.png)

### Full Disk Encryption

Encrypting the system disk is not necessary, but it ensures user data is secure in the event that someone gains unauthorized physical access to the device.

The drive can be encrypted using your login password by checking `Encryption password is the same as user account password`, or you can uncheck this box and select `Set Password` at the bottom. Select `Don't Encrypt` to skip the disk encryption process.

![Encrypt option](/images/install-pop/encrypt-disk.png)

If you chose the `Set Password` button, you will see an additional prompt to set your encryption password. This will be requested every time the system boots.

Continue to the next step in the installer. Pop!\_OS will now begin installing to disk.

![Progress](/images/install-pop/install-progress.png)

When installation completes, reboot your computer and log in to complete the user account setup process.

![Success](/images/install-pop/install-complete.png)
