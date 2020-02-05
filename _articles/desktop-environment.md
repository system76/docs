---
layout: article
title: Change the Desktop Environment
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
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

Pop!_OS and Ubuntu both include the GNOME desktop environment by default. A desktop environment is responsible for the look and feel of the graphical desktop, and includes many of the key programs that get used every day.

You can install an alternative desktop environment using the instructions below. If you run into trouble while using an alternative desktop environment, you may wish to revert to the default environment. To ensure the default GNOME desktop environment is installed in Pop!_OS, install the `pop-desktop` package:

```
sudo apt install pop-desktop
```

For Ubuntu, install the `ubuntu-desktop` package instead:

```
sudo apt install ubuntu-desktop
```

The desktop enviroment is basically the top graphical layer of the OS. The desktop environment is launched by a display manager; Pop!_OS and Ubuntu both use GDM (GNOME Display Manager) by default.

If multiple desktop environments are installed, GDM will display a gear icon, which will allow you to select the desktop environment you want to launch. You will need to either reboot or restart your display manager using `sudo systemctl restart gdm` before a newly-installed desktop environment will show up in the list of options.

![Login2](/images/desktop-environment/Login2.png)

---

### MATE

MATE is a simple and attractive desktop using traditional concepts. MATE is a fork of GNOME 2.

![MATE](/images/desktop-environment/MATE.png)

This command will install MATE and its dependencies:

```
sudo apt install mate-desktop-environment mate-desktop-environment-extras ubuntu-mate-themes
```

---

### Cinnamon

Cinnamon is used in Linux Mint by default. Cinnamon strives to provide a traditional experience and is a fork of GNOME 3.

![Cinnamon](/images/desktop-environment/Cinnamon.png)

Cinnamon is installed with:

```
sudo apt install cinnamon-desktop-environment
```

---

### GNOME

While Pop and Ubuntu contain GNOME by default, both include a number of customizations to GNOME. You can also install a vanilla GNOME session to get the upstream GNOME experience.

![GNOME](/images/desktop-environment/GNOME.png)

You can install the vanilla GNOME session using this command:

```
sudo apt install gnome-session
```

---

### KDE Plasma

The KDE Plasma desktop environment is a familiar working environment and looks similar to Windows' desktop. It is highly customizable and looks clean.

![KDE Plasma](/images/desktop-environment/Plasma.png)

The KDE Plasma desktop and its dependencies can be installed with this command:

```
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

```
sudo apt install ukui-desktop-environment
```

---

### XFCE

XFCE embodies the traditional UNIX philosophy of modularity and re-usability. This environment provides a good amount of conformity for the programs written for it. XFCE also provides a highly customizable environment, while being leaner on resources.

![Xfce](/images/desktop-environment/XFCE.png)

You can install XFCE and its dependencies with this command:

```
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

```
sudo apt install lxde
```

While installing LXDE, you'll see a prompt to select your default display manager:

![Display Manager Section](/images/desktop-environment/lightdm-1.png)

Press Enter to select the OK option. (If the OK option is not selected, press Tab to select it.) At the list, press Enter again to keep gdm3 as your display manager:

![Display Manager Section](/images/desktop-environment/lightdm-2.png)

---

### LXQt

LXQt is a lightweight Qt desktop environment.It will not get in your way. It will not hang or slow down your system. It is focused on being a classic desktop with a modern look and feel.

LXQt can be installed with:
```
sudo apt install lxqt
```
---


### Resource Use

GNOME and KDE are heavy resource desktop environments.  Installations consume more disk space than lightweight alternatives and more CPU and memory resources while in use. This is because they are full-featured; they provide the most complete and well-integrated environments.

LXDE and Xfce, on the other hand, are lightweight desktop environments. They are designed to work well on older or lower-power hardware and generally consume fewer system resources while in use. This is achieved by cutting back on extra features.

---

## Troubleshooting

Desktop environments can interfere with each other or change universal settings. Issues with a desktop environment looking different can generally be fixed by changing the theme in the <u>Appearance</u> control panel.

#### Change Startup/Shutdown Splash Screen

Many desktop environments change the startup and shutdown splash screens. To change the Plymouth splash screen, run these commands:

```
sudo update-alternatives --config default.plymouth
sudo update-initramfs -u
```

#### Change Notification Dialog

Xfce will change the notification dialog to its own. It can be configured with this command:

```
xfce4-notifyd-config
```

Or changed back to Unity's with this command:

```
sudo gedit /usr/share/dbus-1/services/org.xfce.xfce4-notifyd.Notifications.service
```

And replace this line:

> Exec=/usr/lib/xfce4/notifyd/xfce4-notifyd

With this one:

> Exec=/usr/lib/x86_64-linux-gnu/notify-osd

#### Fix Broken Desktop Background

If your background turns to black or white, or stops changing when you select a new background, re-enable it with this command:

```
gsettings set org.gnome.settings-daemon.plugins.background active true
```

#### Remove Duplicate Options From Login Screen

Many desktop environments supply both a bare-bones environment, a full featured environment, or other options. Cinnamon provides both a 2d and 3d environment. Some of the extra options aren't needed, and don't have to be presented as options. The options available at login are in the `/usr/share/xsessions` folder. Simply rename or delete the files to remove them as options.

Lubuntu's extra options:

```
/usr/share/xsessions/Lubuntu-Netbook.desktop
/usr/share/xsessions/LXDE.desktop
/usr/share/xsessions/openbox.desktop
```

Xubuntu's extra option:

```
/usr/share/xsessions/xfce.desktop
```

Cinnamon's extra option:

```
/usr/share/xsessions/cinnamon2d.desktop
```

#### Change Automatic Startup Programs

Some desktop environments add addition programs to be started at boot. To change them, run the <u>Startup Applications</u> program, and turn off any additional startup programs that were undesirably added.

#### Double Lock Screen Passwords

Sometimes the GNOME screensaver presents a second password unlock screen after suspending or locking the screen. It can be disabled with this command:

```
gsettings set org.gnome.desktop.screensaver lock-enabled false
```

Or, if that doesn't stop the 2nd prompt, the screensaver can be removed with this command:

```
sudo apt purge gnome-screensaver
```

When using GNOME, the lock screens will still function normally even with the screensaver disabled.

#### Enable Cinnamon Lock Screen

If Cinnamon's desktop lock screen isn't functioning, this command will re-enable it:

```
gsettings set org.cinnamon.desktop.lockdown disable-lock-screen false
```

#### Managing Multiple Desktop Environments

Ubuntu's unity greeter signin screen will only accommodate a certain number of desktop environments. If the list is too large, then extra options can be deleted from this folder:

`/usr/share/xsessions/`

Another solution is to switch to the lightdm-gtk-greeter following the instructions above. This secondary greeter is installed with GNOME, or can be installed manually with this command:

```
sudo apt install lightdm-gtk-greeter
```

#### Removing Desktop Environments

If you no longer want to use a desktop environment, it can be removed by using:

```
sudo apt purge ...
sudo apt autoremove
```

For example, to remove KDE:

```
sudo apt purge kde-*
sudo apt autoremove
```

Or to remove Unity:

```
sudo apt purge ubuntu-desktop
sudo apt autoremove
```
