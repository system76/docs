---
layout: article
title: Use TensorFlow
description: >
  Complete instructions on setting up TensorFlow
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow
image: http://support.system76.com/images/system76.png
hidden: false
section: software-applications

---

# TensorMan

This is a tool for managing different <u>TensorFlow</u> toolchains and will be available in Pop!_OS 19.10 at launch and will arrive in Pop!_OS 18.04 LTS a bit later. A few list of it's options and source can be found [here](/articles/tensorman/)

# Using Tensorflow

The packaging of TensorFlow for Pop!_OS contains libraries for the Python, C and C++ APIs. Other languages, such as Rust, bind to the C API for their support.

## Switching Between Versions

All of the TensorFlow packages are built to support concurrent installations using the Debian alternatives system. A symbolic link at `/usr/lib/tensorflow` points to another symbolic link at `/etc/alternatives/tensorflow`, which finally points to the location of the actual library path, which could be at a location such as `/usr/lib/tensorflow1.13-cpu`, or `/usr/lib/tensorflow1.31-cuda10.0`. To change the active toolkit, the `update-alternatives` command may be called like so:

```
sudo update-alternatives --config tensorflow
```

This will display a list of available TensorFlow libraries to choose from:

```
There are 2 choices for the alternative tensorflow (providing /usr/lib/tensorflow).

  Selection    Path                               Priority   Status
------------------------------------------------------------
* 0            /usr/lib/tensorflow1.13-cuda10.0/   100       auto mode
  1            /usr/lib/tensorflow1.13-cpu/        100       manual mode
  2            /usr/lib/tensorflow1.13-cuda10.0/   100       manual mode

Press <enter> to keep the current choice[*], or type selection number:
```

After setting the active version, you can verify that it is set with:

```
readlink -f /etc/alternatives/tensorflow
```

## C API

Given the following example.c file:

```c
#include <stdio.h>
#include <tensorflow/c/c_api.h>

int main() {
    printf("TF version: %s\n", TF_Version());
    return 0;
}
```

You may compile it with:

```sh
export LD_LIBRARY_PATH="/usr/lib/tensorflow/lib:$LD_LIBRARY_PATH"
gcc -I/usr/lib/tensorflow/include/ -L/usr/lib/tensorflow/lib example.c -ltensorflow -o example
./example
```

Note that `LD_LIBRARY_PATH` must point to the location of the lib directory for the toolkit that you wish to use, which can be the active toolkit, or defined as the path to the specific version to use with that project.

## C++ API

See the provided C++ example in the `examples/cc` directory. CMake is required to build your TensorFlow C++ project. Bazel is NOT required.

## Python API

Given the following example:

```python
import tensorflow as tf
hello = tf.constant('Hello, TensorFlow!')
sess = tf.Session()
print(sess.run(hello))
```

You may build a project with Python API by setting your PYTHONPATH when building it, like so:

```sh
env PYTHONPATH=/usr/lib/tensorflow/lib/python3.7:$PYTHONPATH \
    python3 example.py
```

Note that `python3.7` should be changed to the version of Python that the version of TensorFlow supports.
