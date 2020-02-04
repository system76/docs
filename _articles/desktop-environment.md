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

The desktop enviroment is basically the top graphical layer of the OS. The desktop environment is launched by a display manager; Pop!_OS and Ubuntu both use GDM (GNOME Display Manager) by default. If multiple desktop environments are installed, GDM will display a gear icon, which will allow you to select the desktop environment you want to launch.

![Login2](/images/desktop-environment/Login2.png)

---

### MATE

MATE is an intuitive and attractive desktop using traditional concepts. MATE is a fork of GNOME 2.

![MATE](/images/desktop-environment/MATE.png)

MATE is installed with:

```
sudo apt install mate-desktop-environment  
```
And optionally
```
sudo apt install mate-desktop-environment-extras
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

GNOME is the default desktop environment in Pop!_OS and Ubuntu 17.10. It contains both a modern and a classic version.

![Gnome](/images/desktop-environment/Gnome.png)

![Gnome2](/images/desktop-environment/Gnome2.png)

In Ubuntu, GNOME is installed with:

```
sudo apt install ubuntu-gnome-desktop
```

---

### KDE

The KDE Plasma desktop environment is a familiar working environment and looks similar to Windows' desktop. It is highly customizable and looks clean.

![KDE](/images/desktop-environment/KDE.png)

A minimal KDE is installed with:
```
sudo apt install kde-plasma-desktop
```
A standard KDE desktop is installed with:
```
sudo apt install kde-standard
```
For a complete set of KDE applications and Plasma desktop
```
sudo apt install kde-full
```

KDE may have a packaging conflict which will cause the installation to fail.  If so, two packages need removed to complete the installation.  After an error, please run these commands to remove the packages and finish the installation:

```
sudo dpkg --purge unity-scope-gdrive account-plugin-google
sudo apt install -f
```
---

### UKUI

UKUI is a lightweight desktop environment based on pluggable framework for Linux and other Unix-like Distributions. It provides a simpler and more enjoyable experience for browsing, searching, and managing your computer.It is developed using GTK and Qt.

UKUI can be installed with:
```
sudo apt install ukui-desktop-environment
```
For additional optional components:
```
sudo apt install ukui-desktop-environment-extras
```

---

### XFCE

XFCE embodies the traditional UNIX philosophy of modularity and re-usability. This environment provides a good bit of conformity for the programs written for it. Xfce also provides a highly customizable environment, while being leaner on resources.

![Xfce](/images/desktop-environment/Xfce.png)

Xfce can be installed with:

```
sudo apt install xfce4
```
For additional options would be to installed

```
sudo apt install xfce4-goodies
```
---

### LXDE

The Lightweight X11 Desktop Environment is a fast and energy-saving desktop environment. It looks similar to older versions of Windows. This is the leanest desktop environment and can help extend battery life in laptops.

![LXDE](/images/desktop-environment/LXDE.png)

LXDE can be installed with:

```
sudo apt install lxde
```
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

#### Change Login Greeter

GNOME will add its own login greeter, which is shown as the second image at the top of this article. To change it, run this command:

```
sudo gedit /etc/lightdm/lightdm.conf
```

And add a line at the bottom to set the preferred greeter:

Unity:

> greeter-session=unity-greeter  

GNOME:

> greeter-session=lightdm-gtk-greeter  

#### Change Automatic Login Environment

If you currently use automatic login to bypass the password login, a default can be set with this command:

```
sudo gedit /etc/lightdm/lightdm.conf
```

And add a line at the bottom to set the (default):

LXDE:
> user-session=Lubuntu  

KDE:
> user-session=kde-plasma-kf5  

Unity:
> user-session=ubuntu  

MATE:
> user-session=mate  

GNOME:
> user-session=gnome  

-or-  

> user-session=gnome-classic  

XFCE:
> user-session=xubuntu  

Edubuntu:
> user-session=gnome-flashback-compiz  

-or-  

> user-session=gnome-flashback-metacity  

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
