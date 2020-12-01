---
layout: article
title: Battery Life Improvements
description: >
  Stretch the battery life and create amazing things for longer.
keywords:
  - Battery
  - Battery Life
  - Dimming
  - Laptop
  - Screen
  - Display
  - Power
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

Every running program consumes the battery. This could be a program that is part of the operating system, or a program currently in use like <u>Firefox</u> or <u>Libre Office</u>. We recommend using [TLP](http://linrunner.de/en/tlp/tlp.html) to quickly reduce overall power consumption and using [powertop](https://01.org/powertop) to check what software is consuming the battery.

The biggest consumer of power is the display backlight. Up to 10% more battery life can be gained by reducing display brightness. Our laptops don't currently have an ambient light sensor and brightness needs manual adjustment with <kbd>Fn</kbd>+<kbd>F8</kbd> and <kbd>Fn</kbd>+<kbd>F9</kbd>.

### Power Profiles

With the <u>system76-power</u> package there are **Power Profiles** that can be accessed in the **System Menu** in the image below.

![Battery](/images/battery/system-menu.png)

### Charging Thresholds

Configuring charging thresholds will allow your System76 laptop to disable the
charger and run off the AC connection when the battery reaches a specified
capacity. This is particularly useful when your laptop is plugged into AC power
adapter for extended periods of time as it prevents unnecessary micro-charging
which reduces battery longevity.

The longevity of lithium batteries is dependent on the number of charge cycles
they go through. The larger the percentage of spread between start and end
charge percentages, the longer the physical battery will last. For optimal
longevity, charge cycles of 40%~80% are a good idea.

Before heading out into the wild blue yonder, disable this feature to charge
your laptop battery to 100%.

#### Open Firmware

On laptops with System76 Open Firmware, charging thresholds are exposed through
ACPI. The `system76_acpi` kernel module then makes these available through
standard sysfs entries.

- `/sys/class/power_supply/BAT0/charge_control_start_threshold`
- `/sys/class/power_supply/BAT0/charge_control_end_threshold`

The default values of 0 for the start threshold and 100 for the end threshold
disable the feature.

#### FlexiCharger

FlexiCharger is the implementation of charging thresholds in proprietary
firmware, made available as a BIOS setting.

To adjust the top charge, reboot the computer and enter into BIOS by holding
down <kbd>F2</kbd>, and navigate to Advanced, then Advanced Chipset Control,
and set Flexicharger to Enabled. Two new sub-menus will appear, and can be set
to the user's desired percentages. Once configured, save and exit the BIOS.

FlexiCharger can be disabled at any time in the BIOS, which reverts the
charging profile to factory defaults.

## Useful Programs

<u>TLP</u> is an excellent program for increasing battery life on all of our laptops. <u>TLP</u> is a pure command line tool with automated background tasks and does not contain a GUI. Its default settings are excellent for most situations and require little tuning. <u>TLP</u> will take care of most of the settings that <u>Powertop</u> autotuning would, and with less trial and error.

To install TLP, run this command:

```
sudo apt install tlp tlp-rdw --no-install-recommends
```

TLP will take effect upon restart. To see current configuration settings, run this command:

```
sudo tlp-stat
```

The program is highly configurable by editing the settings file. Run this command to edit the file:

```
sudo gedit /etc/default/tlp
```

Starting with <u>TLP</u> 1.3 the default configuration file has changed so the command for that version is below:

```
sudo gedit /etc/tlp.conf
```
The `/etc/tlp.conf` file is for user configuration while `/etc/tlp.d/*.conf` file is for drop-in customization snippets.

All of the info about the program can be found with these 2 commands:

```
man tlp
man tlp-stat
```

---

To install <u>powertop</u>, please open a terminal and run this command:

```
sudo apt install powertop
```

After installing the program, reboot your computer and calibrate the readings on battery power with this command:

```
sudo powertop -c
```

This will take about 15 minutes to run the calibration. The system will turn the display off a few times, and you won't be able to do anything else on the PC during the process.  Powertop can be run just by itself to see what is using resources on your system.  It needs to be left open for a little amount of time to gather statistics, and be more accurate.  Run it with this command:

```
powertop
```

Powertop can also generate HTML reports with this command:

```
sudo powertop --html=report
```

Open the report located at `~/report.html` to see the results.

![Powertop1](/images/power/powertop1.png)

It's useful to create a baseline by running <u>powertop</u> after a cold startup, without opening any applications, and then run it a few more times throughout the day to get a comparison of different workloads. Make sure to specify a different filename each time for comparison. Look at running software and see if programs can be uninstalled or if the settings of high resource using programs can be changed.

#### Tuning

After looking at running software, head over to the 'Tuning' tab. We recommend install <u>TLP</u> first, and then seeing if <u>powertop</u> finds any other tuning suggestions.

![Powertop2](/images/power/powertop2.png)

<u>powertop</u> provides many suggestions to increase battery life. To test enabling of all of the suggested tunings, please run this command:

```
sudo powertop --auto-tune
```

Please test the settings and make sure they don't introduce any instability or oddities. The above command will only last until reboot. The most likely problem with the auto-tune command is that external USB devices have delays after inactivity. To make the new settings persist after reboot, please edit the /etc/rc.local file with this command:

```
sudo gedit /etc/rc.local
```

And add:

> sudo powertop --auto-tune

above the 'exit 0' line, or add the individual tuning options.

**Do not do this without testing!  Several auto-tune settings will create system instability!**

### Disable Ethernet

If Ethernet is never used, or is only used irregularly, then it can be disabled to save power.  Please run this command:

```
ifconfig
```

And note the name of the interface.  It will probably be `enp4s0f2` or similar.  Disable it by running this command:

```
sudo gedit /etc/network/interfaces
```

And add this line to the file:

> iface enp4s0f2 inet manual

Then, if Ethernet needs used, this command can be run to enable it for the session:

```
sudo ifconfig enp4s0f2 up
```

## Useful Commands

```
upower -d
```

This will show the information that your computer can read about the battery.

```
sudo rm /var/lib/upower/*
```

If the battery life indicator is inaccurate, this will remove the stored statistics. After a few charge/discharge cycles the indicator should be more accurate.
