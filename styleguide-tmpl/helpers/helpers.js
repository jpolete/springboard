/**
 * Registers the "ifShowCode" Handlebars helper.
 *
 * @param {object} handlebars The global Handlebars object used by kss-node's
                   kssHandlebarsGenerator.
 */
module.exports.register = function( handlebars ) {

  /**
   * Whether or not to show the markup code for a given section. KSS reference sections starting
   * with "Branding" or "Editorial" will return false.
   *
   * @param {string} reference The KSS reference string as returned by KssSection.referenc().
   *
   */
  handlebars.registerHelper( "ifShowCode", function( reference, options ) {
    var noCodeSections = [ "Branding", "Editorial" ];
    return !( startsWithAny( reference, noCodeSections ) ) ?
      options.fn( this ) : options.inverse( this );
  });

  function startsWith( haystack, needle ) {
    return haystack.slice( 0, needle.length ) === needle;
  }

  function startsWithAny( haystack, needles ) {
    for ( var i = 0; i < needles.length; i++ ) {
      if ( startsWith( haystack, needles[i] ) ) {
        return true;
      }
    }
    return false;
  }
};
