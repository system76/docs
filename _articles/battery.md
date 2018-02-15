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

The biggest single consumer of power is the display backlight. Up to 10% more battery life can gained simply by reducing display brightness. Since our laptops don't currently have an ambient light sensor, brightness needs manual adjustment with <kbd>Fn</kbd>+<kbd>F8</kbd> and <kbd>Fn</kbd>+<kbd>F9</kbd>.  

Every running program consumes the battery. This could be a program that is part of the operating system, or a program currently in use like <u>Firefox</u> or <u>Libre Office</u>. We recommend using [TLP](http://linrunner.de/en/tlp/tlp.html) to quickly reduce overall power consumption and using [powertop](https://01.org/powertop) to check what software is consuming the battery.

### FlexiCharger

On several models of our laptops, Flexicharger can be used to change the top charge the computer will fill the battery to.  The general consensus is that charging a battery to 100% every time will shorten it's overall lifespan.  To adjust the top charge, reboot the computer and enter into BIOS by holding down <kbd>F2</kbd>, and navigate to Advanced, then Advanced Chipset Control, and set Flexicharger to Enabled. Reduce the top charge down 10-20% to possibly gain additional battery lifespan, at the cost of daily battery life.

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

This will take about 15 minutes to run the calibration. The system will turn the display off a few times, and you won't be able to do anything else on the PC during the process. After it's complete, HTML reports can be generated with this command:  

```
sudo powertop --html=report
```

Open the report located at `~/report.html` to see the results.

![Powertop1](/images/power/powertop1.png)

It's useful to create a baseline by running <u>powertop</u> after a cold startup, without opening any applications, and then run it a few more times throughout the day to get a comparison of different workloads. Make sure to specify a different filename each time for comparison. Take a look at the list of software running and see if anything can be removed or if settings of high consumers can be changed.

#### Tuning

After looking at running software, head over to the 'Tuning' tab. We recommend install <u>TLP</u> first, and then seeing if <u>powertop</u> finds any other tuning suggestions.

![Powertop2](/images/power/powertop2.png)

<u>powertop</u> provides many suggestions to increase battery life. To test enabling of all of the suggested tunings, please run this command:

```
sudo powertop --auto-tune
```

Please test the settings and make sure they doesn't introduce any instability or oddities. The above command will only last until reboot. To make the new settings persist after reboot, please edit the /etc/rc.local file with this command:

```
gksu gedit /etc/rc.local
```

And add:

> sudo powertop --auto-tune

above the 'exit 0' line, or add the individual tuning options.  **Do not do this without testing!  Several auto-tune settings will create system instability!**

## Useful Commands

```
upower -i /org/freedesktop/UPower/devices/battery_BAT0
```

This will show the information that your computer can read about the battery.

```
sudo rm /var/lib/upower/*
```

If the battery life indicator is inaccurate, this will remove the stored statistics. After a few charge/discharge cycles the indicator should be more accurate.

## 
