# Upgrading to Ubuntu 16.04 LTS

Ubuntu 16.04 LTS is the latest release of Ubuntu. It brings usability improvements and faster system performance resulting in a more responsive desktop experience. Major open source applications are also updated including LibreOffice, Firefox, Thunderbird, and more.

## 1. Prepare for the Upgrade

First, we recommend having Ubuntu installation media (i.e. a DVD or USB drive) handy before starting any upgrades in case something goes wrong. You'll need to download a copy of Ubuntu. You can download a copy from [ubuntu.com](http://www.ubuntu.com/download/desktop). Save the file on your hard drive.

### Create an Installation USB Drive

Create an Installation USB Drive  | Create an Installation DVD
--------------------------------- | ---------------------------
[Using Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) | [Using Ubuntu](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-ubuntu)
[Using Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) | [Using Windows](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-windows)
<small>OS X can't make a System76-compatible USB Drive</small>| [Using OS X](http://www.ubuntu.com/download/desktop/burn-a-dvd-on-mac-osx)

Next, we recommend backing up all important files from your comptuer. The upgrade process will leave your files intact, but it's best to be safe in case something goes wrong.

## 2. Upgrade

When you're ready, follow the [official Ubuntu upgrade process](http://www.ubuntu.com/download/desktop/upgrade). The System76 driver repository will be disabled during the upgrade process, but we will re-enable it in the next step.

You will want to be present throughout the upgrade process as there may be prompts requiring your input.

---

If asked about installation of `grub_pc` during the upgrade, you should select to **_Install the Package Maintainer's version_**, not the default option.

---

## 3. Install the System76 Driver

Once you've upgraded Ubuntu, you'll need to download and install the System76 Driver. Open the Terminal app (search _Terminal_ from the Ubuntu dash or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>), then enter the following commands:

    sudo apt-add-repository ppa:system76-dev/stable
    sudo apt update
    sudo apt install system76-driver

---

**For NVIDIA Graphics:** If you ordered a system with a discreet Nvidia graphics card, you will need to manually install the drivers for your card to get the optimum performance. Open the Terminal app and enter the following command:

    sudo apt install system76-driver-nvidia

---

Once the process is finished, restart your computer for the changes to take effect.

# Where to Get Help

Having trouble with your upgrade? We're here to help. Here are two ways to get assistance:

## 1. Contact a Technician

Get in touch using our support system. View the orders in [your account](https://system76.com/my-account/orders), then choose **_Open Support Case_** under the product you need help with.

## 2. Phone Support

Our representatives are available to help and take questions by phone between 8 AM and 5 PM Mountain Time, Mon–Fri. You can reach us at (720) 226-9269.
