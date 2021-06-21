---
title: Lightworks (Install)
description: >
  Complete instructions on installing Lightworks
keywords:
  - NVIDIA
  - Lightworks
  - Film
  - Media Creation

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
---

# Install Lightworks on Pop!\_OS

Lightworks is a powerful video-editing tool used by industry professionals. This tutorial provides steps on installing Lightworks in Pop!\_OS.

**NOTE:** The stable version of Lightworks will not install correctly on current OS versions because it requires an obsolete ```libssl``` package. Instead, select the Beta download from the Linux download page [here](https://www.lwks.com/get-linux).

## Register on Lightworks' Website

In order to download the beta, you are required to register an account on Lightworks' website.

![Registration Page 1](/images/lightworks/lightworks-registration-page-1.png)

![Registration Page 2](/images/lightworks/lightworks-registration-page-2.png)

Upon registration, Lightworks will send a confirmation email with a verification link. If you do not receive the email, it may be helpful to check your "spam" folder.

## Download the Beta

Once your registration is confirmed, sign in to the Lightworks website and revisit the [download page](https://www.lwks.com/get-linux). The sign-in link is located in the top right of the webpage.

![Top Right](/images/lightworks/lightworks-top-right.png)

For first time downloads, accept the EULA. The checkbox is below the blue download buttons and will not reappear on later visits to the website.

Click on the blue "Download DEB" button to download the beta version of Lightworks.

![Beta Button](/images/lightworks/lightworks-beta-download-button.png)

If you're using Firefox, the browser will ask whether you want to open or save the file.

![Download Page](/images/lightworks/lightworks-beta-downnload-with-eddy.png)

## Install the Beta

In Pop!\_OS, the default application for opening .deb files is Eddy. Choose the "Open" option, and Eddy will launch automatically when the download is complete. (If you are using a different web browser and you saved the .deb file, locate the .deb file in the **Files** app and open it.)

Click the green "Install" button in the top-right corner of Eddy to install the package. When the process is finished, a red "Uninstall" button will appear in its place.

![Eddy Installation](/images/lightworks/lightworks-eddy-2.png)

Now, the Lightworks launcher will appear in the Activities menu.

![Activities Menu](/images/lightworks/lightworks-activities-menu.png)

![Eddy Launces](/images/lightworks/lightworks-installed.png)

# Terminal Instructions

Once the .deb file is downloaded, instead of using Eddy, it can also be installed from a terminal by running the following commands:

```bash
cd ~/Downloads
sudo apt install ./Lightworks*.deb
```
