---
title: Desktop Environment (Change)
description: >
  Pop!_OS Comes with GNOME by default.  Follow these instructions to install additional desktop environments.
keywords:
  - desktop environment
  - MATE
  - KDE
  - XFCE
  - Cinnamon
  - GNOME
  - Mint

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

Pop!\_OS and Ubuntu both include the GNOME desktop environment by default. A desktop environment is responsible for the look and feel of the graphical desktop, and includes many of the key programs that get used every day.

You can install an alternative desktop environment using the instructions below.

**NOTE:** be careful when installing other desktop environments, as they may affect the default GNOME desktop (both Ubuntu and Pop).

If you run into trouble while using an alternative desktop environment, you may wish to revert to the default environment. To ensure the default GNOME desktop environment is installed in Pop!\_OS, install the `pop-desktop` package:

```bash
sudo apt install pop-desktop
```

For Ubuntu, install the `ubuntu-desktop` package instead:

```bash
sudo apt install ubuntu-desktop
```

The desktop environment acts as the top graphical layer of the OS. The desktop environment is launched by a display manager; Pop!\_OS and Ubuntu both use GDM (GNOME Display Manager) by default.

If multiple desktop environments are installed, GDM will display a gear icon, which will allow you to select the desktop environment you want to launch. You will need to either reboot or restart your display manager using `sudo systemctl restart gdm` before a newly-installed desktop environment will show up in the list of options.

![Login2](/images/desktop-environment/Login2.png)

## Different Desktop Environments

### MATE

MATE is a simple and attractive desktop using traditional concepts. MATE is a fork of GNOME 2.

![MATE](/images/desktop-environment/MATE.png)

This command will install MATE and its dependencies:

```bash
sudo apt install mate-desktop-environment mate-desktop-environment-extras ubuntu-mate-themes
```

---

### Cinnamon

Cinnamon is used in Linux Mint by default. Cinnamon strives to provide a traditional experience and is a fork of GNOME 3.

![Cinnamon](/images/desktop-environment/Cinnamon.png)

Cinnamon is installed with:

```bash
sudo apt install cinnamon-desktop-environment
```

---

### GNOME

While Pop and Ubuntu contain GNOME by default, both include a number of customizations to GNOME. You can also install a vanilla GNOME session to get the upstream GNOME experience.

![GNOME](/images/desktop-environment/GNOME.png)

You can install the vanilla GNOME session using this command:

```bash
sudo apt install gnome-session
```

---

### KDE Plasma

The KDE Plasma desktop environment is a familiar working environment and looks similar to Windows' desktop. It is highly customizable and looks clean.

![KDE Plasma](/images/desktop-environment/Plasma.png)

The KDE Plasma desktop and its dependencies can be installed with this command:

```bash
sudo apt install kde-standard
```

While installing KDE, you'll be prompted to choose a display manager:

![Display Manager Section](/images/desktop-environment/sddm-1.png)

Press Enter to select the OK option. (If the OK option is not selected, press Tab to select it.) At the list, press Enter again to keep gdm3 as your display manager:

![Display Manager Section](/images/desktop-environment/sddm-2.png)

---

### UKUI

UKUI is a lightweight desktop environment based on a pluggable framework for Linux and other UNIX-like distributions. It provides a simple experience for browsing, searching, and managing your computer. It is developed using GTK and Qt.

![UKUI](/images/desktop-environment/UKUI.png)

UKUI can be installed with:

```bash
sudo apt install ukui-desktop-environment
```

---

### XFCE

XFCE embodies the traditional UNIX philosophy of modularity and re-usability. This environment provides a good amount of conformity for the programs written for it. XFCE also provides a highly customizable environment, while being leaner on resources.

![Xfce](/images/desktop-environment/XFCE.png)

You can install XFCE and its dependencies with this command:

```bash
sudo apt install xfce4 xfce4-goodies
```

While installing XFCE, you'll see a prompt to select your default display manager:

![Display Manager Section](/images/desktop-environment/lightdm-1.png)

Press Enter to select the OK option. (If the OK option is not selected, press Tab to select it.) At the list, press Enter again to keep gdm3 as your display manager:

![Display Manager Section](/images/desktop-environment/lightdm-2.png)

---

### LXDE

The Lightweight X11 Desktop Environment is a fast and energy-saving desktop environment. It looks similar to older versions of Windows. This is a lean desktop environment and can help extend battery life in laptops.

![LXDE](/images/desktop-environment/LXDE.png)

LXDE can be installed with:

```bash
sudo apt install lxde
```

While installing LXDE, you'll see a prompt to select your default display manager:

![Display Manager Section](/images/desktop-environment/lightdm-1.png)

Press Enter to select the OK option. (If the OK option is not selected, press Tab to select it.) At the list, press Enter again to keep gdm3 as your display manager:

![Display Manager Section](/images/desktop-environment/lightdm-2.png)

---

### LXQt

LXQt is a lightweight Qt desktop environment. It's being developed as a successor to LXDE. It is focused on being a classic desktop with a modern look and feel.

![LXQt](/images/desktop-environment/LXQt.png)

LXQt can be installed with:

```bash
sudo apt install lxqt
```

---

## Troubleshooting

Desktop environments can interfere with each other or change system-wide settings. Issues with a desktop environment's appearance can generally be fixed by changing the theme in the <u>Appearance</u> control panel.

### Customize Notification Dialog

Xfce will change the notification dialog to its own. It can be configured with this command:

```bash
xfce4-notifyd-config
```

### Remove Duplicate Options From Login Screen

Some desktop environments provide more than one session. For example, Cinnamon provides both a 2D and a 3D session. The options available at login are located in the `/usr/share/xsessions` directory, and unneeded options can be removed by deleting the corresponding files. For example, to remove Cinnamon's extra option:

```bash
sudo rm /usr/share/xsessions/cinnamon2d.desktop
```

### Change Automatic Startup Programs

Some desktop environments configure additional programs to start at boot. To change them, run the <u>Startup Applications</u> program and turn off any unwanted startup programs.

### Double Lock Screen Passwords

GNOME does not use a screensaver (only a lock screen), but other desktop environments may install the classic GNOME screensaver package as a dependency. If you're being prompted for a password twice after suspending or locking the screen, disable the second prompt with this command:

```bash
gsettings set org.gnome.desktop.screensaver lock-enabled false
```

Or, if that doesn't stop the second prompt, uninstall the redundant screensaver with this command:

```bash
sudo apt purge gnome-screensaver
```

### Enable Cinnamon Lock Screen

If Cinnamon's desktop lock screen isn't functioning, this command will re-enable it:

```bash
gsettings set org.cinnamon.desktop.lockdown disable-lock-screen false
```

### Removing Desktop Environments

If you no longer want to use a desktop environment, it can be removed by using:

```bash
sudo apt autoremove --purge ...
```

For example, to remove KDE:

```bash
sudo apt purge kde-*

sudo apt autoremove --purge kde-standard
```
