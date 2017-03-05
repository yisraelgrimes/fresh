// Fresh v1.0.3
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

// Watches SASS, Pug, Js, and HTML for changes.
// On change, related tasks run and browser reloads.
gulp.task( 'watch', function() {
  gulp.watch( pathy.sass.all, ['sass'] )
  gulp.watch( pathy.pug.all, ['views'] )
	gulp.watch( pathy.js.all, ['js'], browserSync.reload )
  gulp.watch( pathy.html.all, browserSync.reload )
} );
