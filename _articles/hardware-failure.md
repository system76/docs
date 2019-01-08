---
layout: article
title: Hardware - Diagnose Hardware Failures
description: >
  If the computer won't start, boot, or otherwise operate normally, there may be a hardware issue.  Follow these steps to diagnose hardware failures.
keywords:
  - memory
  - hard drive
  - won't boot
  - won't post
  - hardware
image: http://support.system76.com/images/system76.png
hidden: false
section: faq

---

### Won't Power On

If a computer won't turn on, this could be any number of component failures.  The only way to know for sure which one has failed, is to test the system without anything attached.  We need to disconnect anything that can be removed.  This includes: the hard drives, Wifi card, RAM, and video cards (desktop, with on-board graphics).

The only thing the system needs to boot is one stick of RAM in slot 0. Try different RAM sticks in slot 0 if it doesn't boot (to test for failed RAM).  Also, remove the CMOS battery and disconnect the main battery (laptops), and any AC input, for one minute.  We don't recommend removing the CPU as a test.

If the system will boot with everything removed, then add components back one by one and see which one is causing the problem.  If everything works fine after removing and replacing all of the hardware, a loose connection is most likely the culprit.  If the system won't boot with everything disconnected, then the motherboard has likely failed, and needs replacing.

### System Boots

If the system boots, but takes a long time to boot, crashes, or reports other random, hard to track down errors, then the individual hardware components can be checked for failure.

#### Memory

To run a memory test on your computer, we need to use a [live disk](/articles/live-disk/) with Ubuntu. We also need to change the BIOS settings from UEFI mode to BIOS mode.  If you press the key indicated on boot to get into BIOS (<kbd>F2</kbd> for laptops, and <kbd>DEL</kbd> for most desktops), there will be a toggle between the two modes.

Once you switch to BIOS mode, restart, and use the key to boot from other drives (<kbd>F7</kbd> for laptops, and <kbd>F12</kbd> for most desktops) to select the USB.  Right after you select the USB for boot, start tapping the <kbd>ESC</kbd> key to get into the GRUB boot menu.  If you accidentally get to a GRUB command prompt, type in the word `normal`, press <kbd>Enter</kbd>, then immediately press <kbd>ESC</kbd>.  Grub is available for only a second, so if you miss the opportunity, turn your computer off and try again.

In the grub boot menu, choose **Memory test (memtest86+)**.  Right as memtest loads (blue screen), press <kbd>F2</kbd> to enable multi-core mode.  Wait at least 20 minutes for the tests to run, or until any errors are shown in red.  If any errors are found, please run it again in single core mode, and let it run overnight to check for any memory errors.  6 to 8 passes are minimally recommended.  If memory errors show up, the memory stick should be replaced.

#### Hard Drive

To check the hard drive for disk failures, start the program <u>Disks</u>, select the hard drive on the left, then click the icon in the top right, and choose **SMART Data and Self-Tests**, and then click **Start Self-test** and choose the **Extended** test.  This test takes a few hours to run and will will give you a large amount of info about the health of the drive.

All of the values start at 100, and work their way down to 0.  The terms "old-age" and "pre-fail" are normal.  Pay attention to the overall assessment, and to how close the values are working towards the failure point, which is typically 0.

### NVMe Drive

NVMe drives can't be checked with a SMART Test though the <u>Disks</u> application but the package <u>nvme-cli</u> can be used for this. It can be installed with this command:

```
sudo apt install nvme-cli
```

First let's list the NVMe's that are installed:

```
sudo nvme list
```

Under 'Node' you will see a mount path for each drive something like '/dev/nvme0n1', to access the smart-log you would type in the following:

```
sudo nvme smart-log /dev/nvme0n1
```

#### Machine Check Exceptions

Machine Check Exceptions are hardware failure events and can be logged with <u>rasdaemon.service</u> to journalctl. On Ubuntu based systems (<u>and Pop!_OS</u>) you can install via:
```
sudo apt install rasdaemon
```
verify rasdaemon is active
```
systemctl status rasdaemon
```

Then, after the system has crashed or been used for a period of time, take a look at the log:
```
journalctl -f -u rasdaemon
```

If there is no log or the log is empty, then the crash isn't related to a hardware failure.  The log will stay empty until a MCE happens.  Take a look for "uncorrected" errors, as most "corrected" errors can be ignored.  If there are a consistent number of "uncorrected" errors, the hardware should be examined.

#### Support

Please contact [support](https://support.system76.com/) by opening a ticket to get the system repaired or to have failed components replaced.
