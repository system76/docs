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

Most printers will be automatically added to the computer. If a printer is not automatically added, users can manually add printers in the Settings -> Printers menu.  

1. Press the <kbd>Super</kbd> key and type the word *Printers*.
2. Choose the <u>Printers</u> application in the search box.
3. In the <u>Printers</u> Application, click the **Add a Printer...** button and a box will pop up with different options.
4. Wait a few seconds for printers to appear in the Device List.

   ![Add Printer](/images/add-a-printer-pop/printer-settings.png)

5. Select the correct printer and click **Add**.

## Epson Printers

Epson printer drivers are in the **printer-driver-escpr** package and is also installed by default. You may need to install the **lsb** package for some printer versions:

```bash
sudo apt install lsb printer-driver-escpr
```

Automatically installed printers will work fine, but if you need to make changes to the configuration of the printers, you will need to add your user to the 'lpadmin' group. To do that run the following command:

```bash
sudo usermod -aG lpadmin $USER
```

## Brother Printers

Brother provides a driver installation tool for Linux users. Install the appropriate driver for your Brother printer by downloading this tool and running the installer with your printer model appended to the command.

1. Click [this link](https://support.brother.com/g/b/faqend.aspx?c=us&lang=en&prod=hll2300d_us_eu_as&faqid=faq00100556_000) to download Brother's Driver Install Tool for Linux.

2. Click the "Click here to download the tool" link on the Brother download page.

3. Select Linux (deb) for your "OS Version", then click OK.

4. Click "Agree to the EULA and Download".

5. Choose the Save File option when prompted.

6. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch the Terminal application.

7. Change directory to where you downloaded the driver, then unzip it. This is usually the downloads directory.

   ```
   cd Downloads
   gunzip linux-brprinter-installer-*.*.*-*.gz
   ```

8. Run the installer by typing the unzipped installer name into the terminal.

   > Note: Your installer version may differ from this guide. Type the first portion of the installer name as shown below, and then hit <kbd>TAB</kbd> to complete the installer name.

   ```
   sudo bash linux-brprinter-installer
   ```

9. Add a space after the tab-completed file name, then type your printer model (HL-L5000D used as an example):

   ```
   sudo bash linux-brprinter-installer-2.2.2-2 HL-L5000D
   ```

   >Note: If prompted for a "DeviceURI", you can find that by opening up Settings > Printers > Additional Printer Settings, then right click your printer and click Properties. In the resulting window, you'll be able to find your Device URI, as shown in the screenshot below.

![Printer Properties](/images/add-a-printer-pop/printerprops.png)

## Troubleshooting

If the printer stops working, open the <u>Printers</u> Application again and click the gear icon, and select **Remove Printer** to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

To look at the CUPS (Common Unix Printing System) configuration and status window, please open this webpage:

[localhost:631](http://localhost:631)

The status window will show current print jobs, detected printers, and other information about the printing system. If you would like to share this printer with others on your local network, click on the 'Admin' link, under Server, click on the "Share printers connected to this system" and save the changes. Other computers on your network should than see that printer. When there is a prompt for your username and password, use your user name, and password used to login.

## Useful Commands

This command reinstalls <u>CUPS</u>, the main printing software, which can help with generic issues.

```bash
sudo apt install --reinstall cups cups-client
```

This command reinstalls the system control panel if the settings are not available.

```bash
sudo apt install --reinstall system-config-printer
```
