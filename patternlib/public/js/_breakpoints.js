
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
