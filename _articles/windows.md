---
layout: article
title: Windows - Use Windows Programs
description: >
  This is how to use Windows programs in Pop!_OS.
keywords:
  - Support
  - virtual
  - machine
  - Windows
  - Windows 10
  - Dual Boot
  - Dual
  - VM
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /windows
section: articles

---

Setting up a Windows Virtual Machine is easy and makes for a great experience running Windows on System76 computers. The virtual machine can be started, stopped, and suspended without requiring the computer to be restarted, and you can run Windows and Pop!_OS applications simultaneously.

Virtual machines do impose a slight performance penalty in their operation, depending on the exact application. Many applications will run near full-speed, but applications that depend on heavy computations or access to the GPU (like games and video editing software) will likely be faster with a dual boot. Setting up a Windows-Pop!_OS Dual Boot is beyond the scope of this support.

### Understand Virtual Machines

Virtual Machines are a method of running multiple OSs on your computer simultaneously. It's conceptually a second computer that you control through a special application called a Hypervisor. You can install an additional operating system on this virtual computer, which you can then boot and run as if it were another system.

### Install VirtualBox

Running a virtual machine will require a Hypervisor, which is a special application that runs and manages the virtual machine. We recommend installing <u>VirtualBox</u> for your hypervisor, since it's easy to set up and use, and available for free. It's available in the <u>Pop!_Shop</u>.

Open up the <u>Pop!_Shop</u>, then enter *virtualbox* in the search field. Click on the <u>VirtualBox</u> result with the blue icon, then click on **More Info**. You should see the window below:

![VirtualBox Listing in USC](/images/windows/step1.png)

Click on the Install button, then wait for the download and install process to complete. When it's finished, <u>Pop!_Shop</u> will tell you that it was installed on the current date, like below:

![VirtualBox Installed through USC](/images/windows/step2.png)

### Obtain Windows Image

You will need to obtain a Windows Installation disk image. If you have a DVD drive, an Installation DVD will also work. If you get a disk image file, be sure that it's an ISO format file, as this is what <u>VirtualBox</u> will work with. Save the ISO file somewhere on your computer: the `Documents` folder in your home folder would be a good place.

Windows 10 can be downloaded from [here](https://www.microsoft.com/en-us/software-download/windows10ISO).

### Create Virtual Machine

Once you have <u>VirtualBox</u> installed, we'll need to create the virtual computer upon which we'll install Windows later. Press the Super Key on your keyboard <kbd><span class="fl-ubuntu"></span></kbd>, <kbd><span class="fl-pop-key"></span></kbd> and then enter *virtualbox* in the search field.

![Opening VirtualBox through the Dash](/images/windows/step3.png)  

![VirtualBox Main Window](/images/windows/step4.png)  

Click on the **New** button in the toolbar, then give your machine a name you can remember it by. If it isn't already filled out, set the machine "Type" to **Microsoft Windows** and the "Version" to **Windows 10 64-bit**, and click **Next**.

![Setting up the Virtual Machine](/images/windows/step5.png)

Increase the Virtual Machine Memory Size to half of the total RAM available. For the Hard Drive, you'll want to choose to **Create a virtual hard drive now**.

![Creating a virtual hard drive](/images/windows/step6.png)

For the options in creating the virtual hard drive, create a **VHD (Virtual Hard Disk)**, **Fixed size**, at least 16 GB, or larger.

### Install Windows

Once you've created the new VM, you should see it listed in the <u>VirtualBox</u> window:

![VM listed in the VirtualBox Window](/images/windows/step7.png)

The next step is to boot the virtual machine and install an OS on it. Click on the VM in the list so that it is highlight orange, then click the **Start** button. This is equivalent to pressing the power button on the virtual computer.

<u>VirtualBox</u> will now ask you to select a start-up disk. We recommend finding a digital download (ISO File), since Windows 10 is not distributed on DVD.

Click the small folder icon next to the dropdown, then point <u>VirtualBox</u> at your ISO file and open it. <u>VirtualBox</u> will insert the virtual DVD into the virtual optical drive, then boot the disk.

![Start-up disk selection](/images/windows/step8.png)

![Windows booting up](/images/windows/step9.png)

After Windows finishes booting from the DVD, you should see the Windows Setup window. Select Language, Time and Currency, and Keyboard preferences, then click **Next**.

![Windows Setup window](/images/windows/step10.png)

On the next screen, click **Install Now** to start the installation.

![Click Install Now to start the installation](/images/windows/step11.png)

You'll next need to enter your product key for the copy of windows you got. Be sure to enter this exactly as it's listed on the sticker or in your email.  Windows 10 can be run without a product key for a rather long time without issues.  If you don't have a product key, select **I don't have a key**.  Otherwise, click **Next**.

![Enter your Product Key](/images/windows/step12.png)

Review the terms of the EULA, then check the box to accept the license terms and click **Next**.

![Accept the EULA](/images/windows/step13.png)

You are required to accept the terms of the EULA before completing the installation. Checking the box and clicking **Next** assumes you do accept the terms and agree to be bound by them. Do not continue with the installation if you don't agree to the terms in the EULA.

Make sure you select **Custom: Install Windows only (advanced)**, as this is a new installation of Windows.

![Select the Custom: Install Windows only option](/images/windows/step14.png)

Select the **Drive 0 Unallocated Space** area, then click **Next**.

![Selecting Partition 2 for installation](/images/windows/step15.png)

Windows will next begin copying over the installation files onto the virtual hard disk. This step may take a while, so feel free to work in the background while it's running. The virtual machine will automatically reboot when it's time to continue.

![Installing Windows](/images/windows/step16.png)

When the VM reboots, you may be prompted to "Press any key to boot from CD or DVD...". Do not press any keys here, or the installation will start over.

![Do not press any key. Seriously.](/images/windows/step17.png)

Windows will now finish installing files and get the system ready to be set up. The virtual machine may reboot again. Remember not to press any keys to boot from the CD or DVD.

![Getting ready](/images/windows/step18.png)

After the process is finalized, you'll be able to begin the set up process.

### Set Up Windows

Set up will begin with the following screen:

![Get Going Fast](/images/windows/step19.png)

You may select either express settings, or you can customize the settings to suit your preferences. Windows will next download updates to ensure you're on the latest version of the OS. This step may take a while, depending on your Internet connection. When it's finished, Windows will ask you who owns this PC. It's recommended to select **I own it** and click **Next**.

![Who owns this PC?](/images/windows/step20.png)

Next, you'll be prompted to sign in with your Microsoft Account. This step is recommended as it can allow for resetting your password remotely if you forget it. It can also sync your settings, apps, and files to other Window's PCs. If you don't have a Microsoft account, you can create one with the supplied link.

If you prefer to use a local account, you can skip this step.

![Sign into your Microsoft Account](/images/windows/step21.png)

Windows 10 allows you to set a PIN for logging in instead of a password. If you'd like to set a PIN, you can do so now, or skip this step. After completing the rest of your setup to your preferences, your desktop will load, and you'll be able to log in using the PIN or password. You'll then be presented with the desktop.

![Windows 10 Desktop](/images/windows/step22.png)

### Use Virtual Machine

The virtual machine will be presented through a window, and can be interacted with similarly to any other application. Note that the Virtual Machine window will capture the keyboard input (The mouse is automatically captured or uncaptured depending on whether it's currently on top of the Virtual Machine window or not). If the input is currently captured, and you need to send input to the desktop (or a window outside of your Virtual Machine window), you'll need to tap the Right-hand <kbd>Ctrl</kbd> first, which will release the keyboard from the Virtual machine, and allow it to work in the desktop again. Clicking inside of the Virtual Machine window will re-enable the keyboard capture.

### Add Network Printer

In the Virtual Machine, click your virtual machine so it's highlighted in orange. Select **Settings** in the top menu. Select Network and make sure the **Enable Network Adapter** is checked and the "Attached to" option is **Bridged Adapter**. The Name is the name of the network you wish to connect to.

Select **OK** and power on your virtual machine. Go to the Printer menu and select the option to **Add a Printer**. Windows should automatically find your printer. Select it and follow the prompts to finish the installation. Print the test page to confirm the connection worked.

![Windows 10 Desktop](/images/windows/vmsettings.png)
