---
layout: article
title: Watch Netflix and other DRM Content on Ubuntu
description: >
    How to install Google Chrome to watch Netflix and Flash Videos
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
hidden: false
redirect_from:
  - /chromeFlash
  - /chromeflash
section: articles

---

**If you prefer using Firefox or Chromium, you can still install 'pepperflash' to watch DRM or Flash content online.**

`sudo apt install browser-plugin-freshplayer-pepperflash`

Pepperflash is maintained by Google and is not open source.

**Otherwise, you can download and install Google Chrome.**

## 1. Download Chrome

First, you'll need to [download Google Chrome](https://www.google.com/chrome/). Click the blue "Download Now" button:

![Google Chrome Download Page](/images/onlineDRM/step1.png)

Select the 64-bit download option for Ubuntu, then click Accept and Install.

![64-Bit Chrome for Ubuntu](/images/onlineDRM/step2.png)

Select "Open with Ubuntu Software Center"

![Open With dialog](/images/onlineDRM/step3.png)


## 2. Install Chrome

After the download is complete, Ubuntu Software Center will open automatically. Click on the "Install" button:

![USC with Chrome ready to install](/images/onlineDRM/step4.png)

When prompted, enter your password and wait for the installation to finish. When it's complete, the Install button will say "Reinstall" instead:

![USC with Chrome installed](/images/onlineDRM/step5.png)

Click on the Ubuntu Logo button in the upper left to open the Dash, then search for `chrome`:

![Dash searching for Chrome](/images/onlineDRM/step6.png)

If the Software Center isn't working, Chrome can be installed with this command:

`sudo apt install ./Downloads/google-chrome-stable_current_amd64.deb`

#### <small>Note that you may need to log out and log back in for Chrome to appear in the Dash. If you do not see it in the list of results, simply log out and log back in.</small>

You can click on Chrome here to run it. For easy access, you can drag the item to the Launcher on the left:

![Locking Chrome to the Launcher](/images/onlineDRM/step7.png)

Chrome will be locked to your Launcher so that you can click on it at any time.

![Chrome locked to Launcher](/images/onlineDRM/step8.png)


## 3. Run Chrome

You can now open Chrome and browse the web. Chrome is automatically set up for Flash content and playback of streaming sites. Chrome will automatically be updated through the Ubuntu Software Center.
