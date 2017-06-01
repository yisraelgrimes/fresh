// Fresh v2.0.1
// -------------------------------------

// Plugins
var g     = require( 'gulp'       );
var shell = require( 'gulp-shell' );
var sloc  = require( 'gulp-sloc'  );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


g.task('sloc', function(){
	return g.src([
		'**/*.js',
		'!node_modules/**/*'
	])
		.pipe(sloc());
});