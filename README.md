
# Overview

Springboard is my starter kit of HTML, SASS and JavaScript for new web projects. It is designed for a design-in-the-browser workflow using [Codekit](https://incident57.com/codekit/) for file processing and browser refreshing. It includes

- CSS styles for common elements and modules using SASS and [SMACSS](https://smacss.com/)
- JavaScript polyfills 
- [Kss-node](https://github.com/kss-node/kss-node) and a custom styleguide template to generate a style guide from the CSS comments.

The JavaScript polyfills are:

- [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
- [Picturefill](https://github.com/scottjehl/picturefill)
- [Shoestring](https://github.com/filamentgroup/shoestring)
- [jQuery](https://github.com/jquery/jquery)

# Getting Started

To begin a new project, open a terminal, `cd` into the project directory, and run the following commands

1. `npm install` - installs grunt and third-party libraries.
2. `grunt` - copies 3rd party libraries to their production location.
3. `scripts/sass.sh` - Process SASS into CSS. If you're using CodeKit, Grunt, etc. you can skip this.
4. `scripts/styleguide.sh` - Generate a style guide from sass comments. Re-run this command any time to update the style guide from your CSS/SASS. The style guide is generated at `/styleguide/`.

# Sample Style Guide

You can view a [sample style guide here](https://jpolete.github.io/springboard)

# Kit Files

A note about .kit files… I use [Codekit](https://incident57.com/codekit/) to process frontend assets. Codekit supports ".kit" files—HTML files with special comments to support variables and includes. It’s a quick and simple way to handle page templating and enables a design-in-the-browser workflow. [Learn more here](https://incident57.com/codekit/help.html#kit)

# To-do 

- Ditch grunt for a simple bash copy script.
