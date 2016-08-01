System76 Support Docs
=====================

The docs system is powered by [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/). If you don't know what Markdown is (or need a refresher), take a minute to look over [the basics](https://help.github.com/articles/markdown-basics/).

It is also powered by GitHub itself. If you know how to use git locally with GitHub, feel free to update the docs that way. Otherwise, we'll assume you will be using the GitHub website to update the docs.

1. The Basics
-------------

The docs articles are stored as Markdown files under [/_articles/](https://github.com/system76/docs/tree/gh-pages/_articles). For example, take a look at [/_articles/upgrade.md](https://github.com/system76/docs/blob/gh-pages/_articles/upgrade.md). You can use the GitHub website itself to navigate to, create, edit, and delete pages.

### Create an article

To create a new support article, click the **+** icon at the top of the /_articles/ page.

> docs / _articles / **+**

Name the file something descriptive (this will be the part of the URL after `docs.system76.com/articles/`) with the `.md` filetype (i.e. `server-setup.md`). Don't use spaces; instead, use dashes (`-`). Then include the following (called **frontmatter**) at the very top of the file (including the `---`es):

```
---
layout: article
title: A Short, Descriptive Title
description: >
  A more descriptive sentence or two about the page; will show up in search engines and on the support home page.
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

After that, it's just the contents of the article in markdown. Feel free to use `# Heading1`, `## Heading2`, `**bold**`, `_italic_`, and other markdown to make the page look awesome.

For keyboard shortcuts, use the HTML tag `<kbd>`, i.e. `<kbd>Alt</kbd>+<kbd>F4</kbd>`.

When you're all done, fill out the "Commit new file" form at the bottom with the description of your changes and press the "Commit changes" button.

### Edit an article

To edit or update an article, click on the article's file in [GitHub](https://github.com/system76/docs/tree/gh-pages/_articles). Then click the pencil "Edit this file" icon on the top-right. You can now edit the contents right on GitHub. To see what it will look like before you save it, click the "Preview changes" tab at the top.

When you're all done, fill out the "Commit changes" form at the bottom with the description of your changes and press the "Commit changes" button.

### Index page

By default, all articles show up on the index page at [docs.system76.com](http://docs.system76.com) under **Other Articles**. To prevent an article from showing on the index page, set `hidden: true` in its frontmatter. To get it to show up under **Frequently Answered Questions**, set `faq: true` in its frontmatter.

2. Files, Images, & Links
-------------------------

### Files

To store files (i.e. BIOS updates), put them in the `/files` folder. If it's a BIOS/firmware update, it goes in the `/files/firmware` folder and should be named like `model-version.bio.zip`, i.e. `meer1-0358.bio.zip`.

### Images & Links

When linking to files or images, prepend the link with `{{site.baseurl}}`, i.e. `{{site.baseurl}}/files/firmware/meer1-0358.bio.zip`. This will ensure links will continue to work even if we move the docs site elsewhere.

3. More advanced stuff
----------------------

Cassidy will update this with more advanced things later. Until then, ask him directly. :smile:
