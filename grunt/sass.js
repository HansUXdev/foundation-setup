module.exports = function(grunt) {

  	grunt.config('sass', {
      // css should have comments
      dev: {
        options:{
          compass:true,
          // style: 'ex',
        },
        files: [{
          flatten: true,
          expand: true,
          // cwd: '<%= config.src %>',
          src: ['<%= config.src %>/**/*.scss'],
          dest: '<%= config.src %>/css/',
          ext: '.css'
          // "<%= config.src %>/css/**/*.css": "<%= config.src %>/scss/**/*.scss"
        }]
      }
   });


};
