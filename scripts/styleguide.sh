#!/bin/bash

# Run kss-node to generate style guide
kss-node components styleguide --template styleguide-tmpl --helpers styleguide-tmpl/helpers --css public/style.css --js public/main.min.js

# Copy the site-wide style to the styleguide folder
cp style.css styleguide/public/style.css

# Copy the site-wide js to the styleguide folder
cp js/main.min.js styleguide/public/main.min.js
