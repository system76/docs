---
layout: article
title: MATLAB (Install - Pop!_OS 20.04 LTS)
description: >
   How to install MATLAB
keywords:
  - MATLAB
  - Pop
image: http://support.system76.com/images/system76.png
hidden: false
section: software

---

# MATLAB (Install - Pop!_OS 20.04 LTS) 

Visit the MatLab website with this [link](https://www.mathworks.com/downloads/web_downloads/7318751?elqsid=1588205421341&potential_use=Home&s_tid=tfa_packageTrial_download.html) and click the blue box titled Linux.Save the file.

![Downloaded file prompt to save Matlab installation file](/images/MATLAB/downloadedmatlab.png)

Create a new directory to install MATLAB. Open a terminal and execute the following commands. The second command is the file name of the MATLAB download.

```bash
mkdir matlab
unzip -q matlab_R2020a_glnxa64.zip -d matlab
```

Create an installation directory for MATLAB.

```bash
sudo mkdir -p /usr/local/MATLAB/R2020a
```

Navigate to the main MATLAB directory and begin the installation process. Do not close the terminal until the installation is complete.

![Terminal view showing commands](/images/MATLAB/terminalviewmatlab.png)

Sign in using your MathWorks account. Accept the License Agreement and click Next.

![Sign into MathWorks account screen](/images/MATLAB/signintomathworksmatlab.png)

Select the appropriate license. If you've received and activation key, select the option to Enter the Activation Key. Enter your key and click Next.

![Select your license or enter your MatLab activation key](/images/MATLAB/matlablicensepart.png)

Select the destination for the MATLAB installation. The destination specified in the previous command will auto-populate, but you can change it here if necessary. Click Next.

![Select Destination Folder for MATLAB](images/MATLAB/destinationfoldermatlab.png)

Choose your toolboxes. Each tool box requires additional storage space.

![MATLAB toolbox Selection](/images/MATLAB/matlabtoolboxes.png)

Select the destination for symbolic links to MATLAB scripts. MATLAB sends user experience information to MathWorks by default. Uncheck the box if you do not want to participate in providing the information. Click Next.

![Designate location for symbolic links to MATLAB scripts](/images/MATLAB/symlinksmatlab.png)

Confirm your information on the final screen and click Begin Install.

![Begin MATLAB install](/images/MATLAB/matlabbegininstall.png)

Once the download is complete, click Close.

![Completed MATLAB download](/images/MATLAB/matlabinstallationcomplete.png)

The MathWorks Activation Software will pop up. Click Next.

![Mathworks Activation Software](images/MATLAB/matlabactivation.png)

Confirm your license information to complete the activation. Click Finish when the activation is complete.

![MathWorks Matlab Activation is Complete](/images/MATLAB/activationvompletematlab.png)

Open a terminal to launch MATLAB

```bash
matlab
```

![MATLAB installed on Pop!\_OS 20.04 LTS](/images/MATLAB/matlabexample.png)

