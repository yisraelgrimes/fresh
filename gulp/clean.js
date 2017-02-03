// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp   = require( 'gulp'        );  // Umm. The reason we're here?
var shell  = require( 'gulp-shell'  );  // Terminal Commands in Gulp

// -------------------------------------


// Deletes 'build' folder
gulp.task( 'clean:build', shell.task( [
	'rm -rf ' + pathy.build
] ) );


// Deletes all generated files
gulp.task( 'clean:all', shell.task( [
	'rm -rf ' + pathy.build,
	'rm -rf ' + pathy.css.all
] ) );


// Deletes html files (use with caution)
gulp.task( 'clean:html', shell.task( [
	'rm -rf ' + pathy.dev + '/html',
	'rm -rf ' + pathy.dev + '/index.html'
] ) );
// TODO: Add gulp-prompt for safe delete or change command type for manual verification
