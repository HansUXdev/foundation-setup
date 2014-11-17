module.exports = function(grunt) {

  	grunt.config('sass', {
      options: {
          sourceMap: true
        },
        dist: {
            files: {
                '<%= config.css %>/css/foundation.css': '<%= config.sass %>/foundation.scss'
            }
        }
   });


};
