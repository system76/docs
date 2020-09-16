---
layout: article
title: Add a Printer in Pop!_OS
description: >
  Here is how to add a printer in Pop!_OS.
keywords:
  - Support
  - Printing
  - Printer
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

Most printers will be automatically added to the computer.  If not, to add a printer to your System76 Computer, press the super key and type the word *Printers*, then choose the <u>Printers</u> application in the search box. In the <u>Printers</u> Application, click the **Add a Printer...** button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer](/images/add-a-printer-pop/printer-settings.png)

Select the correct printer and click **Add**.

#### HP and Epson Printers

HP printers are supported with the **hplip** package, which is installed by default in Pop!_OS_

```
sudo apt install hplip
```
If you would like to use a guided GUI application from HP, you will need to install a python dependency:

```
sudo apt install python3-pyqt5
hp-setup
```

Epson printer drivers are in the **printer-driver-escpr** package and is also installed by default. You may need to install the **lsb** package for some printer versions:

```
sudo apt install lsb printer-driver-escpr
```
Automatically installed printers will work fine, but if you need to make changes to the configuration of the printers, you will need to add your user to the 'lpadmin' group. To do that run the following command:

```
sudo usermod -aG lpadmin $USER
```

## Troubleshooting

If the printer stops working, open the <u>Printers</u> Application again and click the gear icon, and select **Remove Printer** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system. If you would like to share this printer with others on your local network, click on the 'Admin' link, under Server, click on the "Share printers connected to this system" and save the changes. Other computers on your network should than see that printer. When there is a prompt for your username and password, use your user name, and password used to login.

## Useful Commands:

```
sudo apt install --reinstall cups cups-client
```

This will reinstall <u>CUPS</u>, the main printing software, which can help with generic issues.

```
sudo apt install --reinstall system-config-printer
```

This will reinstall the system control panel if the settings are not available.
