# Class 1 - I/O & HTTP with node
### November 10, 2015 - 6:30-8:30pm

Students should come to class with their dev environments set up with node, git, and Sublime all installed.

## Objectives
  1. Node 101
  2. Core modules
  3. Asynchronous callbacks
  4. BONUS: Events & streams

## Schedule
  - 6:30 - 7:00 - introductions
  - 7:00 - 7:30 - slides + code along
  - 7:30 - 8:15 - hands-on exercise w/ assistance from TAs
  - 8:15 - 8:30 - regroup

## Slides + code along
We'll begin covering the first topics in [An Absolute Beginner's Guide to Node](http://blog.modulus.io/absolute-beginners-guide-to-nodejs). Order of topics with the objective each meets in brackets:
  - Why node? Why back end dev? What can it give you?
  - Create a directory called gdi-node-class-1
  - Intro to node REPL shell [1]
  - Execute a js file [1]
  - File I/O - use node's fs module to read contents of a text file, explain Buffers [2,3]
  - Simple HTTP server [2,3] - use node's http module
  - BONUS: [Events](https://github.com/maxogden/art-of-node#events) and [streams](https://github.com/substack/stream-handbook#introduction) [4]

## Class exercise - putting it all together
After the slide presentation, group code along, and questions we'll move into exercises that students can do alone or in groups. This exercise combines using an HTTP server and reading files. The goal is for your server to respond with the contents of a file. Step by step instructions:
  - Create a new javascript file called file_parser.js
  - Create a new text file called mytext.txt and write something fun in it
  - In your JS file, create a new HTTP server and have it write some text in the response
  - Instead of writing text, read or stream mytext.txt into HTTP server's response
  - Ask your TAs for help
  - Extra credit: make it do this
  - We're going to do this next week but if you're feeling comfortable try this over the weekend

## Resources
  - Terminal cheatsheet

## Homework
  - egghead.io
  - learn you node

## Instructor to-do before class
  - Slide deck - post them before class 1
  - Introduce TAs
  - Welcome email to students
  - Share class plan w/ TAs
  - Ask TAs if they want to give a presentation for any of the classes

##
  - Put your head down and hold up 1-5 fingers, 5 being you feel great, 1 you're lost
  - Socrative - anonymous quizzes w/ phone voting
  - Start a class- 3 questions to test your understanding. If you see people struggled then reasses and take a step back.