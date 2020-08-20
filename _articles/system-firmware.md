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

* Make sure the laptop is **plugged into the AC Adapter** for the entire firmware updating process. USB Type-C charging is **not** supported during firmware updates on the following models: Galago Pro (galp3-c, galp4), Darter Pro (darp5, darp6), Lemur Pro (lemp9)
* **Disconnect external devices**, including any displays or USB devices.
* **Take a picture of these instructions** or pull up [s76.co/sfu](https://s76.co/sfu) on a phone or other device for reference.
* During the firmware updating process, **the system will restart several times**. Prompts will occasionally ask for user involvement.

### Starting the Update (GUI)

In Pop!_OS, you can check for firmware updates using **Settings -> Firmware**.

![Firmware settings in Pop!_OS](/images/system-firmware/gui-pop.jpg)

In Ubuntu, you can check for firmware updates using the **Firmware Manager** application.

![Firmware Manager in Ubuntu](/images/system-firmware/gui-ubuntu.jpg)

If a green **Update** button is present, then a firmware update is available. Click the **Update** button, then click **Reboot and Install** to begin the update.

![Starting a firmware update (Pop!_OS)](/images/system-firmware/install-pop.jpg)

![Starting a firmware update (Ubuntu)](/images/system-firmware/install-ubuntu.jpg)

### Starting the Update (CLI)

The command-line firmware utility can be installed using this command:

```
sudo apt install system76-firmware
```

Once installed, the following command can be used to schedule a firmware update for the next reboot (if the firmware is already up-to-date, this command will schedule a re-installation of the current firmware):

```
sudo system76-firmware-cli schedule
```

Reboot the system using `sudo systemctl reboot` to proceed with the update, or use `sudo system76-firmware-cli unschedule` to cancel the update.

### Performing the Update

The System76 Firmware Updater will start on the next boot. Once it has initialized, you'll be prompted to **press <kbd>Enter</kbd>** to commence flashing.

![Press Enter to commence flashing](/images/system-firmware/press-enter.jpg)

Depending on the model, the system may reboot at this point. The system's fans may spin at full speed while the new firmware is being written. Once the firmware update process is complete, you may see a prompt to **press any key** to shut down.

![Press any key to shut down](/images/system-firmware/press-any-key.jpg)

After the system powers off, **press the power button** to turn it back on. On machines running Open Firmware, the system should boot normally.

### Disabling the ME

For laptops not running Open Firmware, a few extra steps may be required after an update to ensure the Intel ME is disabled. 

Depending on the model, two blue boxes may appear in succession with a message about the CMOS. **Press <kbd>Enter</kbd>** to dismiss each one. The system may also power off and on again at this point.

On some laptops, the UEFI menu will display automatically. (If it doesn't, you can also access this menu by holding down <kbd>F2</kbd> during boot.) Select **Setup Utility** to enter the UEFI setup utility.

![Setup Utility](/images/system-firmware/setup-utility.jpg)

Navigate to the **Advanced** section in the left sidebar, then select **Advanced Chipset Control**.

![Advanced Chipset Control](/images/system-firmware/advanced-chipset-control.jpg)

If there is an **ME State** option at the bottom of the list, select it, then select **Disabled** to ensure the ME is disabled.

![ME State (enabled)](/images/system-firmware/me-state-enabled.jpg)

![Disabling the ME](/images/system-firmware/disabling-me.jpg)

![ME State (disabled)](/images/system-firmware/me-state-disabled.jpg)

Navigate to the **Exit** section in the left sidebar, then select **Exit Saving Changes** and **Yes** to save and exit the setup utility. The system may power off and back on again, then it should boot normally.

### Updating on Other OS's

If your system is running another Linux-based OS installed with an EFI System Partition (ESP), then you can update your firmware using a live disk of Pop!_OS. First, create a live disk using one of the following articles:

- [Live Disk creation on Pop!_OS](/articles/pop-live-disk/)
- [Live Disk creation on Other OS's](/articles/live-disk/)

After creating the live disk, [access the boot menu](/articles/boot-menu/) and select it from the list of options. Once the desktop appears, open a terminal (<kbd><span class="fl-pop-key"></span></kbd> + <kbd>T</kbd>) and use this command to list the partitions on your system:

```
lsblk
```

Identify the EFI partition in the list. (The EFI partition is usually the first partition on one of the drives, and is around 512MB in size or slightly smaller.) Once you have identified the EFI partition, use the following commands to set up the system for a firmware update:

#### For NVMe Drives:

```
sudo apt install system76-driver
sudo mkdir -p /boot/efi
sudo mount /dev/nvme0n1p1 /boot/efi
gnome-control-center firmware
```

Where `/dev/nvme0n1p1` is the EFI system partition.

#### For SATA Drives:

```
sudo apt install system76-driver
sudo mkdir -p /boot/efi
sudo mount /dev/sda1 /boot/efi
gnome-control-center firmware
```

Where `/dev/sda1` is the EFI system partition.

After the System76 Driver is installed and the EFI partition has been mounted using the above commands, you can use the above instructions to [update the firmware](#starting-the-update-gui) normally.

### Firmware Notifications for Laptops

If you’re receiving the firmware update notification but there are no updates available, then your system’s Intel ME may be turned on. Follow the above instructions to [disable the ME](#disabling-the-me).
