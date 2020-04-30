---
layout: article
title: Install MATLAB on Pop!\_OS 20.04 LTS
description: >
   How to install MATLAB
keywords:
  - MATLAB
  - Pop
  
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

Visit the [MATLAB Download](LINK MIGHT BE SPECIFIC TO TRIAL EMAIL) and click the blue box titled Linux.

Create a new directory to install MATLAB. Open a terminal and execute the following commands. The second command is the file name of the MATLAB download.

$ mkdir matlab
$ unzip -q matlab_R2020a_glnxa64.zip -d matlab

Create an installation directory for MATLAB.

$ sudo mkdir -p /usr/local/MATLAB/R2020a

Navigate to the main MATLAB directory and begin the installation process. Do not close the terminal until the installation is complete.

Sign in using your MathWorks account. Accept the License Agreement and click Next.
Select the appropriate license. If you've received and activation key, select the option to Enter the Activation Key. Enter your key and click Next.

The destination specified in the previous command will auto-populate, but you can change it here if necessary. Click Next.

Choose your toolboxes. Each tool box requires additional storage space.

Select the destination for symbolic links to MATLAB scripts. MATLAB sends user experience information to MathWorks by default. Uncheck the box if you do not want to participate in providing the information. Click Next.

Confirm your information on the final screen and click Begin Install.

Once the download is complete, click Close.

The MathWorks Activation Software will pop up. Click Next.

Confirm your license information to complete the activation. Click Finish when the activation is complete.

Open a terminal to launch MATLAB

$ matlab

