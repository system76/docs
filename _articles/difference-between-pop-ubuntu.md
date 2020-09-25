---
layout: article
title: Differences between Pop!_OS and Ubuntu
description: >
  Discover the differences between these two Operating Systems
keywords:
   - Ubuntu
   - Pop
   - 18.04
   - 19.04
image: http://support.system76.com/images/system76.png
hidden: false
section: pop

---

# Pop!_OS and Ubuntu: What’s the difference?

Pop!_OS has evolved quite a bit since its 17.10 release. While the easiest way to tell the difference between the two is by testing them out, let’s dive into how we differentiate Pop_OS from Ubuntu.

![General look of desktop](/images/difference-between-pop-ubuntu/pop-desktop-screenshot.png)

<br>
## “Isn’t it just a re-skinned Ubuntu?”

This is a common question to come up, and one that makes our engineers cringe. Yes, Pop!_OS has been designed with vibrant colors, a flat theme, and a clean desktop environment, but we created it to do so much more than just look pretty. (Although it does look very pretty.)

To call it a re-skinned Ubuntu brushes over all of the features and quality-of-life improvements that Pop! developers work diligently to create. For an in-depth look at the effort and manpower that goes into updating and maintaining Pop!_OS, take a look at our [Roadmap](https://pop.system76.com/docs/roadmap/) documentation and the [This Week in Pop!](https://pop-planet.info/forums/forums/project-updates.28/) series on [Pop!_Planet](https://pop-planet.info/). Below, you’ll find a general list of improvements that make Pop!_OS stand out.

<br>
## First impressions: The Installer 

![Installer Images: Download screen](/images/difference-between-pop-ubuntu/Installer-Screenshot.png)

While Pop!_OS is designed to be [easy to use](https://www.forbes.com/sites/jasonevangelho/2018/11/14/a-linux-noob-reviews-the-pop_os-installer-from-system76/#144a421310d4) for Linux beginners, it’s also developed with the tech-savvy professional in mind. Pop!’s installer sets the tone for our philosophy behind the OS: to provide snappy functionality inside a desktop environment that promotes creative thinking.

The installer offers encryption out of the box and takes care of setting up your user preferences (language, keyboard layout, installation method). On first use, the installer also makes it easy to select your time zone and integrate any online accounts into your desktop.

![Intel/AMD + NVIDIA](/images/difference-between-pop-ubuntu/Intel&AMD-NVIDIA-1904.png)

Pop!_OS comes in two versions: Intel/AMD and NVIDIA. This allows us to include different settings and the proprietary NVIDIA driver for NVIDIA systems, ensuring the best performance and use of CUDA tools one command away. On Oryx Pro systems, you can even switch between Intel and Nvidia graphics using a toggle in the top right corner of your screen.

<br>
## Privacy

![Encryption, in-progress screen](/images/difference-between-pop-ubuntu/Encryption-Screenshot.png)

With encryption enabled by default, and reporting through Ubuntu disabled, Pop!_OS believes that your data should truly be yours. Communications with a third party does not occur by default, and will only occur with user consent.

<br>
## Custom Keyboard Shortcuts

After conducting a study of Ubuntu and GNOME keyboard shortcuts, we decided to make some shortcuts more efficient for common user behaviors. The shortcut for switching workspaces, for example, is <kbd>Super</kbd> + <kbd>Arrow</kbd> <kbd>Up</kbd> or <kbd>Down</kbd>.
[See all keyboard shortcuts](/articles/pop-keyboard-shortcuts/)

<br>
## Default Apps: Slimming down on bloatware 

![Pop Shop](/images/difference-between-pop-ubuntu/Pop!_Shop-Screenshot.png)

Pop!_OS includes a selection of apps intended to be comprehensive, but relatively lightweight. Because Pop!_OS is optimized for your workflow, we avoid providing some larger programs by default that slow down your computer. This is especially true for library applications, such as one for storing your photos, which we opt to replace with image viewers or similar apps that are smaller in size. However, if you’re in need of a photo manager, Steam, or a music streaming app such as Spotify, these applications are still available in the Pop!_Shop for a quick install.

<br>
## Features across the board 

![Power Profiles/Graphics toggle](/images/difference-between-pop-ubuntu/system-menu.png)

Pop!_OS is built from Ubuntu repositories, meaning you get the same access to software as Ubuntu. Based on both user feedback and in-house testing, we continue to make changes and updates to the operating system for quality-of-life improvements. The best part is, updates are kept on a rolling release cycle, so you don’t have to wait around 6 months for bug fixes or improvements to your OS. While our [Roadmap](https://support.system76.com/articles/roadmap/) offers a more extensive outline of these changes, we’ve highlighted some of our major improvements below:
 * Vulkan drivers and libraries are installed by default to get the most out of your GPU’s performance. Selecting the NVIDIA version of Pop!_OS on install also downloads the NVIDIA drivers by default.
 * The power profile picker in the top right menu easily toggles between high performance, balanced, and battery saver modes. On the Oryx Pro, this is also where you’ll find the toggle for switching graphics between Intel and NVIDIA. While these features have been developed specifically for System76 products, they may likely still work on your hardware.
 * For scientific workloads, installing [CUDA](https://support.system76.com/articles/cuda/) and [TensorFlow](https://support.system76.com/articles/install-tensorflow/) is made simple with a single command line.
	![CUDA/Tensorflow command](/images/difference-between-pop-ubuntu/Tensorflow.png)
 * Do Not Disturb mode silences notifications to help you focus on your work.
 * systemd-boot bootloader and the automatic configuration tool we’ve created for it called kernelstub replace the outdated GRUB bootloader used on Ubuntu. The systemd-boot bootloader is faster and smaller in size, increasing your computer’s startup speed.

<br>
## Recovery Partition

The recovery partition on this operating system is a full copy of the Pop!_OS installation disk. It can be used exactly the same as if a live disk copy of Pop!_OS was booted from a USB drive. The existing operating system can be repaired or reinstalled from the recovery mode. You can either do a refresh install, which allows you to reinstall without losing any user data or data in your Home folder, or opt to do a fresh install, which will essentially reset all OS data. Refresh Installs are only available on a fresh install of either Pop!_OS 19.04 or 18.04 (not through upgrading).
