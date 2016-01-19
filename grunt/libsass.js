module.exports = function(grunt) {

  	grunt.config('sass', {
      options: {
          // sourceMap: true;
        },
        dist: {
            files: {
                '<%= config.css %>/foundation.css': '<%= config.sass %>/foundation.scss',
                '<%= config.css %>/normalize.css': '<%= config.sass %>/normalize.scss',
            }
        }
   });


};
