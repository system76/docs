---
layout: article
title: Set up a second hard drive
description: >
  If you ordered your computer with additional storage, it came pre-formatted and ready for use; no additional setup is required. For instructions on automatically mounting an additional hard drive, check out this extra drive documentation.
keywords:
  - extra drive
  - mount
  - automount
  - boot
  - support
  - System76
hidden: false
redirect_from:
  - /extraDrive
  - /extradrive
faq: true # If it shows in the "Frequently Answered Questions" section
---


If you've added a second drive to your computer when you originally ordered it, then it came pre-formatted and ready for use; no additional setup is required. The drive will be made available when you first open it up after each time you start your computer, and will remain mounted until the next start/boot or until you click the eject (⏏) icon. If you prefer to have the drive made available (mounted) automatically every time you start your comptuer, this is possible with some configuration changes.

##### Caveats

If you make a drive mount automatically every time you start your computer, the drive will only be available to a single user.


## 1. Create a Mount Point

Extra drives in Ubuntu require a folder on your primary drive where the extra drive's contents will be made available. This folder is called a mount point. You'll need to create an empty folder in your home folder to serve as this mount point. Navigate to a location for the mount point (e.g. Your Documents folder), then right click and choose "New Folder", then name the folder appropriately; something like "ExtraDrive" would work. It's recommended not to include any spaces in your mount point name.


## 2. Copy the Mount Point Location

Once you've made a mount point, double click it to open it and ensure that it is empty. Any contents within the mount point will be inaccessable while the drive is mounted. Press <kbd>Ctrl</kbd> + <kbd>L</kbd> on your keyboard, then select all of the text in the location bar that appears and press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy it. We'll need it later.


## 3. Locate the Drive in "Disks".

Press the Ubuntu Key on your keyboard (between <kbd>Ctrl</kbd> and <kbd>Alt</kbd>) and then type in `disks` and press <kbd>Enter</kbd>. It should open up a window similar to the one below:

![Disks Application Open](/images/extraDrive/Step1.png)

Click on your extra drive in the list. You can identify it by size, or by the label; the extra drive is usually /dev/sdb or /dev/sdc.


## 4. (Optionaly) Format the Drive

If this is a new drive, and it is not formatted, it will need to be formatted before use.  If the drive has formatting from the manufacturer, it is usually best to format it to the Ubuntu standard format (ext4).  First, delete the exisiting partition by clicking the minus button.  Then click the plus icon, change the type to (Ext4), give your drive a name, such as "Extra Drive", and click 'Create'.


## 5. Open the Extra Drive Mount Options

Click on the Extra Drive Partition under "Volumes" on the right, then click on the Gear icon to open the options menu for the Volume. Then click on "Edit Mount Options".

![Volume Options Menu](/images/extraDrive/Step2.png)

![Mount Options Dialog](/images/extraDrive/Step3.png)


## 6. Set the Mount Options

Turn off the Automatic Mount Options switch, then set the fields as follows:

Option                                     | Value
-------------------------------------------|-------
Mount at startup                           | Checked ☑
Show in user interface                     | Checked ☑
Require additional authorization to mount  | Unchecked ☐
Display Name                               | *{leave blank}*
Icon Name                                  | *{leave blank}*
Symbolic Icon Name                         | *{leave blank}*
*{unlabeled field}*                        | `nosuid,nodev,nofail,x-gvfs-show`
Mount Point                                | `/home/...`*{paste in value from step 2}*
Identify As                                | `/dev/disk/by-uuid/...`
Filesystem Type                            | `ext4`*

*<small>This will match the default settings. Set accordingly if you reformatted your extra partition with a different filesystem type.</small>

![Mount Options Set Correctly](/images/extraDrive/Step4.png)

## 7. Save and Restart

Once the mount options are set up correctly, you'll need to click 'OK' to save the changes and then restart your computer. After the computer starts back up, ensure that there are no error messages during the boot, and that the drive is mounted when you first boot. You can check this by opening your home folder and ensure that you see the eject icon next to the drive *before* you click on the drive.
