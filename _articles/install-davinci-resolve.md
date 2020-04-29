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

#### Please note that the MakeResolveDeb script is not created by Black Magic or System76 and is maintained by the community

DaVinci resolve can be downloaded [Here](https://www.blackmagicdesign.com/products/davinciresolve/) we will select DaVinci Resolve and not the Studio version.

![Download button](/images/davinci-resolve/davinci-resolve-download.png)

Before DaVinci Resolve will download the site asks you to fill in a contact form (below).

![Questions for download](/images/davinci-resolve/davinci-resolve-questions.png)

The MakeResolveDeb script can be downloaded [Here](http://www.danieltufvesson.com/makeresolvedeb)

### Extract the Zip Files

Once DaVinci Resolve is downloaded, extract the zip file.
You can extract the archive by right-clicking on the file in the **Files** application. and selecting the menu item "Extract Here"

- Next, we'll extract the MakeResolveDeb zip file into the same directory where the DaVinci Resolve files were extracted.
- We do this by again right0-clicking on the file. This time however, we select 'Extract to..." and choose the newly created DaVinci Resolve directory.

### Create The .deb File

From the DaVinci Resolve directory, right click on an empty space between file icons and select 'Open in Terminal.'

**NOTE:** You may need to change from "list" view to "grid view" to access the space between files.

In the new **Terminal** window run this command:

```./makeresolvedeb*.sh lite```

Once the script's process completes, we'll be dropped to a new line with our username.
Finally, run this command to install **DaVinci Resolve**:

```sudo dpkg -i davinci-resolve*_amd64.deb```

![DaVinci Loading Screen](/images/davinci-resolve/davinci-loading-screen.png)

![DaVinci App Open](/images/davinci-resolve/davinci-app-open.png)
