// Fresh v1.0.4
//
// -------------------------------------------------------------------

// Require Plugins
var gulp    = require( 'gulp'         );  // Umm. The reason we're here?
var parker  = require( 'gulp-parker'  );  // Auto requires tasks

// -------------------------------------

// Prints stylesheet info to CLI
gulp.task( 'test:css', function() {
	return gulp.src( pathy.css.all )
		.pipe( parker() )
} );