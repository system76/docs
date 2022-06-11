## Writing


### Punctuation

Even if technically correct, avoid over-use of commas. That, is to say, the reading experience should not, in practice, be a tedious endeavor. 

### Grammar

Avoid ending sentences with prepositions.

**Example**

Original: Click on the where you want to enter your password into.
Fixed: Click on the box to enter your password.

Number quantities less than 10 should be spelled out: nine, two, four, etc.

Verb usage
- Use “confirm” instead of “see if”, “check if”
- Use “view” and “observe” instead of “see”, “pay attention”, “look at”, “check”, etc.
- Use “configure” instead of “set up”
- Use “navigate to” instead of “go to” or "get to"
- Use “resolved” or “did not resolve” instead of “works” “still not working”, “did not work”, etc.
- Use “determine” instead of “find out if”
- Use “attempt” instead of “try” 
- Use “display” instead of “show”
- Use “enable” instead of “turn on” (software features)
- Use “require” instead of “need to be”
- Avoid any phrase variation of “due to”: 
	- Original: If the upgrade fails it will most likely be due to a package manager issue. 
 	- Fixed: A failed upgrade is likely caused by an issue with the package manager.

Awkward phrasing to avoid:
- “As to what”
- “As well as”
- “As opposed to”
- “Due to the fact that”

### Ordered Lists

Avoid large paragraph blocks that include multiple steps. Break actions into steps and use helpful images for each step. If your paragraph starts with "First,", it should probably be a numbered step. Each numbered step should be a complete sentence with proper grammar and punctuation.

### Voice

Address the reader as “you” consistently. 
Use active voice when describing procedures.
The tone should be neutral and descriptive. Avoid using "playful" narrative phrasing, editorialized voice, and marketing language.

**Example**

Original: So your Pop!\_OS installation won't boot to login? No worries! System76 laptops include an innovative feature called the Recovery Partition.
Fixed: The Recovery Partition contains a backup copy of the operating system. This can be used to restore a corrupted system.

### Reading Level

Aim for an 8th grade reading level. Avoid being overly-technical in your descriptions. Don't use jargon, and always define new terms and acronyms. Articles should be accessible to a non-technical audience. If the content is highly technical by nature, consider prefacing the content with a caution or disclaimer.

### Naming Conventions

- `Pop!\_OS` - escape the underscore to avoid italics
- macOS - use this when generally referring to the operating system created by Apple
- WINE
- GNOME
- COSMIC
- Wi-Fi
- 

### Scope

Use article linking to make strategic use of support docs content. Focus the scope of your article by thoroughly covering only the concepts related to the task and purpose of your article. Tangentially related concepts should be briefly mentioned and interlinked whenever possible.


## Formatting

### Expanded Sections

Only header level 2 should by expandable/collapsable. These sections should be expanded by default.

### Numbered Steps

- Use an ordered list if the procedure includes more than two steps.

**Example**

### Bullets

Only use bullets when the order is not important.

### Tables

- Tables should be right-justified. 

| Heading 1 | Heading 2 | 
|-----------|-----------|
| Option 1  | Description | 

### Code blocks

Code blocks should include the `bash` flag in the formatting. 

    ```bash
    sudo apt update
    ```

Produces this output.

```bash
sudo apt update
```

### Comments

Use this syntax to create comments: `<!--this text is commented out-->`

### Menus & Menu Items

When mentioning a word-for-word menu option, use the \`in line code element\` backtics.

**Example**

Click the `Applications` button to display applications.

Use this (➞) unicode arrow when describing menu navigation.

**Example**

Navigate to Settings ➞ Advanced ➞ New Profile.

### Linking

When linking to a specific page, hyperlink an appropriate section of the text. Don’t paste a link, unless it’s to provide the general URL of for a resource (wiki.ubuntu.com).

**Linking to Another Article**

Support articles can also be linked to directly: E.g. [this article is found here](articles/example-article-style-guide). If the article exists on the support site, clicking on the hyperlink will navigate to that page.

**Linking to A Section in Another Article**

To link to a specific sub-section of an article add the content tag: [like this](articles/example-article-style-guide#hyperlinks). Content tags are created through headers in the articles. To link directly to this section of this document you'd use th content tag `#hyperlinks`.

**Example**

### Images 

Screenshots should practically capture the action or menu described in the text. 
Avoid using screenshots with excess blank space.
Avoid using screenshots that are too "punched in" and do not provide visual context.
Use screenshots to illustrate each step in a process. Avoid using a single screenshot when the text describes navigating multiple screens and menus.
Use visual callouts, such as red boxes and arrows, if your description is calling out a button that is not readily obvious in your screenshot.
Relevent windows should always be focused.

When screenshotting a generic browser window, use https://system76.com/ or https://pop.system76.com/ as sample webpages. Do not use the default home page that may display adds or personal browsing history.
Avoid including unprofessional or personal information in screenshots. This can include address information, names of personal documents, browser shortcuts, and custom wallpapers. If possible, use a stock virtual machine with a user name of "pop-user".
If a wallpaper appears in a Pop!\_OS screenshot, make sure the wallpaper is one of the default options.
Pop!\_OS screenshots should feature the most recent supported version of Pop!\_OS, unless the article content requires another specific version.

**Example**

### Motion Graphics

Use Webm's with vp09 encoding.

### Keyboard Keys

Use the `</kbd><kbd>` tag when describing keyboard keys.

Always capitalized SUPER when referring to that key.

**Example**

### Notes Sections

Note is bold followed by a colon, text is italics. 

**Example**

_**Note**: This is a comment that adds some important information._


### Referencing Commands 

If referencing a command used elsewhere in the document, or if the command is very short, in-line code formatting can be used. For example, the `apt` command we ran earlier.


## Example Article

---
title: Example Support Article & Style Guide
description: >
  A model for future articles including xamples and conventions for formatting a variety of support article topics. 
keywords:
  - List
  - of
  - keywords
  - about
  - this
  - page
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
---

## Start with a 2nd-level header. The "title" will be filled in from the yaml details above.

Use this section to introduce the reader to your article with a high-level description of the content. 

### The 3rd header level will dive into the content. This is also the lowest header level that will be tracked by the TOC.

Add line-breaks before and after headers.