---
title: Lightworks (Install - Pop!_OS 22.04 LTS)
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
tableOfContents: true
---

Lightworks is a powerful video-editing tool used by industry professionals. This tutorial provides steps on installing Lightworks in Pop!\_OS.

## Register on Lightworks' Website

In order to use this software you are required to register an account on Lightworks' website.

![Registration](/images/lightworks/lightworks-registration.png)

Once the account is created you will be taken to the your account dashboard:

![Dashboard](/images/lightworks/lightworks-dashboard.png)

## Download the Linux DEB file

![Download Button](/images/lightworks/lightworks-download-page.png)

Your browser (Firefox is the default in Pop!\_OS) will ask whether you want to open or save the file.

## Install the DEB file

In Pop!\_OS, the default application for opening .deb files is Eddy. Choose the "Open" option, and Eddy will launch automatically when the download is complete. (If you are using a different web browser and you saved the .deb file, locate the .deb file in the **Files** app and open it.)

Click the green "Install" button in the top-right corner of Eddy to install the package. When the process is finished, a red "Uninstall" button will appear in its place.

![Eddy Installation](/images/lightworks/lightworks-eddy-2.png)

Now, the Lightworks launcher will appear in the Application menu or the Launcher when you search for it.

![Application Menu](/images/lightworks/lightworks-application-library.png)

![Launcher Menu](/images/lightworks/lightworks-launcher.png)

When you first launch the application you will need to sign into your Lightworks account.

![Welcome Screen](/images/lightworks/lightworks-welcome.png)

### Terminal Instructions

Once the .deb file is downloaded, instead of using Eddy, it can also be installed from a terminal by running the following commands:

```bash
cd ~/Downloads
sudo apt install ./lightworks*.deb
```
