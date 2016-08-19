#!/bin/bash

# Compile SASS
(cd componentlib/sass && sass -t compressed style.scss ../public/style.css)

# Build static Fractal Web UI
(cd componentlib && fractal build)

# Copy to temp, then switch to gh-pages???
# git checkout gh-pages
# cp -R componentlib/build/. ./
# rm -r componentlib/
