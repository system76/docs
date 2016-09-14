---
layout: article
title: Solve wireless issues
description: >
  If you’re having problems with your wireless Internet connection, first try unplugging your wireless router or modem for a minute then plug it back in. You can also try turning the wireless Internet card in your laptop off by pressing <kbd>Fn</kbd>+<kbd>F11</kbd>, then pressing it again to turn it back on.  If you are still having problems, take a look at the suggestions in this article.
keywords:
  - wireless
  - wifi
  - support
  - System76
hidden: true
faq: false # If it shows in the "Frequently Answered Questions" section
---

Wifi issues are related to many different factors, including the hardware involved, settings at both ends of the connection, and the local environment.  If you’re having problems, first try unplugging your wireless router or modem and then plug it back in. You can also try turning the wireless Internet card in your laptop off by pressing <kbd>Fn</kbd>+<kbd>F11</kbd>, waiting a minute, then pressing it again to turn it back on.  If that doesn't work, then rebooting the computer, or restarting network manager, can help in many situations.

First, check the settings in the router.  WPA2-AES is the preferred security method, and not WPA/WPA2 mixed mode or TKIP.  Second, if your router is capable of N speeds, you may have better connectivity with a channel width of 20 MHz in the 2.4 GHz band instead of automatic 20/40 MHz or fixed 40 MHz.  Making sure the 2.4Ghz and 5Ghz SSID names are different will help also.  And picking a fixed channel, either 1, 6, or 11 in the 2.4 Ghz band, rather than automatic channel selection.

Be certain the router is not set to use N speeds only: auto B/G/N is preferred.  And check for max speed or burst speed settings (also called channel bonding on some routers).  Don't set it to the max, as that can make Wifi unstable.  If the router goes up to 600 Mb/s, it will use spread frequencies and will decrease stability due to congestion and other issues.  Try setting it to 90 Mb/s or 120 Mb/s or somewhere in that range, or choose 54 Mb/s as the most stable.  After making these changes, reboot the router.

Next, I recommend that the wifi regulatory domain be set explicitly on the computer. Check yours with this command:

`sudo iw reg get`

If you get 00, that is a one-size-maybe-fits-all setting. Find yours here: wikipedia.org/wiki/ISO_3166-1

Then set it set it permanently with this command:

`gksudo gedit /etc/default/crda`

Change the last line to read:

REGDOMAIN=US

Save and close the text editor.

Next, unless you specifically need it, set IPv6 to Ignore in Network Manager. Go to `System Settings` -> `Network` and click the orange arrow next to your network, then click `Settings` -> `IPv6 Settings` -> `Automatic` to `Ignore`.

If these changes do not help, you can try enabling antenna aggregation:

```
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi 11n_disable=8
```

Then, test to see if that helps.  To make it permanent:

`gksudo gedit /etc/modprobe.d/iwlwifi.conf`

And add this line to the bottom (effective upon reboot):

options iwlwifi 11n_disable=8

Also, you can try disabling N mode completely by using '11n_disable=1' in the previous settings.  N mode can be more unstable than G mode, and the speed gained isn't typically useful as total bandwidth available out to the Internet is much less than N speeds.

If you want to watch what the Wifi hardware is doing, you can leave this command running in the terminal:

`iwevent`

Pay attention to the disconnect reasons, and ignore the scans.

Also, if wifi is giving you problems, many times you can run this command to restart the service that manages all internet traffic on the computer, which is usually easier than restarting the computer:

`sudo service network-manager restart`

If you want to see if the driver is being loaded correctly, and what sort of messages are associated with the driver and the starting of the hardware, run this command:

`dmesg | grep iwlwifi`

And to see if the hardware is being detected by the computer, run this command:

`lspci | grep Network`
