// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var jshint       = require( 'gulp-jshint'   );    // Lints JS
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------


// Tabifies and Lints JS using jshint
gulp.task( 'js', function( done ) {
	runSequence( ['tabify:js'], 'test:js', done )
} );


// Lint JS using jshint
gulp.task( 'test:js', function() {
	gulp.src( pathy.js.dir + '/*js' ) // Don't lint vendors
		.pipe( jshint() )
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
