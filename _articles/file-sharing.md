---
layout: article
title: Pop! - Sharing files between your Pop!_OS Computers
description: >
    How to share files with the Public Folder.
keywords:
  - Support
  - Nautilus
  - Files
  - System76
image: http://support.system76.com/images/pop-icon.png
hidden: false
section: articles

---

## Install the needed package

First let's open a terminal using either the <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
 or <kbd><span class="fl-pop-key"></span></kbd>+<kbd>T</kbd>.

Then run this command:

```
sudo apt install gnome-user-share
```

## Enable File Sharing

Next we will open the Settings application and go to 'Sharing'. Then click 'File Sharing', turn it on and make sure the network you want to share it with is enabled.

![Settings](/images/file-sharing/settings.png)

## Connecting to the Public Folder 

On the computer that you can to share to open the Files application (Nautilus) and click on 'Other Locations' on the left side panel. You will see the machine that we are using as 'athoneycutt's public files on pop-os'. Click that and you will see the folders and files that are in the other computer's Public Folder.

![Nautilus](/images/file-sharing/connecting-to-public-folder.png)
