---
title: Raw Image Previews
description: >
   Add a custom thumbnail generator to display thumbnails for raw image in Files.
keywords:
  - Image Preview
  - Raw
  - Pop 20.04 LTS
  - Thumbnails

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: media
tableOfContents: true
---

The Files app doesn't display thumbnails for raw images by default, but RawTherapee can handle a large array of raw image formats. We can use RawTherapee's ability to convert raw images into PNGs to create thumbnails for other programs.

## Install RawTherapee

First, install RawTherapee using this command:

```bash
sudo apt install rawtherapee
```

## Create a custom thumbnailer

Nautilus uses thumbnailer scripts to generate thumbnails for images. Create a thumbnailer for raw images using this command:

```bash
sudo gedit /usr/share/thumbnailers/rawtherapee.thumbnailer
```

Copy and paste the following text into the file:

```
[Thumbnailer Entry]
TryExec=/usr/bin/rawtherapee-cli
Exec=/usr/bin/rawtherapee-cli -s -n -Y -f -o %o -c %i
MimeType=image/x-arw;image/x-bay;image/x-canon-cr2;image/x-canon-crw;image/x-cap;image/x-cr2;image/x-crw;image/x-dcr;image/x-dcraw;image/x-dcs;image/x-dng;image/x-drf;image/x-eip;image/x-erf;image/x-fff;image/x-fuji-raf;image/x-iiq;image/x-k25;image/x-kdc;image/x-mef;image/x-minolta-mrw;image/x-mos;image/x-mrw;image/x-nef;image/x-nikon-nef;image/x-nrw;image/x-olympus-orf;image/x-orf;image/x-panasonic-raw;image/x-panasonic-raw2;image/x-pef;image/x-pentax-pef;image/x-ptx;image/x-pxn;image/x-r3d;image/x-raf;image/x-raw;image/x-rw2;image/x-rwl;image/x-rwz;image/x-samsung-srw;image/x-sigma-x3f;image/x-sony-arw;image/x-sony-sr2;image/x-sony-srf;image/x-sr2;image/x-srf;image/x-x3f;image/x-adobe-dng;image/x-portable-pixmap;image/tiff;
```

Then save the file and close Gedit.

## Clearing previous thumbnails

Though sometimes unnessesary, it's always a good idea to start fresh with thumbnail creation. To do this, delete the thumbnailer cache using this command:

```bash
rm -r ~/.cache/thumbnails/*
```

**Note:** This will force Nautilus to recreate the thumbnails for all of your files. Depending on the number, size, and format of your images, this can cause some lag the first time visiting an image-heavy directory.

## Considerations

1. Not all raw images are supported by RawTherapee.
2. Converting raw images to a more suitable format can take some time (~1 second per file in most cases.)
