---
title: Install and Use VPNs
description: >
  Set up and use OpenVPN to browse the internet more securely in places like airports, cafe shops and more.
keywords:
  - OpenVPN
  - Security
  - Privacy
  - ProtonVPN

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Install ProtonVPN Graphical Client

### Download the .deb package from their website

![Log into ProtonVPN website](/images/use-openvpn/Logged-In.png)

Once signed in click the **Downloads** tab on the left side of the website and click on the **Download** button for GNU/Linux.

![Download debian file part 1](/images/use-openvpn/Debian-file-download.png)

Click the **Download .deb** button for Ubuntu and Pop!_OS.

![Download debian file part 2](/images/use-openvpn/Downloaded-debian-file.png)

Next be sure to leave **Open with Eddy (default)** selected so that the next window pops up.

### Installing the .deb package

![Installing the debian file](/images/use-openvpn/Installing-debian-file.png)

Now click the **Install** button to install <u>ProtonVPN</u> using <u>Eddy</u>. Once that is down close the <u>Eddy</u> window.

On **Pop!_OS**:

Press <kbd><font-awesome-icon :icon="['fab', 'pop-os']"></font-awesome-icon></kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

On **Ubuntu**:

Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>t</kbd> on your keyboard. A Terminal window should open.

**Next** enter the following commands followed by <kbd>Enter</kbd>:

```bash
sudo apt update
sudo apt install protonvpn
```

### Using the Graphical Client

![ProtonVPN Main Window](/images/use-openvpn/ProtonVPN-main-window.png)

Open the <u>ProtonVPN</u> client by clicking Activites on the top left of your desktop and search for <u>ProtonVPN</u> in the search box. Enter your login information which should be the same as the information that you used to sign into the ProtonVPN website. If that doesn't work you will need to reach out to ProtonVPN support.

![ProtonVPN signed in](/images/use-openvpn/ProtonVPN-signed-in.png)

Now that we are signed into the service with the <u>ProtonVPN</u> client we can connect to any server that we have access to in our plan though ProtonVPN.

![ProtonVPN connected to a server](/images/use-openvpn/ProtonVPN-connected.png)

From this window we can see our Upload and Download speeds including the load that the server is under (how much it is being used currently) and our IP address.

## Install a VPN using OpenVPN files

### Open Network Settings

Access OpenVPN setting in the <u>Settings</u> application (GNOME Control Center)

![GNOME-Control-Center](/images/use-openvpn/GNOME-Control-Center.png)

### Getting an OpenVPN (.ovpn) file

OpenVPN uses `.ovpn` files for setting up the VPN on your system and includes the servers to contact. Most VPN providers will provide `.ovpn` files such as the following:

- [ProtonVPN](https://protonvpn.com/)
- [NordVPN](https://nordvpn.com/ovpn/)
- [Private Internet Access](https://www.privateinternetaccess.com/openvpn/openvpn.zip)

### Using an OpenVPN (.ovpn) file

After getting the `.ovpn` (OpenVPN file type) click the plus icon to the right of the VPN section. A dialog will as show will open. Click 'Import from file...'

![VPN-Dialog](/images/use-openvpn/VPN-Dialog.png)

Select the `.ovpn` file downloaded from your VPN provider.
