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
section: ubuntu
tableOfContents: true
---

1. Click the Ubuntu icon at the top left of your screen and type the word *Printers* then choose the `Printers` application in the search box.

2. In the Printers Application, click the `Add` button. Wait a few seconds for printers to appear in the Device List.

    ![Add Printer](/images/add-a-printer-ubuntu/selectcorrectprinter.png)

3. Select the correct printer and click `Forward`. The computer will search for the correct Drivers to enable the printer.

4. A window may appear that says `Installable Options`, which you can select to view additional options for your printer. Then, click `Forward` again.

5. Name your printer in the next dialogue box and click `Apply`. A prompt to print a test page will appear.

## Checking Printer Status in CUPS

CUPS can be managed directly using a web browser by navigating to the following local URL:

<a href="http://localhost:631" target="_blank">localhost:631</a>

The status window will show current print jobs, detected printers, and other information about the printing system.

![CUPS](/images/add-a-printer-ubuntu/cups-settings.png)

### Adding Users to the lpadmin Group

CUPS allows you to manage printers using Terminal commands. A user must be a part of the `lpadmin` group to use these commands. You can confirm you are a part of this group with the following command:

```bash
groups
```

You can add yourself to this group using the below command:

```bash
sudo usermod -aG lpadmin $USER
```

If you prefer to manage printers in Terminal, See the [CUPS documentation](https://www.cups.org/doc/admin.html) for full documentation.

### Sharing a Printer to the Local Network

Share a printer with the local network by clicking the `Administration` tab.

![CUPS Administration Tab](/images/add-a-printer-ubuntu/admin-tab.png)

Check the box for `Share printers connected to this system`.

Locally shared printers are visible in the `Printers` tab in the `Settings` application. Users with the appropriate group assignments can now select the printer and enter their username and password to gain access to the network printer. If a user is unable to see the printer, see the above section to confirm the user is in the `lpadmin` group, and to add the user to the group.

## HP and Epson Printers

In the <u>Software & Updates</u> settings, go to the `Other Software` tab, and check the first item, `Canonical Partners`. After closing the <u>Software & Updates</u> program, add the driver with this command for HP:

```bash
sudo apt install hplip
```

If you would like to use a guided GUI application from HP, you will need to install a python dependency:

```bash
sudo apt install python3-pyqt5
hp-setup
```

Epson printer drivers are in the `printer-driver-escpr` package, which are also installed by default. You may need to install the `lsb` package for some printer versions:

```bash
sudo apt install lsb printer-driver-escpr
```

Additional configuration will require that the user is a part of the `lpadmin` group. See the above section for instructions to confirm or add a user to this group.

When adding the printer, select type of connection as **DNS-SD**, and then **Forward**, and then **ESC/P-R**.

## Brother Printers

Brother provides a driver installation tool for Linux users. Install the appropriate driver for your Brother printer by downloading this tool and running the installer with your printer model appended to the command.

1. Click <a href="https://support.brother.com/g/b/productsearch.aspx?c=us&lang=en&content=dl" target="_blank">this link</a> to search for the appropriate printer.

2. Once you've located your printer, select `Linux (deb)` for your "OS Version", then click `OK`.

3. Select the `Driver Install Tool` at the top of the list.

4. Click `Agree to the EULA and Download`.

5. Choose the `Save File` option if prompted.

6. Press <kbd>Super</kbd> + <kbd>T</kbd> to launch the Terminal application.

7. Change directory to where you downloaded the driver (usually the Downloads directory). Unzip the file using this command:

   ```
   cd Downloads
   gunzip linux-brprinter-installer-*.gz
   ```

8. Run the installer by typing the unzipped installer name into the terminal.

     > ℹ️ Your installer version may differ from this guide. Type the first portion of the installer name as shown below, and then hit `TAB` to complete the installer name. Substitute PRINTERNAME with your exact printer model name.

    During this installer process, answer `yes` to all questions except when you are prompted for the `Device URI`. See step 9 if you require a device URI for your printer setup.

    ```
    sudo bash linux-brprinter-installer PRINTERNAME
    ```

9. If your printer configuration requires a device URI, you can find that by opening up Settings > Printers > Additional Printer Settings, then right-click your printer and click `Properties`. In the resulting window, you'll be able to find your Device URI, as shown in the screenshot below.

![Printer Properties](/images/add-a-printer-ubuntu/printer-properties.png)

## Troubleshooting

### Remove and Re-add the Printer in Settings

If the printer stops working, open the <u>Printers</u> Application again and right-click on the printer and select `Delete` to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process usually resolves many printing issues.

### Assign a Static IP Address to the Printer

Connectivity issues can occur when the printer is assigned an address using DHCP. Assigning a permanent, static IP address will resolve these issues. Reference your printer manufacturer's documentation for this process. Be aware that simply using the printer's assigned DHCP address as a static IP may cause a future address conflict. Additional router configuration may be required to reserve specific addresses within or outside of a DHCP address pool. If your printer is being deployed on a corporate network, contact your network administrator for this process.

## Useful Commands

Reinstall the CUPS print server to resolve general printing issues:

```bash
sudo apt install --reinstall cups cups-client
```

Reinstall the system control panel in case printer settings are not available.

```bash
sudo apt install --reinstall system-config-printer
```
