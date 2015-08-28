---
layout: article
title: Setting Up Windows 10 In a Virtual Machine
description: >
    Set up Windows 10 in a Virtual Machine.
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
---


Setting up a Windows 10 Virtual Machine is easy and makes for a great experience running Windows on System76 computers. The virtual machine can be started, stopped, and suspended without requiring the computer to be restarted, and you can run Windows and Ubuntu applications simultaneously. 

###### Caveats

Virtual machines do impose a slight performance penalty in their operation, depending on the exact application. Many applications will run near full-speed, but applications that depend on heavy computations or access to the GPU (like games and video editing software) will likely be faster with a dual boot. Setting up a Windows-Ubuntu Dual Boot is beyond the scope of this support.


# What is a Virtual Machine?

Virtual Machines are a method of running multiple OSs on your computer simultaneously. It's conceptually a second computer that you control through a special application called a Hypervisor. You can install an additional operating system on this virtual computer, which you can then boot and run as if it were another system.


### 1. Install VirtualBox 

Running a virtual machine will require a Hypervisor, which is a special application that runs and manages the virtual machine. We recommend installing VirtualBox for your hypervisor, since it's easy to set up and use, and available for free. It's available in the Ubuntu Software Center.

Open up the Ubuntu Software Center, then enter *virtualbox* in the search field. Click on the VirtualBox result with the blue icon, then click on "More Info". You should see the window below:

![VirtualBox Listing in USC](http://archive.system76.com/images/win10-vm/step1.png)

Click on the Install button, then wait for the download and install process to complete. When it's finished, Ubuntu Software Center will tell you that it was installed on the current date, like below:

![VirtualBox Installed through USC](http://archive.system76.com/images/win10-vm/step3.png)


### 2. Obtain a Windows Installation Disk Image.

You will need to obtain a Windows Installation disk image. If you have a DVD drive, an Installation DVD will also work. If you get a disk image file, be sure that it's an ISO format file, as this is what VirtualBox will work with. Save the ISO file somewhere on your computer; the "Documents" folder in your home folder would be a good place.


### 3. Create the Virtual Machine

Once you have VirtualBox installed, we'll need to create the virtual computer upon which we'll install Windows later. Press the Ubuntu key on your keyboard (located between <kbd>Ctrl</kbd> and <kdb>Alt</kbd>) and then enter *virtualbox* in the search field.

![Opening VirtualBox through the Dash](http://archive.system76.com/images/win10-vm/step4.png) ![VirtualBox Main Window](http://archive.system76.com/images/win10-vm/step5.png)

Click on the "New" button in the toolbar, then give your machine a name you can remember it by. If it isn't already filled out, set the machine Type to *Microsoft Windows* and the Version to *Windows 10 64-bit*, and click Next.

![Setting up the Virtual Machine](http://archive.system76.com/images/win10-vm/step6.png)

You can leave the default option for the Virtual Machine Memory Size. For the Hard Drive, you'll want to choose to "Create a virtual hard drive now".

![Creating a virtual hard drive](http://archive.system76.com/images/win10-vm/step8.png)

For the options in creating the virtual hard drive, simply choose the default options.


### 4. Install Windows on the Virtual Machine

Once you've created the new VM, you should see it listed in the VirtualBox window:

![VM listed in the VirtualBox Window](http://archive.system76.com/images/win10-vm/step12.png)

The next step is to boot the virtual machine and install an OS on it. Click on the VM in the list so that it is highlight orange, then click the "Start" button. This is equivalent to pressing the power button on the virtual computer. 

VirtualBox will now ask you to select a start-up disk. If you're using a DVD to install from, select your DVD drive from the drop down. If you're using an ISO file, click the small folder icon next to the dropdown, then point VirtualBox at your ISO file and open it. VirtualBox will insert the virtual DVD into the virtual optical drive, then boot the disk.

![Start-up disk selection](http://archive.system76.com/images/win10-vm/step13.png)

![Windows booting up](http://archive.system76.com/images/win10-vm/step14.png)

After Windows finishes booting from the DVD, you should see the Windows Setup window. Select your Language, Time and Currency, and Keyboard preferences, then click Next. 

![Windows Setup window](http://archive.system76.com/images/win10-vm/step15.png)

On the next screen, click "Install Now" to start the installation.

![Click Install Now to start the installation](http://archive.system76.com/images/win10-vm/step16.png)

You'll next need to enter your product key for the copy of windows you got. Be sure to enter this exactly as it's listed on the sticker or in your email. Then, click "Next".

![Enter your Product Key](http://archive.system76.com/images/win10-vm/step17.png)

Review the terms of the EULA, then check the box to accept the license terms and click "Next".

![Accept the EULA](http://archive.system76.com/images/win10-vm/step18.png)

##### **Important Note!**

You are required to accept the terms of the EULA before completing the installation. Checking the box and clicking Next assumes you do accept the terms and agree to be bound by them. Do not continue with the installation if you don't agree to the terms in the EULA.


Make sure you select to complete a "Custom" installation, as this is a new installation of Windows.

![Select the Custom: Install Windows only option](http://archive.system76.com/images/win10-vm/step19.png)

Select the "Drive 0 Unallocated Space" area, then click "New".

![Click the New option](http://archive.system76.com/images/win10-vm/step20.png)

Let Windows automatically fill in the size (It will fill the space), then click "Apply". If you receive a notice that Windows might create additional partitions for system files, choose OK.

![Creating the new partition](http://archive.system76.com/images/win10-vm/step21.png)

There should now be two partitions listed. One will be "Drive 0 Partition 1: System Reserved" and the second will be "Drive 0 Partition 2". Click on Partition 2, then click "Next"

![Selecting Partition 2 for installation](http://archive.system76.com/images/win10-vm/step23.png)

Windows will next begin copying over the installation files onto the virtual hard disk. This step may take a while, so feel free to work in the background while it's running. The virtual machine will automatically reboot when it's time to continue.

![Installing Windows](http://archive.system76.com/images/win10-vm/step24.png)

When the VM reboots, you may be prompted to "Press any key to boot from CD or DVD...". Do not press any keys here, or the installation will start over.

![Do not press any key. Seriously.](http://archive.system76.com/images/win10-vm/step25.png)

Windows will now finish installing the files in place, and get the system ready to be set up. Wait for this step to complete. The virtual machine may reboot again several times. Remember not to press any keys to boot from the CD or DVD.

![Getting ready](http://archive.system76.com/images/win10-vm/step26.png)

After the process is finalized, you'll be able to begin the set up process.


### 5. Set up your new Windows Installation

Set up will begin with the following screen:

![Get Going Fast](http://archive.system76.com/images/win10-vm/step28.png)

You may select either express settings, or you can customize the settings to suit your preferences. Windows will next download updates to ensure you're on the lastest version of the OS. This step may take a while, depending on your internet connection. When it's finished, Windows will ask you who owns ths PC. It's recommended to select "I own it" and click "Next". 

![Who owns this PC?](http://archive.system76.com/images/win10-vm/step31.png)

Next, you'll be prompted to sign in with your Microsoft Account. This step is recommended as it can allow for resetting your password remotely if you forget it. It can also sync your VMs settings, apps, and files to other, physical Windows PCs. If you don't have a Microsoft account, you can create one with the supplied link.

If you prefer to use solely a local account, you can also skip this step.

![Sign into your Microsoft Account](http://archive.system76.com/images/win10-vm/step32.png)

Windows 10 allows you to set a PIN for logging in instead of a password. If you'd like to set a PIN, you can do so now, or skip this step. 

![Set a PIN for more convenient logins](http://archive.system76.com/images/win10-vm/step33.png)

After completing the rest of your setup to your preferences, your desktop will load, and you'll be able to log in using the PIN or password. You'll then be presented with the desktop. 

![Windows 10 Desktop](http://archive.system76.com/images/win10-vm/step36.png)


### 6. How to use your Virtual Machine.

The virtual machine will be presented through a window in Ubuntu, and can be interacted with similarly to any other application. Note that the Virtual Machine window will **capture** the keyboard input (The mouse is automatically captured or uncaptured depending on whether it's currently on top of the Virtual Machine window or not). If the input is currently captured, and you need to send input to Ubuntu (or a window outside of your Virtual Machine window), you'll need to tap the Right-hand <kbd>Ctrl</kbd> first, which will release the keyboard from the Virtual machine, and allow it to work in Ubuntu again. Clicking inside of the Virtual Machine window will re-enable the keyboard capture.
