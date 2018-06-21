---
layout: article
title: Understanding Pop!_Boot
description: Pop!_OS uses a new boot architecture. Here's how it works.
keywords:
  - Support
  - Boot
  - Pop_OS
  - System76
hidden: false
section: articles

---

## Understanding Pop Boot

Pop!_OS 18.04 uses an all-new boot architecture to get your system up and 
running every day. While this new system is easy to use and much faster than the
traditional GRUB-based booting, the differences it creates need to be addressed
so that you can adequately configure your system's boot process

##### Note: Pop Boot is only used on UEFI systems without secure boot. BIOS
systems and those with secure boot enabled will currently continue to use GRUB.


### The Pop Boot Architecture

Pop Boot uses a number of components to ensure reliable operation day-to-day. 
The main bootloader function is handled by systemd-boot (formerly known as 
gummiboot). systemd-boot is a very simple bootloader that basically acts as a 
UEFI chainloader with a few linux-specific features. It's function is to load a 
subsequent UEFI binary which in turn loads the OS. 

In Pop!_OS, this binary is the linux kernel itself, which has a small stub 
loader compiled into it. systemd-boot loads this along with options for the 
initramfs image and root partitions, along with any boot options stored in its 
configuration. These files need to be stored on the EFI System Partition, so 
it's recommended to have an ESP which is at least 512 MiB in size. 

Once systemd-boot loads the kernel's stub loader, that takes over decompressing 
the initramfs image and getting the execution switched over to the kernel.

#### Updates

One limitation of using systemd-boot (particularly on Ubuntu-based systems like 
Pop!_OS) is that the kernel packages are not set up to put the kernel where it 
needs to be for everything to work correctly. While you can use it unmodified, 
you would need to write new configuration for each new kernel update and 
manually copy the kernel and initramfs onto the ESP. Pop!_OS takes care of this
by using a utility called Kernelstub. Kernelstub tracks when the kernel or 
initramfs images are updated and automatically sets up the configuration for
systemd-boot as well as copies over the corresponding files. 


### Accessing the Boot Menu

Traditional GRUB boots can access a boot menu by pressing Escape on the keyboard
during boot. This is useful if one needs to boot to a recovery mode, an older
kernel version, or to modify boot options on a one-time basis. 

Pop Boot offers the same functionality through systemd-boot. To access the boot
menu on a Pop Boot system, you hold the Space bar during boot. This will drop 
you in the boot menu and allow you to choose among the options listed there. If
you need to modify boot parameters (e.g. to change kernel options for a special
case), select the option in the menu, then press <kbd>E</kbd>. When you're ready 
to boot, just press <kbd>Enter</kbd>.


## Modification

The two components of Pop Boot have their own indpependent configuration. 


### Modifying Linux boot parameters with Kernelstub

Kernelstub handles all of the boot parameters specifically related to booting up 
Linux OSs and Pop_OS. The command-line interface provides a lot of options that 
help in managing and configuring this behavior.

##### Note: Kernelstub requires root privileges to operate, due to the low-level 
and locked-down nature of many of the system EFI components. All commands should 
be prefixed with `sudo`.

For a quick overview of the options available in Kernelstub, use `kernelstub -h`.

Kernel options can be set using the `--options` flag. Include all optional
boot flags that your system needs when using this flag:

```
$ sudo kernelstub --options "quiet splash loglevel=0"
```
This sets the systems boot options to `quiet splash loglevel=0`, disregarding 
any existing options. If you simply need to add an option to the configuration, 
use `--add-options`:

```
$ sudo kernelstub --add-options "debug"
```
This adds the `debug` option to the existing list of options; e.g., the options 
list from before would now be `quiet splash loglevel=0`. 

These options are stored directly in the Kernelstub configuration, so you only 
need to run them once to add the options you need. 

If you find that the computer is starting the wrong operating system (on a 
dual-boot system) and you want the computer to start Pop!_OS by default, you can 
use the `--force-update` flag. This will forcibly reset the systemd-boot 
configuration to boot Pop!_OS by default.


### Modifying the boot menu behavior with systemd-boot

The boot menu is provided by systemd-boot, so its configuration is stored on the 
EFI System Partition in order to be available to any operating systems. The main 
configuration file is located within `/loader/loader.conf` on the EFI System 
Partition.

The systemd-boot configuration accepts the following options:

* `default` defines the default entry to be loaded. This will point to one of 
the entries in `/loader/entries`, without the `.conf` suffix.
* `timeout` defines the time (in seconds) that the boot menu will be displayed. 
This is optional, and if missing or set to 0 will not show the menu unless you 
hold the Space bar during boot.
* `editor` turns on or off the editor available by pressing <kbd>E</kbd>. For
security-critical systems, it's recommended to turn the editor `off`, otherwise, 
you should leave it enabled for flexible system recovery. Note that your data 
will be secure against attack if you have full-disk encryption enabled even if
the editor is turned on.

#### Adding/changing Boot entries

If you have other OSs with entries defined, it's generally recommend to let 
those OSs control their own entry files. If they aren't aware of systemd-boot or 
you want to add an entry to the menu, you can use the files in `/loader/entries/` 
on the EFI System Partition.

The entry files contain the following _mandatory_ options:

* `title` The title of the menu entry
* `linux` *or* `efi` The path to the Linux Kernel or EFI executeable to run when 
the entry is selected. 
* `initrd` The path to the initrd image. This is required only if you use the 
`linux` item as above.

You can skip the `linux` options and use `efi` instead. This allows you to boot
non-Linux OSs like Windows throught systemd-boot. 

Additionally, you may enter the following additional options:

* `options` command line options to pass to the EFI program. In the case of Linux
this will include kernel parameters as well as the `root=` specification and 
`initrd=` option if you didn't specify it with `initrd`.
* `version` The kernel version used by the entry. Only shown if there are 
entries with the same title.

The loader will automatically check at boot time for Windows Boot Manager, the 
EFI Shell, and the EFI Default loader on the same EFI Partition.
