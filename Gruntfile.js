module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    dirs: {
      patternlib: {
        js: {
          lib: "patternlib/public/js/lib/"
        }
      },
      js: {
        lib: "js/lib/"
      },
      node: {
        html5shiv: "node_modules/html5shiv/dist/html5shiv.min.js",
        picturefill: "node_modules/picturefill/dist/picturefill.min.js",
        shoestring: "node_modules/shoestring/dist/shoestring.js",
        jquery: "node_modules/jquery/dist/jquery.min.js",
      }
    },
    shell: {
      copy: {
        command: [
          "mkdir -p js/lib",
          "cp <%= dirs.node.picturefill %> <%= dirs.js.lib %>picturefill.min.js",
          "cp <%= dirs.node.picturefill %> <%= dirs.patternlib.js.lib %>picturefill.min.js",
          "cp <%= dirs.node.jquery %> <%= dirs.js.lib %>jquery.min.js",
          "cp <%= dirs.node.jquery %> <%= dirs.patternlib.js.lib %>jquery.min.js",
          "cp <%= dirs.node.shoestring %> <%= dirs.js.lib %>shoestring.js",
          "cp <%= dirs.node.shoestring %> <%= dirs.patternlib.js.lib %>shoestring.js",
          "cp <%= dirs.node.html5shiv %> <%= dirs.patternlib.js.lib %>html5shiv.min.js",
          "cp <%= dirs.node.html5shiv %> <%= dirs.js.lib %>html5shiv.min.js"
        ].join(";"),
      },
      kss: {}
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks( "grunt-shell" );

  grunt.registerTask(
    "default",
    "Just move npm downloaded third-party files to their right place",
    [ "shell:copy" ]
  );

};
