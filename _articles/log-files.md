---
layout: article
title: Creating Log Files
description: >
    Learn how to create log files for sending to System76 support
keywords:
  - system76
  - driver
  - logs
  - syslog
  - support
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

### Creating Log Files

Log files help our support team learn more about your system, and can be a great benefit during troubleshooting. 

Among the information collected by the log files includes:

* The installed operating system and active kernel version
* A listing of the filesystems connected to your system, and the space used
* Information about your firmware
* A list of disks connected to your system, as well as connected USB devices
* Sensors information showing temperatures and fanspeeds
* Comprehensive output from `syslog` and `journalctl`

#### Generating Log Files Using the System76 Driver Application

The System76 Driver can be opened by clicking the <u>Activities</u> button in the top left (or pressing the Ubuntu or Pop key), then searching for 'System76.' Among the applications listed should be the <u>System76 Driver</u> application. Go ahead and click the icon to launch the application, and enter your password when prompted to do so. 

Next click on the button outlined in red in the <u>System76 Driver</u> application and there will be a file called `system76-logs.tgz` placed in your Home directory (/home/username)

![CreateLogFiles](/images/system76-driver/CreateLogFiles.png)


#### Manually Generating Log Files

If for some reason you are unable to access the <u>System76 Driver</u> application, you can manually create a set of logs files by running a series of commands via the Terminal application. To do this, click <u>Activities</u> in the top left of your system, search for <u>Terminal</u>, then open the application that appears.

From there, you can enter the following commands:

```bash
cd ~/
mkdir ~/system76
journalctl > ~/system76/journal.log
dmesg > ~/system76/dmesg.log
cp ~/.local/share/xorg/Xorg.0.log ~/system76/Xorg.0.log
sudo dmidecode > ~/system76/demidecode
sudo lspci -vv > ~/system76/lscpi.log
sudo lsusb -vv > ~/system76/lsusb.log
uname -a > ~/system76/uname.log
cp /etc/os-release ~/system76/os-release
tar czf system76-log.tgz ~/system76/*
rm ~/system76/*
rmdir ~/system76
```

As with the <u>System76 Driver</u> application, the log files will be stored within your home directory.

#### Sending the Logs to the Support Team

Once the logs are created, you can either attach them directly to the support case, or you can email them to [info@system76.com](mailto:info@system76.com) and reference your case number.
