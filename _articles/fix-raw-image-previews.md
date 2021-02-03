---
layout: article
title: Fix raw image previews
description: >
   Add a custom thumbnail generator to display RAW image formats in files.
keywords:
  - Image Preview
  - Raw
  - Pop 20.04 LTS
  - Thumbnails
image: http://support.system76.com/images/system76.png
hidden: false
section: pop

---

## Install RawTherapee

RawTherapee can handle a large array of RAW image formats. We will be using RawTherapee's ability export raw images into pngs for this howto.

```
sudo apt install rawtherapee
```

## Create a custom thumbnailer

Nautilus uses thumbnailer scripts to create the images. We will need to create one for our RAW images. 

```
[Thumbnailer Entry]
TryExec=/usr/bin/rawtherapee-cli
Exec=/usr/bin/rawtherapee-cli -s -n -Y -f -o %o -c %i 
MimeType=image/x-arw;image/x-bay;image/x-canon-cr2;image/x-canon-crw;image/x-cap;image/x-cr2;image/x-crw;image/x-dcr;image/x-dcraw;image/x-dcs;image/x-dng;image/x-drf;image/x-eip;image/x-erf;image/x-fff;image/x-fuji-raf;image/x-iiq;image/x-k25;image/x-kdc;image/x-mef;image/x-minolta-mrw;image/x-mos;image/x-mrw;image/x-nef;image/x-nikon-nef;image/x-nrw;image/x-olympus-orf;image/x-orf;image/x-panasonic-raw;image/x-panasonic-raw2;image/x-pef;image/x-pentax-pef;image/x-ptx;image/x-pxn;image/x-r3d;image/x-raf;image/x-raw;image/x-rw2;image/x-rwl;image/x-rwz;image/x-samsung-srw;image/x-sigma-x3f;image/x-sony-arw;image/x-sony-sr2;image/x-sony-srf;image/x-sr2;image/x-srf;image/x-x3f;image/x-adobe-dng;image/x-portable-pixmap;image/tiff;
```

Copy and paste the above text into your text editor of choice and save it as `rawtherapee.thumbnailer`. We will be moving this new file into the proper directory in the next step.



## Moving to thumbnailer folder

As with most files outside of your home directory you will need elevated privilages to move this file to the proper location.

```
sudo mv <pathtofile>/rawtherapee.thumbnailer /usr/share/thumbnailers
```

 Be sure to change <pathtofile> to the actual path.



## Clearing previous thumbnails

Though sometimes unnessesary its always a good idea to start fresh with the thumbnail creation. To do this we will delete the thumbnailer cache shown below.



```
rm -r ~/.cache/thumbnails/*
```

**Note:** If you have a lot of images this will force Nautilus to recreate their thumbnail. Depending on the size of the file and its format this can cause some lag the first time visiting a image heavy directory. 



## Considerations

1.  Not all raw images are supported by RawTherapee

2.  Converting raw images to a more suitable format can take some time. (~1 second per file in most cases)
