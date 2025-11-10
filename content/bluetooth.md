---
title: Bluetooth Troubleshooting
description: >
  Here is how to fix several common Bluetooth issues with your computer.
keywords:
  - bluetooth
  - mouse
  - audio

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: network-troubleshooting
tableOfContents: true
---

## About Bluetooth

Bluetooth is incredibly flexible. With a range of factors that enhance compatibility, Bluetooth devices effortlessly connect and work together for a smooth, seamless experience.

### Bluetooth version

Bluetooth 5.0 is backwards compatible with older Bluetooth versions, but older bluetooth versioned devices are not always compatible with newer versions or devices.

### Confirm the bluetooth version of your device and make sure it is 5.0 or higher

Use bluetoothctl, on your terminal type:

```bash
bluetoothctl
```

If you have multiple Bluetooth controllers, choose the one you wish to connect to the device.

Check list of controllers:
```
List
```

Select the controller you want to use:

```
select <mac address>
```

Check the version:
```
version
```

![bluetoothclt version](/images/bluetooth/bluetooth_1.png)

### Signal Interference

Bluetooth uses the same bandwidth as the 2.4Ghz Wi-Fi band, and in most of our machines it is on the same chip as the Wi-Fi module. They usually have two antennae, one for Bluetooth, and one for Wi-Fi, but it is possible for other Wi-Fi or Bluetooth devices signals to cross and to cause connection issues. If users are in an area crowded with other Wi-Fi networks or devices, the interference from these outside sources can impact performance and range.

### Device Specific Differences

Every Bluetooth device is different. They use the same or similar protocols, but the printed circuit boards (PCBs), are specific to each device, and the firmware they are running is often custom designed, and closed-source.

Some of the code and technologies that make Bluetooth work reliably are patented, and only device vendors who have licensed the permission to use that patented technology will be able to experience the full benefits (for more information see the "Audio Input/Output" section below.)

> **NOTE:** Some devices, such as Apple or Sony headphones, particularly take advantage of these patents and technologies to ensure they work well with similar devices. Often these devices are not tested against Linux machines. That doesn't mean these devices will not work, only that behavior or performance may vary.

### Kernel Versions

As the Linux kernel develops, support for more devices are added. Sometimes Bluetooth devices will work better in a different kernel version.

### OS Versions

Similar to the kernel versions. Improvements are often made in newer versions of Ubuntu and Pop!\_OS. Running software updates is always a good idea, followed by a reboot.

<!--## Bluez Versions-->

### Configuration Issues

Sometimes Bluetooth devices are working correctly, but something in settings needs to be reset.

The easiest way to test this is to "forget" the paired Bluetooth device, and pair it again.

A more thorough way of testing this would be to create a [test user](/articles/other-accounts), or boot from a [Live Disk](/articles/live-disk) to see if Bluetooth works in either case.
If it does, config files may need deleted. If it doesn't (especially in the Live Disk), reinstalling the OS may solve the problem.
Reinstalling the OS won't affect Bluetooth hardware directly, but resetting and starting with a clean slate can solve a slew of problems and save time hunting for a specific file or bug.

## Setting Expectations

Because of all of these factors, if the steps outlined in the Bluetooth troubleshooting article, and the previous troubleshooting steps don't resolve the issue, the issue may not be resolved at all.
Or, in a future update or change to the system, the devices may start working again. In some cases (many cases) users will not experience any issue with Bluetooth at all.

### Audio Input/Output

Bluetooth audio devices, such as headphones and speakers, usually default to the A2DP protocol, which works effectively as an audio output source.

Bluetooth devices with microphones built in, can be used if the device supports HFP/HSP. However, without the technology that companies like Sony have patented, the solution is to divide up the audio stream so that some of it is used for audio out and some for audio in.
This process lowers the sound quality of the stream when in HSP/HFP mode, so audio may be "tinny," compressed (lower-fidelity), or at a lower volume. That is expected behavior.

## Bluetooth Troubleshooting

Bluetooth issues can be troubleshooted in several ways.  The first thing to check is toggling airplane mode which will sometimes get Bluetooth functioning again.  Next, make sure Bluetooth is enabled in the top bar, or in the <u>Bluetooth</u> system settings.

Installing Bluetooth related software with this command:

```bash
sudo apt install blueman
```

**NOTE:** After reinstalling the above packages, fully shut down the machine and then power it back on, rather than rebooting. This ensures the hardware completely resets.

Open bluetooth manager, Super + Space and search:

![bluetooth manager](/images/bluetooth/bluetooth_2.png)

Remove the device, allowing for a fresh, new connection.

![Remove device](/images/bluetooth/bluetooth_3.png)

Click search and pair the device again:

![Pair device](/images/bluetooth/bluetooth_4.png)

If `tlp` is installed, then there may be settings interfering with Bluetooth functionality.  Edit this file and disable Wifi and Bluetooth power saving features:

```bash
sudo nano /etc/tlp.conf
```

### Useful Programs

There is a program called <u>Bluetooth Manager</u>. It can sometimes pair and trust Bluetooth devices better than the default <u>Bluetooth</u> settings. Install it with:

```bash
sudo apt install blueman
```

Start the bluetooth using systemctl:

```bash
sudo systemctl start bluetooth
```

```bash
sudo systemctl enable bluetooth
```

Check the status of the bluetooth

```bash
sudo systemctl status bluetooth
```

Sample output:

![bluetooth status systemd](/images/bluetooth/bluetooth_5.png)

Then, run <u>Bluetooth Manager</u>. Check for the device being trusted, and also try re-pairing in that program.

### Using bluetoothctl
Using bluetoothctl over a UI offers more control, flexibility, and efficiency, especially for advanced users. It allows precise management of Bluetooth devices via the terminal, which is faster than navigating through graphical menus. For troubleshooting, bluetoothctl provides direct feedback and logs, which can help identify connection issues, detect devices, or configure settings in real time. It’s also useful for headless or remote setups where a UI might not be available.

To get started, ensure Bluetooth is unblocked by running rfkill to check and enable it if necessary. Use the command:

```bash
rfkill unblock bluetooth
```
to ensure that Bluetooth is not disabled at the system level.

Type:
```
bluetoothctl
```
![bluetoothclt](/images/bluetooth/bluetooth_6.png)

If you have multiple Bluetooth controllers, choose the one you wish to connect to the device:

Check list of controllers:
```
list
```

Check controller information:
```
info <controller_address>
```

Select the controller you want to use:
```
select <mac address>
```

Make sure to power it on
```
power on
```
![bluetoothctl power on](/images/bluetooth/bluetooth_7.png)

Look for the device you want to connect:
```
scan on
```
Add trusted device
```
trust <mac address>
```
See list of paired devices:

```
devices
```

To connect the device:
```
connect <mac address>
```
![bluetootctl list scan trust connect](/images/bluetooth/bluetooth_8.png)

Successful device connection:

![bluetooothctl device connected](/images/bluetooth/bluetooth_9.png)

### Useful Commands

To show if the Bluetooth module (driver) is loaded, and see what system messages have been logged:

```bash
lsmod | grep bluetooth
```

```bash
dmesg | grep Bluetooth
```

To check if the service that handles Bluetooth is running:

```bash
sudo systemctl status bluetooth
```

To check if Bluetooth or Wireless (Wi-Fi) are software-blocked:

```bash
rfkill list
```

To unblock Bluetooth:

```
sudo rfkill unblock bluetooth
```

To unblock all wireless types:

```bash
sudo rfkill unblock all
```

To manually reload the Bluetooth USB kernel module:

```bash
sudo rmmod btusb
```

```bash
sudo modprobe btusb
```

To monitor Bluetooth-related messages (try leaving this command running while pairing or using a device to see any error messages or failures):

```bash
sudo btmon
```

To reset the Bluetooth device profiles and require re-pairing all devices (this can help if your Bluetooth audio device is stuck in an HSP/HFP profile and will not switch to A2DP mode after updates <sup>[1](https://github.com/bluez/bluez/issues/157)</sup>):

```bash
sudo rm -r /var/lib/bluetooth/
```

## Additional Info

Here are a few additional tidbits about the Bluetooth system that may help with troubleshooting.

### Controlling audio

Once you are connected to a Bluetooth speaker, you may need to change where your current audio is "routed". You can get a more advanced interface to settings on audio with the program called PulseAudio Volume Control. To install, run this command:

```bash
sudo apt install pavucontrol
```

There will be a drop-down in the Playback tab for each of your applications that is outputting sound that you should be able to change to your Bluetooth speaker.

### Linux Firmware

Occasionally the kernel and/or Linux firmware will have problems.  Sometimes, newer Linux firmware packages will have fixed bugs that aren't yet in the repositories.  They can be downloaded from here:

[http://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware/](http://mirrors.kernel.org/ubuntu/pool/main/l/linux-firmware/)

Then they can be installed with this command:

```bash
sudo dpkg -i linux-firmware_#.###.#_all.deb
```

> **NOTE:** You'll need to replace the numbers/file name with the most current version after downloading it.

### File Transfer

Sometimes, additional programs need to be installed for mobile equipment file transfer.  Please install the transfer tool with this command:

```bash
sudo apt install obexfs obexftp
```

Then connect (pair) to the device and see if send files works.  To receive files over Bluetooth you will need to enable the option in <u>Personal File Sharing</u>.
