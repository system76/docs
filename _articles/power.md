---
layout: article
title: Improve Power Usage
description: >
  Is your system running a little short on battery life?  Here are several ways to stretch the battery and create amazing things for longer.
keywords:
  - Battery
  - Battery Life
  - Dimming
  - Laptop
  - Screen
  - Power
hidden: true
faq: false # If it shows in the "Frequently Answered Questions" section
---

The biggest single consumer of power is the monitor.  Up to 10% more battery life can be added to your system simply by reducing monitor brightness.  Since our laptops don't currently have an ambient light sensor, brightness needs adjusted manually.

#### Software

Every running program in Ubuntu also consumes a part of the battery life.  This could be a program that is part of the operating system, or a program that is currently being used like Firefox or Libre Office.  We recommend using *powertop* to check what software is consuming the battery, and to tune your operating system for longer battery life.

To install powertop, please open a terminal and run this command:  

`sudo apt install powertop`

After installing the program, reboot your computer and calibrate the readings on battery power with this command:  

`sudo powertop -c`

This will take about 15 minutes to run the calibration.  The system will turn the display off a few times, and you won't be able to do anything else on the PC during the process.  After it's complete, HTML reports can be generated with this command:  

`sudo powertop --html=report`

Open the report located in the home directory to see the results.

![Powertop1](/images/power/powertop1.png)

It's useful to create a baseline by running powertop after a cold startup, without opening any applications, and then run it a few more times throughout the day to get a comparison of different workloads. Make sure to specify a different filename each time for comparison.  Take a look at the list of software running and see if anything can be removed or if settings of high consumers can be changed.

#### Tuning

After looking at running software, head over to the 'Tuning' tab.

![Powertop2](/images/power/powertop2.png)

Powertop provides many suggestions to increase battery life.  To test enabling of all of the suggested tunings, please run this command:

`sudo powertop --auto-tune`

Please test the settings and make sure they doesn't introduce any instability or oddities.  The above command will only last until reboot.  To make the new settings persist after reboot, please edit the /etc/rc.local file with this command:

`gksu gedit /etc/rc.local`

And add either `sudo powertop --auto-tune` above the 'exit 0' line, or add the individual tuning options.
