// Post-process your css with vendor prefix

module.exports = function(grunt) {

    grunt.config('pleeease', {

      css: {
        options: {
          minifier: false, // set true for production
          filters: { "oldIE": true },
        },
        files: {
          '<%= config.css %>/dev/': '<%= config.css %>/*.css',
        }
      },

   });


};

