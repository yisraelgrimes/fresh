// Fresh v1.0.5
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var jshint       = require( 'gulp-jshint'   );    // Lints JS
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run
var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp

// -------------------------------------

// -------------------------------------

// Use node.js to check for '.stylishcolors.' If it's missing,
// download it from the Resources repo.
var fs = require( 'fs' );
var file = '.stylishcolors';

var stylishcolors = [
	'echo Downloading .stylishcolors from the Fresh-Resources repo...',
	'curl -o .stylishcolors https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/.stylishcolors',
].join("\n");


if ( fs.existsSync( file ) ) {
	var doFile = doFile;
} else {
	var doFile = stylishcolors;
}

// -------------------------------------


// Tabifies and Lints JS (optional) using jshint
if ( optys.js.lintFiles ) {
	gulp.task( 'js', function( done ) {
		runSequence( ['tabify-js'], 'lint-js', done )
	} );
} else {
	gulp.task( 'js', ['tabify-js'], function( done ) {
	} );
};


// Lint JS using jshint
gulp.task( 'lint-js', function() {

	gulp.src( optys.js.lint.files ) // User decides files to lint
		.pipe( shell( [ doFile ] ) )
		.pipe( jshint( ) )
		.pipe( jshint.reporter( 'jshint-stylish-ex' ) )
		// .pipe(browserSync.reload({ stream: true }))
} );


// Converts spaces to tabs
gulp.task( 'tabify-js', function () {
	return gulp.src( pathy.js.all )
		// Convert spaces to tabs
		.pipe( tabify( 2, true ) )
		// Put files back in dev for future work
		.pipe( gulp.dest( pathy.js.dir) )
		// Copy files over to assets folder for testing on the dev site
		.pipe( gulp.dest( pathy.js.dest ) )
} );





// Future Project: Defining specific lint options
// http://justinchmura.com/2014/07/10/jshint-using-gulp/
// https://github.com/linnovate/mean/blob/master/.jshintrc
