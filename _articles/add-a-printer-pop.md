---
layout: article
title: Printer - Add a Printer in Pop!_OS
description: >
  Here is how to add a printer in Pop!_OS.
keywords:
  - Support
  - Printing
  - Printer
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

Most printers will be automatically added to the computer.  If not, to add a printer to your System76 Computer, press the super key and type the word *Printers*, then choose the <u>Printers</u> application in the search box. In the <u>Printers</u> Application, click the **Add a Printer...** button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer](/images/add-a-printer-pop/printer-settings.png)

Select the correct printer and click **Add**.

#### HP and Epson Printers

First in the <u>Software & Updates</u> settings go to the **Other Software** tab, and check the first item, **Canonical Partners**. Then, after closing the <u>Software & Updates</u> program, add the driver with this command for HP:

```
sudo apt install hplip
```

And this one for Epson:

```
sudo apt install lsb printer-driver-escpr
```

## Troubleshooting

If the printer stops working, open the <u>Printers</u> Application again and click the gear icon, and select **Remove Printer** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system.

## Useful Commands:

```
sudo apt install --reinstall cups cups-client
```

This will reinstall <u>CUPS</u>, the main printing software, which can help with generic issues.

```
sudo apt install --reinstall system-config-printer-*
```

This will reinstall the system control panel if the settings are not available.
