---
layout: article
title: Clear the SMMSTORE ROM
description: >
  How to fix the failed with exit status: exit code: 5 message
keywords:
  - Firmware
  - Open Firmware
  - SMMSTORE
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

## The error message

If you are seeing messages like these on your Open Firmware system:

```
configuring bootloader error: command failed with exit status: exit code: 5
errored while installing system: command failed with exit status: exit code: 5
calling Schedule method failed: "failed to add boot entry: exit code: 5
```

We may need to clear the SMMSTORE ROM by re-flashing a patched firmware using a flash drive with a custom firmware file. Here are the steps to perform that action. After flashing, this will remove any custom EFI variables (such as those installed by boot managers)

Please download the zip file for your sytem and unzip the files within to a FAT32 formatted USB drive. Then shutdown the laptop and remove all NVMe M.2 drive(s) in the system using the step by step instructions for your system:

### Bonobo WS (bonw14)

https://s76.co/bonw14-76ec
https://tech-docs.system76.com/models/bonw14/repairs.html#replacing-an-m2nvme-ssd

### Darter Pro (darp7)

https://s76.co/darp7-76ec
https://tech-docs.system76.com/models/darp7/repairs.html#replacing-an-m2nvme-ssd

### Galago Pro (galp5)

https://s76.co/galp5-76ec
https://tech-docs.system76.com/models/galp5/repairs.html#replacing-an-m2nvme-ssd

### Lemur Pro (lemp9)

https://tech-docs.system76.com/models/lemp9/repairs.html#replacing-an-m2nvme-ssd

### Lemur Pro (lemp10)

https://s76.co/lemp10-76ec
https://tech-docs.system76.com/models/lemp10/repairs.html#replacing-an-m2nvme-ssd

### Oryx Pro (oryp6)

https://s76.co/oryp6-76ec
https://tech-docs.system76.com/models/oryp6/repairs.html#replacing-an-m2nvme-ssd

With the NVMe drive(s) removed, replace the cover and boot with the USB stick inserted. After the firmware has been flashed, remove the USB stick and reinstall the NVMe drive(s).

Once the system is put back together we'll need to boot with a live image in order to repair the boot loader. We provide step by step instructions on how to do this in our support article in the link below:
https://support.system76.com/articles/bootloader/

If at any point you run into any errors during this process please paste / attach photos of the errors.

Please let me know if you have any questions, or if there's anything I can clarify. Thanks!

Here is a link to this ticket for your reference:
https://system76.com/my-account/ticket/55795