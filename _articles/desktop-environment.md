---
layout: article
title: Change the Desktop Environment
description: >
  Would you like to change how your desktop looks and feels?  Ubuntu comes with Unity installed by default. Don't like it?  Don't install another operating system or reinstall a special version of Ubuntu!  Follow these instructions to install additional desktop environments!
keywords:
  - desktop environment
  - MATE
  - KDE
  - XFCE
  - Cinnamon
  - GNOME
  - Mint
hidden: false
section: articles

---

Ubuntu comes with the desktop environment **Unity** installed by default. A desktop environment is responsible for the look and feel of the graphical desktop, and includes many of the key programs that get used every day.

Desktop environments can be installed with a single command and can be selected at the login screen. All desktop environments have access to your home folder and files, so they can share data. They are basically the top graphical layer of Ubuntu, each with it's own individual settings.

![Login](/images/desktop-environment/Login.png)
![Login2](/images/desktop-environment/Login2.png)


##### Important:

Make sure to always pick 'lightdm' as the desktop manager when prompted while installing additional desktop environments. Choosing 'gdm', 'sddm', or another, will break the installation. If needed, the `sudo dpkg-reconfigure lightdm` command can be used to fix this issue.

---

# MATE

Mate is an intuitive and attractive desktop using traditional concepts. MATE is a fork of GNOME 2.

![MATE](/images/desktop-environment/MATE.png)

MATE is installed with:

`sudo apt install mate-desktop-environment-extras mate-dock-applet`


# Cinnamon

Cinnamon is used in Mint Linux by default. Cinnamon strives to provide a traditional experience and is a fork of GNOME 3.

![Cinnamon](/images/desktop-environment/Cinnamon.png)

Cinnamon is installed with:

`sudo apt install cinnamon-desktop-environment`


# Gnome

The GNOME desktop is a different environment than most people are used to. It contains both a modern and a classic version. It is a good example of another way to interact with the operating system, but isn't as straight-forward as other desktop environments.

![Gnome](/images/desktop-environment/Gnome.png)
![Gnome2](/images/desktop-environment/Gnome2.png)

Gnome is installed with:

`sudo apt install ubuntu-gnome-desktop`


# KDE

The KDE Plasma desktop environment is a familiar working environment and looks similar to windows. It is highly customizable and looks great. It is more heavy on system resources than other desktop environments, and isn't recommended for

![KDE](/images/desktop-environment/KDE.png)


KDE is installed with:

```
sudo apt install kubuntu-desktop
sudo dpkg --purge unity-scope-gdrive account-plugin-google
sudo apt install -f
```
\*<small>KDE currently has a package conflict which needs those 2 packages removed to complete installation.</small>


# Xfce

Xfce embodies the traditional UNIX philosophy of modularity and re-usability. This environment provides a good bit of conformity for the programs written for it. Xfce also provides a highly customizable environment, while being leaner on resources than Unity.

![Xfce](/images/desktop-environment/Xfce.png)

Xfce can be installed with:

`sudo apt-get install xubuntu-desktop`


# LXDE

The Lightweight X11 Desktop Environment is a fast and energy-saving desktop environment. It looks similar to older versions of Windows. This is the leanest desktop environment and can help extend battery life in laptops.

![LXDE](/images/desktop-environment/LXDE.png)

LXDE can be installed with:

`sudo apt-get install lubuntu-desktop`


# Edubuntu

Edubuntu has been developed in collaboration with teachers and technologists in several countries and is aimed at users aged 6 to 18. It is designed for easy installation and ongoing system maintenance. It uses GNOME for it's desktop manager.

Edubuntu can be installed with:

`sudo apt-get install edubuntu-desktop`


---

## Caveats and Conflicts

Desktop environments can interfere with each other or change universal settings. Issues with a desktop environment looking funny can generally be fixed by changing the theme in the _Display Settings_ or _Appearance_.


#### Change Login Greeter

Gnome will add it's own login greeter, which is shown at the top of this article. To change it, run this command:

`gksudo gedit /etc/lightdm/lightdm.conf`

And add a line at the bottom to set the preferred greeter:

Unity:
```
greeter-session=unity-greeter
```
GNOME:
```
greeter-session=lightdm-gtk-greeter
```

#### Change Default Desktop Environment

After installing multiple desktop environments, a default can be set for automatic login with this command:

`gksudo gedit /etc/lightdm/lightdm.conf`

And add a line at the bottom to set the (default):

LXDE:
```
user-session=Lubuntu
```

KDE:
```
user-session=kde-plasma-kf5
```

Unity:
```
user-session=ubuntu
```

MATE:
```
user-session=mate
```

GNOME:
```
user-session=gnome
-or-
user-session=gnome-classic
```

XFCE:
```
user-session=xubuntu
```

Edubuntu:
```
user-session=gnome-flashback-compiz
-or-
user-session=gnome-flashback-metacity
```


#### Change Startup/Shutdown Splash Screen

Many desktop environments change the startup and shutdown splash screens. To change the Plymouth splash screen, run these commands:

```
sudo update-alternatives --config default.plymouth
sudo update-initramfs -u
```


#### Change Notification Dialog

Xfce will change the notification dialog to it's own version. It can be configured with this command:

`xfce4-notifyd-config`

Or changed back to Unity's with this command:

`gksu gedit /usr/share/dbus-1/services/org.xfce.xfce4-notifyd.Notifications.service`

And replace this line: `Exec=/usr/lib/xfce4/notifyd/xfce4-notifyd`

With this one: `Exec=/usr/lib/x86_64-linux-gnu/notify-osd`


#### Fix Broken Desktop Background

If your background turns to black or white, or stops changing when you select a new background, re-enable it with this command:

`gsettings set org.gnome.settings-daemon.plugins.background active true`


#### Remove Duplicate Options From Login Screen

Many desktop environments supply both a bare-bones environment, a full featured environment, or other options. Cinnamon provides both a 2d and 3d environment. Some of the extra options aren't needed, and can be turned off. The options available at login are in the `/usr/share/xsessions` folder. Simply rename or delete the files to remove them as options.

Lubuntu's extra options:

```
sudo mv /usr/share/xsessions/Lubuntu-Netbook.desktop /usr/share/xsessions/Lubuntu-Netbook.desktop.bak
sudo mv /usr/share/xsessions/LXDE.desktop /usr/share/xsessions/LXDE.desktop.bak
sudo mv /usr/share/xsessions/openbox.desktop /usr/share/xsessions/openbox.desktop.bak
```

Xubuntu's extra option:

```
sudo mv /usr/share/xsessions/xfce.desktop /usr/share/xsessions/xfce.desktop.bak
```

Cinnamon's extra option:

```
sudo mv /usr/share/xsessions/cinnamon2d.desktop /usr/share/xsessions/cinnamon2d.desktop.bak
```


#### Change Automatic Startup Programs

Some desktop environments add addition programs to be started at boot. To change them, run the _Startup Applications_ program, and turn off any additional startup programs that were undesirably added.


#### Double Lock Screen Passwords

Sometimes the GNOME screensaver presents a second password unlock screen after suspending or locking the screen. It can be disabled with this command:

`gsettings set org.gnome.desktop.screensaver lock-enabled false`

Or, if that doesn't stop the 2nd prompt, the screensaver can be removed with this command:

`sudo apt purge gnome-screensaver`

When using Gnome, the lock screens will still function normally even with the screensaver disabled.


#### Enable Cinnamon Lock Screen

If Cinnamon's desktop lock isn't working, then running this command will re-enable it:

`gsettings set org.cinnamon.desktop.lockdown disable-lock-screen false`


#### Managing Lots of Desktop environments

Ubuntu's unity greeter signin screen will only accommodate a certain number of desktop environments. If the list is too large, then extra options can be deleted from this folder:

`/usr/share/xsessions/`

Another solution is to switch to the lightdm-gtk-greeter following the instructions above. This secondary greeter is installed with Gnome, or can be installed manually with this command:

`sudo apt install lightdm-gtk-greeter`


#### Removing Desktop Environments

If you no longer want to use a desktop environment, it can be removed by using the `sudo apt purge ...` command, followed by the `sudo apt autoremove` command. For example, to remove KDE:

```
sudo apt purge kubuntu-desktop
sudo apt autoremove
```

Or to remove Unity:

```
sudo apt purge ubuntu-desktop unity
sudo apt autoremove
```

We don't recommend removing all unity related packages, as other desktop environments rely on some of those programs to function.
