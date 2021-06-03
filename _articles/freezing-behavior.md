---
layout: article
title: Freezing behavior on your System
description: >
  Troubleshoot if your system is freezing
keywords:
  - Thelio
  - Laptop
  - Desktop
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

Freezing behaviors tend to occur when a piece of hardware is defective.  Let's check the health of your hard drive and run a memory test. Please respond to your support ticket if you have one with your troubleshooting results.

Run Memory Test
To begin, we need to determine how much memory your system has. Open Settings, then navigate to the About pane. Look for the item marked 'Memory.' It should have a number, such as 16GB though it may be 15.5GB as well.

Settings -> About

Round up to the nearest whole number, then subtract 4. Make note of this new value. 
Close out of all running applications. 

Open a Terminal by pressing <kbd><span class="fl-ubuntu"></span></kbd>/<kbd><span class="fl-pop-key"></span></kbd>/<kbd>Super</kbd> and run the following set of commands:

NOTE: If this is your first time running commands, just a heads up- after each command, press the enter key. When the system prompts you for your password, type it in the terminal and press the enter key. The password will not show in the terminal, but it is taking the password)

```bash
sudo apt update
sudo apt install memtester
sudo memtester #G 3
```

Replace the # symbol with the new value you determined in the previous step. This command will test most of your memory (leaving enough for the system to operate) for 3 cycles, and will report back any errors it finds. 

## Check Hard Drive for Errors
Before performing a hard drive check, you'll need to determine which type of drive you have. Modern drive types include SATA or NVMe.

### Check SATA or M.2 Drive for Errors
1. Create a live disk using this [article](/articles/live-disk)
2. Boot from the live disk by having it connected, reboot the system, hold the Boot Menu key for your model on this [article](/articles/boot-menu)
1. Open <u>Disks</u> application
2. Select the hard drive on the left, then click the three-dot icon in the top right. Choose SMART Data and Self-Tests
3. Click Start Self-test and choose the Extended test. This test takes a few hours to run and will will give you a large amount of info about the health of the drive.
4. Take a screenshot or a picture of  the results and attach it to the support ticket

#### Check NVMe Drive for Errors
NVMe drives can't be checked with a SMART Test through the <u>Disks</u> application but the package nvme-cli can be used for this. It can be installed with this command:

```bash
sudo apt install nvme-cli
```

First let's list the NVMe's that are installed:

```bash
sudo nvme list
```

Under 'Node' you will see a mount path for each drive. For example, if the path is '/dev/nvme0n1', to access the smart-log of that mount path, you would type in the following:

```bash
sudo nvme smart-log /dev/nvme0n1
```

If there are no errors indicated on the memory or hard drive, we will need to review a set of log files to determine the next steps to take.

## Collect Logs

The System76 Driver has the ability to generate a robust log file. To run the driver, access your Activities menu in the top left of your Desktop, type System76 and select the System76 driver. After opening the application, click the button in the bottom right to Create Log Files, then a log file will populate in your home folder. Please attach the log file in a reply to this ticket. If you are having any issues you can refer to this [article](/articles/log-files).