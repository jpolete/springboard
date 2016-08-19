#!/bin/bash

# Get on master
git checkout develop

# Make sure we're up to date
git pull
git push

# Compile SASS
sass -t compressed style.scss ../public/style.css

# Build static Fractal Web UI
(cd componentlib && fractal build && cd ..)

# Copy to temp, then switch to gh-pages???
git checkout gh-pages
cp -R componentlib/build/. ./
