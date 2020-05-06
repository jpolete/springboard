
// Global variable to which to attach all your code.
// Attach all functions and variables to this so we don't pollute the global
// context.
var __app__ = {};


( function( window, app, undefined ) {

    app.getWidth = function() {
      var doc = document.documentElement;
      return Math.max( doc.clientWidth, window.innerWidth || 0 );
    };

    app.getHeight = function() {
      var doc = document.documentElement;
      return Math.max( doc.clientHeight, window.innerHeight || 0 );
    };

    app.addClass = function( el, klass ) {
      if ( !app.hasClass( el, klass ) ) {
        el.className += " " + klass;
      }
    };

    app.hasClass = function( el, klass ) {
      if ( !el.className ) {
        return false;
      }
      var klasses = el.className.split( " " );
      return klasses.indexOf( klass ) !== -1;
    };

    app.removeClass = function( el, klass ) {
      el.className = el.className.replace( new RegExp( klass, "g" ), "" );
    };

    app.toggleClass = function( el, klass ) {
      if ( app.hasClass( el, klass ) ) {
        app.removeClass( el, klass );
      } else {
        app.addClass( el, klass );
      }
    };

})( this, __app__ );


// Named breakpoints (these should really match named Sass breakpoints)
( function( window, app, undefined ) {

  app.bigPhone = 500;
  app.readerWidth = 600;
  app.tabletWidth = 768;
  app.traditionalWidth = 1024;
  app.largeWidth = 1400;

  app.isBigPhone = function() {
    var w = app.getWidth();
    return w >= this.bigPhone && w < this.readerWidth;
  };

  app.isReader = function() {
    var w = app.getWidth();
    return w >= this.readerWidth && w < this.tabletWidth;
  };

  app.isTablet = function() {
    var w = app.getWidth();
    return w >= this.tabletWidth && w < this.traditionalWidth;
  };

  app.isTraditional = function() {
    var w = app.getWidth();
    return w >= this.traditionalWidth && w < this.largeWidth;
  };

  app.isLarge = function() {
    var w = app.getWidth();
    return w >= this.largeWidth;
  };

})( this, __app__ );

//
// Initialize JavaScript that should run on every page here.
//
( function( window, app, undefined ) {

  //app.doSomething();

})( this, __app__ );
