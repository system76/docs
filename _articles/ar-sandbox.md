---
layout: article
title: Setup your new AR Sandbox
description: Calibrate and use your new AR Sandbox
keywords:
 - AR
 - Sandbox
 - Ubuntu
 - Pop!_OS
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

The [Augmented Reality Sandbox](https://arsandbox.ucdavis.edu/) was developed by [Oliver Kreylos](http://idav.ucdavis.edu/~okreylos/) at [UC Davis](https://www.ucdavis.edu/).

In hopes of giving this awesome software wider exposure and making it easier to consume, System76 [packaged this software for Ubuntu-based OSes](https://launchpad.net/~system76-dev/+archive/ubuntu/weekend-project) and wrote this tutorial.

### Required Hardware

This tutorial focuses on installing and calibrating the software, but wont cover the details of the hardware setup.

For detailed information on the hardware setup, see the [AR Sandbox hardware tutorial](https://arsandbox.ucdavis.edu/instructions/hardware-2/), but in brief you'll need:

- A first generation Kinect

- A short-throw digital projector like the [BenQ MW632ST](https://www.amazon.com/dp/B010MDRIEA)

- A sandbox for your sand (our sandbox is 40 inches by 30 inches by 8 inches)

- Roughly 200 pounds of white sand like [Sandtastik White Sandbox Sand](https://www.amazon.com/Sandtastik-White-Play-Sand-SND025/dp/B001AZ0CGG)

- A Linux-friendly computer with a fast NVIDIA GPU, running Pop!_OS/Ubuntu 18.04 or newer (any flavor).

In terms of System76 computers we recommend the [Oryx Pro](https://system76.com/laptops/oryx) laptop or [Thelio](https://system76.com/cart/configure/thelio-r1) desktop with the fastest available GPU.

## Install Software

- You'll need a computer running Pop!_OS or Ubuntu 18.04 or newer.

- Add the needed PPA and install the software by opening a terminal and running these three commands:

```
sudo add-apt-repository -ys ppa:system76-dev/weekend-project
sudo apt-get update
sudo apt-get install arsandbox
```

- Find out what your user-name is by running this command in the terminal:

```
whoami
```

- Add yourself to the vrui-grp group with this command, replacing USERNAME with the user-name returned by the whoami command above:

```
sudo adduser USERNAME vrui-grp
```

- Reboot your computer so all the above changes take effect.

## Calibrate Kinect

- Plug in your first-generation Kinect device, then open a terminal and run:

```
KinectUtil getCalib 0
```

This will download the intrinsic calibration parameters directly from your Kinect's firmware and then write the result to a file in `/etc/Vrui-3.1/Kinect-2.8/.`

## Align Kinect above sandbox

- Open a terminal and run:

```
RawKinectViewer -compress 0
```

- Maximize this window so it's easier to see your sandbox:

![RawKinectViewer](/images/ar-sandbox/3-A-maximize-3eb069c85a.png)

The image on the left is the depth view, the right is the standard camera view:

![Align Kinect](/images/ar-sandbox/3-B-align-kinect-73dd8344d5.png)

The Augmented Reality Sandbox only uses the depth view (left), but the camera view (right) is still helpful in aligning your Kinect.

- The depth view needs to cover the entire interior of your sandbox. It's okay if it overlaps it slightly.

- Hit Esc to close the RawKinectViewer.

## Calculate base plane

- There are two ways to calculate the base plane. If you haven't yet filled your sandbox with sand, you can calculate the base plane using a region on the floor of your sandbox.
On the other hand, if you've already filed your sandbox with sand, you can calculate the base plane by placing a piece of poster board (or a similar flat surface) on top of your sandbox, which is what we'll do in this example:

![Align Kinect](/images/ar-sandbox/4-A-posterboard-718b802347.jpg)

- From a terminal, launch the RawKinectViewer:

```
RawKinectViewer -compress 0
```

- Maximize this window so it's easier to see your sandbox:

![RawKinectViewer](/images/ar-sandbox/3-A-maximize-3eb069c85a.png)

- Press and hold the right mouse button, move your cursor over Average Frames, then release the mouse button:

![Right Click Menu](/images/ar-sandbox/4-B-average-frames-1ba827544a.png)

- Press and hold the 1 key, move your cursor over Extract Planes, then release the 1 key:

![Extract Planes](/images/ar-sandbox/4-C-extract-plane-1cbd8abb5e.png)

- You now need to draw a rectangle that fits within the interior of your flat surface (in the depth view). You want some space between your rectangle and the edges of your flat surface.
Start with your cursor near the top-left corner of your flat surface. Press and hold the 1 key, drag out a rectangle toward the bottom-right corner, then release the 1 key:

![Kinect Area View](/images/ar-sandbox/4-D-drag-rectangle-a8b53ecc87.png)

- Hit Esc to close the RawKinectViewer.

- In the terminal you'll see two lines printed. Select the portion of the 2nd line shown below, then right click and select Copy:

![Space Plane](/images/ar-sandbox/4-E-terminal-output-25a90e21ae.png)

- Edit the BoxLayout.txt file by running this command from the terminal:

```
gedit /etc/SARndbox-1.6/BoxLayout.txt
```

- Paste the line you just copied over the first line in the `BoxLayout.txt` file.

You also need edit this line, replacing the "=" (equal sign) with a "," (comma).

You should end up with a first line something like this:

![Gedit BoxLayout.txt](/images/ar-sandbox/4-F-gedit-eb460dffb4.png)

- Save the file and close `gedit`.

## Measure 3D extents of sand surface

- This step requires you to have filed your sandbox with sand. You want the sand surface to be as level as possible, but it doesn't need to be perfectly level.
If you placed a piece of poster board (or another flat surface) on top of your sandbox in the previous step, you'll need to remove it for this step.

- From a terminal, again launch the RawKinectViewer:

```
RawKinectViewer -compress 0
```

- Maximize this window so it's easier to see your sandbox:

![RawKinectViewer](/images/ar-sandbox/3-A-maximize-3eb069c85a.png)

- Press and hold the right mouse button, move your cursor over Average Frames, then release the mouse button:

![Right Click Menu](/images/ar-sandbox/4-B-average-frames-1ba827544a.png)

- Press and hold the 1 key, move your cursor over Measure 3D positions, then release the 1 key:

![Measure 3D Positions](/images/ar-sandbox/5-A-measure-3d-positions-14f7ae1f35.png)

- You'll now measure the 3D extents of the interior of the sandbox

- Use the color-coded depth map to make sure you position your cursor over the sand surface and not over the sides of your sandbox. Position your cursor so that there's a small amount of space between the sand surface and the sides of your sandbox.

First, move your cursor to the lower-left interior corner, then press the 1 key:

Note there is no feedback from the UI when you press the 1 key.

![Corner 1](/images/ar-sandbox/5-B-corner1-e25b256651.png)

- Second, move your cursor to the lower-right interior corner, then press the 1 key:

![Corner 2](/images/ar-sandbox/5-B-corner2-2929d14acd.png)

- Third, move your cursor to the upper-left interior corner, then press the 1 key:

![Corner 3](/images/ar-sandbox/5-B-corner3-879f6980e8.png)

- Finally, move your cursor to the upper-right interior corner, then press the 1 key:

![Corner 4](/images/ar-sandbox/5-B-corner4-323ddfd555.png)

- Hit Esc to exit `RawKinectViewer`.

- In the terminal you'll see four lines printed. You need to highlight these four lines as shown below, then right click and select Copy:

![RawKinectViewer Output](/images/ar-sandbox/5-C-terminal-output-bfe04cf344.png)

- Edit the `BoxLayout.txt` file by running this command from the terminal:

```
gedit /etc/SARndbox-1.6/BoxLayout.txt
```

- Replace the bottom four lines in BoxLayout.txt with the four lines you just copied, so you end up with something like this:

![Edited BoxLayout.txt](/images/ar-sandbox/5-D-gedit-57a97839c7.png)

- Save the file and close `gedit`.

## Postition projector
