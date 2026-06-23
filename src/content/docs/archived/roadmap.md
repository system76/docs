---
title: Roadmap for Pop!_OS
description: >
  Focus and features for each release!
keywords:
  - Support
  - Development
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: true
section: pop
tableOfContents: true
---

This roadmap details features which are currently-planned to be implemented in Pop!_OS, as well
as major features which were added to Pop!_OS during previous release cycles. Only features
specific to Pop!_OS will be listed here. To see how features are chosen, see the
[Pop!_OS Development Approach page](/articles/pop-os-development-approach/).

However, note that feature development in Pop!_OS is not exclusive to any particular point release,
as we follow a rolling-release strategy for updates to projects which we maintain. This means that
features are added to Pop!_OS as soon as they are finished, instead of being withheld to the next
point release. When features are completed, they are added to the latest "stable" and
"long term stable (LTS)" point releases, whenever possible.

---

## Currently-Planned Features

These are features which we would either like to, or are already in the process of, implementing.
As these are completed, they will be listed underneath a release cycle, indicating which cycle
the feature was implemented during. When a feature is listed as being implemented during the 20.04
release cycle, this means that it was completed before 20.04 was released, and thus was available
on release for 20.04.

### Async Fetcher

A new Rust crate built around asynchronous I/O, using Rust's async / await syntax. This project will be used across all Pop!_OS and System76 projects for caching, fetching, and validating files fetched from HTTP/S file servers. Features shall include:

* Built around `futures03` streams
* Concurrently fetching multiple files at the same time
* Using multiple concurrent connections per file (as parts) to increase throughput
* Using multiple mirrors to fetch different parts of the same file from
* Defining minimum and maximum part size
* Defining maximum requests per peer, and maximum number of files to fetch concurrently
* Checking modified timestamps and content length to determine when fetching is required
* Optional checksum validation (MD5 / SHA256)
* Cancellation, timeout, and retry handling
* Resumable downloads, when a download is interrupted
* Command line client with IPC and RPC support, w/ process isolation support

The current goal is to use this for:

* Rapidly synchronizing apt source lists
* Speedily fetching & validating debian packages
* Fetching the recovery ISO, which would benefit from resumable downloads
* Creating a useful tool for our open source community

### GNOME Online Accounts

* Add additional providers to GNOME Initial Setup (CalDav & CardDav)
* Patch GNOME Calendar and GNOME Contacts for these new providers

### Hybrid Graphics

* Switch to specify running applications on the discrete GPU in GNOME Settings
* Patch Steam and other Pop maintained and supported applications with a graphics preference description in the desktop file
* Documentation to help the community identify apps that don't support hybrid graphics and details on how developers can add support
* Add right click app icon option > Application Settings

### Installer

* Alongside OS installation option
* Resizing LUKS and LVM partitions
* Create Rust bindings for `blkid`, `devmapper`, and `cryptsetup`
* Create Rust crates for disk-probing and management
* Separate disk management from the installer
* Providing `distinst` as a daemon for the installer
* Enabling Wayland support for the installer
* Support for exotic LUKS and LVM combinations
* LVM snapshot support
* Support for ZFS and its special features

### Packaging

* Move away from Launchpad and host our own apt repositories
* Rewrite our packaging CI in Rust
* Support periodic watching of repositories for commits to be built
* Support distributing package builds to multiple build servers
* Possibly support a web interface for managing the repository and build servers

### Pop!_OS General

* Add changelogs to projects using a changelog generator based on [conventional commits] (we may have to build this tool ourselves)
* Change LSB descriptions to Pop for 20.04
* Smooth codec installation
* Remove System76 driver for System76 hardware customers. Integrate necessary information and features into the desktop.
* Pop features in GNOME Settings > About for the new GNOME 3.36 panel design
* Transition Thelio I/O firmware updates to LVFS
* Battery threshold settings for System76 hardware with open firmware
* Keyboard configuration utility for System76 hardware with open firmware

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/

### Pop!_Shell

The #1 competitor to GNOME Shell for our users is i3wm. Tiling window management in GNOME Shell is currently really bad, but we can fix this with:

* Advanced window tiling
* Setting to launch applications tiled
* Keyboard shortcuts update for window navigation and movement
* Quick launcher for launching apps and switching windows

### Pop!_Support

Create a utility for our support team and users, which contains:

* Common repair functions for automatically repair common issues
* Automatic mounting and chrooting for repairing an install
* Generation of logs to send to the support team

### Pop!_Upgrade

* Add support for updating the recovery partition
* Add support for refreshing the OS from GNOME Settings
* Reduce the bandwidth required to update the recovery partition
* Switch to using asynchronous I/O for all network connections
* Replace all usage of `futures01` & combinators with `futures03` & async/await
* Improve handling of network timeouts by integrating our `async-fetcher` crate
* Upgrade to `dbus-rs` 0.7, and investigate handling requests in an async fashion

### Popsicle

* Support for creating bootable Windows 10 drives
* Imaging from an existing drive to many other drives
* Updating the GTK code to use new practices that we've developed
* Add support for asynchronous I/O in the GTK frontend
* Change the way the GTK frontend works so that Flatpak can be supported
* Internationalization support, with [Project Fluent](https://projectfluent.org/).

### System76 Power

* System76 Power settings in GNOME Control Center
* Configurable power profiles in a simple configuration format
* Support for handling AC plug events, with configurable thresholds
* Power profiles for non-Intel processors
* Investigate handling DBUS requests in an async fashion
* AMD integrated / NVIDIA dedicated graphics switching
* AMD integrated / AMD dedicated graphics switching
* Intel integrated / AMD dedicated graphics switching

### Tensorman

* Backport Docker and Tensorman to 18.04 LTS
* AMD GPU support with ROCm (requires packaging ROCm?)

---

## Pop!_OS 20.04

These are features which have been implemented during the 19.10 release cycle, leading up to 20.04.

### Contributions to upstream projects

#### Rust Crates

Contributions to Rust crates which we rely on in our software

* [futures-codec](https://github.com/matthunz/futures-codec/pull/36): Added `Decoder::decode_eof` method
* [http-client](https://github.com/http-rs/http-client/pull/14): Fixed an issue with GET requests sending an empty body
* [pbr](https://github.com/a8m/pb/pull/92): Made the `MultiBar` thread-safe, enabling bars to be added dynamically over time

### Packaging

* Packaged the [NVIDIA Codec SDK](https://github.com/pop-os/nvidia-video-codec)
* ffmpeg was rebuilt with NVENC support, enabling NVENC in OBS
* Chromium is now being built from Debian sources with VAAPI HW decode support

### Popsicle

* The CLI has been rewritten around asynchronous I/O, which significantly reduced memory use.
  * We previously used one thread per USB device being flashed -- now we only need one
  * Which required 68 MiB to flash 3 devices, instead of the 4 MiB today
* The CLI now outputs a stream of machine-readable RON events when stdout is not a TTY.

### Pop Upgrade

* Moved the GTK widget from the Info Overview to a new Upgrade panel in GNOME Settings
* Added a refresh OS section to the upgrade panel
* Support for recovery upgrades
* Support for cancelling a recovery upgrade
* Misc. improvements to fix common issues and increase success rates

### Rust Crate Releases

New Rust crates that we've developed and released

* [as-result](https://github.com/pop-os/as-result): AsResult / IntoResult traits, with ExitStatus handling
* [async-fetcher](https://github.com/pop-os/async-fetcher): asynchronous file fetcher
* [deb-changelog](https://github.com/pop-os/deb-changelog): Zero-copy parser and futures codec for debian's changelog format
* [deb-control](https://github.com/pop-os/deb-control): Zero-copy parser and futures codec for debian's control file format, used in most Debian files
* [deb-diversion](https://github.com/pop-os/deb-diversion): Futures codec for Debian's `dpkg` diversion file
* [gtk-extras](https://github.com/pop-os/gtk-extras): Common GTK widgets, functions, and behaviors across our GTK projects
* [pidfd](https://github.com/pop-os/pidfd): Linux (>= 5.3) process ID file descriptor support
* [srmw](https://github.com/pop-os/srmw): asynchronous single-reader, multi-writer
* [usb-disk-probe]: asynchronous USB disk device prober for Linux
* [fd-reactor]: A simple async reactor for `libc::poll`ing file descriptors and waking up task executors

### System76 Power

* Upgraded from `dbus-rs` 0.6 to 0.7 (adds support for async I/O)
* Support for hybrid graphics switching, to keep the GPU powered off until an application requests it

### Flatpak Support

With the open source ecosystem increasingly relying upon Flatpak as a distribution model by application developers on the Linux desktop, it is important to bring that support to Pop!_OS out of the box. This entails:

* Having Flatpak installed by default, with the Flathub source repository
* Adding Flatpak repo support in Repoman, our tool for managing apt repositories
* Ensuring that the Pop!_OS Repo is listed as a 1st party in Repoman
* Updating the Pop!_Shop to bring in Flatpak support from elementary
* Fixing the display of app sources so that Pop's repository has higher priority

---

## Pop!_OS 19.10

Pop!_OS 19.10 was released on October 22nd, 2019.

### Packaging

* The `linux-system76` package now provides a kernel that is shared between all supported releases

### Pop Upgrade

The upgrade daemon was released in the days leading up to the 19.10 release. The features of the
upgrade daemon include:

* A DBus daemon for carrying out checking for release upgrades and setting them up
* A systemd offline-update service which the upgrade daemon prepares for the next boot
* A desktop notification service which runs as the user, to provide desktop notifications
* A CLI and GTK frontend for interacting with the DBus daemon
* Integration inside of GNOME Settings for the GTK widget

### System76 Power

* Support for NVIDIA hybrid graphics was added to the daemon

---

## Pop!_OS 19.04

Pop!_OS 19.04 was released on April 18th, 2019.

### Installation

* A handful of bugs were reported and fixed during this cycle.
* A few additional system checks were added to prevent incompatible installation setups.
* EFI partitions now require at least 500 MiB, to decrease the likelihood of issue reports
  consisting of no-space-left errors.

### Packaging

The following packages were added / updated during this release.

* GameHub
* Geary 3.32 backported to bionic and cosmic
* GNOME Authenticator
* GNOME Podcasts
* Lollypop
* Lutris
* PulseEffects
* Steam 1.0.0.59

### Popsicle

* The GTK UI was rewritten using a better architecture for UI app development.
  * The code is now easier to maintain, due to being less complex, and having less of it.
  * UI is now more responsive than before, so the chance of the UI hanging is now impossible.
* A bug was fixed that would cause systems with card readers to indefinitely hang.

### Refresh OS Installations

Two features have been developed during this cycle: "Refresh" and "Alongside OS" installation
options. The refresh feature was the first to be complete, providing the ability to retain
user accounts and files while reinstalling the OS. The alongside OS option will follow shortly
after.

### System76 Power

* Fan controls have been improved in this release.
* The daemon now actively knows which state is currently set.
* Signals to listening clients are now sent when the power profile is changed.

### Upgrade Daemon

Due to the many issues experienced with Ubuntu's `do-release-upgrade` script, a new project was
started during this cycle to improve the reliability of release upgrades. This daemon is
responsible for performing system repairs and preparing the system for a release upgrade.

* Adds the ability to upgrade the recovery partition.
* Adds the ability to perform a release upgrade offline with systemd and the recovery partition.
* Offline installs with systemd will boot into a minimal environment to perform the upgrade,
  and reboot when finished.
* As with `system76-power`, it provides a CLI frontend in the same binary that the daemon
  launches from.
* Some limited forms of repairing possible system errors that would prevent a release upgrade.
* Provides a daemon that can be used to check for release upgrades

---

## Pop!_OS 18.10

Released on October 20th, 2018, the focus of development was furthered improvements to the
reliability and feature set provided by our distribution installer; the addition of many third
party applications, including Tensorflow; and the inclusion

### Installation

* All bugs reported against the new installer were fixed during this cycle.
  * Many system checks were added to prevent incompatible installation setups.
  * A new crate for managing keyboard and language locales was developed.
  * Setting the correct keyboard layout for the cryptsetup screen was fixed.
* Various portions of `distinst` were separated into multiple crates.
* Improved support for detecting required packages based on installation configuration, and
  removal of packages which are not necessary for that configuration.

### Packaging

* `debrep` was created to experiment with building our own apt repositories from a TOML spec.
* A third party repository was created from `debrep` for storing packages fetched from third
  party resources, as well as NVIDIA and Tensorflow packaging.
* Many popular applications were added to the repositories, with more to come in the future.

### Pop!_Shop

* Various actions throughout the UI would cause the application to hang. Patches were submitted
  upstream to elementary to prevent the UI from freezing.
* A patch for a screenshot cache and parallel fetching of screenshots was also submitted.

### System76 Power

* Fan controls were added, with support for Thelio's I/O boards.
* The CLI now handles arguments via the `clap` crate, to provide a quality user-friendly interface.
* A new `--experimental` flag was added for the daemon to launch with additional `Powertop` and
  TLP-recommended power-saving options.

---

## Pop!_OS 18.04

Released on April 26th, 2018, the focus of development was a new installer that supports encrypted
installations, integration of the Pop!\_Shop, the addition of a multiple USB file flasher utility
(Popsicle), and overall improvements to the desktop experience.

### HiDPI Displays

* Package the system76-driver HiDPI daemon separately for Pop!_OS (<https://github.com/pop-os/pop/issues/98>)
* Create a setting toggle in GNOME Settings Display (<https://github.com/pop-os/pop/issues/97>)
* Correct the projector shortcut issue (<https://github.com/pop-os/pop/issues/96>)

### Installation

Develop a simple and fast installer that introduces users to Pop!_OS and enables System76 to ship full disk encryption on hardware out of the box.

* Installer backend (<https://github.com/pop-os/distinst>)
* Installer frontend (<https://github.com/pop-os/installer>)
* GNOME Initial Setup (<https://github.com/pop-os/gnome-initial-setup>)
* On detection of system76 hardware, the `system76-driver` package is installed.
* With the NVIDIA ISO on non-NVIDIA hardware, the nvidia drivers are removed.

### Pop!\_Shop

* Add Pop!_OS banner to the home page
* Setup a server for curated apps
* Determine best-of-class applications and tools for each category
* Button to launch applications after installing
* Fix issue - applications are listed in reverse order (<https://github.com/pop-os/shop/issues/7>)

### System76 Power

* A new daemon was developed that provides and controls power profiles.
* Added a shell extension to provide the UI options in the desktop to control these profiles.
  * These controls are only displayed if a battery is detected on the system.

---

## Pop!_OS 17.10

17.10 was released October 19th, 2017. It is the current release. Struck through work was completed. This is the first Pop!_OS release and focuses on first use experience, appearance, and default applications.

### Appearance

* Plymouth work for smooth and beautiful boot to login transitions
* Pop!\_Theme refinement
* GDM Theme

### Determine Default applications

* Choose an email client for the initial release
* Determine pre-installed applications

### Installation

* Add a feature to Ubiquity to toggle between "minimal" and "complete" Ubiquity. Pop!_OS will use minimal while other Ubuntu flavors can use the complete. Paired down Ubiquity to a minimal set of screens and packaged separately.
* Use GNOME Initial Setup for user configuration
* Add nvidia driver to the installation media
