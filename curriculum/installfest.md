# Installfest!

We'll have an installation night for the GDI Boston Node.js class. Please read through a section fully before running any commands.

Please bring along a laptop and charger to installation night. We will be installing the following programs:
 - [Sublime Text 3](https://www.sublimetext.com/2)
 - Version 4.4.4 of [node.js](nodejs.org)
 - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

 ## Sublime Text

 We suggest using Sublime Text as an editor. You can download it by going to the [Sublime homepage](https://www.sublimetext.com/) and clicking the 'download' button.

 ## Node.js

 We'll be following these instructions for installing node with a few notable changes:
 - [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
 - [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)

 For *Mac* users, stop before you run the command `brew install node`. Instead, run these commands:
 ```
 brew tap homebrew/versions
 brew search node
 brew install homebrew/versions/node012
 ```
 Then continue following the instructions.

 ### A Note about Node versions

 For this class we are going to use version 4.4.4 of node.js, the current supported version. If you have a different node version installed, you can use `nvm` or `n` to change versions.

 * [nvm for osx](https://github.com/creationix/nvm)
 * [nvm for windows](https://github.com/coreybutler/nvm-windows)
 * [n for osx](https://github.com/tj/n)

 ## Git

 For *Mac* users, open your Terminal by typing Command + spacebar, then typing Terminal and pressing the return/enter button. Check if you have git installed by typing `git` and presing enter. If you already have git installed you should see something like this:
 ```
 usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
 ```

 If you don't have git installed, you will see instructions on how to install it.

 For *Windows* users if you don't have git installed go to [this page](https://git-scm.com/download/win) and follow the instructions.

 For an intro to Git you can read [this](https://rogerdudler.github.io/git-guide/) or try [this interactive tutorial](https://try.github.io/levels/1/challenges/1)