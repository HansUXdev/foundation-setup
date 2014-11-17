module.exports = function(grunt) {

  grunt.config('copy', {
      foundation:{
        expand: true,
        cwd: 'vendor/foundation/',
        src: [
          'js/**/*',
          'css/**/*',
          'scss/foundation/**/*'],
        dest: 'src/'
      },

      jquery: {
        src: '<%= config.jquery %>/jquery.min.js',
        dest: '<%= assemble.options.assets %>/js/jquery.js'
      },
      holder: {
        src: '<%= config.holder %>/holder.js',
        dest: '<%= assemble.options.assets %>/js/holder.js'
      },
      highlight: {
        src: '<%= config.highlight %>/highlight.pack.js',
        dest: '<%= assemble.options.assets %>/js/highlight.js'
      },
      modernizr: {
        src: '<%= config.modernizr%>/modernizr.js',
        dest: '<%= assemble.options.assets %>/js/modernizr.js'
      },
      

      // DEVELOPMENT Copy files from src to www
      src:{
        expand: true,
        cwd: 'src',
        src: [
          'js/**/*',
          'css/**/*',
          'scss/**/*',
          'img/**/*'],
        dest: '<%= assemble.options.assets %>/'
      },

      // PRODUCTION | Copy files from 'dist' to www
      prod:{
        expand: true,
        cwd: '<%= config.dev %>',
        src: [
          'assets/js/**/*',
          'assets/css/**/*',
          'assets/css/**/*',
          'assets/img/**/*',
          'posts/**/*.html',
          '*.html'
          ],
        dest: '<%= config.prod %>'
      },
  });


};
