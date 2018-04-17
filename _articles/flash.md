---
layout: article
title: Videos - Watch Flash Content and Netflix
description: >
    How to install Google Chrome or Pepperflash to watch Netflix, Hulu, and other Flash Videos.
keywords:
  - Support
  - google
  - chrome
  - mozilla
  - firefox
  - netflix
  - amazon
  - hulu
  - flash
  - videos
  - restricted
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /chromeFlash
  - /chromeflash
section: articles

---

To watch Flash videos with <u>Firefox</u>, <u>Chromium</u>, and <u>Opera</u>, we recommend using <u>Pepperflash</u>, rather than <u>Adobe Flash</u>, for security reasons.  <u>Pepperflash</u> is maintained by Google and included in the <u>Chrome</u> browser by default, and can be downloaded separately to be used in other browsers.  Please run this command to install <u>Pepperflash</u>:

```
sudo apt install browser-plugin-freshplayer-pepperflash
```

Otherwise, to install <u>Google Chrome</u>, follow these instructions:

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

Press the Super Key <kbd><i class="fl-ubuntu"></i></kbd> button to open the Activities Overview, then search for <u>Chrome</u>:

![Searching for Chrome](/images/flash/step6.png)

<small>* You may need to log out and in for <u>Chrome</u> to appear in the Overview.</small>

You can click on <u>Chrome</u> here to run it. For easy access, you can add <u>Chrome</u> to your favorites:

![Adding Chrome to favorites](/images/flash/step7.png)

<u>Chrome</u> will be added to your favorites so that you can click on it at any time:

![Chrome added to favorites](/images/flash/step8.png)

<u>Chrome</u> will automatically be updated through the package manager.
