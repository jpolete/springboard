/*jshint node: true */
/*jshint esnext: true */

"use strict";

/*
 * Require the Fractal module
 */
const fractal = require( "@frctl/fractal" );

/*
 * Give your project a title.
 */
fractal.set( "project.title", "Springboard" );

/*
 * Tell Fractal where to look for components.
 */
fractal.set( "components.path", "components" );

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.set( "docs.path", "docs" );

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.set( "plugins.web.static.path", "public" );

/*
 * Set global layout
 */
fractal.set( "components.default.preview", "@preview" );

/*
 * Set skin for default Mandelbrot theme
 */
fractal.set( "themes.mandelbrot.skin", "black" );
