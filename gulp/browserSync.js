// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp        = require( 'gulp'          );  // Umm. The reason we're here?
var browserSync = require( 'browser-sync'  );  // Live browser reloading

// -------------------------------------


// Launches browserSync/default web browser from local index file.
gulp.task( 'server', function() {
	browserSync( {
		server: { baseDir: pathy.server }
	} )
} );
