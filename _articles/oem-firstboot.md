---
layout: article
title: First boot failed, only Guest Session available
description: >
  Sometimes, the first boot user creation fails. You can create a new user manually following the steps here.
keywords:
  - Support
  - Crash
  - Guest
  - Guest Session
  - OEM
  - First boot
hidden: false
faq: false # If it shows in the "Frequently Answered Questions" section
---

A lot of work goes in to making your System76 experience fantastic right out of the box. Getting running needs just a little bit of information like a username and password. Every now and then, something goes wrong with the new user creator. If you boot your computer and only find a Guest Session, follow these instructions to create a new user manually.

# Overview

Here are the general steps for creating a user manually:

1. Reboot into Recovery Mode
2. Log in to a root shell
3. Mount your OS drive as read-write
4. Create a new user
5. Associate the new user default system groups
6. Reboot normally
7. Send logs to System76 to help us track this down

## Boot into Recovery Mode

Power on (or reboot) your system.  Hold the left <kbd>Shift</kbd> key, or start pressing <kbd>ESC</kbd> to get to the GRUB boot menu.

![GRUB menu](/images/oem-firstboot/grub-menu.png)


If you end up at the GRUB CLI (it looks like `grub >`) type _exit_, press <kbd>Enter</kbd> and then immediately press <kbd>ESC</kbd> twice.

Once you're in the GRUB boot menu, choose **Advanced options for Ubuntu** and then **recovery mode.** The system will boot into the recovery menu.

![Advanced options](/images/oem-firstboot/recovery-mode.png)

Choose `root`, and then press <kbd>Enter</kbd> to get started.

![Recovery menu](/images/oem-firstboot/recovery-menu.png)

## Creating a new user

Once you're at the root shell (identified with the prompt `root@ubuntu:~#`), enter the commands below one at a time, pressing <kbd>Enter</kbd> after each command.

_Note that in this example, we're creating the user **tom.** Replace **tom** with your desired username._

`adduser` will ask for a lot of information, like full name, room number, phone number, etc. -- It's not necessary to provide anything other than Password and Full Name.

```
mount -o rw,remount /
adduser tom
adduser tom adm
adduser tom cdrom
adduser tom sudo
adduser tom dip
adduser tom plugdev
adduser tom lpadmin
adduser tom sambashare
exit
```

![Entering commands one at a time](/images/oem-firstboot/commands.png)

Once you're back at the recovery menu, choose `resume` to resume normal boot.

## Help us track down the problem

Lastly, we need your help in tracking down this bug. When you get logged in, open a terminal and run this command, then send us the 'log.tgz' file it creates.

`sudo tar -cvz -f ~/log/.tgz /var/log`

Please open a Support ticket and attach the log file.
