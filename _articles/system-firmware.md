---
layout: article
title: Update System Firmware
description: >
  How to update System76 firmware.
keywords:
  - Firmware
  - Intel ME
  - Management Engine
  - Update
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

These instructions are for System76 owners who have been prompted for a firmware update. Firmware updates may be issued to fix security vulnerabilities or to improve hardware functionality.

### Before You Begin

* Make sure the laptop is **plugged into the AC Adapter as USB Type-C charging is not supported** for the entire firmware updating process.

* **Disconnect external devices**, including any displays or USB devices.

* **Take a picture of these instructions** or pull up [s76.co/sfu](https://s76.co/sfu) on a phone or other device for reference.

* During the firmware updating process, **the system will restart several times**. Prompts will occasionally ask for user involvement.

### Performing the Update

1. For Pop!_OS or Ubuntu you can start the firmware update using **Settings -> Devices -> Firmware**.
2. Select **Restart Now** from the notification or **Update** from the Settings application.
3. The System76 Firmware updater will start on reboot. Once it has initialized, you'll be prompted to **press <kbd>Enter</kbd>** to commence flashing.
4. The firmware update process will begin, then the system will restart back into the System76 Firmware updater. The fans on the system will be on full blast.
5. The firmware update process will finish. When prompted, **press any key to shutdown**.
6. After the system powers off, **press the power button** to turn it back on.
7. Two small blue boxes may appear in succession with a message about the CMOS. **Press <kbd>Enter</kbd>** to dismiss each one.
8. The machine will then reboot. Repeatedly press or hold the <kbd>F2</kbd> key to boot into the BIOS settings. Using the arrow keys, go over to the **Exit** tab.
 - If the BIOS settings do not launch, reboot the machine and try again.
9. Once in the BIOS move to the Exit tab and select then confirm **Load Setup Defaults** or **Load Optimal Defaults**. (This step does not apply to Open Firmware machines)
10. Select and confirm **Save changes and reset** in that same tab.
11. Once the system restarts, the firmware will be up to date!

The following commands can be used to schedule the firmware update for the next reboot and then reboot the system:

```
sudo system76-firmware-cli schedule
sudo reboot
```

### Updating on Other OS's

Your system firmware can be updated using a live disk when running on another Linux based OS. First a live disk will need to be created using one of our following articles:

- [Live Disk creation on Pop!_OS](/articles/pop-live-disk/)
- [Live Disk creation on Other OS's](/articles/live-disk/)

Once the system is booted from the live disk by plugging in the disk, reboot the laptop and hold the <kbd>F7</kbd> key, if it's a desktop it is <kbd>F12</kbd>. The brand name of the flash drive used will be show on that list and can be selected with the arrow keys and then press <kbd>Enter</kbd>.

Next open a terminal with <kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd> or on Ubuntu with <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>. Now enter this command to list the partition layout for your installed OS:

```
lsblk
```

Now depending on the partition layout these commands will change. The EFI partition is around 512MB in size but may be smaller and it is usually the first partition on the drive.

#### For NVMe Drives:

```
sudo apt install system76-driver
sudo mkdir -p /boot/efi
sudo mount /dev/nvme0n1p1 /boot/efi
gnome-control-center firmware
```

#### For SATA Drives:

```
sudo apt install system76-driver
sudo mkdir -p /boot/efi
sudo mount /dev/sda1 /boot/efi
gnome-control-center firmware
```

After the above commands are ran depending on the drive that the OS is installed on, you can use the above instructions to update your firmware.

### Firmware Notifications for Laptops

If you’re receiving the firmware update notification after a firmware update, then your system’s Intel ME may be turned on. Let’s reboot the laptop and hold F2 to get to the BIOS. Then go to Advanced -> Advanced Chipset Control and make sure that the ME is disabled, then go to the Exit tab and save. That should stop the notifications about a firmware update and you're all set.
