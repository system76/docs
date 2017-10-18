---
layout: article
title: Drives - Auto-Mounting Second Hard Drive
description: >
  If you ordered your computer with additional storage, it comes pre-formatted and ready for use. For instructions on automatically mounting an additional hard drive, check out this extra drive documentation.
keywords:
  - extra drive
  - mount
  - automount
  - boot
  - support
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /extraDrive
  - /extradrive
section: faq

---

If you've added a second drive to your computer when you originally ordered it, then it came pre-formatted and ready for use; no additional setup is required. The drive will be made available when you first open it up after each time you start your computer, and will remain mounted until the next start/boot or until you click the eject (⏏) icon. If you prefer to have the drive made available (mounted) automatically every time you start your computer, this is possible with some configuration changes.  

Auto-mounting is a per user configuration, and is optional.  Extra drives can always be accessed by clicking on them in the file explorer, which will mount the drive if not currently mounted.  

### Create Mount Point

Extra drives require a folder on your primary drive where the drive's contents will be made available. This folder is called a mount point. You'll need to create an empty folder in your home folder to serve as this mount point. Navigate to a location for the mount point (e.g. your Documents folder), then right click and choose **New Folder**, then name the folder appropriately; something like *ExtraDrive* would work. It's recommended not to include any spaces in your mount point name.

### Copy Mount Point Location

Once you've made a mount point, double click it to open it and ensure that it is empty. Any contents within the mount point will be inaccessible while the drive is mounted. Press <kbd>Ctrl</kbd> + <kbd>L</kbd> on your keyboard, then select all of the text in the location bar that appears and press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy it. We'll need it later.

### Locate The Drive

Press the Super Key <kbd><span class="fl-ubuntu"></span></kbd> and then type in <u>Disks</u> and press <kbd>Enter</kbd>. It should open up a window similar to the one below:

![Disks Application](/images/extra-drive/Step1.png)

Click on your extra drive in the list. You can identify it by size, or by the label; the extra drive is usually `/dev/sdb` or `/dev/sdc`.

### (Optionally) Format The Drive

If this is a new drive, and it is not formatted, it will need to be formatted before use. If the drive has formatting from the manufacturer, it is usually best to format it to the standard format (ext4). First, delete the existing partition by clicking the minus button. Then click the plus icon, change the type to *(Ext4)*, give your drive a name, such as *Extra Drive*, and click **Create**.

### Open Extra Drive Mount Options

Press the Super key <kbd><span class="fl-ubuntu"></span></kbd> and then type in <u>Disks</u> and press <kbd>Enter</kbd>. Click on the Extra Drive Partition under "Volumes", then click on the Gear icon <i class="fa fa-cog"></i> to open the options menu for the Volume. Then click on **Edit Mount Options**.

![Volume Options Menu](/images/extra-drive/Step2.png)

![Mount Options Dialog](/images/extra-drive/Step3.png)

### Set Mount Options

Turn off the Automatic Mount Options switch, then set the fields as follows:

Option                                     | Value
-------------------------------------------|------------------------------------------
Mount at startup                           | Checked ☑
Show in user interface                     | Checked ☑
Require additional authorization to mount  | Unchecked ☐
Display Name                               | *{leave blank}*
Icon Name                                  | *{leave blank}*
Symbolic Icon Name                         | *{leave blank}*
*{unlabeled field}*                        | `nosuid,nodev,nofail,x-gvfs-show`
Mount Point                                | `/home/...`*{from step 2}*
Identify As                                | `/dev/disk/by-uuid/...`
Filesystem Type                            | `ext4`*

<small>* This will match the default settings. Set accordingly if you reformatted your extra partition with a different filesystem type.</small>

![Mount Options Set Correctly](/images/extra-drive/Step4.png)

### Save And Restart

Once the mount options are set up correctly, click **OK** to save the changes and then restart your computer. After the computer starts back up, ensure that there are no error messages during the boot, and that the drive is mounted when booting. You can check this by opening your home folder and ensure that you see the eject icon (⏏) next to the drive *before* you click on the drive.
