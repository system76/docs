---
layout: article
title: Add a Printer
description: >
  To add a printer to your System76 Computer, click the Ubuntu icon at the top left of your screen and type the word *Printer* then choose the *Printers* application in the search box. When the Printer dialogue opens, follow these instructions to print your first page.
keywords:
  - Support
  - Printing
  - Printer
  - System76
hidden: false
section: articles

---

  To add a printer to your System76 Computer, click the Ubuntu icon at the top left of your screen and type the word **Printer** then choose the **Printers** application in the search box. When the Printer dialogue opens, follow these instructions to print your first page.

## Add a Printer in Ubuntu

In the Printer Application, click the *Add* button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer]({{site.baseurl}}/images//add-a-printer/selectcorrectprinter.png)

Select the correct printer and click *Forward*. The computer will search for the correct Drivers to enable the functionality of your printer. A box may come up that says *Installable Options* which you can select any other options available for your printer and then click **Forward** again. Name your printer in the next dialogue box and click **Apply**. A prompt to print a test page will appear next. Select the option to print the test page to test if the printer was added successfully.

## Troubleshooting Printers

If the printer stops working, open the *Printers* Application again and right-click on the printer and select **Delete** to remove the printer and its settings. Repeat the steps to add the printer and try printing the test page again. This process usually resolves many printing issues.

## Specific Printer Installation

### Epson Printers

First, enable 'Canonical Partners' in the *Software & Updates* settings.  Go to the Other Software tab, and check the first item.  Then, add the driver with this command:

`sudo apt-get install printer-driver-escpr lsb lsb-core`

And when adding the printer, select type of connection DNS-SD and ESC/P-R.

## Useful Commands:

Sometimes, reinstalling CUPS, the main printing software, can help:

`sudo apt install --reinstall cups cups-client`
