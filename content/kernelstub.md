---
title: Kernelstub Usage
description: >
  Add or change kernel and boot parameters using kernelstub
keywords:
  - Ubuntu
  - Pop
  - Pop!_OS
  - Kernelstub
  - EFI
  - UEFI
  - initramfs
  - kernel parameters
  - kernel
  - boot options

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## What is Kernelstub?

### Overview

> Kernelstub is a utility to automatically manage your OS's EFI System Partition (ESP). It makes it simple to copy the current kernel and initramfs image onto the ESP so that they are automatically probeable by most EFI boot loaders as well as the EFI firmware itself. It can also set up the system's NVRAM to add entries to the firmware boot menu for the kernel (and keep these options up to date when new kernel versions are installed).

From the `kernelstub` [Github page](https://github.com/isantop/kernelstub)

Developed by System76, `kernelstub` is included with Pop!\_OS to manage kernel settings and boot files with `systemd-boot`. The `.deb` file can be downloaded on Github [here](https://github.com/isantop/kernelstub/releases) along with source code. `kernelstub` is designed to make working with `systemd-boot` easy.

## Common Uses

The benefit of `kernelstub` is the ease with which kernel options and boot parameters can be managed. You can quickly add (or remove) options that are used by the Linux kernel on boot. `kernelstub` will make sure to only have a single instance of options added.

For example, the command below adds both "quiet" and "splash" to the kernel options:

```bash
sudo kernelstub -a "quiet splash"
```

A full set of available options are listed on the Github page. They can also be printed out in the Terminal by passing:

```bash
sudo kernelstub --help
```

OR

```bash
sudo kernelstub -h
```

Or by running `kernelstub` without any other options.

Most of the options available have short and long-form options. Output of `--help` produced at the time of this writing is included [below.](#help-output)

## Troubleshooting

`kernelstub` is also a useful troubleshooting tool, allowing quick changes to kernel options used on boot.

### Verbose Output

To see more detailed information about what `kernelstub` is doing, add the `-v` or `--verbose` flags to your command. To save the output to a log pass the `-g` or `--log-file` flags followed by the save location:

```bash
sudo kernelstub -g ~/kernelstub.log
```

This command creates a log of `kernelstub` output and saves it in the `Home` folder. The name, file extension and save-location can all be chosen by the user.

### "Dry Run" and Return Codes

To see if a command will do something intended or something harmful, you can run `kernelstub` with a "dry run" instruction added.

```bash
sudo kernelstub --dry-run
```

If your dry run yields errors, you can look up the error codes [here](https://github.com/isantop/kernelstub#return-codes) and adjust accordingly.

## Troubleshooting Examples

### Drive Latency Changes

If a system exhibits drive, or drive power issues, the drive may not be correctly resuming from suspend. Drive latency can be adjusted using `kernelstub`.

Finding the latency settings from the drive controller to limit the drive from the deepest drive sleep states can be found from the following commands:

```bash
# make sure smartctl is installed
sudo apt install smartmontools
sudo smartctl -a /dev/nvme0n1
```

Full example output can be found [below,](#smartctl-output) but the information we need is shown here:

```bash
Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     3.50W    2.10W       -    0  0  0  0        0       0
 1 +     2.40W    1.60W       -    0  0  0  0        0       0
 2 +     1.90W    1.50W       -    0  0  0  0        0       0
 3 -   0.0250W       -        -    3  3  3  3     3900   11000
 4 -   0.0050W       -        -    4  4  4  4     5000   39000
```

Since we don't want the drive to go into it's deepest sleep state, we need to choose the second lowest `Ex_Lat`, or in this case `11000`.

The latency can be set with this `kernelstub` command:

```bash
sudo kernelstub -a "nvme_core.default_ps_max_latency_us=12000" 
```

The important information here is the `Max` Watts. We want to slightly increase the power draw from the drive, without having it draw so much power that it heats up, or doesn't fully suspend. In this case, that is the second-to-last latency setting with a `Max` wattage less than `1W`.

### Cstate Changes

Likewise, CPU performance or power issues can be mitigated by changing C-state settings.

```bash
sudo kernelstub -a "intel_idle.max_cstate=4"
```

The higher the `cstate` number, the lower the CPU power is set. `cstate` 0 means the CPU cores are running. `cstate` 1 is `halt`. `cstate` 2 is `stop-clock` or partial sleep, `cstate` 3 is `sleep` and `cstate` 4 is deep sleep. The maximum `cstate` number is determined by the processor model.

In our example, setting the maximum `cstate` to 4 means that the computer can go into deep sleep, but any additinoal power-saving measures will not be used. This can counteract bugs where deeper sleep states cause unexpected behavior, but can increase battery consumption.

### Backlight Controls

Kernelstub can be used to change ACPI settings for backlight control in the event of function keys misbehaving.

```bash
sudo kernelstub -a "acpi_backlight=vendor”
```

This command tells the Linux kernel to defer to firmware/hardware controls provided by the vendor of the keyboard for adjusting backlight.

### Set Default Boot Kernel

If you need to change the default kernel version used when the system boots, this can be done with this `kernelstub` command:

```bash
sudo kernelstub -v -k /boot/vmlinuz-5.8.18-63.71-care -i /boot/initrd.img-5.8.18-63.71-care
```

In this example, we have set the kernel to a 5.8 version compiled by the support team. Substitute the desired version. To see which kernel versions are installed and determine the exact version numbers run:

```bash
dpkg --list | grep linux-image*
```

If a specific kernel version is the suspected source of a bug, try a different version. Then a known-good version can be set as the default.

### `--help` Output

```bash
user@pop-os:~$ kernelstub --help
usage: kernelstub [-h] [-c] [-p] [-e ESP,] [--esp-path ESP] [-r ROOT]
                  [--root-path ROOT] [-k PATH,] [--kernel-path PATH]
                  [-i PATH,] [--initrd-path PATH] [-o "OPTIONS",]
                  [--options "OPTIONS"] [-a "OPTIONS",]
                  [--add-options "OPTIONS"] [-d "OPTIONS"]
                  [--delete-options "OPTIONS"] [-g LOG] [--log-file LOG]
                  [-l | -n  -s | -m] [-f] [-v]

Automatic Kernel EFIstub manager

optional arguments:
  -h, --help            show this help message and exit
  -c, --dry-run         Don't perform any actions, just simulate them.
  -p, --print-config    Print the current configuration and exit
  -e ESP,
  --esp-path ESP        Manually specify the path to the ESP. Default is
                        /boot/efi
  -r ROOT
  --root-path ROOT      The path where the root filesystem to use is mounted.
  -k PATH,
  --kernel-path PATH    The path to the kernel image.
  -i PATH,
  --initrd-path PATH    The path to the initrd image.
  -o "OPTIONS",
  --options "OPTIONS"   The total boot options to be passed to the kernel
  -a "OPTIONS",
  --add-options "OPTIONS"
                        Boot options to add to the configuration (if they
                        aren't already present)
  -d "OPTIONS"
  --delete-options "OPTIONS"
                        Boot options to remove from the configuration (if
                        they're present already)
  -g LOG
  --log-file LOG        The path to the log file to use. Defaults to
                        /var/log/kernelstub.log
  -l, --loader          Creates a systemd-boot compatible loader configuration
  -n, --no-loader       Turns off creating loader configuration
  -s, --stub            Set up NVRAM entries for the copied kernel
  -m, --manage-only     Only copy entries, don't set up the NVRAM
  -f, --force-update    Forcibly update any loader.conf to set the new entry
                        as the default
  -v, --verbose         Increase program verbosity and display extra output.
```

### `smartctl` Output

```bash
nathaniel@pop-os:~$ sudo smartctl -a /dev/nvme0n1
[sudo] password for nathaniel: 
smartctl 7.2 2020-12-30 r5155 [x86_64-linux-5.15.25-xanmod1] (local build)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       WDC WDS500G2B0C-00PXH0
Serial Number:                      21122J804372
Firmware Version:                   211210WD
PCI Vendor/Subsystem ID:            0x15b7
IEEE OUI Identifier:                0x001b44
Total NVM Capacity:                 500,107,862,016 [500 GB]
Unallocated NVM Capacity:           0
Controller ID:                      1
NVMe Version:                       1.4
Number of Namespaces:               1
Namespace 1 Size/Capacity:          500,107,862,016 [500 GB]
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            001b44 8b48c4d578
Local Time is:                      Fri Mar  4 13:04:18 2022 MST
Firmware Updates (0x14):            2 Slots, no Reset required
Optional Admin Commands (0x0017):   Security Format Frmw_DL Self_Test
Optional NVM Commands (0x005f):     Comp Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat Timestmp
Log Page Attributes (0x1e):         Cmd_Eff_Lg Ext_Get_Lg Telmtry_Lg Pers_Ev_Lg
Maximum Data Transfer Size:         128 Pages
Warning  Comp. Temp. Threshold:     80 Celsius
Critical Comp. Temp. Threshold:     85 Celsius
Namespace 1 Features (0x02):        NA_Fields

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     3.50W    2.10W       -    0  0  0  0        0       0
 1 +     2.40W    1.60W       -    0  0  0  0        0       0
 2 +     1.90W    1.50W       -    0  0  0  0        0       0
 3 -   0.0250W       -        -    3  3  3  3     3900   11000
 4 -   0.0050W       -        -    4  4  4  4     5000   39000

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         2
 1 -    4096       0         1

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        41 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    1%
Data Units Read:                    5,169,633 [2.64 TB]
Data Units Written:                 16,273,614 [8.33 TB]
Host Read Commands:                 44,228,094
Host Write Commands:                180,122,354
Controller Busy Time:               325
Power Cycles:                       212
Power On Hours:                     2,059
Unsafe Shutdowns:                   57
Media and Data Integrity Errors:    0
Error Information Log Entries:      1
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0

Error Information (NVMe Log 0x01, 16 of 256 entries)
No Errors Logged
```
