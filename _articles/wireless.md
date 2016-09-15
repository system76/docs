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

WiFi issues are influenced by many different factors, including:
- Hardware (WiFi card, access point)
- Settings at both ends of the connection
- The local environment

# Basic troubleshooting

If you’re having problems, try these steps first:
- Try unplugging your wireless router or modem and then plug it back in.
- You can also try turning the wireless Internet card in your laptop off by pressing <kbd>Fn</kbd>+<kbd>F11</kbd>, waiting a minute, then pressing it again to turn it back on.
- Try rebooting the computer or restarting network manager.

If that doesn't solve the problem, you can check the router:

- WPA2-AES is the preferred security method over WPA/WPA2 mixed mode or TKIP
- If your router is capable of N speeds, you may have better connectivity with a channel width of 20 MHz in the 2.4 GHz band instead of automatic 20/40 MHz or fixed 40 MHz.
- Make sure the 2.4Ghz and 5Ghz SSID names are different.
- Pick a fixed channel, either 1, 6, or 11 in the 2.4 Ghz band, rather than automatic channel selection.
- Check if the router is set to use N speeds only; auto B/G/N is preferred.

For routers with max/burst speed or channel bonding, check those settings as well. Don't set it to the max, as that can make Wifi unstable.  If the router goes up to 600 Mb/s, it will use spread frequencies and will decrease stability due to congestion and other issues.  Try setting it to 90 Mb/s or 120 Mb/s or somewhere in that range, or choose 54 Mb/s as the most stable.  After making these changes, reboot the router.

# Advanced troubleshooting

In many cases, it's recommended to explicitly set the WiFi regulatory domain. Check yours with this command:

`sudo iw reg get`

If you get 00, that is a one-size-maybe-fits-all setting. Find yours here: wikipedia.org/wiki/ISO_3166-1

Then set it set it permanently with this command:

`gksudo gedit /etc/default/crda`

Change the last line to read:

REGDOMAIN=US

Save and close the text editor.

Unless specifically required, you can set IPv6 to Ignore in Network Manager. Go to `System Settings` -> `Network` and click the orange arrow next to your network, then click `Settings` -> `IPv6 Settings` -> `Automatic` to `Ignore`.

If these changes do not help, you can try enabling antenna aggregation:

```
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi 11n_disable=8
```

Then, test to see if that helps.  To make it permanent:

`gksudo gedit /etc/modprobe.d/iwlwifi.conf`

Then, add this line to the bottom (effective upon reboot):

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
