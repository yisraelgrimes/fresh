// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp  = require( 'gulp'       );  // Umm. The reason we're here?
var shell = require( 'gulp-shell' );  // Terminal Commands in Gulp

// -------------------------------------


// Plays a message from Cleveland Brown when you run 'gulp init'
gulp.task( 'boom', shell.task( [
	// 'afplay gulp/__rsc__/boom.m4a'
	'afplay ' + pathy.gulpRsc + '/boom.m4a'
] ) );
