// Post-process your css with vendor prefix

module.exports = function(grunt) {

    grunt.config('autoprefixer', {

      options: {
        browsers: [
        'last 2 version', 
        '> 1%', 
        'ff 17', 'Firefox ESR',
        'ie >= 8',
        ]
      },
      all: {
        files: [{
          expand: true,
          // cwd: '<%= config.src %>',
          src: ['<%= config.css %>/*/**.css'],
          dest: '<%= config.css %>/', // output to src so we can continue to run tasks
          ext: '.css'
        }]
      }

   });


};
