---
title: Switching from macOS to Pop!_OS
description: >
  If you are coming from Apple's operating system using Pop!_OS for the first time, we can help make the transition smoother.
keywords:
  - System76
  - Apple
  - OS X
  - macOS
  - switch
  - PopOS
  - Pop!\_OS

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: switching
tableOfContents: true
---

<!--- Document Version: 1.0.0
- Date: (9-3-2020)
- Author: Nathaniel Warburton
- Contributing Editor(s): Emma Marshall, Nathan Dyer, Nick Neal-->

## Workflows and Actions

Pop!\_OS offers corresponding workflows and applications to those available in macOS. Users will find UI elements where they expect them to be as well as some additional features.

### Finding Programs and Files

| macOS | Pop!\_OS |
|---|---|
| Spotlight Search | Activities Overview |

![search](/images/pop-os-mac-screenshots/search.png)

On macOS, Spotlight Search can be launched by clicking the magnifying glass in the upper right-hand corner of the screen, or by pressing CMD+SPACE.
In Pop!\_OS, clicking on the "Activities" menu in the upper left-hand corner of the screen opens the Activities Overview. Overview has a search bar situated in the top-center of the screen which will search file names and applications.

![activities-overview](/images/pop-os-screenshots/activities-pop-os.png)

The Activities Overview screen can also be launched by pressing the SUPER key. Once Overview is launched, users can begin typing to search their computer.

### Application Shortcuts

| macOS | Pop!\_OS |
|---|---|
| Dock | Dock |

In both macOS and Pop!\_OS, a tray of application shortcuts is provided for convenience.

In both OSes this is referred to as the "Dock." Icons show additional indicators when an app is open (a dot next to the icon) and favorite applications can be saved to the Dock for easy access.

The Dock is located on the Left side of the screen, vertically, in Pop!\_OS.
macOS' default is to place the Dock at the bottom of the screen.

The Dock can be moved in both OSes. macOS has this feature in System Preferences; Pop!\_OS accomplishes this change with a GNOME extension.

For more information on GNOME extensions, refer to the following support articles:
[Customize Pop!\_OS](/articles/customize-gnome)
[Dock Customization](/articles/customize-dock)

### View Installed applications

| macOS | Pop!\_OS |
|---|---|
| Launchpad | Show Applications |

Both macOS and Pop!\_OS have a method for showing installed applications in an icon grid.

In macOS this feature is called Launchpad and is represented by the rocket-ship icon.

![launchpad-show-applications](/images/pop-os-mac-screenshots/launchpad-show-applications.png)

In Pop!\_OS, the apps overview can be shown by clicking on the icon resembling a grid of dots in the lower-left of the screen at the bottom of the dock. This is the "Show Applications" icon.

### Install and Manage Software

| macOS | Pop!\_OS |
|---|---|
| App Store | Pop!\_Shop |
| .dmg Files | .deb Files |
| | flatpaks |

In macOS applications are installed from two (2) main sources. The Apple App Store, and directly from developer websites.

Applications downloaded and installed from the internet make use of .dmg files or .pkg files which run installer programs and guide users in moving Applications to the Applications folder.

![appstore-popshop](/images/pop-os-mac-screenshots/appstore-popshop.png)

In Pop!\_OS. The Pop!\_Shop functions as an app store. The Pop!\_Shop highlights popular applications and lets users install them with a click and password authentication.

Debian/Ubuntu based distributions like Pop!\_OS can install applications from .deb files. These files function like .dmg files on macOS; opening a downloaded .deb file launches the installer program "Eddy" and puts the installed application in the correct folder.

Since 20.04, The Pop!\_Shop has offered the ability to install flatpak versions of apps instead of, or alongside .deb files. Flatpaks are self-contained (or containerized) versions of apps that hold everything that program needs in one package. This allows users to run multiple versions of an application, and for the application to be sand-boxed from the main OS.

#### Application Folders

One key difference between macOS and Pop!\_OS is how and where applications are installed. in macOS, with a few exceptions, all installed applications go into a dedicated folder located under the /Applications folder. Applications are self-contained items and can be moved or deleted by acting on the file for the application itself.

In Pop!\_OS, and other Ubuntu-based distributions, there are certain parts of applications that are referenced by other applications and are installed separately. These smaller applications and parts of applications are called libraries or dependencies. Due to this structure of software installation, and depending on how a program is installed, it may be stored in one of a few locations.

- `~/.local/share/applications`
- `/usr/share/applications`
- `/usr/bin`
- `/opt/`

The placement of applications in Pop!\_OS is handled transparently by the operating system. Users don't need to memorize these locations or, in most cases, modify them in any way. They are provided here for reference purposes.

### Workspaces and Window Management

Both macOS and Pop!\_OS use workspaces to organize open application windows

![workspaces-overivew-activities-overview](/images/pop-os-mac-screenshots/workspaces-activites-overview.png)

macOS uses multi-touch gestures, or <kbd>CTRL</kbd>+<kbd>up</kbd> or <kbd>down</kbd>, to launch "Mission Control" and <kbd>CTRL</kbd>+<kbd>left</kbd> or <kbd>right</kbd> are used to navigate between workspaces.

#### Accessing Overview

In Pop!\_OS the "Overview" will show all workspaces. The key(s) to access it are different on certain versions.  

| Pop!\_OS version | Display Overview Default |
|------------------|--------------------------|
| 20.04 LTS | <kbd>SUPER</kbd> |
| 21.10 | <kbd>SUPER</kbd> |
| 22.04 LTS | <kbd>SUPER</kbd>+<kbd>D</kbd> |

They can also use <kbd>CTRL</kbd>+<kbd>SUPER</kbd>+<kbd>up</kbd> or <kbd>down</kbd> to navigate between workspaces.

### Pop Shell

Starting in version 20.04, Pop!\_OS now includes a tiling window-manager as a GNOME extension. The window manager is called pop-shell, and allows for window organization and keyboard navigation among windows and applications.

More info about Pop!\_Shell here:

[Pop!\_OS 20.04 Release Notes](/articles/Pop!_OS-20.04-LTS-Release-Notes)

[Pop-Shell Keyboard Shortcuts](/articles/pop-keyboard-shortcuts)

### File Management

The file-systems layouts in macOS and Pop!\_OS both feature location shortcuts on the left side, tabbed browsing, list vs. icon views, and various sorting options.

| macOS | Pop!\_OS |
|---|---|
| Finder | Files |

 In macOS, Finder displays files and directories (folders), and is represented by the two-tone, blue face icon in the dock.

 In Pop!\_OS, the Files application serves the same purpose. It is represented by a gray icon that looks like a tabbed folder from a filing cabinet.

![files-finder](/images/pop-os-mac-screenshots/files-edited.png)

### Light Mode vs. Dark Mode

As of macOS 10.14 (Mojave), users have the option of using a default "dark mode" for the look and feel of their OS.

Pop!\_OS has had a dark mode since 19.10. There were dark mode options available previously, but the official "Dark Mode" of Pop!\_OS was added in Pop!\_OS 19.10.

Dark Mode can be enabled by visiting

Settings>Appearance>Appearance(Tab)>Dark (Radio button)

![appearance-settings](/images/pop-os-screenshots/appearance-settings.png)

## Software

### Web Browsing and Password Management

| macOS | Pop!\_OS |
|---|---|
| Safari (Default) | Firefox (Default) |

The default web browser in macOS is Safari. Pop!\_OS features the Firefox browser.

Both Safari and Firefox offer privacy features like "do not track" requests, other blockers, and customizeable search-engine defaults.

Users accustomed to using Apple Pay or iCloud Keychain for payments and password management will require workflow adjustments, as these are Apple proprietary   services.

There are cross-platform password managers available, which offer the option to save and auto-fill payment methods.

Most modern browsers offer the ability to create an account that will save and sync user logins.

Examples include:

- [Bitwarden](https://bitwarden.com/)
- [1Password](https://1password.com/)
- [LastPass](https://www.lastpass.com/)

![bitwarden](/images/pop-os-screenshots/bitwarden.png)

Other Browser Options:

- [Chrome](https://www.google.com/chrome/)
- [Chromium](https://www.chromium.org/) (available in the Pop!\_Shop)
- [Brave](https://brave.com/)

For users accustomed to Chrome, Chrome is available for Linux, as well as Chrome-based alternative options like Chromium and Brave.

### Office Work

| macOS | Pop!\_OS |
|---|---|
| Pages/Numbers/Keynote (iWork) | [Writer/Calc/Impress (LibreOffice)](https://www.libreoffice.org/) |

The software suite formerly known as "iWork" contains Apple's equivalent to Microsoft Office. It contains Pages (word processing), Numbers (spreadsheets) and Keynote (presentations). These apps are all capable of reading and saving files in outside formats like those used in Microsoft Office, but by default, they save files in formats specific to the iWorks suite: .pages, .numbers, and .keynote respectively.

![libreoffice-icons](/images/pop-os-screenshots/libreoffice-icons.png)

![libreoffice-windows-open](/images/pop-os-screenshots/libreoffice-windows-open.png)

Pop!\_OS comes with the open-source office suite LibreOffice installed by default. LibreOffice can open Microsoft Office files, and export to Office formats (.docx, etc.). LibreOffice cannot open iWork formatted projects. For example, documents ending in .pages will need saved in a different format before LibreOffice will open them. LibreOffice saves documents in the .odt format by default.

#### Others

- [iCloud.com](https://www.icloud.com/)

If exporting iWork files is not an option, users can also visit iCloud.com in a web browser and use the web-based versions of Pages, Numbers, and Keynote. However, an Apple ID is required (free).

- [Office365 Online](https://www.office.com/)

Microsoft offers in-browser versions of the Microsoft Office suite as part of Office365. Those with subscriptions can access Word, Excel, Powerpoint, Teams, Outlook and others. In most cases, there's no need to install Windows to access Microsoft Office apps.

### Calls and Video Chat

Pop!\_OS does not offer a default messaging app. The preference is that users choose their own and install only what they need/want.
However, many popular 3rd-party applications have Linux versions available.

Recommendations provided here are suggestions for open-source alternatives.

| macOS | Pop!\_OS |
|---|---|
| iMessage | [Element](https://element.io/) (Formerly Riot.im) |
| | [Mattermost](https://mattermost.com/) (also available in the Pop!\_Shop) |
| | [Slack](https://slack.com/) (also available in the Pop!\_Shop) |

For video and instant messaging, macOS provides FaceTime and iMessage. Both of these applications are Apple exclusive, and require an Apple ID to use most of the features.

Element (formerly Riot.im) is an open-source instant messaging client which makes use of the matrix network. The client offers end-to-end encryption, multiple chat rooms and communities, and can be used on the decentralized matrix network or self-hosted. It offers integrations with other applications and platforms like IRC, Slack, and Jitsi.

Linux versions of Slack and its open-source alternative Mattermost are available in Pop!\_Shop.

![element](/images/pop-os-screenshots/element.png)

#### Video/Calls

| macOS | Pop!\_OS |
|---|---|
| FaceTime | [Jitsi](https://jitsi.org/) (browser-based) |
| | [Discord](https://discord.com/new) (also available in the Pop!\_Shop) |
| | [Skype](https://www.skype.com/en/) (also available in the Pop!\_Shop) |
| | [Zoom](https://zoom.us/) (also available in the Pop!\_Shop) |

![jitsi](/images/pop-os-screenshots/jitsi.png)

Jitsi is a multi-user video chat program which runs in a browser. It allows password protected rooms, phone-dial-in and IM-ing alongside video-chat. All calls are encrypted by default using HTTPS, with additional end-to-end encryption options also offered. The System76 team makes daily use of the Jitsi platform.

Linux clients are available for popular apps like Discord, Skype and Zoom.

### Take Selfies

| macOS | Pop!\_OS |
|---|---|
| Photobooth (default) | [Cheese](https://wiki.gnome.org/Apps/Cheese) (available in the Pop!\_Shop) |

There is a program available in the Pop!\_Shop called "Cheese." Cheese allows users to take webcam selfies, and apply image filters.

![cheese](/images/pop-os-screenshots/cheese.png)

### Manage Photos

| macOS | Pop!\_OS |
|---|---|
| Photos (default) | [Shotwell](https://wiki.gnome.org/Apps/Shotwell) (available in the Pop!\_Shop) |

Pop!\_OS comes with a photo viewing application called Image Viewer which previews pictures that are opened from the Files application, similar to the Apple application "Preview."

There are several applications available in the Pop!\_Shop for more in-depth photo management. Shotwell is highlighted below.
Shotwell organizes photos by albums and event dates, and allows for importing, viewing, and sorting photographs.

![shotwell](/images/pop-os-screenshots/shotwell.png)

### Email

| macOS | Pop!\_OS |
|---|---|
| Apple Mail (default) | [Geary](https://wiki.gnome.org/Apps/Geary) (default) |
| | [Thunderbird](https://www.thunderbird.net/en-US/) (available in the Pop!\_Shop) |

Pop!\_OS offers the GNOME "Geary" email client by default. Geary makes use of a column view, and supports adding a variety of email accounts.

![geary](/images/pop-os-screenshots/geary.png)

For users more accustomed to Microsoft Outlook, there's an alternative, open-source program by Mozilla called Thunderbird which supports calendar integration and similar organization features to Outlook.

![thunderbird](/images/pop-os-screenshots/thunderbird.png)

**NOTE:** Regardless of platform or client, many email accounts (e.g. Google) have implemented a security policy where a single-use password must be created for each email app users want to sync with their account. These passwords have to be created from the email provider's account website.

Other Options:

- [Outlook Web](https://outlook.live.com/owa/)
- Webmail (in General)

Microsoft also offers a web-based version of Outlook mail which can be accessed from a web browser.

In addition, most modern Email Service Providers (ESPs) have an online version of their inbox which can be accessed by signing into the ESP account in a browser.

### Watching Videos

| macOS | Pop!\_OS |
|---|---|
| Quicktime | [GNOME Videos](https://wiki.gnome.org/Apps/Videos) (default) |
| | [VLC](https://www.videolan.org/vlc/index.html) (available in the Pop!\_Shop) |

![gnome-video](/images/pop-os-screenshots/gnome-videos.png)

The Pop!\_OS default video player is GNOME Videos. It can play local media or fetch videos from RSS feeds.

Due to copyright reasons, not all video formats are supported out of the box, but many codecs can be installed as needed. Linux defaults to not including non-free software, and users can opt-in if they need additional software support.

Additional codecs can be added with the following commands:

```bash
sudo add-apt-repository multiverse
sudo apt install ubuntu-restricted-extras
```

We also have a help article for installing codecs [here](/articles/codecs)

Another popular alternative is VLC Media Player. This software is available in the Pop!\_Shop, and offers many customizable features.

### Quick File Previews (spacebar)

| macOS | Pop!\_OS |
|---|---|
| [Quick Look](https://support.apple.com/en-uz/guide/mac-help/mh14119/mac) | [Sushi](https://gitlab.gnome.org/GNOME/sushi) (available through `apt` package manager)|

```shell
sudo apt-get install gnome-sushi
```

**NOTE:** You need to restart Nautilus (default file manager) in order for this to take effect. Log out and log back in to do so.

![Sushi](/images/pop-os-screenshots/sushi.png)

### Listening to Music

| macOS | Pop!\_OS |
|---|---|
| Apple Music (formerly iTunes) | [Lollypop](https://wiki.gnome.org/Apps/Lollypop) (available in the Pop!\_Shop) |
| | [Spotify](https://www.spotify.com/us/) (available in the Pop!\_Shop) |

There are many music player apps available for Linux. One polished and versatile example is Lollypop. Lollypop has a similar layout to iTunes and can play music stored local to the computer or stream internet radio channels.

![Lollypop](/images/pop-os-screenshots/lollypop.png)

There is also a Linux client for the popular streaming service Spotify, available in the Pop!\_Shop.

![Spotify](/images/pop-os-screenshots/spotify.png)

Other options:

- [Apple Music](https://music.apple.com) web client

### Video Editing

| macOS | Pop!\_OS |
|---|---|
| iMovie | [Lightworks](https://www.lwks.com/) |
| Final Cut | [DaVinci Resolve/DaVinci Resolve Studio](https://www.blackmagicdesign.com/products/davinciresolve/) |
| | [Kden Live](https://kdenlive.org/en/)  (also available in the Pop!\_Shop) |

Pop!\_OS supports two (2) professional video editing suites. Lightworks and DaVinci Resolve. We have help articles on how to install both, which are listed below:

[Lightworks](/articles/install-lightworks)

[DaVinci Resolve](/articles/install-davinci-resolve)

There is also an open-source video editing program called Kden Live which offers a comparable interface and feature-set to iMovie, and is available in the Pop!\_Shop.

![kden-live](/images/pop-os-screenshots/kden-live.png)

### Sound Recording

| macOS | Pop!\_OS |
|---|---|
| Garageband | [LMMS](https://lmms.io/) (also available in the Pop!\_Shop) |
| Logic Pro | [Audacity](https://www.audacityteam.org/) (also available in the Pop!\_Shop) |
| | [Ardour](https://ardour.org/) (also available in the Pop!\_Shop) |

There are several applications that can be used for music editing and sound recording.

![LMMS](/images/pop-os-screenshots/lmms.png)

LMMS (Let's Make Music Software) is an open-source music mixer which can record and loop inputs from midi-keyboards.

![audacity](/images/pop-os-screenshots/audacity.png)

Audacity can be used for recording and editing voice tracks for things like podcasts and memos.

![ardour](/images/pop-os-screenshots/ardour.png)

Ardour is for more advanced audo engineering. It contains a multi-channel track and midi mixing program.

LMMS, Ardour and Audacity are all available in the Pop!\_Shop.

### Development

| macOS | Pop!\_OS |
|---|---|
| Xcode (available in the App Store) | Text Editor (default) |
| | [Sublime Text](https://www.sublimetext.com) (available in the Pop!\_Shop) |
| | [Microsoft VSCode](https://code.visualstudio.com/) (available in the Pop!\_Shop) |

Pop!\_OS does not have a proprietary coding language, but supports a variety of languages and tools for development. The built in program Text Editor supports markdown formatting, and other text editor modelines.

Common development tools like Sublime Text and Microsoft Visual Studio Code are also available in the Pop!\_Shop.

![text-editor](/images/pop-os-screenshots/text-editor.png)

![sublime](/images/pop-os-screenshots/sublime.png)

![vscode](/images/pop-os-screenshots/vs-studio.png)

### Gaming

| macOS | Pop!\_OS |
|---|---|
| App Store/Arcade | Pop!\_Shop |
| Steam | [Steam](https://store.steampowered.com/) |
| | [Lutris](https://lutris.net/) (also available in the Pop!\_Shop) |

There are many ways to game on Linux.

Developers offer a variety of game titles through the Pop!\_Shop, and there are large numbers of Linux native games available through Steam.

Valve, the company behind Steam, now actively contributes improvements to the WINE project and have forked their own version of it, called Proton, for even greater compatibility for Windows games on Linux.

Lutris is a community created, open-source program which helps users organize their games library and offers turnkey installer scripts for a variety of popular games, emulators and compatibility software.

With these ongoing improvements, there are many more games available on Linux than on macOS.

The website [ProtonDB (Proton Database)](https://www.protondb.com/) is an unofficial repository of user-tested games with notes about how well they work on Linux.

![popshop-games](/images/pop-os-screenshots/popshop-games.png)

![steam](/images/pop-os-screenshots/steam.png)

![lutris](/images/pop-os-screenshots/lutris.png)

### Cloud Storage

| macOS | Pop!\_OS |
|---|---|
| iCloud | [iCloud.com](https://www.icloud.com/) (browser access) |

There are several cloud options that can be used for backups and file syncing on Linux. Additionally, many of iCloud's files and programs can be accessed through a web browser on Pop!\_OS.

Additional Options:

- [Nextcloud](https://nextcloud.com/) (desktop and web clients, also available in the Pop!\_Shop)
- [SpiderOak](https://spideroak.com/) (desktop and web client)
- [Dropbox](https://www.dropbox.com) (desktop and web client, also avilable in the Pop!\_Shop)
- [Google Drive](https://drive.google.com/) (Files integration and web client)

## System Management

### Kill Programs

| macOS | Pop!\_OS |
|---|---|
| Force Quit (default) | System Monitor (default) |
| Activity Monitor (default) | Terminal (default) |

On macOS there are two main ways to kill unresponsive programs. The force-quit menu and the Activity Monitor application.

![force-quit-activity-monitor](/images/macOS-Screenshots/force-quit-activity-monitor.png)

Force-quit is launched by clicking on the Apple menu in the upper-left-hand corner of the screen, or by pressing Opt+Cmd+Esc, selecting the application, and then "force-quit."

Users can also get an overview of running processes and stop or kill them from the Activity Monitor.

It is also possible to kill processes in the Terminal if process ID is known.

![system-monitor-terminal](/images/pop-os-screenshots/system-monitor-terminal.png)

Pop!\_OS also has options for killing misbehaving processes. System Monitor (equivalent to Activity Monitor), displays running processes and allows users to stop or kill them.

While Pop!\_OS does not have a force-quit menu, when applications freeze, the OS will show a pop-up window asking if users want to wait on the program or force-quit it.

The same Terminal commands available in macOS can also be used in Pop!\_OS.

Running the command:

```bash
top
```

will show a similar output to what's displayed in the System Monitor.

Once the offending process' Process ID (PID) is known (either from System Monitor or the Terminal) the process can be killed with the terminal command:

```bash
sudo kill -pid ####
```

### Networking

| macOS | Pop!\_OS |
|---|---|
| System Preferences | Settings |

![network-setting-pop-mac](/images/pop-os-mac-screenshots/network-settings-pop-mac.png)

macOS and Pop!\_OS manage network menus and settings almost identically. Both have a drop-down menu in the upper right corner of the screen to quickly connect to an available network.

Both have dedicated areas in System Preferences (macOS) and Settings (Pop!\_OS) to edit saved connections, IP settings, and to configure things like proxy settings or Virtual Private Networks (VPNs).

### Disk Encryption

| macOS | Pop!\_OS |
|---|---|
| Filevault | LUKS (during Install) |

![encryption-pop](/images/install-pop/5_encrypt_notice-cropped-20-04.png)

On Pop!\_OS, encryption is offered during initial setup, or a reinstall. The OS partition is encrypted using the LUKS disk layout. This tool adds a decryption screen so that every time the computer boots, it requires a decryption password before moving to the login screen. With an encrypted drive, if hardware is stolen, the only way to remove the encryption is to erase the disk.

**NOTE:** Because of the way encryption is implemented on Pop!\_OS, and the delicate work involved in encrypting or decrypting the drive, encryption is only offered during intial set up. If users choose not to use encryption, and want to add it later, it will require a full erase and reinstall. Create backups accordingly.

### System Backups

| macOS | Pop!\_OS |
|---|---|
| Time Machine | [Timeshift](https://github.com/teejee2008/timeshift) (available in the Pop!\_Shop) |
| | [Déjà Dup Backups](https://wiki.gnome.org/Apps/DejaDup) (available in the Pop!\_Shop) |

![pop-backups](/images/pop-os-screenshots/pop-backups.png)

In the interest of user-choice, Pop!\_OS does not have a built in backup utility, but several applications are available to choose from in the Pop!\_Shop. The two (2) featured here are Timeshift (pictured left) and Déjà Dup Backups (pictured right).

Timeshift is designed to capture snapshots and restore points of the system at a given time and is only compatible with backing up a Linux system to another Linux formatted drive.
The snapshot feature is comparable to snapshots offered by virtual machine managers.

Déjà Dup Backups is closer in functionality to Time Machine. It offers local hardware backups, or backups to network locations. Folders and files can be added to the backup list manually, and it backs up the Home folder by default. Automatic backups can also be run on a schedule.

To read more about methods of backing up your system visit our help article: [Backup Files](/articles/backup-files)

## Give Pop!_OS a try

If you want to try Pop!_OS yourself you can grab the OS image (ISO) from this [link](/articles/live-disk).

<!-- # [What if I have an iPhone?](#iphone)

For more details about how to manage files and backups between iPhone and Pop!\_OS, visit our help article: [Use an iPhone with Pop!\_OS](/articles/use-iphone-with-linux) -->
