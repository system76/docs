---
layout: article
title: Watch Protected Content on Streaming Services
description: >
    How to view DRM-protected video content from online streaming services such as Netflix and Amazon Prime
keywords:
  - Support
  - google
  - chrome
  - mozilla
  - firefox
  - netflix
  - amazon
  - hulu
  - videos
  - restricted
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /chromeFlash
  - /chromeflash
section: media

---

# Watch Protected Content on Streaming Services

Video content from online streaming services such as Netflix and Amazon Prime is typically protected using various encryption schemes to prevent copying. This is known as digital rights management (DRM). In order to play DRM-encumbered content, you will need to use a browser that supports playback of DRM-controlled content. Please note that not all vendors use a a DRM encryption method that is compatible with Linux (for instance, HBO and HBO Max).


## Google Chrome

Google Chrome has support for DRM-encumbered playback out-of-the-box, without the need for any additional configuration.

### Download Chrome

First, you'll need to [download Google Chrome](https://www.google.com/chrome/). Click the **Download Chrome** button:

![Google Chrome Download Page](/images/flash/step1.png)

Select the **64-bit .deb (For Debian/Ubuntu)** option, then click **Accept and Install**.

![64-Bit Chrome](/images/flash/step2.png)

Select **Open with Eddy**

![Open With dialog](/images/flash/step3.png)

### Install Chrome

After the download is complete, <u>Eddy</u> will open automatically. Click on the **Install** button:

![Chrome ready to install](/images/flash/step4.png)

When prompted, enter your password and wait for the installation to finish. When it's complete, the **Install** button will say **Uninstall** instead:

![Chrome installed](/images/flash/step5.png)

If <u>Eddy</u> isn't working, re-download <u>Chrome</u> and choose **Save File** to the `Downloads` folder, and then run this command:

```
sudo apt install ~/Downloads/google-chrome-stable_current_amd64.deb
```

### Run Chrome

Press the Super Key <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd> button to open the Activities Overview, then search for <u>Chrome</u>:

![Searching for Chrome](/images/flash/step6.png)

<small>* You may need to log out and in for <u>Chrome</u> to appear in the Overview.</small>

You can click on <u>Chrome</u> here to run it. For easy access, you can add <u>Chrome</u> to your favorites:

![Adding Chrome to favorites](/images/flash/step7.png)

<u>Chrome</u> will be added to your favorites so that you can click on it at any time:

![Chrome added to favorites](/images/flash/step8.png)

<u>Chrome</u> will automatically be updated through the package manager.

## Firefox

Mozilla Firefox is installed by default in both Ubuntu and Pop!\_OS, and can be configured to play DRM-encumbered media.

### Enable DRM Playback

To enable playback of DRM content, open Firefox, then click the menu button and click on **Preferences**.

Under the General section, scroll down until you see **Digital Rights Management (DRM) Content**, and then tick the checkbox to enable playback:

![Enable DRM in Firefox by ticking the checkbox](/images/flash/firefox_drm.png)

After that, playback of DRM-encumbered content should be functional.
