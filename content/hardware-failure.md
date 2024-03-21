---
title: Diagnose Hardware Failures
description: >
  If the computer won't start, boot, or otherwise operate normally, there may be a hardware issue.  Follow these steps to diagnose hardware failures.
keywords:
  - memory
  - CPU
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

NVMe drives can't be checked with a SMART Test through the <u>Disks</u> application but the package <u>smartmontools</u> can be used for this. It can be installed with this command:

```bash
sudo apt install nvme-cli smartmontools
```

First, let's list the NVMe's that are installed:

```bash
sudo nvme list
```

Under 'Node' you will see a mount path for each drive something like '/dev/nvme0n1', to access the smart-log you would type in the following:

```bash
sudo smartctl -a /dev/nvme0n1
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

We can confirm whether there is an issue with the GPU in your system by using a benchmarking tool called [Unigine Heaven](https://benchmark.unigine.com/heaven).

Click the 'Free Download' button and choose the Linux option in the dropdown. Once the download is complete, there should be a `Unigine_Heaven-4.0.run` file in the Downloads directory.

From a terminal, navigate to the folder with the Unigine Heaven download:

```bash
cd Downloads
```

Run the following command:

```bash
chmod +x Unigine_Heaven-4.0.run
```

Then, the application can be extracted:

```bash
./Unigine_Heaven-4.0.run
```

Next, let's move to the new directory that was created:

```bash
cd Unigine_Heaven-4.0/
```

Now, the application can be started:

```bash
./heaven
```

Click the 'Run' button to begin the program.

### GPU Burn (for NVIDIA GPU's only)

We can also test the GPU by using GPU Burn; first, if we're on Ubuntu, we'll need to install git and CUDA with this command:

```bash
sudo apt install git system76-cuda-latest 
```

Then, we will create the symlink for <u>gpu-burn</u>:

```bash
sudo ln -s /usr/lib/cuda-11.2 /usr/local/cuda
```

Next, we can clone the repository with this command:

```bash
git clone https://github.com/wilicc/gpu-burn.git
```

Now that we have cloned it, we can move into that directory like so:

```bash
cd gpu-burn
```

Now we'll compile it:

```bash
make
```

And now we can run it like so (this example will run it for 60 minutes/1 hour):

```bash
./gpu_burn -tc 3600
```

## Test CPU thermals

If the CPU fan is spinning erratically, or you are experiencing random shutdowns, this may be the result of a thermal issue. To investigate this, we'll use tools that can display CPU temperatures.

Modern hardware is designed to shut systems down when they reach temperatures that may be damaging to the internal components. Typically, these thresholds are in the upper 80s or 90s Celsius, depending on hardware.

If your system is spontaneously shutting down, this may be caused by overheating. Systems with dedicated GPUs tend to run hot under normal circumstances, so noticing an overheating problem can be challenging from ambient temperature alone.

The temperatures of your CPU cores and GPU card can be checked through software.

### Run `lm-sensors` (command line tool)

`lm-sensors` (installed by default on Pop!\_OS) is a text-based tool that runs in a `Terminal`.

1. Install `lm-sensors` (If not installed)

   Open a `Terminal` with <kbd>SUPER</kbd>+<kbd>T</kbd> (Pop!\_OS) or <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> (Ubuntu) run the following commands:

   ```bash
   sudo apt update
   sudo apt install lm-sensors
   ```

2. Get Sensor Output

   ```bash
   sensors
   ```

This command will generate output like this:

```
coretemp-isa-0000
Adapter: ISA adapter
Package id 0:  +55.0°C  (high = +100.0°C, crit = +100.0°C)
Core 0:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 1:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 2:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 3:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 4:        +55.0°C  (high = +100.0°C, crit = +100.0°C)
Core 5:        +53.0°C  (high = +100.0°C, crit = +100.0°C)
Core 6:        +52.0°C  (high = +100.0°C, crit = +100.0°C)
Core 7:        +54.0°C  (high = +100.0°C, crit = +100.0°C)
system76_acpi-acpi-0
Adapter: ACPI interface
CPU fan:        0 RPM
GPU fan:        0 RPM
CPU temp:     +55.0°C
GPU temp:     +54.0°C
iwlwifi_1-virtual-0
Adapter: Virtual device
temp1:        +69.0°C
pch_cometlake-virtual-0
Adapter: Virtual device
temp1:        +60.0°C
BAT0-acpi-0
Adapter: ACPI interface
in0:          12.95 V
curr1:         0.00 A
```

#### Psensor (GUI)

If you prefer a GUI tool which provides graphing over time, the application Psensor can be installed from the Pop!\_Shop, or through the `Terminal` with this command:

1. Install (`Terminal`):

   ```bash
   sudo apt install psensor
   ```

2. Install Through Pop!\_Shop

   ![psensor-pop](/images/unexpected-reboots/psensor.png)

3. Run Psensor:

   In a `Terminal` run:

   ```bash
   psensor
   ```

  Or, to launch through the OS interface, click on "Activities" in the top-left (Pop!\_OS 20.04 LTS, or Ubuntu), or "Applications" (Pop!\_OS COSMIC) and search for "Psensor"

![psensor-running](/images/unexpected-reboots/psensor-running.png)

#### High Temperatures

If the system temperatures are abnormally high, the fans may need replaced, and/or the thermal compound may need re-applied to the CPU and GPU cores.

Specific instructions for working on your hardware model can be found [here](https://support.system76.com/articles/guides)

Quotes for replacement fans and thermal paste can be generated on open support tickets. To open a support ticket, visit [this link](https://system76.com/my-account/support-tickets/new)

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
[Desktops](https://support.system76.com/articles/power-on-failure-desktop)
[Laptops](https://support.system76.com/articles/power-on-failure-laptop)

## Support

Please contact [support](/) by opening a ticket to get the system repaired or to have failed components replaced.
