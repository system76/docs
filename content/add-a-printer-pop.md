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
section: pop
tableOfContents: true
---

Most printers will be automatically added to the computer. If a printer is not automatically added, users can manually add printers in the Settings -> Printers menu.  

1. Press the <kbd>Super</kbd> key and type the word *Printers*.

2. Choose the `Printers` result in the search box.

3. In the `Printers` settings panel, click the `Add a Printer...` button to search for locally connected printers.

    ![Add Printer](/images/add-a-printer-pop/add-a-printer.png)

4. Wait a few seconds for printers to appear in the Device List.

5. Select the correct printer and click `Add`.

  ![Add Printer](/images/add-a-printer-pop/click-add.png)

## Checking Printer Status in CUPS

CUPS can be managed directly using a web browser by navigating to the following local URL:

<a href="http://localhost:631" target="_blank">localhost:631</a>

The status window will show current print jobs, detected printers, and other information about the printing system.

![CUPS Status Window](/images/add-a-printer-pop/cups-settings.png)

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

![CUPS Administration Tab](/images/add-a-printer-pop/admin-tab.png)

Check the box for `Share printers connected to this system`.

Locally shared printers are visible in the `Printers` tab in the `Settings` application. Users with the appropriate group assignments can now select the printer and enter their username and password to gain access to the network printer. If a user is unable to see the printer, see the above section to confirm the user is in the `lpadmin` group, and to add the user to the group.

## HP Printers

HP printers are supported with the hplip package, which is installed by default in Pop!_OS

```bash
sudo apt install hplip
```

### HP Device Manager (GUI)

If you would like to use a guided GUI application from HP, you will need to install a python dependency:

```bash
sudo apt install python3-pyqt5
```

Then run `hp-setup` to start the HP Device Manager.

![HP Device Manager](/images/add-a-printer-pop/hp-setup.png)

## Epson Printers

Epson printer drivers are in the `printer-driver-escpr` package which is also installed by default. You may need to install the `lsb` package for some printer versions:

```bash
sudo apt install lsb printer-driver-escpr
```

Additional configuration will require that the user is a part of the `lpadmin` group. See the above section for instructions to confirm or add a user to this group.

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

    ```bash
    sudo bash linux-brprinter-installer PRINTERNAME
    ```
  
9. If your printer configuration requires a device URI, you can find that by opening up Settings > Printers > Additional Printer Settings, then right-click your printer and click `Properties`. In the resulting window, you'll be able to find your Device URI, as shown in the screenshot below.

![Printer Properties](/images/add-a-printer-pop/printer-properties.png)

## Troubleshooting

### Remove and Re-add the Printer in Settings

If the printer stops working, open the <u>Printers</u> Application again and click the gear icon, and select `Remove Printer` to remove the printer and its settings. Repeat the steps above to add the printer and try printing the test page again. This process often resolves general printer connectivity issues.

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
