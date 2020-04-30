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

Lightworks is a powerful video-editing tool used by industry professionals. This tutorial provides steps on installing Lightworks in Pop!\_OS.

**NOTE:** The stable version of Lightworks will not install correctly on current OS versions because it requires an obsolete ```libssl``` package. Instead, select the Beta download from the Linux download page [here](https://www.lwks.com/index.php?option=com_lwks&view=download&Itemid=206&tab=1).

## Register on Lightworks' Website

In order to download the beta, you are required to register an account on Lightworks' website.

![Registration Page 1](/images/lightworks/lightworks-registration-page-1.png)

![Registration Page 2](/images/lightworks/lightworks-registration-page-2.png)

Upon registration, Lightworks will send a confirmation email with a verification link. If you do not receive the email, it may be helpful to check your "spam" folder.

## Download the Beta

Once your registration is confirmed, sign in to the Lightworks website and revisit the download page.
The sign-in and download links are located in the top right of the webpage.

![Top Right](/images/lightworks/lightworks-top-right.png)

For first time downloads, accept the EULA. The checkbox is below the blue download buttons and will not reappear on later visits to the website.

Click on the blue ".deb" button under the beta row.

![Beta Button](/images/lightworks/lightworks-beta-download-button.png)

If we're using Firefox, the browser will ask whether you want to save the file or use a default application to open it.

![Download Page](/images/lightworks/lightworks-beta-downnload-with-eddy.png)

## Install the Beta

In Pop!\_OS, the default application for opening .deb files is Eddy. Go ahead and click on the "Open" option, and Eddy will launch automatically.

Click the "Install" button in the top-right corner of Eddy and the installation process will begin. When the process is finished, an "Uninstall" button will appear in pale-red.

![Eddy Installation](/images/lightworks/lightworks-eddy-2.png)

Now we should be able to launch Lightworks from the Activities menu like any other integrated system app!

![Activities Menu](/images/lightworks/lightworks-activities-menu.png)

![Eddy Launces](/images/lightworks/lightworks-installed.png)

# Terminal Instructions

Once the .deb file is downloaded, we can also install it from a Terminal by running the following commands:

```
cd /Downloads
sudo dpkg -i Lightworks-2020.1-Beta-121161.deb
```

**NOTE** The version number may be different at your time of installation. If that is the case, run: ```ls | grep Lightworks``` to get the exact name of your download.
