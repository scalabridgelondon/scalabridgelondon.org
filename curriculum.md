---
layout: layouts/default.njk
title: Curriculum
---

There are two options for learning via ScalaBridge:

1. For who we imagine will be the typical ScalaBridge student, someone completely new to programming to a few years into professional programming, we have developed the curriculum described below.

2. For more experienced developers, with a clear idea of what they want to learn, we can work together to come up with material that meets your goals. Just beaware that creating training material is a lot of work, and our capacity to do this is limited.


## Curriculum Goals

Our goals are:

* introduce core programming principles that apply to Scala and other programming languages;
* introduce programming processes, such as editor usage, testing, and version control;
* get some experience with different subfields within the software development industry; and
* provide enough depth and breadth that further study is easily accessible.

Note that Scala is the vehicle we use to teach programming, but the concepts are broadly applicable to programming in other languages. We expect anyone completing our curriculum would be easily able to pick up other programming languages, and also have an entry into the more theoretical aspects of computer science.


## Curriculm Details

Our curriculum follows [Creative Scala][creative-scala]. At the time of writing, Creative Scala is being reworked. The description below follows the plan for Creative Scala.

Creative Scala is organized into four parts. Each part introduces new programming techniques within the context of a particular subfield of software development.

1. Part one uses [creative coding][creative-coding] as our vehicle to get started with programming and learn the basics. We create two-dimensional graphics and learn about programming fundamentals.
2. In part two we switch to analysing data, part of what is known as [data science][data-science]. We learn about working with collections of data, defining basic data structures, and visualize data using the skills we learned in the first part.
3. Part three switches to web development. We learn about front- and back-end development, creating more complex data, and touch on some of the advanced features of Scala.
4. In our final part we implement a simple programming language, which brings together everything we've learned so far and gives us a deeper understanding of fundamental concepts in programming.

Want more details? You can always look at [Creative Scala][creative-scala] but here is a summary of the technical aspects of each part. (This probably won't mean much to you unless you are already quite experienced.)


### Part One

* Types, expressions, and values as building blocks of programs
* Substitution model of evaluation as a notional machine for understanding code
* Structural recursion over the natural numbers (pattern matching)
* Methods and functions as abstractions
* Function composition


### Part Two

* Structural recursion over lists
* `map`, `filter`, `flatMap` and `fold` as abstractions over structural recursion
* Defining algebraic data types
* Structural recursion over algebraic data types
* Overview of collection classes in Scala
* Working with input and output


### Part Three

* Effect types (`IO`)
* Reactive programming and finite state machines
* Back-end concepts: routes, HTTP, requests and responses, JSON
* Front-end concepts: HTML, JSON, reactive programming for HTML
* Type classes, `given` and `using`


### Part Four

* Parsers and parser combinators
* Abstract syntax trees
* Tree-walking interpreters
* Environments, bindings, and scope
* Type checking
* Optimization

[creative-scala]: https://www.creativescala.org/
[creative-coding]: https://en.wikipedia.org/wiki/Creative_coding
[data-science]: https://en.wikipedia.org/wiki/Data_science
