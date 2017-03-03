// Fresh v1.0.3
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var jshint       = require( 'gulp-jshint'   );  // Lints JS
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------


// Tabifies and Lints JS (optional) using jshint
if ( optys.js.lintFiles ) {
	gulp.task( 'js', function( done ) {
		runSequence( ['tabify:js'], 'test:js', done )
	} );
} else {
	gulp.task( 'js', ['tabify:js'], function( done ) {
	});
};


// Lint JS using jshint
gulp.task( 'test:js', function() {
	gulp.src( optys.js.lint.files ) // User decides files to lint
		.pipe( jshint( ) )
		.pipe( jshint.reporter( 'jshint-stylish-ex' ) )
		// .pipe(browserSync.reload({ stream: true }))
} );


// Converts spaces to tabs
gulp.task( 'tabify:js', function () {
	return gulp.src( pathy.js.dir + '/*js' )
		.pipe( tabify( 2, true ) )
		.pipe( gulp.dest( pathy.js.dir ) )
} );
// TODO: Move tabify options to config
