/*jshint node: true */
/*jshint esnext: true */

"use strict";

/*
 * Require the Fractal module
 */
const fractal = module.exports = require( "@frctl/fractal" ).create();

/*
 * Give your project a title.
 */
fractal.set( "project.title", "Springboard" );

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set( "path",  __dirname + "/components" );

/*
 * Default layout.
 */
fractal.components.set( "default.preview", "@preview" );

/*
 * Set global layout
 */
fractal.set( "components.default.preview", "@preview" );

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set( "path", __dirname + "/docs" );

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set( "static.path",  __dirname + "/public" );

/*
 * Destination for static build.
 */
fractal.web.set( "builder.dest", __dirname + "/build" );

/*
 * Set skin customization
 */
const mandelbrot = require( "@frctl/mandelbrot" );
const theme = mandelbrot({
    skin: "black"
});
fractal.web.theme( theme );