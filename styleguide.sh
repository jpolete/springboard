#!/bin/bash

# Process style guide sass
sass -t compressed styleguide-tmpl/public/sbstyleguide.scss styleguide-tmpl/public/sbstyleguide.css

# Process site sass
sass -t compressed components/style.scss style.css

# Run kss-node to generate style guide
kss-node components styleguide --template styleguide-tmpl --helpers styleguide-tmpl/helpers --css public/style.css
cp style.css styleguide/public/style.css
