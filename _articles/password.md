---
layout: article
title: Reset your password
description: >
    Forgot your main password?  Locked out of your computer?  Follow these instructions to reset your password!
keywords:
  - password
  - reset
  - locked out
  - crash
hidden: false
faq: false # If it shows in the "Frequently Answered Questions" section
known: false # If it shows in the "Known issues" section
---

If you can't log into your computer, you can follow these instructions to reset the password for any user.  Ubuntu allows for the root user to reset the password for any user account.  In order to get to the root user, we need to restart the computer and use what's called 'single user mode', which means the low level repair system for the computer.

#### GRUB

There are two ways to enter into the GRUB boot menu.  The first is to restart your computer and tap <kbd>ESC</kbd> while the computer starts.  <kbd>SHIFT</kbd> will also work, but not as often.  The second is to power it off while it is starting up, which will make the menu show up on the next boot.

![Grub1](/images/password/grub1.png)

Make sure to stop tapping <kbd>ESC</kbd> when the menu appears, otherwise a GRUB command prompt will appear:

![Prompt](/images/password/prompt.png)

If you get to the GRUB command prompt, type in 'exit', then press <kbd>ENTER</kbd>, <kbd>ESC</kbd>, <kbd>ESC</kbd>.

Once in the GRUB menu, choose the second option "Advanced options for Ubuntu", followed by the 3rd option "Ubuntu, with Linux &lt;current kernel number&gt; (recovery mode)".

![Grub2](/images/password/grub2.png)

Once in the recovery menu, choose the "root" option, then press <kdb>ENTER</kdb> to drop to a root prompt.

![Recovery](/images/password/recovery.png)

#### Root Prompt

Now, type this command to make your hard drive editable:

`mount -o rw,remount /`

Then type this command to show what usernames are present on the computer:

`ls /home`

Then, to change your password, type in this command:

`passwd frank`

(Change 'frank' to the actual user on the system whose password you would like to reset)  

Then type in:

`exit`

And Select 'Resume normal boot'
