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
hidden: false
faq: false # If it shows in the "Frequently Answered Questions" section
---

WiFi issues are influenced by many different factors, including:

-   Hardware (WiFi card, access point)
-   Settings at both ends of the connection
-   The local environment

# Basic Troubleshooting

If you’re having problems, try these steps first:

- Try unplugging your wireless router or modem and then plug it back in.
- You can also try turning the wireless Internet card in your laptop off by pressing <kbd>Fn</kbd>+<kbd>F11</kbd>, waiting a minute, then pressing it again to turn it back on.
- Try rebooting the computer.

Router settings also cause problems.  Try adjusting your access point to these settings:

- WPA2-AES is the preferred security method over WPA/WPA2 mixed mode or TKIP
- If your router is capable of N speeds, you may have better connectivity with a channel width of 20 MHz in the 2.4 GHz band instead of automatic 20/40 MHz or fixed 40 MHz.
- Make sure the 2.4Ghz and 5Ghz SSID names are different.
- Pick a fixed channel, either 1, 6, or 11 in the 2.4 Ghz band, rather than automatic channel selection.
- Check if the router is set to use N speeds only; auto B/G/N is preferred.
- Lower the max/burst speeds, turn off channel bonding, and reduce channel width.  Setting the speed to 600 Mb/s or 450 Mb/s will use spread frequencies to achieve those speeds and tend to decrease stability.  Try setting it to 289/300 Mb/s (N speed) or or 54 Mb/s (G speed).
- After making these changes, reboot the router.

# Advanced Troubleshooting

In many cases, it's recommended to explicitly set the WiFi regulatory domain. Check yours with this command:

`sudo iw reg get`

If you get 00, that is a one-size-maybe-fits-all setting. Find yours here: wikipedia.org/wiki/ISO_3166-1

And set it permanently with this command:

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

# Useful Commands

If you want to watch what the Wifi hardware is doing, you can leave this command running in the terminal:

`iwevent`

Pay attention to the disconnect reasons, and ignore the scans.

Also, if Wifi is giving you problems, many times you can run this command to restart the service that manages all Internet traffic on the computer, which is usually easier than restarting the computer:

`sudo service network-manager restart`

If you want to see if the driver is being loaded correctly, and what sort of messages are associated with the driver and the starting of the hardware, run this command:

`dmesg | grep iwlwifi`

And to see if the hardware is being detected by the computer, run this command:

`lspci | grep Network`

Sometimes erasing the stored information about wireless locations can fix problems:

`sudo rm /etc/NetworkManager/system-connections/*`

Occasionally, reinstalling network-manager can fix some network issues:

`sudo apt install --reinstall network-manager`

# Wifi Speeds and Frequencies

- 54 Mb/s uses the 802.11g & 802.11b standards.
- 145 Mb/s and 300 Mb/s modes support the 802.11n standard and use 20MHz and 40MHz bandwidths.
- 300Mbps / 40Mhz will provide the maximum performance in most cases.
- 145Mbps / 20MHz will work better in areas with more access points.
- 450Mbps uses 60Mhz channels and 600Mbps uses 80Mhz, and typically creates instability.
