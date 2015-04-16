
// Exclude Shoestring/jQuery if we're only using it for document ready.
// If that's the case, just move script element to bottom of the page.
// @disabled-codekit-prepend "lib/shoestring.min.js";
// @disabled-codekit-prepend "lib/jquery.min.js";

// Global variable to which to attach all your code.
// Attach all functions and variables to this so we don't pollute the global 
// context.
var __app__ = {};

// Utilities
// @codekit-append "_util.js";

// Named breakpoints (these should really match named Sass breakpoints)
// @codekit-append "_breakpoints.js";

// Run / initialize code defined in other modules
// @codekit-append "_start.js";
