---
layout: article
title: Run Windows Programs in Pop!_OS Using Bottles
description: >
   How to run Windows-only programs in Pop!_OS using Bottles.
keywords:
  - Emulation
  - Wine
  - Bottles
  - Protondb
  - Linux gaming
  - Windows 

hidden: false
section: software
tableOfContents: true
---

[Bottles](https://docs.usebottles.com/) is a front end for Wine that uses <u>environments</u> to streamline configuration of libraries and dependencies. These environments simplify steps required to get up and running with Windows-only applications.

![Bottles Main Screen](img/bottles-main-screen.png)

## Considerations

A program must be compatible with Wine in order to run in Bottles. Not all Windows applications will work with Bottles.

## Installation

The Bottles Flatpak is easily installed using the Pop!\_Shop.

![Install Bottles Pop Shop](img/install-bottles-pop-shop.png)

You can also install Bottles from the command line:

```
flatpak install flathub com.usebottles.bottles
```

## Create Your First Bottle

You can choose a gaming, application, or custom environment. In this example, we will install a Windows application.

1. Launch Bottles and click through the introductory screens. Click `Create a new Bottle`.
  ![Create a new bottle](img/create-new-bottle.png)
2. Select the option to create an `Application` environment. Enter a name for your new bottle, then click `Create`.
  ![Select Application Environment](img/select-application-environment.png)
3. Wait while required dependencies and libraries are installed. Click `Close` when the process completes.
  ![Install Dependencies](img/install-dependencies.png)
4. Select your newly created bottle by clicking the `>`.
  ![Launch Bottles](img/launch-bottle.png)
5. Click `Run executable`.
  ![Run Executable](img/run-executable.png)
6. Navigate to your .exe file.
  ![Navigate to exe](img/navigate-to-exe.png)
7. Complete the setup wizard for your Windows executable.
  ![Complete Setup](img/complete-setup.png)

### See Also

- [Gaming on Pop!\_OS](/articles/linux-gaming/)
- [Creating Virtual Machines in Linux](/articles/virtualization/)
