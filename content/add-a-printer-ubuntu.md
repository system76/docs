---
title: Printer Setup (Ubuntu)
description: >
  Here is how to add a printer in Ubuntu.
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

To add a printer to your System76 Computer, click the Ubuntu icon at the top left of your screen and type the word *Printers* then choose the <u>Printers</u> application in the search box. In the <u>Printers</u> Application, click the **Add** button and a box will pop up with different options. Wait a few seconds for printers to appear in the Device List.

![Add Printer](/images/add-a-printer-ubuntu/selectcorrectprinter.png)

Select the correct printer and click **Forward**. The computer will search for the correct Drivers to enable the printer. A box may come up that says 'Installable Options' which you can select any other options available for your printer and then click **Forward** again. Name your printer in the next dialogue box and click **Apply**. A prompt to print a test page will appear next.

## HP and Epson Printers

First in the <u>Software & Updates</u> settings go to the **Other Software** tab, and check the first item, **Canonical Partners**. Then, after closing the <u>Software & Updates</u> program, add the driver with this command for HP:

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

And when adding the printer, select type of connection as **DNS-SD**, and then **Forward**, and then **ESC/P-R**.

## Brother Printers

Brother provides a driver installation tool for Linux users. Install the appropriate driver for your Brother printer by downloading this tool and running the installer with your printer model appended to the command.

1. Click [this link](https://support.brother.com/g/b/productsearch.aspx?c=us&lang=en&content=dl) to download Brother's Driver Install Tool for Linux while searching for the appropriate printer.

2. Click the "Click here to download the tool" link on the Brother download page.

3. Select Linux (deb) for your "OS Version", then click OK.

4. Click "Agree to the EULA and Download".

5. Choose the Save File option when prompted.

6. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch the Terminal application.

7. Change directory to where you downloaded the driver (usually the Downloads directory). Unzip the file using the commmand below.

   ```
   cd Downloads
   gunzip linux-brprinter-installer-*.gz
   ```

8. Run the installer by typing the unzipped installer name into the terminal.

   > Note: Your installer version may differ from this guide. Type the first portion of the installer name as shown below, and then hit <kbd>TAB</kbd> to complete the installer name. Place your exact printer model where we wrote PRINTERNAME below.
   > Note: During this installer process, say yes to all questions except for the Device URI one. See below for more information on finding a Device URI, or feel free to say no to that one.

   ```
   sudo bash linux-brprinter-installer PRINTERNAME
   ```
  
  >Note: If prompted for a "DeviceURI", you can find that by opening up Settings > Printers > Additional Printer Settings, then right click your printer and click Properties. In the resulting window, you'll be able to find your Device URI, as shown in the screenshot below.

![Printer Properties](/images/add-a-printer-pop/printerprops.png)

## Troubleshooting

### Remove and Re-add the Printer in Settings

If the printer stops working, open the <u>Printers</u> Application again and right-click on the printer and select **Delete** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

### Check the Printer Status in CUPS

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system. If you would like to share this printer with others on your local network, click on the 'Admin' link, under Server, click on the "Share printers connected to this system" and save the changes. Other computers on your network should than see that printer.

### Assign a Static IP Address to the Printer

Connectivity issues can occur when the printer is assigned an address using DHCP. Assigning a permanent, static IP address will resolve these issues. Reference your printer manufacturer's documentation for this process. Be aware that simply using the printer's assigned DHCP address as a static IP may cause a future address conflict. Additional router configuration may be required to reserve specific addresses within or outside of a DHCP address pool. If your printer is being deployed on a corporate network, contact your network administrator for this process.

## Useful Commands

```bash
sudo apt install --reinstall cups cups-client
```

This will reinstall <u>CUPS</u>, the main printing software, which can help with generic issues.

```bash
sudo apt install --reinstall ~n^system-config-printer
```

This will reinstall the system control panel if the settings are not available.
