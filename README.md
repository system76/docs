System76 Support Docs
=====================

The docs system is powered by [GitHub Flavbored Markdown](https://help.github.com/articles/github-flavored-markdown/). If you don't know what Markdown is (or need a refresher), take a minute to look over [the basics](https://help.github.com/articles/markdown-basics/).

It is also powered by GitHub itself. If you know how to use git with GitHub, feel free to update the docs that way. Otherwise, we'll assume you will be using the GitHub website to update the docs.

1. The Basics
-------------

The docs articles are stored as Markdown files under [/_articles/](https://github.com/system76/docs/tree/gh-pages/_articles). For example, take a look at [/_articles/upgrade.md](https://github.com/system76/docs/blob/gh-pages/_articles/upgrade.md). You can use the GitHub website itself to navigate to, create, edit, and delete pages.

### Create an article

To create a new support article, click the **+** icon at the top of the /_articles/ page.

> docs / _articles / **+**

Name the file something descriptive (this will be the part of the URL after `docs.system76.com/articles/`) with the `.md` filetype (i.e. `server-setup.md`). Don't use spaces; instead, use dashes (`-`). Then include the following at the very top of the file (including the `---`es):

```
---
layout: article
title: A Short, Descriptive Title
description: >
    A more descriptive sentence or two about the page; will show up in search engines.
keywords:
    - List
    - of
    - keywords
    - about
    - this
    - page
    - System76
---
```

After that, it's just the contents of the article in markdown. Feel free to use `#Heading1`, `##Heading2`, `**bold**`, `_italic_`, and other markdown to make the page look awesome.

When you're all done, fill out the "Commit new file" form at the bottom with the description of your changes and press the "Commit changes" button.

### Edit an article

To edit or update an article, click on the article's file in [GitHub](https://github.com/system76/docs/tree/gh-pages/_articles). Then click the pencil "Edit this file" icon on the top-right. You can now edit the contents right on GitHub. To see what it will look like before you save it, click the "Preview changes" tab at the top.

When you're all done, fill out the "Commit changes" form at the bottom with the description of your changes and press the "Commit changes" button.

2. More advanced stuff
----------------------

Cassidy will update this with more advanced things later. Until then, ask him directly. :smile:
