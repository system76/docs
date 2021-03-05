---
layout: article
title: Support This! Podcast
description: >
   This page includes the show notes from the Support This! Podcast
keywords:
    - SupportThis!
    - Show Notes
image: http://support.system76.com/images/system76.png
hidden: true
section: community
---

## Season 1 Episode 1

<iframe width="750" height="450" src="https://www.youtube.com/embed/53s7MmwNv8E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Human 1 Show Notes [Nathan]
Problem: Customer reported getting small electric shocks each time they touched the edge of their laptop
Troubleshooting Steps: “Does it happen when your system is connected to the wall power (AC adapter) and on battery both? Or just one of them? Are you using the original AC adapter that shipped with your system?

Do you tend to use your system on your laptop, or on a desk? Do you notice it more during certain times? “

Solution: Determined customer was using an international extension cord that also sparked when plugged in, and was operating on a metal table.

### Human 2 Show Notes [John]
Problem:  Got a message that I’ve run out of drive space
Troubleshooting Steps: in a terminal we can check how much space is free with df -h (disk free) as well as check to see if logs might be full with the du (disk use) command:
sudo du -sh /var/log

We can also check the journal logs with:

```bash
journalctl --disk-usage
 ```

Solution: to shrink the log, run: 

```bash
journalctl --vacuum-size 200M 
```

To shrink it down to 200 megabytes if the file /var/log/syslog is taking all the space which you can find this with command:

```bash
 sudo du -sh /var/log/syslog
``` 

you can empty this file with the command:

```bash
sudo > /var/log/syslog
```

### Human 3 Show Notes [Nathaniel]

Problem: Screen sharing on Wayland

With so many of us working from home during COVID-19, many users are spending most of their work days in video and screen-sharing applications. One of our customers was interested in using the Wayland display server instead of X11. The results were mixed.

Troubleshooting Steps:  Assess which programs were running and whether screen sharing was working.
- Microsoft Teams: could only share selected application windows.
- Zoom: sent a disclaimer to use x11
- Discord: could only share selected application windows.
- Web-Based Apps (meet, skype, etc) : could only share selected application windows.
- Skype (Microsoft): did not work at all in Wayland.    

Solution:  Advised switch to X11 for work cases where screen-sharing was required.

If you’d like to learn more about X11 and Wayland, see below:

Wayland:
https://wayland.freedesktop.org/

X11:
https://x.org/wiki/                                   

### Human 4 Show Notes [Aaron]
Problem: Installing Arch with LUKS and systemd-boot
Solution: Make a repo on Github with the steps! : https://github.com/ahoneybun/Arch-LUKS-systemd-boot-install

### Human 5 Show Notes [Thomas]
Problem: Problem with finishing a upgrade to 20.10
This started with a customer that started an upgrade to 20.10 but got stuck. He provided some screen-shots showing the errors he was seeing. In some of the shared commands that he was running showed that he was close on the commands but getting errors, eg:

```bash
sudo update -m
sudo dpkg --configure -a
sudo apt install -f
sudo dist -upgrade
```

We shared a basic set of commands to make sure that apt/dpkg was working well:

```bash
sudo apt clean
sudo apt update -m
sudo dpkg --configure -a
sudo apt install -f
sudo apt full-upgrade
pop-upgrade release upgrade
```

And when that didn’t finish:

```bash
sudo sed -Ei 's/focal/groovy/g' /etc/apt/sources.list /etc/apt/sources.list.d/*.list
sudo apt update -m
sudo apt full-upgrade
sudo apt install gdm3 pop-desktop
```

He shared a photo showing that he was just not getting the `sudo sed...` command to work, and was getting errors. I jumped on a quick call to see if we could get this customer working again.

I had him try the sed command again and he was missing apt source files. We then manually checked the apt files in /etc/apt/ and /etc/apt/sources.list.d/

```bash
cd /etc/apt
sudo nano sources.list
cd sources.list.d
sudo nano *.list
sudo apt update -m
sudo apt full-upgrade
sudo apt install gdm3 pop-desktop
```

## Season 1 Episode 2

<iframe width="750" height="450" src="https://www.youtube.com/embed/J1gD2NaRNvw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Human 1 Show Notes [Support Human]

### Human 2 Show Notes [Support Human]

### Human 3 Show Notes [Support Human]

### Human 4 Show Notes [Support Human]