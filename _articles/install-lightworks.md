---
layout: article
title: Install Lightworks
description: >
  Complete instructions on installing Lightworks
keywords:
  - NVIDIA
  - Lightworks
  - Film
  - Media Creation
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# Install Lightworks on Pop!\_OS

![Download Page](path to image)

**NOTE** The stable version will not install correctly on current OS versions due to a deprecated libssl package. Instead, select the Beta download from the Linux download page which can be found [here](https://www.lwks.com/index.php?option=com_lwks&view=download&Itemid=206&tab=1)

## Register on Lightworks' Website

In order to download the beta, we will be required to register with Lightworks' site.

We will also need to confirm our registration from whichever email account we used to register.

Lightworks will send a confirmation email with a verification link. It may be helpful to check your "spam" folder to ensure that it was not falsely-flagged by your Email Service Provider (ESP).

## Download the Beta

Once your registration is confirmed, sign in to the Lightworks website and revisit the download page.

Accept the EULA and click on the blue ".deb" button under the beta row.

If we're using Firefox, the browser will ask whether you want to save the file or use a default application to open it.

## Install the Beta

In Pop!\_OS, the default application for opening .deb files is Eddy. Go ahead and click on the "Open" option, and Eddy will laucnh automatically.

Click the "Install" button in the top-right corner of Eddy and the installation process will begin. When the process is finished, an "Uninstall" button will appear in pale-red.

Now we should be able to launch Lightworks from the Activities menu like any other integrated system app!

# Terminal Instructions

Once the file is downloaded, we can also install it from a Terminal by running the following commands:

```
cd /Downloads
sudo dpkg -i Lightworks-2020.1-Beta-121161.deb
```

**NOTE** The version number may be different at your time of installation. If that is the case, run: ```ls | grep Lightworks``` to get the exact name of your download.
