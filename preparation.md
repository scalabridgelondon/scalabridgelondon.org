---
layout: layouts/default.njk
title: Preparation
---

This page describes how you should prepare for ScalaBridge: software to install and things to read.


## Software

You should attempt to install some software, as described below. This can be complicated process so don't worry if you can't get it to work---we can help you on the day if needed.

## Installing Scala

[Installing Coursier][coursier] will install all the software you need to run Scala programs.


## A Development Environment

You'll need a development environment to write Scala code. Here is what we recommend:

* If you already have something set up, or you are comfortable with a particular tool in another language, keep using that; otherwise

* Our first preference is to use [Visual Studio Code][vscode], and the following extensions: Live Share Extension Pack, [Scala (Metals)][metals], [Scala Syntax (official)][scala-syntax], GitLens. Visual Studio Code is free, runs fine on most laptops, and how good support for sharing sessions over the Internet. When joining a Live Share session, make sure you open the link in the Visual Studio Code desktop application, *not* in a web browser.

* Our second preference is [IntelliJ][intellij], and the [Scala plugin][intellij-scala]. IntelliJ has some features that Visual Studio Code does not, but it requires a more powerful laptop to run well and it has weaker support for sharing sessions across the Internet.


## Discord

We use [Discord][discord] for online meetings. Download and install the desktop client. It works *much* better than in the browser.


## An Example Project

If you joining the Foundations track (learning to program), download (or fork or clone, if you are familiar with Git) the [Creative Scala template](https://github.com/creativescala/creative-scala-template) to get a simple Scala project (with some reasonably appealing output).


[coursier]: https://get-coursier.io/docs/cli-installation
[vscode]: https://code.visualstudio.com/
[intellij]: https://www.jetbrains.com/idea/
[metals]: https://marketplace.visualstudio.com/items?itemName=scalameta.metals
[scala-syntax]: https://marketplace.visualstudio.com/items?itemName=scala-lang.scala
[intellij-scala]: https://plugins.jetbrains.com/plugin/1347-scala
[jdk]: https://adoptium.net/en-GB/temurin/releases/
[discord]: https://discord.com/
