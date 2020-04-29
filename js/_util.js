
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
