---
layout: article
title: Battery - Increase Battery Life
description: >
  Here are several ways to stretch the battery and create amazing things for longer.
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
section: articles

---

Every running program consumes the battery. This could be a program that is part of the operating system, or a program currently in use like <u>Firefox</u> or <u>Libre Office</u>. We recommend using [TLP](http://linrunner.de/en/tlp/tlp.html) to quickly reduce overall power consumption and using [powertop](https://01.org/powertop) to check what software is consuming the battery.

The biggest consumer of power is the display backlight. Up to 10% more battery life can be gained by reducing display brightness. Our laptops don't currently have an ambient light sensor and brightness needs manual adjustment with <kbd>Fn</kbd>+<kbd>F8</kbd> and <kbd>Fn</kbd>+<kbd>F9</kbd>.  

### Power Profiles

With the <u>system76-power</u> package there are now what we call **Power Profiles** that can be accessed in the **System Menu** in the image below.

![Battery](/images/battery/system-menu.png)

### FlexiCharger

On several models of our laptops, Flexicharger can be used to change the top charge the computer will fill the battery to.  A general consensus is that charging a battery to 100% every time will shorten it's overall lifespan.  To adjust the top charge, reboot the computer and enter into BIOS by holding down <kbd>F2</kbd>, and navigate to Advanced, then Advanced Chipset Control, and set Flexicharger to Enabled. Reduce the top charge down 10-20% to possibly gain additional battery lifespan, at the cost of daily battery life.

## Useful Programs

<u>TLP</u> is an excellent program for increasing battery life on all of our laptops. <u>TLP</u> is a pure command line tool with automated background tasks and does not contain a GUI. It's default settings are excellent for most situations and require little tuning. <u>TLP</u> will take care of most of the settings that <u>Powertop</u> autotuning would, and with less trial and error.

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

All of the info about the the program can be found with these 2 commands:

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

Please test the settings and make sure they doesn't introduce any instability or oddities. The above command will only last until reboot. The most likely problem with the auto-tune command is that external USB devices have delays after inactivity. To make the new settings persist after reboot, please edit the /etc/rc.local file with this command:

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
