---
layout: article
title: Pop! - Install Pop!_OS in VirtualBox
description: Install Pop!_OS in a virtual machine like VirtualBox
keywords:
  - VirtualBox
  - VMWare
  - Virtual Machine
image: http://support.system76.com/images/system76.png
hidden: false
section: articles

---

This is a quick tutorial on getting Pop!_OS to run on a virtual machine.  Especially useful if you want to play around with Pop!_OS and see what it can do without having to commit to installing it somewhere.

First things first. Please ensure that you have:

- Downloaded the [Pop!_OS ISO](https://system76.com/pop)
- Installed the VirtualBox package on your favorite Linux based OS and the guest OS extensions.

Once you have that accomplished run VirtualBox.

### Step 1

![VirtualBox Initial Screen](/images/install-in-a-vm/Virtualbox-initial.png)

This is the initial screen of VirtualBox after freshly installing on your OS.  Click on the "New" button on the top left corner.  It should be clearly marked with a colorful blue icon.

### Step 2

![Name the VM](/images/install-in-a-vm/Create_VM_name.png)

Once you click on the new, button you should have the screen where you can name the VM and what kind of operating system.  We use Pop!_OS, of course, but you can use whatever you like.  Set your type to "Linux" and the version to "Ubuntu (64 bit)".  Your screen should look like the screenshot above.  Click "Next" button to move to the next screen.

### Step 3

![Memory Size](/images/install-in-a-vm/set_memory.png)

Set the memory to 2048 MB.  The default value of 1024 MB is not enough to run Ubuntu and you will have problems.  You can of course set it to as high as you like.  Click "Next" button to the next screen.

### Step 4

![Hard Disk](/images/install-in-a-vm/create_hard_disk.png)

You can use the defaults here for this exercise.  Feel free to accept the defaults and clik the "Create" button.

### Step 5

![Select Storage Type](/images/install-in-a-vm/select_virtdisk_type.png)

You can accept the default value here as well and click on the "Next" button.

### Step 6

![Select Allocation Type](/images/install-in-a-vm/storage_allocation_type.png)

This dialog tells you how you want to grow the disk as you put content on it.  The default is the correct answer here as you don't really want to allocate space that you will not actually use.  Click on the "Next" button to the next screen.

### Step 7

![Storage Device Name](/images/install-in-a-vm/disk_storage_size.png)

Feel free to just pick the defaults here and click on the "Create" button.

### Step 8

![Ready to run](/images/install-in-a-vm/Ready_to_run.png)

You should be all ready to run!  Hit the "Start" button, the green arrow on the toolbar at the top.

### Step 9

![Select Disk File](/images/install-in-a-vm/select_startup_disk.png)

In order to run, it needs a startup disk, in this case the Pop!_OS iso file that you downloaded and probably in your Downloads directory.  Using the above dialog, click on the little icon with the folder and the green up arrow.

![Select the ISO image](/images/install-in-a-vm/select_diskfile_dialog.png)

Go to your Downloads area and select the ISO image you downloaded and click "Open".

### step 10

![Ready to run](/images/install-in-a-vm/Ready_to_run.png)

Click on the Start button on the toolbar. It is the icon with the green arrow.

That's it!  You're done!  Visit our [Pop!_OS page](http://pop.system76.com/) and please give us feedback on how Pop!_OS is working for you!
