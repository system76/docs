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

2. Toggle Airplane Mode from the system menu in the top-right corner of the screen, or using a keyboard shortcut (most commonly **Fn + F11**, depending on your System76 model).

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

- List all wireless network interfaces to confirm that your Wi-Fi interface (usually `wlp2s0` or `wlan0`) is recognized:
  ```bash
  ip a
  ```
- Show wireless devices and their states:
  ```bash
  iw dev
  ```
- Check for hardware or software Wi-Fi blocks:
  ```bash
  sudo rfkill list
  ```
- Check NetworkManager device states:
  ```bash
  nmcli device status 
  ```
- Restart the network stack (safe to run at any time):
  ```bash
  sudo systemctl restart NetworkManager 
  ```
- View network-related boot logs:
  ```bash
  journalctl -b | grep -i network
  ```
- View driver and firmware kernel logs:
  ```bash
  sudo dmesg | grep -i -E 'wifi|wlan|firmware|ieee80211|rtl|brcm|ath'
  ```
  - To save the logs to a file:
    ```bash
    sudo dmesg | grep -i -E 'wifi|wlan|firmware|ieee80211|rtl|brcm|ath' > ~/wireless-dmesg.txt
    ```

## Driver and Firmware Checks

If the device is detected but unstable, verify the driver and firmware setup.

- Check for missing firmware messages:
  ```bash
  dmesg | grep -i firmware
  ```
- Reinstall firmware packages:
  ```bash
  sudo apt update
  sudo apt install --reinstall linux-firmware
  ```
- Test with a different router or mobile hotspot.

## NetworkManager and Configuration Tips

NetworkManager controls Wi-Fi connections on many Linux systems, including Pop!_OS and Ubuntu systems by default.

To restart NetworkManager, run this command:

```bash
sudo systemctl restart NetworkManager
```

To delete and recreate saved connections, run these commands:

```bash
nmcli connection delete <SSID>
nmcli device wifi connect <SSID>
```

If network connectivity seems unstable, try setting IPv6 to “Ignore” in the network settings:

1. Open Settings → Network.
2. Select your Wi-Fi connection.
3. Go to the IPv6 tab → change the method to Ignore.

## Bluetooth and Airplane Mode Interactions

The `rfkill` command can be used to view whether Bluetooth, Wireless LAN (Wi-Fi), or both are disabled at a software or hardware level:

```bash
sudo rfkill list
```

Sample output where Bluetooth and Wi-Fi are both enabled looks like this:

```
0: hci0: Bluetooth
    Soft blocked: no
    Hard blocked: no
1: phy0: Wireless LAN
    Soft blocked: no
    Hard blocked: no
```

If anything is blocked, check that airplane mode is off and that Bluetooth and Wi-Fi are enabled in your system settings.

This command can be used to restart the Bluetooth stack:

```
sudo systemctl restart bluetooth
```

If Wi-Fi drops after you've used Bluetooth (or vice versa), run the following command to add modprobe configuration to allow both Wi-Fi and Bluetooth to transmit at the same time:

```bash
echo "options iwlwifi bt_coex_active=0" | sudo tee -a /etc/modprobe.d/iwlwifi.conf
```

Reboot after running this command. Note that transmitting both Wi-Fi and Bluetooth at the same time can cause interference between the two; only certain wireless cards that don't track transmission properly (e.g. acting as if Bluetooth is always transmitting) need this option applied.

## Advanced Troubleshooting

If the above steps aren't working, or you would like to fine tune and improve you connection, see the following steps.

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

Another way to help with Wi-Fi issues is to turn off Wi-Fi power management. This can be done by adding the appropriate NetworkManager configuration using the following command, then rebooting your computer:

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

These are miscellaneous commands that may be useful for troubleshooting.

- To watch what the Wi-Fi hardware is doing, including disconnection reasons and scan logs:
  ```bash
  iwevent
  ```
- To check what hardware network controllers are detected by your system:
  ```bash
  lspci | grep Network
  lsusb | grep Network
  ```
- To check if the Intel Wi-Fi kernel module is loaded:
  ```bash
  lsmod | grep iwlwifi
  ```
- To erase all saved network information, such as Wi-Fi passwords and other configuration:
  ```bash
  sudo rm /etc/NetworkManager/system-connections/*
  ```
- To reinstall NetworkManager:
  ```bash
  sudo apt install --reinstall network-manager
  sudo systemctl poweroff
  ```
  After the system has completely powered off, power it back on. (This allows network hardware to fully reset.)

## Additional Info

Wi-Fi Speeds and Frequencies:

- 54 Mb/s uses the 802.11g & 802.11b standards.

- 145 Mb/s and 300 Mb/s modes use the 802.11n standard and 20MHz or 40MHz bandwidths.

- 300Mbps / 40Mhz will provide the maximum performance in most cases.

- 145Mbps / 20MHz will work better in areas with more access points.

- 450Mbps uses a 60Mhz channel width and 600Mbps uses a 80Mhz channel width, and is typically less stable.

The name of the Linux driver for Intel Wi-Fi cards is called <u>iwlwifi</u> and is included in the kernel by default. All information about the driver can be found [on the Kernel.org wiki](https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi).

Sometimes the newest version of the `linux-firmware` package will clear up occasional bugs. You can download the newest `.deb` package from [the Kernel.org Ubuntu mirror](https://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware).

### Windows Dual Boot

If you're dual booting Windows, you may lose access to your Wi-Fi card entirely after running driver/OS updates in Windows. You may be able to gain access to your Wi-Fi card again by disabling "Fast Startup" in the Windows power options before booting back into Pop!_OS.

## Contact System76 Support

If you purchased a System76 computer and you’ve tried all the steps above, but your wireless connection still isn’t working as expected, please collect the output from the diagnostic commands and [contact System76 support](https://system76.com/contact/support).
