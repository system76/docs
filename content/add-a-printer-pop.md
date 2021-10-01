---
title: Printer Setup (Pop!_OS)
description: >
  Here is how to add a printer in Pop!_OS.
keywords:
  - Support
  - Printing
  - Printer
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: hardware
tableOfContents: true
---

Most printers will be automatically added to the computer.  If not, to add a printer to your System76 Computer, press the super key and type the word *Printers*, then choose the <u>Printers</u> application in the search box. In the <u>Printers</u> Application, click the **Add a Printer...** button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer](/images/add-a-printer-pop/printer-settings.png)

Select the correct printer and click **Add**.

## HP and Epson Printers

HP printers are supported with the **hplip** package, which is installed by default in Pop!_OS_

```bash
sudo apt install hplip
```

If you would like to use a guided GUI application from HP, you will need to install a python dependency:

```bash
sudo apt install python3-pyqt5
hp-setup
```

Epson printer drivers are in the **printer-driver-escpr** package and is also installed by default. You may need to install the **lsb** package for some printer versions:

```bash
sudo apt install lsb printer-driver-escpr
```

Automatically installed printers will work fine, but if you need to make changes to the configuration of the printers, you will need to add your user to the 'lpadmin' group. To do that run the following command:

```bash
sudo usermod -aG lpadmin $USER
```

## Brother Printers

Search for your printer on this page <https://www.brother-usa.com/brother-support/driver-downloads>

Once you find your printer, click the downloads link, and select the "Linux" option under "Select OS Family"

Select Linux (deb) for your "OS Version"

Click the Driver Install Tool under utilities on that page.

Click "Agree to the EULA and Download"

Click Activities in the top left of your display, and search "Terminal" then click the Terminal application to open it.

Change directory to where you downloaded the driver, then unzip it. This is usually the downloads directory.

```
cd Downloads
gunzip linux-brprinter-installer-*.*.*-*.gz
```

After this, run the installer, but with your printer model appended to the end. For this example, we will use the model HL-L5000D.
Note that your installer version may differ from this guide. It is best to type the first portion of the installer name, and then hit TAB to complete the installer name.

```
sudo bash linux-brprinter-installer
```

When typing the above command, hit TAB after that for the installer name to be autocompleted, and then add your printer name, after a space, at the end.

Example:

`sudo bash linux-brprinter-installer-2.2.2-2 HL-L5000D`

If you are asked for your "DeviceURI", you can find that by opening up Settings > Printers > Additional Printer Settings, then right click your printer and click Properties. In the resulting window, you'll be able to find your Device URI, as shown in the screenshot below.

![Printer Properties](/images/add-a-printer-pop/printerprops.png)

## Troubleshooting

If the printer stops working, open the <u>Printers</u> Application again and click the gear icon, and select **Remove Printer** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system. If you would like to share this printer with others on your local network, click on the 'Admin' link, under Server, click on the "Share printers connected to this system" and save the changes. Other computers on your network should than see that printer. When there is a prompt for your username and password, use your user name, and password used to login.

## Useful Commands

```bash
sudo apt install --reinstall cups cups-client
```

This will reinstall <u>CUPS</u>, the main printing software, which can help with generic issues.

```bash
sudo apt install --reinstall ~n^system-config-printer
```

This will reinstall the system control panel if the settings are not available.
