module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    dirs: {
      js: {
        lib: "js/lib/"
      },
      css: {
        prod: "style.css",
        styleguide: "styleguide-tmpl/style.css"
      },
      sass: "sass",
      bower: {
        respond: "bower_components/respond-minmax/dest/respond.min.js",
        html5shiv: "bower_components/html5shiv/dist/html5shiv.min.js",
        picturefill: "bower_components/picturefill/dist/picturefill.min.js",
        shoestring: "bower_components/filament-shoestring/index.js",
        jquery: "bower_components/jquery/dist/jquery.min.js",
        kssTmpl: "bower_components/kss-node-template/template"
      }
    },
    shell: {
      sass: {
        command: "sass -t expanded sass/style.scss <%= dirs.css.styleguide %>"
      },
      copy: {
        command: [
          "cp <%= dirs.bower.picturefill %> <%= dirs.js.lib %>picturefill.min.js",
          "cp <%= dirs.bower.jquery %> <%= dirs.js.lib %>jquery.min.js",
          "cp <%= dirs.bower.shoestring %> <%= dirs.js.lib %>shoestring.min.js",
          "cp <%= dirs.bower.respond %> <%= dirs.js.lib %>respond.min.js",
          "cp <%= dirs.bower.html5shiv %> <%= dirs.js.lib %>html5shiv.min.js"
        ].join(";"),
      },
      kss: {
        command:
          "kss-node styleguide-tmpl styleguide " +
          "--template <%= dirs.bower.kssTmpl %> " +
          "--css <%= dirs.css.styleguide %>"
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-shell" );

  // Default (dev) build
  grunt.registerTask(
    "default",
    "Just move bower downloaded files to their right place",
    [ "shell:copy" ]
  );

  grunt.registerTask(
    "styleguide",
    "Generate a KSS style guide",
    [ "shell:sass", "shell:kss" ]
  );

};
