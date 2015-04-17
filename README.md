
# Overview

Springboard is my starter kit of HTML, SASS and JavaScript for new web projects. It is designed for a design-in-the-browser workflow using [Codekit](https://incident57.com/codekit/) for file processing. It includes

- CSS styles for common elements and modules using SASS and [SMACSS](https://smacss.com/)
- JavaScript polyfills 
- Kss-node and a [custom styleguide template](https://github.com/jpolete/kss-node-template) to generate a style guide from the CSS comments.

The JavaScript polyfills are:

- [Respond.js](https://github.com/scottjehl/Respond)
- [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
- [Picturefill](https://github.com/scottjehl/picturefill)
- [Shoestring](https://github.com/filamentgroup/shoestring)
- [jQuery](https://github.com/jquery/jquery)

# Getting Started
To begin a new project, open a terminal, `cd` into the project directory, and run the following commands

1. `npm install` (installs bower and grunt)
2. `bower install` (install front-end dependencies)
3. `grunt` (copies 3rd party libraries downloaded via Bower to their production location)

# Generate a Style Guide

You can generate a style guide from CSS comments by running `grunt styleguide`. For information on the KSS commenting spec see [kss-node](https://github.com/kss-node/kss-node). 

# Kit Files

A note about .kit files… I use [Codekit](https://incident57.com/codekit/) to process frontend assets. Codekit supports ".kit" files—HTML files with special comments to support variables and includes. It’s a quick and simple way to handle page templating and enables me to design in the browser. [Learn more here](https://incident57.com/codekit/help.html#kit)

# To-do 

- Ditch grunt for a simple bash copy script.

