module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    config: {
      live: 'src',
      src: 'src',
      sass: '<%= config.src %>/scss/',
      css: '<%= config.src %>/css',      
    },

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('grunt');

  // grunt.registerTask('sass', ['sass:production']);
  grunt.registerTask('clear',['clean']);

  grunt.registerTask('setup',['clean','shell:bower','copy','sass']);


  grunt.registerTask('default', ['connect','watch']);


};