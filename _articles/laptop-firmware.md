---
layout: article
title: Software - Update Laptop Firmware
description: >
  How to update System76 laptop firmware.
keywords:
  - Firmware
  - Intel ME
  - Management Engine
  - update
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

These instructions are for System76 laptop owners who have been prompted for a firmware update. Firmware updates may be issued to fix security vulnerabilities or to improve hardware functionality.

### Before You Begin

* Make sure the laptop is **plugged into power** for the entire firmware updating process.

* **Disconnect external devices**, including any displays or USB devices.

* **Take a picture of these instructions** or pull up [s76.co/lfw](http://s76.co/lfw) on a phone or other device for reference. 

* During the firmware updating process, **the laptop will restart several times**. Prompts will occasionally ask for user involvement.

### Performing the Update

1. Select **Restart Now** to begin.
2. The System76 Firmware updater will start on reboot. Once it has initialized, you'll be prompted to **press <kbd>Enter</kbd>** to commence flashing.
3. The firmware update process will begin, then the system will restart back into the System76 Firmware updater. The fans on the laptop will be on full blast.
4. The firmware update process will finish. When prompted, **press any key to shutdown**.
5. After the laptop powers off, **press the power button** to turn it back on.
6. Two small blue boxes will appear in succession with a message about the CMOS. **Press <kbd>Enter</kbd>** to dismiss each one.
7. The machine will then reboot. Repeatedly press the <kbd>F2</kbd> key to boot into the BIOS settings. Using the arrow keys, go over to the **Exit** tab.
 - If the BIOS settings do not launch, reboot the machine and try again.
8. Select and confirm **Load Setup Defaults**.
9. Select and confirm **Save changes and reset**.
10. Once the laptop restarts, the firmware will be up to date!

### Updating on Other OS's

You're laptop firmware can be updated using a live disk when running on another Linux based OS. First a live disk will need to be created using one of our following articles:

- [Live Disk creation on Pop!_OS](/articles/pop-live-disk/)
- [Live Disk creation on Other OS's](/articles/live-disk/)

Once the laptop is booted from the live disk by plugging in the disk, reboot the laptop and hold the <kbd>F7</kbd> key. The brand name of the flash drive used will be show on that list and can be selected with the arrow keys and then press <kbd>Enter</kbd>.

Next open a terminal with <kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd> or on Ubuntu with <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>. Now enter this command to list the partition layout for your installed OS:

```
lsblk
```

Now depending on the partition layout these commands will change. The EFI partition is around 512MB in size but may be smaller and it is usually the first partition on the drive.

#### For NVMe Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/nvme0n1p1 /mnt/boot/efi
```

#### For SATA Drives:

```
sudo mkdir -p /mnt/boot/efi
sudo mount /dev/sda1 /mnt/boot/efi
```

After the above commands are ran depending on the drive that the OS is installed on you can use the above instructions to update your firmware.
