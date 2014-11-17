module.exports = function(grunt) {

  grunt.config('copy', {
      foundation:{
        expand: true,
        cwd: 'vendor/foundation/',
        src: [
          'js/**/*',
          // 'css/**/*',
          'scss/**/*'
          ],
        dest: 'src/'
      },

      // sass:{
      //   expand: true,
      //   cwd: 'vendor/foundation5-sass/',
      //   src: [
      //     'scss/**/*'],
      //   dest: 'src/'
      // },

  });


};
