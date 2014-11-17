module.exports = function(grunt) {

  grunt.config('clean', {
		dev: [
		'src/css/**/*.css',
		'src/js/**/*.js',
		'src/scss/foundation/**/*.scss',
		],
		bower:[
		'vendor/**/*',
		]
  });


};
