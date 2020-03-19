---
layout: layouts/default.njk
title: Curriculum
---

This page covers *what* we teach at ScalaBridge London. The [pedagogy](/pedagogy) page covers how we teach.

We have three streams:
- for people who have never programmed or have very limited programming experience, the *beginner* stream;
- for those with some significant programming experience, but not Scala or another functional programming language, the *intermediate* stream; and
- the *advanced* stream for people with existing Scala experience.

## Level One

### Setup
- VSCode or IntelliJ?

### Expressions, Types, and Values
- Literals
- Expressions have types and produce values
- Compound expressions
- All values are objects
- Method call syntax
  - dot notation
  - parameters

### Workflow
- Starting and stopping `sbt`
- Wrapping code in `object`
- Compiling code
- Running code and using `App`
- Experimenting in the console
- `sbt` Workflow
- *TODO* Decide on workflow. Are we going with Visual Studio Code or IntelliJ? How do we recommend running code (using `run` or `console`)?

### Names and Substitution
- Giving names to values
  - Motivation
- Using names
  - Names abstract over expressions
- The substitution model of evaluation
- Order of evaluation
- Local reasoning
- *TODO* Consider breaking this up into smaller sections. It's hard to understand the theory without getting some experience, and beginners probably want to get coding before they get a big dose of theory.

### Art: Computing with Images
- Doodle basics

### Methods
- Motivation
- Method declaration syntax
- Method call semantics
  - In terms of substitution
- Methods generalize expressions

### Structural Recursion over the Natural Numbers
- Motivation
  - Do something a variable number of times
- The natural numbers
  - Recursive definition
- Structural recursion pattern
  - Structure of code follows structure of definition
  - Solve the cases
- Reasoning about code
  - Operational reasoning: substitution
  - Denotational reasoning: what is the base case, what is the one-step recursive case?

### Art: Structure in Recursion
- Fractals


## Level Two

### Functions
- Functions as values
- Abstracting over expressions with functions
- Parametric equations of curves
- Function composition
- Composition for parametric equations

### Art: Animations
- Animations as images displayed over time instead of space
- Animation using reactors (or transducers?)
  - Structural recursion "unrolled" into a reactor
- Parametric equations as reactors

### Lists
- Paths as lists of path elements
  - Local coordinate systems; bounding box and origin
- Polygons as paths
- Structural recursion over lists
- `map` for transforming lists

### Custom Data
- Case classes as logical ands
- Animations using custom data
  - Simple physics. Bouncing ball.

### FlatMap
- Changing length of a list to add and remove particles in a particle system
- flatMap using structural recursion
- flatMap as changing the length of a List
- Responding to mouse events
- Particle systems. Ripples. etc.

### Project: Puzzle Game
- Tile matching video game


## Level Three

### Algebraic Data Types and Structural Recursion 1: Ands and Ors
- Modelling data in terms of ands and ors; sealed traits and final case classes
  - Non-recursive data
  - *NOTE* Keep examples concrete
- Structural recursion (w/o recursion!)
  - Pattern matching (familiar by now)
  - Polymorphism
    - Abstract methods
- State machines. FSM animations. E.g. exploding fireworks Or interacting FSMs? FSMs for modelling interaction?

### Algebraic Data Types and Structural Recursion 2: Recursion
- The recursion rule
- Recursive data
- Transforming recursive data
- Grammars and l-systems

### Functions and Generic Types
- Generic types
- Containers
- Functions to work with generic types
- kd-tree? Faster intersection tests?

### Standard Library Types
- Option, Either, Map
- map, flatMap
- find, exists

### Map and FlatMap
- We've already seen map, but review
- flatMap
- L-Systems again?

### Fold
- fold as an abstraction of structural recursion


## Level Four

### Type Classes and Implicits
- Implicit parameters
- Implicit values

### Type Classes in Cats
- Monoid
- Monad
- Applicative / Semigroupal

### Probability Monad?
- Generative art w/ randomisation


## Level Five

### FP Architecture?
### Cats Effect?
### Reification and Church Encoding?


# Old Stuff Here

## Beginner Stream

The beginner stream will mostly work with [Creative Scala][creative-scala]. We'll learn programming by creating pleasing pictures. The six week curriculum is:

1. Expressions, types, and values: Chapter 2 of Creative Scala and Writing code within a file: Chapter 4 of Creative Scala
2. Names and substitution: Chapter 5 of Creative Scala and Art: computing with images: Chapter 3 of Creative Scala
3. Methods: Chapter 6 of Creative Scala and Structural recursion over the natural numbers: Chapter 7 of Creative Scala
4. Art: structure in recursion
5. Functions: Chapter 8 of Creative Scala and Function composition: Chapter 8 of Creative Scala
6. Art: composing art by composing functions: Chapter 8 of Creative Scala. Case study: context-free art, if time allows.

The questions for each week are in our [lessons repository](https://github.com/scalabridgelondon/lesson-plans).

## Intermediate Stream

The intermediate stream will refer to [Essential Scala][essential-scala]. The curriculum for six weeks is:

1. Expressions, types, and values
   - Reading: Chapter 2 of Essential Scala
2. Modelling data: algebraic data types
   - Reading: Chapters 3 of Essential Scala, and Chapter 4 up to 4.5
3. Transforming data: structural recursion
   - Reading: Chapter 4.5 onwards of Essential Scala
4. Sequencing computation
   - Reading: Chapter 5 of Essential Scala
5. Standard library 
   - Chapter 6 of Essential Scala
6. Case study: spreadsheet

The questions for each week are in our [lessons repository](https://github.com/scalabridgelondon/lesson-plans).

## Advanced Stream

The content for advanced students will be determined by the background of the students and the availability of mentors. 

Students who are not familiar with type classes should learn their implementation in Scala and common type class instances available in Cats.

Possible case studies include:
- implementing a simple programming language; and
- implementing random data generation (the `Random` monad).

[creative-scala]: https://www.creativescala.org/
[essential-scala]: https://underscore.io/books/essential-scala/
