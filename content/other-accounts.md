---
title: Users (Manage User Accounts)
description: >
  How to add other users to your installation
keywords:
  - boot
  - menu
  - support
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

There are a few reasons to have more then one account on your system. They include allowing the system to be used by other people in your home or office or troubleshooting issues with your user account.

In order to add another user to the system follow these steps:

1. Navigate to Settings -> Users

    ![Settings](/images/other-accounts/gnome-control-center.png)

2. Click the "Unlock" button and enter your password

    ![Settings-About-Users](/images/other-accounts/gnome-control-center-2.png)

3. Click on the "Add User" button at the top of the window

    ![Settings-About-Users-Unlock](/images/other-accounts/gnome-control-center-3.png)

    ![Settings-About-Users-Add](/images/other-accounts/gnome-control-center-4.png)

    Be sure to set the new user as an Administrator so that you can make system-wide changes.

4. Close Settings and Log Out of your current session

5. Log into the newly created user

You can also create a new account using the command below if the issue is causing you to only be able to access the TTY/Terminal:

```bash
sudo adduser bob
```

Then add the user to the Administrator group:

```bash
usermod -aG sudo bob
```

If the new user doesn't have any of the issues as your main user then log out of the new account and then back into the original account. From there open a <u>Terminal</u> and run this command:

```bash
mv ~/.config ~/.config.bk
```

Then log out and back into the main account.
