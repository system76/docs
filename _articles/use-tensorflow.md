---
layout: article
title: Software - Use TensorFlow
description: >
  Complete instructions on setting up TensorFlow
keywords:
  - NVIDIA
  - CUDA
  - TensorFlow
image: http://support.system76.com/images/system76.png
hidden: false
section: machine-learning

---

# TensorFlow 1.9 for CUDA 9.2

The `include` directory contains the headers needed for the C & C++ APIs. The `lib` directory contains static builds of shared libraries for the C and C++ API, as well as the unpackaged Python wheel for Python 3.6.

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

You may compile it with the following:

```sh
export LD_LIBRARY_PATH="/usr/lib/tensorflow/lib:$LD_LIBRARY_PATH"
gcc -I/usr/lib/tensorflow/include/ -L/usr/lib/tensorflow/lib example.c -ltensorflow -o example
./example
```

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
env PYTHONPATH=/usr/lib/tensorflow/lib/python3.6:$PYTHONPATH \
    python3 example.py
```
