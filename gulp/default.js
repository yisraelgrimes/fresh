// Fresh v1.0.5
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run


// Default Gulp Task
// -------------------------------------
// - Sass:    Compiles, tabifies, and lints.  Outputs CSS.
// - Pug:     (*optional) Compiles, tabifies. Outputs HTML.
// - JS:      Tabifies and lints.
// - Server:  Creates local server and sync-refreshes browsers.
// - Watches: Sass, Pug (*optional), JS, html. Runs tasks and reloads browser.
gulp.task( 'default', function( done ) {
	runSequence([ 'sass', 'views', 'server' ], 'watch', done )
});
