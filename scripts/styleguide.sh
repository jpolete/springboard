#!/bin/bash

# Run kss-node to generate style guide
kss-node components styleguide --template styleguide-tmpl --helpers styleguide-tmpl/helpers --css public/style.css

# Copy the site-wide style to the styleguide folder
cp style.css styleguide/public/style.css
