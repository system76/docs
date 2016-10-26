---
layout: article
title: Meerkat (meer1) BIOS
description: >
    Official directions to install a new Meerkat (meer1) BIOS.
keywords:
    - Support
    - Meerkat
    - meer1
    - BIOS
    - Update
    - System76
hidden: true
faq: false # If it shows in the "Frequently Answered Questions" section
known: false # If it shows in the "Known issues" section
---

------

These instructions only apply to the Meerkat 1 hardware.  These do not apply to the Meerkat 2 hardware or to any other computers we sell.  We mistakenly sent the announcement email to few poeple without Meerkat 1 hardware.  Apologies for any confusion!

------

# Updating Your BIOS

1. <a href="{{site.baseurl}}/files/firmware/meer1-0358.bio.zip" download="download">Download the `meer1-0358.bio.zip` file</a>, unzip it, and put the `meer1-0358.bio` file on the root of a MBR FAT32 formatted USB flash drive.

2. Plug the USB flash drive with the `meer1-0358.bio` file on it into your Meerkat.

3. Turn on your Meerkat and press <kbd>F7</kbd> during boot.

4. At the _BIOS Flash Update_ menu, select the USB device and press <kbd>Enter</kbd>.

5. Select the `meer1-0358.bio` file and press <kbd>Enter</kbd>.

6. Press <kbd>Enter</kbd> again to confirm that you want to update the BIOS.

7. When the updater prompts about making a configuration request, press <kbd>9</kbd> to allow it.

   _The BIOS will now update.  This may take 2–5 minutes to complete.  Please wait, and **do not turn the system off** until the update has completed._

8. When the update completes, remove the USB flash drive and restart the computer.

Enjoy using your Meerkat with the fancy new BIOS!

# Where to Get Help

Having trouble with your BIOS update? We're here to help. Here are two ways to get assistance:

## 1. Contact a Technician

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under your Meerkat (meer1).

## 2. Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
