---
layout: article
title: Wireless - Solve Wireless Issues
description: >
  If you’re having problems with your wireless Internet connection, take a look at the suggestions in this article.
keywords:
  - wireless
  - wifi
  - support
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

WiFi issues are influenced by many different factors, including:

- Hardware (WiFi card, access point)
- Settings at both ends of the connection
- The local environment

### Basic Troubleshooting

If you’re having problems, try these steps first:

- Try unplugging the wireless router or modem to reboot it.
- Try airplane mode by pressing <kbd>Fn</kbd>+<kbd>F11</kbd>, waiting 10s, then disabling.
- Try rebooting the computer.

Some router settings can cause problems. Try adjusting your access point to these settings:

- WPA2-AES is preferred over WPA/WPA2 mixed mode or TKIP.
- A channel width of 20 MHz in the 2.4 GHz band is more stable than automatic 20/40 MHz or fixed 40 MHz.
- Set 2.4Ghz and 5Ghz SSID names differently.
- Pick a fixed channel.  Use either 1, 6, or 11 in the 2.4 Ghz band, rather than automatic selection.
- Check if the router is set to N speeds only.  Auto B/G/N is preferred.
- Lower the max/burst speeds, turn off channel bonding, and reduce channel width. Setting the speed to 600 Mb/s or 450 Mb/s will use spread frequencies to achieve those speeds and may decrease stability. Try setting it to 289/300 Mb/s (N speed) or or 54 Mb/s (G speed).
- After making these changes, reboot the router.

### Advanced Troubleshooting

If the above steps aren't working, or you would like to fine tune and improve you connection, see the following steps.

#### Regulatory Domain

In many cases, it's recommended to explicitly set the WiFi regulatory domain. Check yours with this command:

```
sudo iw reg get
```

If you get 00, that is a one-size-maybe-fits-all setting. Find yours here: [ISO_3166](http://wikipedia.org/wiki/ISO_3166-1).

And set it permanently with this command:

```
sudo gedit /etc/default/crda
```

Change the last line to read:

> REGDOMAIN=US  

Save and close the text editor.

#### IPv6

Unless specifically required, you can set IPv6 to Ignore in Network Manager. Go to **System Settings** → **Network** and click the orange arrow next to your network, then click **Settings** → **IPv6 Settings** → **Automatic** to **Ignore**.

#### Antenna Aggregation

If these changes do not help, you can try enabling antenna aggregation:

```
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi 11n_disable=8
```

Then, test to see if that helps. To make it permanent:

```
sudo gedit /etc/modprobe.d/iwlwifi.conf
```

Then, add this line to the bottom (effective upon reboot):

> options iwlwifi 11n_disable=8  

#### N Mode

You can try disabling N mode completely by using `11n_disable=1` in the previous settings. N mode can be more unstable than G mode, and the speed gained isn't typically useful as total bandwidth available in/out from/to the Internet is less than N speeds.

#### Bluetooth Coexistence

If you have trouble with a Bluetooth headset and keeping a steady downlink speed, try disabling Bluetooth coexistence in the configuration file above:

> options iwlwifi bt_coex_active=0  

#### Power Management

Another way to help with Wifi issues is to turn off power management for the hardware. To do so, edit the configuration file with this command:

```
sudo gedit /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
```

And change the file to read (effective upon reboot):

> \[connection\]  
> wifi.powersave = 2  

If `tlp` is installed, take a look at the settings file found here for additional Wifi power saving being enabled:

```
sudo gedit /etc/default/tlp
```

## Useful Programs

The program <u>wavemon</u> can be used to see info about nearby access points, such as power levels, channels, and BSSIDs.  It can be installed with this command:

```
sudo apt install wavemon
```

And run with this command:

```
sudo wavemon
```

## Useful Commands

```
iwevent
```

Run this command to watch what the Wifi hardware is doing.  Pay attention to the disconnect reasons, and ignore the scans.

```
sudo systemctl restart network-manager
```

This command will restart the service that manages all Internet traffic on the computer, which is usually easier than restarting the computer.

```
dmesg | grep iwlwifi
```

This will check the hardware startup and driver loading messages.

```
lspci | grep Network
```

This will check if the hardware is being detected by the kernel.

```
lsmod | grep iwlwifi
```

This will check to see if the device driver (module) is loaded.

```
sudo rm /etc/NetworkManager/system-connections/*
```

This will erase the stored information about all wireless access points.

```
sudo apt install --reinstall network-manager
```

This will reinstall network-manager, which can fix some network issues.

## Additional Info

Wifi Speeds and Frequencies:

- 54 Mb/s uses the 802.11g & 802.11b standards.
- 145 Mb/s and 300 Mb/s modes use the 802.11n standard and 20MHz or 40MHz bandwidths.
- 300Mbps / 40Mhz will provide the maximum performance in most cases.
- 145Mbps / 20MHz will work better in areas with more access points.
- 450Mbps uses a 60Mhz channel width and 600Mbps uses a 80Mhz channel width, and is typically less stable.

The name of the Linux driver for Intel Wifi cards is called <u>iwlwifi</u> and is included in the kernel by default. All information about the driver can be found here:

[wireless.wiki.kernel.org/en/users/drivers/iwlwifi](https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi)

The newest version of the <u>linux-firmware</u> package, which contains the iwlwifi driver, can be found here:

[mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware](https://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware)

Sometimes the newest version of the firmware will clear up occasional bugs.  Please download the newest `.deb` package.
