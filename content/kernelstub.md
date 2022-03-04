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

### Ubuntu vs. Pop!_OS

Developed by System76, `kernelstub` is included with Pop!\_OS by default. But it can also be installed in Ubuntu and other debian based distributions. The `.deb` file can be downloaded on Github [here](https://github.com/isantop/kernelstub/releases). Source code is also available.

## Common Uses

The benefit of `kernelstub` is the ease with which kernel options and boot parameters can be quickly added to `initramfs` with a few commands, and do not need to be specified again on every boot.

For example a kernel option can be quickly added with a single Terminal command:

```bash
sudo kernelstub -o "quiet splash"
```

With this parameter we are adding the "quiet" option (`-o`) to `initramfs` making sure that the option is applied on the next reboot and all subsequent reboots.

**NOTE:** "Quiet Splash" is enabled by default with `kernelstub`.

A full set of available options are listed on the Github page. They can also be printed out in the Terminal by passing:

```bash
sudo kernelstub --help
```

OR

```bash
sudo kernelstub -h
```

Most of the options available have short and long-form options like the examples above. Output of the `--help` produced at the time of this writing is included [below.](#help-output)

## Troubleshooting

`kernelstub` is also a useful troubleshooting tool. It allows users to quickly change the default kernel used at boot. It also provides shortcuts for passing instructions on CPU and drive behaviors at boot.

### Verbose Output

To see more detailed information about what `kernelstub` is doing, add the `-v` or `--verbose` flags to your command. To save the output to a log pass the `-g` or `--log-file` flags followed by the save location:

```bash
sudo kernelstub -g ~/kernelstub.log
```

This command creates a log of `kernelstub` output and saves it in the `Home` folder.

### "Dry Run" and Return Codes

To see if a command will do something intended or something harmful, you can run `kernelstub` with a "dry run" instruction added.

```bash
sudo kernelstub -c
```

OR

```bash
sudo kernelstub --dry-run
```

If your dry run yields errors, you can look up the error codes [here](https://github.com/isantop/kernelstub#return-codes) and adjust accordingly.

## Troubleshooting Examples

### Drive Latency Changes

If a system exhibits drive, or drive power issues, the drive may not be correctly resuming from suspend. Drive latency can be adjusted using `kernelstub`.

The optimal latency for an installed NVME drive can be determined by running:

[COMMAND HERE]

and then can be set with a `kernelstub` command like this:

```bash
sudo kernelstub -a "nvme_core.default_ps_max_latency_us=1200" 
```

### Cstate Changes

Likewise, CPU performance or power issues can be mitigated by changing C-state settings.

```bash
sudo kernelstub -a "intel_idle.max_cstate=4"
```

### Backlight Controls

Kernelstub can be used to change ACPI settings for backlight control in the event of function keys misbehaving.

```bash
sudo kernelstub -a "acpi_backlight=vendor”
```

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
