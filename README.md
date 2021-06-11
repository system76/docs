# System76 Support Docs

The docs system is powered by [NuxtJS][1] with [`@nuxtjs/content`][2],
[tailwindcss][3], and some other packages. It uses Markdown in the `/content/`
folder to render every article. If you don't know what Markdown is (or need a
refresher), take a minute to look over [the basics][4].

## Adding Articles

All articles are stored as Markdown files under [`/content/`][5]. For example,
take a look at the [`/content/upgrade-pop.md`][6] file.

To create a new support article, click the **+** icon at the top of the
[`/content/`][5] page.

Name the file something short but descriptive. This will be part of the URL, for
example `server-setup.md` will become
https://support.system76.com/articles/server-setup. Don't use spaces; instead,
use dashes (`-`).

Then include the following text at the very top of the file (including the
`---`es).

```yaml
---
title: Do the thing
image: https://system76.com/images/foo.jpg

description: >
  A more descriptive sentence or two about the page; will show up in search
  engines and on the support home page.

keywords:
  - List
  - of
  - keywords
  - about
  - this
  - page
  - System76

hidden: true
section:
---
```

A couple of notes:

- The `image` is a full URL to the image and will show up on social media,
when shared in Slack, etc.

- After the `---` line, you can type the contents of the article in markdown.
Feel free to use `# Heading1`, `## Heading2`, `**bold**`, `_italic_`, and other
markdown to make the page look awesome.

- For keyboard shortcuts, use the HTML tag `<kbd>`, i.e.
`<kbd>Alt</kbd>+<kbd>F4</kbd>`.

- The default publication status is set to `hidden: true`. To make your article
visible, change the `hidden: true` to `hidden: false` in the top of the file.

- To make your article visible within a section, write the section name in the
`section: ` line. For instance, to add an article to the "Switching to Linux"
section, the line should be `section: switching`.

When you're all done, fill out the "Commit new file" form at the bottom with the
description of your changes and press the "Commit changes" button.

## Editing an Article

To edit or update an article, click on the article's file in [GitHub][5]. Then
click the pencil "Edit this file" icon on the top-right. You can now edit the
contents right on GitHub. To see what it will look like before you save it,
click the "Preview changes" tab at the top.

When you're all done, fill out the "Commit changes" form at the bottom with the
description of your changes and press the "Commit changes" button.

## Sections

Articles will only show up under the section they are configured for. If you
set `hidden: true` in an article, it will not be visible on any of the index
pages, and you will need to know the direct URL to view it.

If you want an article to **not** show up on the index page, but be visible
on `/articles`, set `hidden: false` and remove the `section: ` line from the
article.

To get an article to show up under **Frequently Answered Questions**, set
`section: faq`.

To get an article to show up under **Known Solutions**, set
`section: solutions`.

To get an article to show up under **Articles**, set `section: articles`.

## Files, Images, and Links

To store files (i.e. BIOS updates), put them in the `/static/files` folder. If
it's a BIOS/fireware update, it goes in the `/static/files/firmware` folder and
should be named like `model-version.bio.zip`, i.e. `meer1-0358.bio.zip`.

Anything in the `static/` folder will be available at the base URL. For
instance, `/static/files/firmware/meer1-0358.bio.zip` will be downloadable at
https://support.system76.com/files/firmware/meer1-0358.bio.zip.

When linking to files, please use the absolute path, i.e.
`/files/firmware/meer1-0358.bio.zip`.

## Icons

The Ubuntu logo can be included in a doc using the following span:

```html
<span class="fl-ubuntu-inverse"></span>
```

You can embed this in other Markdown and Tags, for example, you can create an
Ubuntu (Super) key:

```html
<kbd><span class="fl-ubuntu-inverse"></span></kbd>
```

## Local Development

This site is built with [NuxtJS][1] and [`@nuxtjs/content`][2]. To get started,
you will need to clone this repository to your local computer.

Next, you will need to setup `node` `14 <=` and `npm`. The [nodejs website][7]
has great documentation on how to do this.

After that, you can run `npm ci` to install the needed packages, and `npm start`
to start the development site. You will then see a `Listening:
http://localhost:3000/` line in your console showing where you can access the
development site.

To deploy changes, simply make a PR to the [`system76/docs` GitHub
repository][5] and once it's merged, it will be deployed to the live site!

[1]: https://nuxtjs.org/
[2]: https://content.nuxtjs.org/
[3]: https://tailwindcss.com/
[4]: https://help.github.com/articles/markdown-basics/
[5]: https://github.com/system76/docs/tree/master/content
[6]: https://github.com/system76/docs/blob/master/content/upgrade-pop.md
[7]: https://nodejs.org/en/download/package-manager/
