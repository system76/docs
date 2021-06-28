---
title: Diagnose Hardware Failures
description: >
  If the computer won't start, boot, or otherwise operate normally, there may be a hardware issue.  Follow these steps to diagnose hardware failures.
keywords:
  - memory
  - hard drive
  - won't boot
  - won't post
  - hardware

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware-troubleshooting
tableOfContents: true
---

# Diagnose Hardware Failures

> **NOTE**: If the System will not power on, skip to the end of this article.

If the system boots, but takes a long time to boot, crashes, or reports other random, hard to track down errors, then the individual hardware components can be checked for failure.

## Memory

We can test memory in your running OS with the 'memtest' package. You want to put *most* of your memory under test but still leave enough space for your normal workload and the OS to continue running. On a 8 GB system, testing 6 GB would be tested like this:
```
sudo apt install memtester
sudo memtester 6G 5
```
Memory test can take a number of hours. While this will not put all of memory under test, it will make any memory error likely to cause instability if not part of the tested memory or show up clearly with errors in the `memtester` run

[Memtest86++](https://www.memtest86.com/) also has ISO downloads for personal use. You would boot from a USB drive made with the ISO. Right as memtest loads (blue screen), press <kbd>F2</kbd> to enable multi-core mode.  Wait at least 20 minutes for the tests to run, or until any errors are shown in red.  If any errors are found, please run it again in single core mode, and let it run overnight to check for any memory errors.  6 to 8 passes are minimally recommended.  If memory errors show up, the memory stick should be replaced.

## Hard Drive

To check the hard drive for disk failures, start the program <u>Disks</u>, select the hard drive on the left, then click the icon in the top right, and choose **SMART Data and Self-Tests**, and then click **Start Self-test** and choose the **Extended** test.  This test takes a few hours to run and will will give you a large amount of info about the health of the drive.

All of the values start at 100, and work their way down to 0.  The terms "old-age" and "pre-fail" are normal.  Pay attention to the overall assessment, and to how close the values are working towards the failure point, which is typically 0.

### NVMe Drive

NVMe drives can't be checked with a SMART Test through the <u>Disks</u> application but the package <u>nvme-cli</u> can be used for this. It can be installed with this command:

```bash
sudo apt install nvme-cli
```

First let's list the NVMe's that are installed:

```bash
sudo nvme list
```

Under 'Node' you will see a mount path for each drive something like '/dev/nvme0n1', to access the smart-log you would type in the following:

```bash
sudo nvme smart-log /dev/nvme0n1
```

## Testing the CPU

### Using the stress-ng program

Run this command to install <u>stress-ng</u>:

```bash
sudo apt -y install stress-ng s-tui
```

### Using the s-tui program

Now this command:

```bash
s-tui
```

From here use the <kbd>Down</kbd> to switch from Monitor to Stress by pressing the <kbd>Enter</kbd>. Now watch the CPU temperatures raise as the system's CPU is tested.  

## Testing the GPU

### Benchmarking

There are a few tools that we can use to confirm whether there is an issue with the GPU in your system. A benchmarking tool is one of them and the one that we use is [Unigine Heaven](https://benchmark.unigine.com/heaven).

There is a free download link for Linux on the home page and once that is pressed the download will start. There should be a `Unigine_Heaven-4.0.run` file in the Downloads directory and from a terminal let's run this command:

```bash
chmod +x Unigine_Heaven-4.0.run
```

Then the application can be extracted:

```bash
./Unigine_Heaven-4.0.run
```

Then let's move to the new directory that was created:

```bash
cd Unigine_Heaven-4.0/
```

Then the application can be started:

```bash
./heaven
```

### GPU Burn (for NVIDIA GPU's only)

We can also test the GPU by using GPU Burn, first if we're on Ubuntu we'll need to install git with this command:

```bash
sudo apt install git
```

Then we can clone the repository with this command:

```bash
git clone https://github.com/wilicc/gpu-burn.git
```

Now that we have cloned it we can move into that directory like so:

```bash
cd gpu-burn
```

Now we'll compile it:

```bash
make
```

And now we can run it like so (this example will run it for 60 minutes/1 hour):

```bash
./gpu_burn -d 3600
```

## Machine Check Exceptions

Machine Check Exceptions are hardware failure events and can be logged with <u>rasdaemon.service</u> to journalctl. On Ubuntu based systems (<u>and Pop!_OS</u>) you can install via:

```bash
sudo apt install rasdaemon
```
verify rasdaemon is active

```bash
systemctl status rasdaemon
```

Then, after the system has crashed or been used for a period of time, take a look at the log:

```bash
journalctl -f -u rasdaemon
```

If there is no log or the log is empty, then the crash isn't related to a hardware failure.  The log will stay empty until a MCE happens.  Take a look for "uncorrected" errors, as most "corrected" errors can be ignored.  If there are a consistent number of "uncorrected" errors, the hardware should be examined.

## Won't Power On

> **NOTE:** If the system fails to power on, please use the following articles to troubleshoot: 
![Desktops](https://support.system76.com/articles/power-on-failure-desktop) 
![Laptops](https://support.system76.com/articles/power-on-failure-laptop) 


## Support

Please contact [support](/) by opening a ticket to get the system repaired or to have failed components replaced.
