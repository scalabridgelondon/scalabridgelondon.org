---
layout: layouts/default.njk
title: Projects
---

Most of our members choose to spend their time working on projects. At the start of each term we brainstorm a set of projects, which are listed below by term. Join in the discussion on [Discord][discord] to get your ideas on the list. If you're new to programming, check out our [curriculum](/curriculum) instead.


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


<details>
<summary><h3>Functional Checkout System & Pricing Engine</h3></summary>

#### Goal

Create a robust, type-safe checkout system that can calculate the total price of a basket of items, applying complex pricing rules and promotions (e.g., "buy one get one free", bulk discounts). The system will be built with a functional programming core and expose HTTP APIs for integration.

This project is more than a simple checkout calculator; it's about modelling a real-world domain with immutable data, composing business rules, and handling the effects of external calls. It could serve as the backend for a simple e-commerce store or a point-of-sale (POS) system.

A functional checkout system separates the pure business logic (calculating totals) from the impure "effects" (reading from a database, charging a card, logging). It typically consists of:

1.  *A Core Domain Model*: Defining products, baskets, and pricing rules using algebraic data types (ADTs) and immutable data structures.
2.  *A Pricing Rule Engine*: A composable set of functions and rules that can be applied to a basket to calculate discounts and the final total. This is the pure heart of the system.
3.  *An API Layer*: Handles the "outside world", reading product catalogue from a database, receiving HTTP requests, processing payments—and feeds the necessary data into the pure core.


#### Learning Goals

1.  *Functional Domain Modelling*: Use case classes, sealed traits, and enumerations to model Product, Basket, PricingRule, and Offer in a way that makes invalid states unpresentable.
2.  *Pure Functional Logic*: Implement the pricing engine using pure functions (no side effects). This makes the logic incredibly easy to test and reason about.
3.  *Composition & Algebra*: Learn to design small, composable functions (e.g., `tenPercentOff`, `buyOneGetOneFree` etc...) and combine them into more complex pricing strategies.
4.  *Handling Effects*: Use a functional effect system like Cats Effect or ZIO to manage side effects (database calls, HTTP). Learn about IO, Resource, and concurrency.
5.  *Building HTTP APIs*: Create a RESTful JSON API using a library like http4s or Akka HTTP to expose endpoints for POST /checkout and GET /products.
6.  *Persistence*: Use doobie (for JDBC) or Quill to read product information and pricing rules from a simple SQL database (e.g., PostgreSQL, H2).
7.  *Testing*: Write property-based tests with ScalaCheck to verify your pricing rules always hold certain properties (e.g., "total can never be negative") and unit tests for specific scenarios.

</details>

[discord]: https://discord.gg/SKKZEb2EPz
