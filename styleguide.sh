#!/bin/bash
kss-node components styleguide --template styleguide-tmpl --helpers styleguide-tmpl/helpers --css public/style.css
cp style.css styleguide/public/style.css
