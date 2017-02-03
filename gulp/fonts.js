// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp   = require( 'gulp' );  // Umm. The reason we're here?

// -------------------------------------

// Copy fonts to 'build' folder
gulp.task( 'fonts', function() {
	return gulp.src( pathy.fonts.all )
		.pipe( gulp.dest( pathy.fonts.dest ) )
} );
