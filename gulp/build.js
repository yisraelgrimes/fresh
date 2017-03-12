// Fresh v1.0.5
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run


// Build
// -------------------------------------
// Clean:   Removes 'build' directory and css files.
// Default: Runs default tasks except for 'server' and 'watch'.
// Concat:  Concats and minifies js, css, html into 'build' directory.
// Images:  Optimizes images and copys them to 'build/assets'.
// Fonts:   Copys fonts to 'build/assets'.
// Echo:    Prints user-info on making a file tree for documentation.
gulp.task('build', function(done) {
	runSequence(
		'clean:all', 'sass', 'views', 'js',
		[ 'concat', 'images', 'fonts' ],
		'build:rootfiles', 'tree', done
	)
});

// TODO: **Fresh** - Check build tasks and test
