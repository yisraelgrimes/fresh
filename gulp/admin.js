// Fresh v1.0.4
//
// Some tasks that make working on the Fresh - Core a little easier.
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp


// -------------------------------------


// Resets project files structure back to original.
// Used before pushing to the master brance after creating test projects
gulp.task('refresh', () => {
	// Use node.js to check for Fresh Readme file
	var fs = require( 'fs' ),
	    file = 'fresh_README.md';

  if ( fs.existsSync( file ) ) {
    var resetReadme = 'mv fresh_README.md README.md';
  } else {
    var resetReadme = console.log( 'fresh_README.md file does not exist' );
  }

  return gulp.src( pathy.root )
  .pipe( shell( [
		// Dev Files
		'rm -rf ' + pathy.dev,
		'rm -rf .editorconfig',
		'rm -rf .stylishcolors',
		'rm -rf TODO.md',
		resetReadme,
		// Build Files
		'rm -rf ' + pathy.build,
		'rm -rf robots.txt',
		'rm -rf humans.txt',
	] ) )
} );
