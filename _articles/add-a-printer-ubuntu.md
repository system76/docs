---
layout: article
title: Add a Printer in Ubuntu
description: >
  Here is how to add a printer in Ubuntu.
keywords:
  - Support
  - Printing
  - Printer
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: hardware-drivers

---

To add a printer to your System76 Computer, click the Ubuntu icon at the top left of your screen and type the word *Printers* then choose the <u>Printers</u> application in the search box. In the <u>Printers</u> Application, click the **Add** button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer](/images/add-a-printer-ubuntu/selectcorrectprinter.png)

Select the correct printer and click **Forward**. The computer will search for the correct Drivers to enable the printer. A box may come up that says 'Installable Options' which you can select any other options available for your printer and then click **Forward** again. Name your printer in the next dialogue box and click **Apply**. A prompt to print a test page will appear next.

#### HP and Epson Printers

First in the <u>Software & Updates</u> settings go to the **Other Software** tab, and check the first item, **Canonical Partners**. Then, after closing the <u>Software & Updates</u> program, add the driver with this command for HP:

```
sudo apt install hplip
```

And this one for Epson:

```
sudo apt install lsb printer-driver-escpr
```

Automatically installed printers will work fine, but if you need to make changes to the configuration of the printers, you will need to add your user to the 'lpadmin' group. To do that run the following command (substituting your user name):

```
sudo usermod -aG lpadmin username
```

And when adding the printer, select type of connection as **DNS-SD**, and then **Forward**, and then **ESC/P-R**.

## Troubleshooting

If the printer stops working, open the <u>Printers</u> Application again and right-click on the printer and select **Delete** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system. If you would like to share this printer with others on your local network, click on the 'Admin' link, under Server, click on the "Share printers connected to this system" and save the changes. Other computers on your network should than see that printer.

Pop OS will mostly quit on low bandwidth usb printers (Brother <2005, HP <2007) and older printers are gone. Print using System UI instead of from the Browser.

The system will disagree with the printer on what are ink levels are. Make Pop forget the printer using the settings UI and restart the print job. Yes, the printing companies are scamming you.

## Useful Commands:

```
sudo apt install --reinstall cups cups-client
```

This will reinstall <u>CUPS</u>, the main printing software, which can help with generic issues.

```
sudo apt install --reinstall system-config-printer-*
```

This will reinstall the system control panel if the settings are not available.
