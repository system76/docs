---
title: Freezing Systems
description: >
  Troubleshoot if your system is freezing
keywords:
  - Thelio
  - Laptop
  - Desktop

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware-troubleshooting
tableOfContents: true
---

Freezing behaviors tend to occur when a piece of hardware is defective.  
More common culprits are the hard drive or memory modules. This article covers checking the health of your hard drive and running a memory test.

> **NOTE:** If you have a support ticket open, please respond with your troubleshooting outputs from the below commands.

## Run Memory Test

To begin, we need to determine how much memory your system has. Open <u>Settings</u>, then navigate to the "About" pane. Look for the item marked "Memory." It should have a number, such as 16GB though it may be 15.5GB, or something similar as some of the memory is used up by the OS itself.

You can also run the following <u>Terminal</u> command to print your total RAM. Open a Terminal by pressing <kbd><font-awesome-icon :icon="['fab', 'ubuntu']"></font-awesome-icon></kbd>/<kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>/<kbd>Super</kbd> and run the following set of commands:

Command:

```bash
free -h
```

Example Output:

```bash
              total        used        free      shared  buff/cache   available
Mem:           15Gi       6.8Gi       2.3Gi       869Mi       6.4Gi       7.5Gi
Swap:         4.0Gi       3.0Mi       4.0Gi
```

In this example, the system has 16GB of RAM (`15Gi`).

Once we know the total RAM, round up to the nearest whole number, then subtract 4. Make note of this new value. Close out of all running applications.

> **NOTE:** When the system prompts you for your password, type it in the terminal and press the enter key. The password will not show in the terminal, but it is taking the password)

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
3. Open <u>Disks</u> application
4. Select the hard drive on the left, then click the three-dot icon in the top right. Choose SMART Data and Self-Tests
5. Click Start Self-test and choose the Extended test. This test takes a few hours to run and will will give you a large amount of info about the health of the drive.
6. Take a screenshot or a picture of  the results and attach it to the support ticket

### Check NVMe Drive for Errors

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

> **Note** If the freezing does not occur in a Live Disk, the problem is likely software, rather than hardware. If there are no errors indicated on the memory or hard drive, we will need to review a set of log files to determine the next steps to take.

## Collect Logs

The Settings application has the ability to generate a robust log file. To generate a log file, open the Settings application, select the "Support" section, and click on the button named "Create Log Files". After you type your password into the prompt that appears, a log file will be generated in your home folder. Please attach the log file in a reply to this ticket. If you are having any issues, you can refer to this [article](/articles/log-files).
