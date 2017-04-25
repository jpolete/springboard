
( function( window ) {

  var Modal = function( config ) {
    this.config = config;
    this.isOpen = false;
    this.body = document.getElementsByTagName( "body" )[0];
    this.openButton = document.querySelector( config.trigger );
    this.dialog = this._buildDialog( config );
    this.body.appendChild( this.dialog );
    this.wireEvents();
  };

  var proto = Modal.prototype;

  proto._buildDialog = function( config ) {
    var content = document.querySelector( config.content );
    if ( !content ) {
      throw "Missing content. No element with selector: " + config.content;
    }
    var title = content.getAttribute( "title" );
    if ( !title ) {
      throw "Missing required title attribute on content div: " + config.content;
    }

    content.setAttribute( "hidden", true );

    var h2 = document.createElement( "h2" );
    h2.className = "dialog__heading";
    h2.innerHTML = title;

    var header = document.createElement( "header" );
    header.id = "dialog-header";
    header.className = "dialog__header";
    header.appendChild( h2 );

    var body = document.createElement( "section" );
    body.id = "dialog-body";
    body.className = "dialog__body";
    body.innerHTML = content.innerHTML;

    var footer = document.createElement( "footer" );
    footer.id = "dialog-footer";
    footer.className = "dialog__footer";

    var dialog = document.createElement( "div" );
    dialog.className = "dialog";
    dialog.setAttribute( "role", "aria-dialog" );
    dialog.setAttribute( "aria-labelledby", "dialog-header" );
    dialog.setAttribute( "aria-describedby", "dialog-body" );
    dialog.appendChild( header );
    dialog.appendChild( body );
    dialog.appendChild( footer );

    var m = this;
    if ( config.buttons ) {
      var createClickCallback = function( callback ) {
        return function() { if ( callback ) { callback( m ); } else { m.close(); } };
      };
      for ( var i = 0; i < config.buttons.length; i++ ) {
        var buttonConfig = config.buttons[i];
        var b = document.createElement( "button" );
        b.type = "button";
        b.innerHTML = buttonConfig.text;
        b.addEventListener( "click", createClickCallback( buttonConfig.callback ) );
        footer.appendChild( b );
      }
    }

    var modal = document.createElement( "div" );
    modal.className = "modal";
    modal.setAttribute( "hidden", "true" );
    modal.appendChild( dialog );

    return modal;
  };

  proto.wireEvents = function() {
    var m = this;
    m.openButton.addEventListener( "click", function() { m.open(); });
    document.addEventListener( "keyup", function( e ) { m._esc( e ); });
  };

  proto._esc = function( e ) {
    if ( !this.isOpen ) { return; }
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 27 ) {
      this.close();
      return;
    }
    if ( keyCode === 9 ) {
      if ( e.target === this.firstFocus && e.shiftKey ) {
        this.lastFocus.focus();
        e.preventDefault();
      }
      if ( e.target === this.lastFocus ) {
        this.firstFocus.focus();
        e.preventDefault();
      }
    }
  };

  proto.open = function() {
    this.isOpen = true;
    this.dialog.tabIndex = -1;
    this.dialog.focus();
    this.dialog.removeAttribute( "hidden" );
    this.body.classList.add( "locked" );
  };

  proto.close = function() {
    this.isOpen = false;
    this.dialog.setAttribute( "hidden", true );
    this.body.classList.remove( "locked" );
    this.openButton.focus();
  };

  window.Modal = Modal;

})( window );
