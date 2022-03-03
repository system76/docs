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

## Common Uses

## Troubleshooting

### Verbose Output

### "Dry Run"

### Drive Latency Changes

### Cstate Changes

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





https://github.com/isantop/kernelstub 