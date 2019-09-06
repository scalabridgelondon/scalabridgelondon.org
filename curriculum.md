---
layout: layouts/default.njk
title: Curriculum
---

This page covers *what* we teach at ScalaBridge London. The [pedagogy](/pedagogy) page covers how we teach.

We have three streams:
- for people who have never programmed or have very limited programming experience, the *beginner* stream;
- for those with some significant programming experience, but not Scala or another functional programming language, the *intermediate* stream; and
- the *advanced* stream for people with existing Scala experience.

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
