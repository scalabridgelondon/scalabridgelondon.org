---
layout: layouts/default.njk
title: Curriculum
---

This page covers *what* we teach at ScalaBridge London. The [teaching](/teaching) page covers how we teach.

Our curriculum is ordered into five levels, each of which roughly corresponds to six sessions of work. At the completion of the five levels you should know enough to be an advanced beginner / intermediate Scala developer.


## Level One

### Setup
- Get setup with a development environment. This is currently (March 2020) [Visual Studio Code](https://code.visualstudio.com/).

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

### Names and Substitution
- Giving names to values
  - Motivation
- Using names
  - Names abstract over expressions
- The substitution model of evaluation
- Order of evaluation
- Local reasoning

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
- Polygons as paths
- Structural recursion over lists
- `map` for transforming lists
- Animating polygons

### Custom Data
- Case classes as logical ands
- Animations using custom data
  - Simple physics. Bouncing ball.
  - Multiple parametric equations

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
- State machines. FSM animations. E.g. exploding fireworks or interacting FSMs? FSMs for modelling interaction?

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

### Case Studies
- Implement something chosen between the students and the mentor. E.g. something web based or a programming language.
