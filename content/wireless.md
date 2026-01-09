---
title: Wireless Troubleshooting
description: >
  If your computer can’t connect to wireless networks or the connection is unstable, use this guide to diagnose and resolve the issue.
keywords:
  - wireless
  - Wi-Fi
  - support
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: network-troubleshooting
tableOfContents: true
---

If your computer can’t connect to wireless networks or the connection is unstable, this guide can help you diagnose and fix the issue.

---

## Initial Troubleshooting

1. Reboot the router/modem and the computer.

2. Toggle Airplane Mode from the system menu in the top-right corner of the screen, or using your keyboard shortcut (most commonly **Fn + F11**, depending on your System76 model).

3. If you've installed the `backport-iwlwifi-dkms` package for your Intel wireless card and your Wi-Fi issues began after an update, removing that package may resolve the issue.

```bash
sudo apt remove backport-iwlwifi-dkms
```
Then restart your computer.

4. Temporarily use a phone hotspot to confirm whether the network or your computer is the issue.

5. [Boot from a Live USB](https://support.system76.com/articles/live-disk) of your distribution to determine whether the issue exists outside your installed system.

## Router and Access Point Recommendations

- Make sure your access point is configured for stability and compatibility.

- Use 2.4 GHz channels 1, 6, or 11 to minimize overlap.

- Set the channel width to 20 MHz for crowded networks.

- For 5 GHz, use an explicit channel instead of “Auto” when troubleshooting.

- Use mixed mode (b/g/n/ax) if devices vary by generation.

- If a single device struggles, temporarily set your router to a widely supported mode (such as **802.11n-only**) and test connectivity.

- Avoid complex access point features such as:

  - Band steering

  - Aggressive airtime fairness

  - Deep MAC filtering

- Ensure your device’s MAC address isn’t being filtered.

  - Check your MAC address with:
  
  ```bash
  ip link show | grep ether
  ```

  Then confirm that MAC address is allowed in your router’s admin panel.

- Confirm what channel and frequency your connection is using:

```bash
iw dev
iwlist wlan0 scan | grep -E 'SSID|Channel|Frequency'
```

## Device-Level Checks and Commands

These commands help verify whether your wireless card and drivers are functioning correctly.

```bash
ip a
```

Confirm that your Wi-Fi interface (usually `wlp2s0` or `wlan0`) is recognized.

```bash
iw dev
```

Show wireless devices and their states:

```bash
sudo rfkill list
```

Check for hardware or software Wi-Fi blocks:

```bash
nmcli device status 
```

Check NetworkManager device states:

```bash
sudo systemctl restart NetworkManager 
```

Restart the network stack (safe to run at any time).

```bash
journalctl -b | grep -i network
```

View network-related boot logs.

```bash
dmesg | grep -i -E 'wifi|wlan|firmware|ieee80211|rtl|brcm|ath'
```

View driver and firmware kernel logs.

To collect diagnostic info automatically:

```bash
sudo dmesg | grep -i wlan > ~/wireless-dmesg.txt
```

## Driver and Firmware Checks

If the device is detected but unstable, verify the driver and firmware setup.

Check for missing firmware messages:

```bash
dmesg | grep -i firmware
```

Reinstall firmware packages:

```bash
sudo apt update
sudo apt install --reinstall linux-firmware
```

Test with a different router or mobile hotspot.

## NetworkManager and Configuration Tips

NetworkManager controls Wi-Fi connections on many Linux systems, including Pop!_OS and Ubuntu systems by default.

Restart NetworkManager:

```bash
sudo systemctl restart NetworkManager
```

Delete and recreate saved connections:

```bash
nmcli connection delete <SSID>
nmcli device wifi connect <SSID>
```

For unstable networks, set IPv6 to “Ignore” in the network settings:

1. Open Settings → Network.
2. Select your Wi-Fi connection.
3. Go to the IPv6 tab → change the method to Ignore.

## Bluetooth and Airplane Mode Interactions

 If Wi-Fi disappears when Bluetooth is active:

```bash
sudo rfkill list
sudo systemctl restart bluetooth
```

If the issues started after you applied updates, add a modprobe configuration to prevent a problematic Wi-Fi driver from loading, then reboot your computer:

```bash
echo "options iwlwifi bt_coex_active=0" | sudo tee -a /etc/modprobe.d/iwlwifi.conf
```

Save, then reboot.

## Advanced Troubleshooting

If the above steps aren't working, or you would like to fine tune and improve you connection, see the following steps.

### Regulatory Domain

In many cases, it's recommended to explicitly set the Wi-Fi regulatory domain. Check yours with this command:

```bash
sudo iw reg get
```

If you get 00, that is a one-size-maybe-fits-all setting. Find yours here: [ISO_3166](http://wikipedia.org/wiki/ISO_3166-1).

And set it permanently with this command:

```bash
sudo gedit /etc/default/crda
```

Change the last line to read:

> REGDOMAIN=US  

Save and close the text editor.

### IPv6

Unless specifically required, you can set IPv6 to Ignore in Network Manager. Go to **System Settings** → **Network** and click the orange arrow next to your network, then click **Settings** → **Network** → **Ethernet** → **Gear Icon** → **IPv6 Settings** then change **Automatic** to **Disable**.

### Antenna Aggregation

If these changes do not help, you can try enabling antenna aggregation:

```bash
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi 11n_disable=8
```

Then, test to see if that helps. To make it permanent:

```bash
sudo gedit /etc/modprobe.d/iwlwifi.conf
```

Then, add this line to the bottom (effective upon reboot):

> options iwlwifi 11n_disable=8  

### N Mode

You can try disabling N mode completely by using `11n_disable=1` in the previous settings. N mode can be more unstable than G mode, and the speed gained isn't typically useful as total bandwidth available in/out from/to the Internet is less than N speeds.

### Bluetooth Coexistence

If you have trouble with a Bluetooth headset and keeping a steady downlink speed, try disabling Bluetooth coexistence in the configuration file above:

> options iwlwifi bt_coex_active=0  

### Power Management

Another way to help with Wi-Fi issues is to turn off Wi-Fi power management by adding a NetworkManager configuration, then reboot your computer:

```bash
echo -e "[connection]\nwifi.powersave = 2" | sudo tee /etc/NetworkManager/conf.d/default-wifi-powersave-off.conf
```

If TLP is installed, it may also enable Wi-Fi power saving. You can review its configuration in `/etc/default/tlp`.

## Useful Programs

The program <u>wavemon</u> can be used to see info about nearby access points, such as power levels, channels, and BSSIDs.  It can be installed with this command:

```bash
sudo apt install wavemon
```

And run with this command:

```bash
sudo wavemon
```

## Useful Commands

```bash
iwevent
```

Run this command to watch what the Wi-Fi hardware is doing.  Pay attention to the disconnect reasons, and ignore the scans.

```bash
sudo systemctl restart NetworkManager
```

This command will restart the service that manages all Internet traffic on the computer, which is usually easier than restarting the computer.

```bash
dmesg | grep iwlwifi
```

This will check the hardware startup and driver loading messages.

```bash
lspci | grep Network
```

This will check if the hardware is being detected by the kernel.

```bash
lsmod | grep iwlwifi
```

This will check to see if the device driver (module) is loaded.

```bash
sudo rm /etc/NetworkManager/system-connections/*
```

This will erase the stored information about all wireless access points.

```bash
sudo apt install --reinstall network-manager
```

This will reinstall network-manager, which can fix some network issues.

**NOTE:** After reinstalling the above packages, fully shut down the machine and then power it back on, rather than rebooting. This ensures the hardware completely resets.

## Additional Info

Wi-Fi Speeds and Frequencies:

- 54 Mb/s uses the 802.11g & 802.11b standards.

- 145 Mb/s and 300 Mb/s modes use the 802.11n standard and 20MHz or 40MHz bandwidths.

- 300Mbps / 40Mhz will provide the maximum performance in most cases.

- 145Mbps / 20MHz will work better in areas with more access points.

- 450Mbps uses a 60Mhz channel width and 600Mbps uses a 80Mhz channel width, and is typically less stable.

The name of the Linux driver for Intel Wi-Fi cards is called <u>iwlwifi</u> and is included in the kernel by default. All information about the driver can be found here:

[wireless.wiki.kernel.org/en/users/drivers/iwlwifi](https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi)

The newest version of the <u>linux-firmware</u> package, which contains the iwlwifi driver, can be found here:

[mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware](https://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware)

Sometimes the newest version of the firmware will clear up occasional bugs.  Please download the newest `.deb` package.

### Windows Dual Boot

If you're dual booting Windows, you may lose access to your Wi-Fi card entirely after running driver/OS updates in Windows. You may be able to gain access to your Wi-Fi card again by disabling "Fast Startup" in the Windows power options before booting back into Pop!_OS.

## Contact System76 Support

If you purchased a System76 computer and you’ve tried all the steps above, but your wireless connection still isn’t working as expected, please collect the output from the diagnostic commands and [contact System76 support](https://system76.com/contact/support).
