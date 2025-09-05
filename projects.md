---
layout: layouts/default.njk
title: Projects
---

Most of our members choose to spend their time working on projects. At the start of each term brainstorm a set of projects; join in the discussion in Discord to get your ideas on the list.


## Autumn 2025

Here are the proposed projects for Autumn 2025.

<details>
<summary><h3>Static Site Generator</h3></summary>

#### Goal

Create a static site generator, like [Zola](https://www.getzola.org/) or [Eleventy](https://www.11ty.dev/). When complete we'll use it to generate the ScalaBridge London site.

A static site generator is basically a custom programming language that produces text files, usually HTML. It typically consists of three parts:

1. metadata, which defines things like the name of the site
2. content, usually written in a language like Markdown plus some custom syntax to allow metadata to embedded in the file
3. templates, usually HTML with a custom programming language mixed in, allowing bits of content and metadata to be inserted into the HTML


#### Learning Goals

- Working with the file system to traverse directories, and read and write files.
- Create and use parsers (we will probably use [Parsley](https://github.com/j-mie6/parsley?)) to extract information from files
- Use regular expressions for some parsing tasks, such as syntax highlighting
- Implement a programming language. We can use [Stoop](https://github.com/creativescala/stoop) as a starting point.
- Understand the structure and purpose of HTML and CSS
- Bonus points for using [Scala Native](https://scala-native.org/en/stable/), so that the static site generator can be deployed as a single executable.

#### Extensions

There are endless extensions. Some that are particularly worth considering:

- Integration with [mdoc](https://scalameta.org/mdoc/)
- Use [Tree Sitter](https://tree-sitter.github.io/tree-sitter/) for syntax highlighting
- Do clever things with Scala syntax to allow, say, inspecting types of expressions, perhaps using [Scalameta](https://scalameta.org/)
- Extensions to the template language
- File watching for incremental updates
</details>


<details>
<summary><h3>ScalaBridge Management Software</h3></summary>

#### Goal

Develop software that can be used to help run ScalaBridge, because as software developers we believe there is no problem that software cannot solve.

Here are some features that would be useful:

- Recording dietary preferences
- Recording projects
- Recording project groups
- Tracking project progress

This project is very scalable. The simplest useful thing is very simple (e.g. a form to record dietary preference) but there is virtually limitless extension available.

#### Learning Goals

- Basic technology for web applications: working with forms, databases, and authentication
- Deployment.
- Data modelling and SQL
- Working with user feedback and quick feedback cycles
</details>


<details>
<summary><h3>AI Bass Player</h3></summary>

An extension to [Sounds of Scala](https://github.com/pauliamgiant/sounds-of-scala). 
We would give it the beat, tempo and chords and it would create bass lines at varying degrees of complexity.
Logic already has AI session musicians so theres something to measure against.
Would be fairly easy to get mocked example and then build out the AI functionality as an extension.

Bonus joke: What do you call a dog that plays bass?

Answer: a sub woofer!
</details>


<details>
<summary><h3>Habit Tracker</h3></summary>

#### Goal

Create a habit tracker that runs locally on-device (that is, requires no server).

Recent browser developments such as [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) and [Origin Private File Systems](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) make it possible to create web applications that run entirely on-device, making a backend server optional. This concept is known as [local-first software](https://www.inkandswitch.com/essay/local-first/) and is both technically interesting and philosophically appealing.

This project will explore building a local-first habit tracker using [Scala.js](https://www.scala-js.org/). A basic habit tracker is very simple—completing a habit is just setting a boolean flag—but it has plenty of potential extensions. For example, habits can be allowed to have structure, such as completing a sequence of steps. Or perhaps habits are shared, which brings in CRDTs.


#### Learning Goals

- Explore the core technology required by local-first software
- Learn how to work with web APIs and Scala.js
- Data modelling and UI implementation
</details>
