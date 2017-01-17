---
layout: article
title: Increase Battery Life
description: >
  Is your system running a little short on battery life?  Here are several ways to stretch the battery and create amazing things for longer.
keywords:
  - Battery
  - Battery Life
  - Dimming
  - Laptop
  - Screen
  - Power
hidden: false
section: articles

---

The biggest single consumer of power is the monitor. Up to 10% more battery life can be added to your system simply by reducing monitor brightness. Since our laptops don't currently have an ambient light sensor, brightness needs manual adjustment with <kbd>Fn</kbd>+<kbd>F8</kbd> and <kbd>Fn</kbd>+<kbd>F9</kbd>.

#### Software

Every running program in Ubuntu consumes a part of the battery life. This could be a program that is part of the operating system, or a program that is currently being used like Firefox or Libre Office. We recommend using *TLP* to quickly reduce overall power consumption and using *powertop* to check what software is consuming the battery.

#### TLP

TLP is an excellent program for increasing battery life on all of our laptops. TLP is a pure command line tool with automated background tasks and does not contain a GUI. It's default settings are excellent for most situations and require little tuning. TLP will take care of most of the settings that Powertop autotuning would, and with less trial and error.

To install TLP, run this command:

`sudo apt install tlp`

TLP will take effect upon restart. To see current configuration settings, run this command:

`sudo tlp-stat`

The program is highly configurable by editing the settings file. Run this command to edit the file:

`sudo gedit /etc/default/tlp`

All of the info about the the program can be found with these 2 command:

`man tlp`
`man tlp-stat`

#### Powertop

To install powertop, please open a terminal and run this command:

`sudo apt install powertop`

After installing the program, reboot your computer and calibrate the readings on battery power with this command:

`sudo powertop -c`

This will take about 15 minutes to run the calibration. The system will turn the display off a few times, and you won't be able to do anything else on the PC during the process. After it's complete, HTML reports can be generated with this command:  

`sudo powertop --html=report`

Open the report located in the home directory to see the results.

![Powertop1](/images/power/powertop1.png)

It's useful to create a baseline by running powertop after a cold startup, without opening any applications, and then run it a few more times throughout the day to get a comparison of different workloads. Make sure to specify a different filename each time for comparison. Take a look at the list of software running and see if anything can be removed or if settings of high consumers can be changed.

#### Tuning

After looking at running software, head over to the 'Tuning' tab. We recommend install TLP first, and then seeing if Powertop finds any other tuning suggestions.

![Powertop2](/images/power/powertop2.png)

Powertop provides many suggestions to increase battery life. To test enabling of all of the suggested tunings, please run this command:

`sudo powertop --auto-tune`

Please test the settings and make sure they doesn't introduce any instability or oddities. The above command will only last until reboot. To make the new settings persist after reboot, please edit the /etc/rc.local file with this command:

`gksu gedit /etc/rc.local`

And add either `sudo powertop --auto-tune` above the 'exit 0' line, or add the individual tuning options.

#### Battery Information

To see the information that your computer can read about the battery, please run this command in the terminal:

`upower -i /org/freedesktop/UPower/devices/battery_BAT0`

And if the battery life indicator is inaccurate, removing the stored statistics, and then doing a few charge/discharge cycles, will usually help. Please remove the existing statistics with this command:

`sudo rm /var/lib/upower/*`
