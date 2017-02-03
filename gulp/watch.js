// Fresh v1.0.0
//
// -------------------------------------------------------------------
// 'gulp watch'

// Require Plugins
var gulp        = require( 'gulp'          );  // Umm. The reason we're here?
var browserSync = require( 'browser-sync'  );  // Live browser reloading

// -------------------------------------


// -------------------------------------
// Watch
// -------------------------------------
// Watches SASS, Pug (*optional), js, and html for changes.
// On change, relevant tasks run and browser reloads.
gulp.task( 'watch', function() {
  gulp.watch( pathy.sass.all, ['sass'] )
	if ( optys.pug.usePug ) { // if pug is turned on
	  gulp.watch( pathy.pug.all, ['pug'] )
	} // end: if
	gulp.watch( pathy.js.all, ['js'], browserSync.reload )
  gulp.watch( pathy.html.all, browserSync.reload )
} );

// Pug can be removed from operation by user configuration in '_config.js'.
