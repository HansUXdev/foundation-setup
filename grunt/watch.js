module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files:[
        '<%= config.live %>/**/*.html',
        '<%= config.live %>/css/{,*/}*.css',
        '<%= config.live %>/js/{,*/}*.js',
        '<%= config.live %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    },
    compass:{
      files:['<%= config.sass %>/**/*.scss'],
      tasks:['compass']
    }
  });


};
