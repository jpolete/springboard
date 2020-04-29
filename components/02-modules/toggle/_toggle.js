/**
  Progressively enhances yes/no, on/off, positive/negative radio buttons to
  an iOS-style toggle switch. To use...

  1. Wrap you on/off input/label pairs in a div with a class of `j-toggle`
  2. Ensure that the positive choice radio button is first (source order).
  3. Include CSS style set for `toggle-switch`

  The javascript tracks the on/off state of the control and handles the
  click event. CSS is responsible for the appearance and animation.

*/
 ( function() {

    function handleToggle( e ) {
      var el = e.currentTarget;
      var inputs = el.getElementsByTagName( "input" );

      if ( el.getAttribute( "data-state" ) === "on" ) {
        inputs[0].checked = null;
        inputs[1].checked = "checked";
        el.setAttribute( "data-state", "off" );
      } else {
        inputs[0].checked = "checked";
        inputs[1].checked = null;
        el.setAttribute( "data-state", "on" );
      }
    }

    function handleKeyboardStateChange( e ) {
      // Toggle on spacebar like native inputs
      if( e.keyCode === 32 ) {
        handleToggle( e );
      }
    }

    function initToggle( t ) {
      t.tabIndex = 0;
      var inputs = t.getElementsByTagName( "input" );
      t.className = t.className + " " + "toggle-switch";
      t.addEventListener( "click", handleToggle );
      t.addEventListener( "keyup", handleKeyboardStateChange );
      t.setAttribute( "data-state", ( inputs[0].checked ) ? "on" : "off" );
    }

    var toggles = document.getElementsByClassName( "j-toggle" ),
        i = 0;

    for ( i = 0; i < toggles.length; i++ ) {
      initToggle( toggles[i] );
    }

})();
