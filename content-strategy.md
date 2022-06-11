# Content Structure

This section proposes an efficient method for creating, managing, and leveraging existing article content. This structure does not require a high learning curve, and the categories avoid subjective interpretation by following the troubleshooting process (gather and establish context, rule out user error, provide common troubleshooting fixes based on the scenario).

## Categories

### Products

Each product model is a category. End users, especially non-technical end users, are almost always looking for information tagged specifically for a product that they own. It is not obvious to a non-technical user if an article is applicable across multiple products.

### Topics

Products are cross-referenced with Topics. Topics include terms that the end user recognizes as relevant to the task at hand. Topics should align with industry-specific terminology. Topics also fall into sections of a troubleshooting call (establish the issue, rule out user error, provide appropriate troubleshooting advice).

- **Getting Started** - user education/how-to. This content weeds out user error and is useful at the beginning of the troubleshooting process. This is the “user manual” type content.
- **Troubleshooting** - This content includes long-form troubleshooting guides with numbered steps. This is used when the Getting Started material confirms the issue is not user-error.
- **Known Issues** - These articles describe current issues that may or may not be temporarily fixed with a workaround. In order to reduce administrative overhead, these explicitly describe the environment in which the issue occurs (version numbers, hardware configurations, etc.).

### Article Types

**Understanding Types vs. Topics**

Article types are used internally to identify the nature and determine the structure of the content. Topics speak to the task at hand from the context of the end user. Article types allow us to fundamentally segment content so that it can be strategically referenced. Think of this as code de-duplication for articles. This loosely follows the DITA methodology. The goal is not to strictly enforce an arbitrary structure, but rather to strategically create a knowledge base with low administrative overhead. In my experience articles naturally fall into these categories, or can be easily segmented during the draft review process. These types should be considered a best practice, but should not be pedantically enforced in a way that hinders the publishing process.

- **Procedure/Task** - This is where the bulk of troubleshooting and long-form how-to content resides. These include images and numbered steps. These articles will often link to concept articles.
- **FAQ** - These articles are short and often organized into an Issue/Cause/Resolution section format. The titles contain terminology that will often match organic search queries. This content serves as an entry point focusing on a specific issue and guiding readers to more complex content.
Reference - These articles are strictly informational. For example, a table that lists all the versions of Pop!_OS that support a specific feature. Reference articles are useful as a single location for managing complex information. As an example, consider having a 12x12 table of information that suddenly needs to be updated - do you want to update that table once or in several articles? Reference articles are often referenced by other content via linking.
- **Concept** - Concepts introduce core, basic, concepts in a single article. These are “wiki” type articles that serve as a definitive source of truth. As an example, consider having to explain why a user needs to use “sudo” in every single article that uses sudo, or how to open a Terminal session. Instead, briefly describe the concept then link to one of these concept articles.

**Examples**

This example demonstrates article linking made possible by the above described structure. The examples omit written content and contain only the links. Please read this as an example of the structure only, I just came up with the article titles off the top of my head.

In this example, an indentation indicates a link within that article:

[FAQ] Pop!_OS Live USB Creation Fails
* Links to: [Procedure/Task] How to Create a Pop!_OS Live USB
* Links to: [Procedure/Task] How to verify a Pop!_OS.iso file
* Links to: [Reference] Supported file systems for creating a Pop!_OS usb drive

[Procedure/Task] How to Create a Pop!_OS Live USB
* Links to: [Concept] What is a Bootable USB Drive?
* Links to: [Reference] Supported file systems for creating a Pop!_OS usb drive
* Links to: [Procedure/Task] How to verify a Pop!_OS.iso file
* Links to: [FAQ] Pop!_OS Live USB Creation Fails

[Concept] What is a Bootable USB Drive?
* Links to: [Procedure/Task] How to Create a Pop!_OS Live USB

Here’s an example of what the FAQ article may look like with written content included:

Article Title: Pop!_OS Live USB Creation Fails
Type: FAQ

**Issue**: A user attempts to create a Pop!_OS live USB, but a message appears stating the USB creation process has failed.

**Potential Causes**:

The ISO file is corrupt.
The USB drive does not contain enough space.

**Possible Remedies**:

Verify the ISO: [Procedure/Task] How to verify a Pop!_OS.iso file
Make sure you are downloading the ISO from the correct source, and using an appropriate USB creation program: [Procedure/Task] How to Create a Pop!_OS Live USB
Make sure the USB drive is formatted correctly: [Reference] Supported file systems for creating a Pop!_OS usb drive

**See Also**:

[Concept] What is a Bootable USB Drive?

This article may seem sparse and authoring this content may seem insignificant, but consider what this provides the reader:
- Establishes context in a concise manner. The reader can quickly determine if the article is relevant.
- Does not assume or require a specific technical level, and provides solutions for several scenarios.
- Is short, so the reader is not scared away by the sheer length of the article.
- Is focused only in describing the issue and multiple possible causes, giving the reader options, and educating the reader on the nature of the problem.
- Leverages existing content to cover both user-error and common issues, giving the reader the equivalent experience of the first 10-20 minutes of baseline phone troubleshooting. The reader has exposure to the basics, even if they eventually do require contacting support.
- The article serves as an entry point providing context for more complex content. After explaining the issue, the article links to more complex procedure/task articles. The reader is more comfortable exploring these options now that some context has been established.
