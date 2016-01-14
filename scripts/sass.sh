#!/bin/bash

# Process style guide sass
sass -t compressed styleguide-tmpl/public/sbstyleguide.scss styleguide-tmpl/public/sbstyleguide.css

# Process site sass
sass -t compressed components/style.scss style.css
