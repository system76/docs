---
layout: article
title: Password - Reset Your Password
description: >
    Forgot your main password?  Locked out of your computer?  Follow these instructions to reset your password!
keywords:
  - password
  - reset
  - locked out
  - crash
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

If you can't log into your computer, you can follow these instructions to reset the password for any user. Pop!_OS and Ubuntu allow for the root user to reset the password for any user account. In order to get to the root user, we need to restart the computer and use what's called "single user mode", which means the low level repair system for the computer.

### GRUB

There are two ways to enter into the GRUB boot menu. The first is to restart your computer and tap <kbd>ESC</kbd> while the computer starts. The second is to power it off while it is starting up, which will make the menu show up on the next boot.

![Grub1](/images/password/grub1.png)

Make sure to stop tapping <kbd>ESC</kbd> when the menu appears, otherwise a GRUB command prompt will appear:

![Prompt](/images/password/prompt.png)

If you get to the GRUB command prompt, type in `normal`, then press <kbd>ENTER</kbd> and immediately press <kbd>ESC</kbd>.

Once in the GRUB menu, choose the second option **Advanced options for Ubuntu**, followed by the 3rd option **Ubuntu, with Linux &lt;current kernel number&gt; (recovery mode)**.

![Grub2](/images/password/grub2.png)

At the recovery menu, choose the **root** option, then press <kbd>Enter</kbd> to drop to a root prompt.

![Recovery](/images/password/recovery.png)

### Root Prompt

**A note on the root prompt:** Since the system is operating with only a single console, all output is printed to the screen. This can be really confusing, but nothing has changed -- it's just output. **If your screen looks like the image below, with a timeout notice or similar,** press Ctrl+C to return to the prompt and continue working. You will need to re-enter the command you were typing.

![Timeout in recovery mode](/images/password/timeout.png)

Now, type this command to make your hard drive editable:

```
mount -o rw,remount /
```

Then type this command to show what usernames are present on the computer:

```
ls /home
```

Then, to change your password, type in this command:

```
passwd april
```

(Change `april` to the actual user whose password you would like to reset, as seen in the output of `ls /home`)

Enter a new password, then press <kbd>Enter</kbd>. Even though you are typing, no text will be displayed nor will the password be obfuscated as seen in the image below.

![Full commands to reset password](/images/password/example.png)

Enter the same password again to confirm, then press <kbd>Enter</kbd>.

If successful, you will see a message confirming `passwd: password updated successfully

You can now reboot:

```
reboot
```
