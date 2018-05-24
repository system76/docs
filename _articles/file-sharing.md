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

First let's open a terminal using either <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> (Ubuntu)
 or <kbd><span class="fl-pop-key"></span></kbd>+<kbd>T</kbd> (Pop_OS).

Then run this command:

```
sudo apt install gnome-user-share
```

### Enable File Sharing

Next we will open the <u>Settings</u> application and go to **Sharing**. Then click the toggle to the right of 'Sharing' to turn on sharing. Now click **File Sharing**, turn it on and make sure the network you want to share it with is enabled.

![Settings](/images/file-sharing/settings.png)

### Connecting to the Public Folder 

On the computer that you want to share to, open the <u>Files</u> application (Nautilus) and click on **Other Locations** on the left side panel. In this example you will see the machine that we are using as "system76's public files on pop-os". Click the name that matches the name of the computer that you are sharing from and you will see the folders and files that are on the other computer's Public Folder.

![Nautilus](/images/file-sharing/connecting-to-public-folder.png)
