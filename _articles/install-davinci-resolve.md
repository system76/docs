---
layout: article
title: Install DaVinci Resolve
description: >
   Want up your video editing skills? Try DaVinci Resolve
keywords:
  - Video Editor
  - DaVinci Resolve
  - Pop 20.04 LTS
image: http://support.system76.com/images/system76.png
hidden: false
section: pop

---

### Install the following packages

The following packages will be needed to build and install DaVinci Resolve:

```sudo apt install libssl1.1 ocl-icd-opencl-dev fakeroot xorriso```

### Download DaVinci Resolve and the MakeResolveDeb script

#### Please note that this script is not created by Black Magic or System76 and is maintained by the community

[Here](https://www.blackmagicdesign.com/products/davinciresolve/) we will select DaVinci Resolve and not the Studio version.

![Download button](/images/davinci-resolve/davinci-resolve-download.png)

![Questions for download](/image/davinci-resolve/davinci-resolve-questions.png)

[Here](http://www.danieltufvesson.com/makeresolvedeb) once DaVinci Resolve is downloaded extract the zip file either with the right click menu item called "Extract Here" on the file in the **Files** application.

Then we'll extract the MakeResolveDeb zip file into the same directory that the DaVinci Resolve files are in but right clicking on the file and selecting 'Extract to..." and select the DaVinci Resolve directory. Then from the DaVinci Resolve directory right click on an empty space and select 'Open in Terminal' and in the new **Terminal** window run this command:

```./makeresolvedeb*.sh lite```

Once that completes we'll be dropped to a new line with our username and then we'll run this command to install **DaVinci Resolve**:

```sudo dpkg -i davinci-resolve*_amd64.deb```


