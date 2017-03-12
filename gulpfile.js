// Fresh v1.0.3
//
// -------------------------------------------------------------------

// Required Plugins
var gulp        = require( 'gulp'         );  // Umm. The reason we're here?
var runSequence = require( 'run-sequence' );  // Sets order for tasks to run
var requireDir  = require( 'require-dir'  );  // Auto requires tasks

// Auto require tasks from 'gulp' directory
var dir = requireDir( './gulp', { recurse: true });

// -------------------------------------


// -------------------------------------
// Default
// -------------------------------------
// - Sass:    Compiles, tabifies, and lints. Outputs css.
// - Pug:     (*optional) Compiles, tabifies. Outputs html.
// - JS:      Tabifies and lints.
// - Server:  Creates local server and sync-refreshes browsers.
// - Watches: Sass, Pug (*optional), JS, html. Runs tasks and reloads browser.
gulp.task( 'default', function( done ) {
	runSequence([ 'sass', 'views', 'server' ], 'watch', done )
});


// -------------------------------------
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
		'clean:all', 'sass', 'pug', 'js',
		[ 'concat', 'images', 'fonts' ],
		'build:rootfiles', 'tree', done
	)
});


// -------------------------------------
// Available Tasks
// -------------------------------------
// TODO: **Fresh** - Update available gulp tasks

// By default, Fresh is designed to be super easy to integrate into your current workflow. Out of the box, it comes with ....
//
//
// ## Gulp Tasks
// Project Setup/Management
// - init
// - tree
// - todo
// - clean:todo
// - clean:cache
// - clean:build
// - clean:all
// - clean:html
//
// Development
// - default
// - watch
// - html2pug
// - tabify:pug
// - views
// - sass
// - sass:compile
// - test:sass
// - tabify:sass
// - js
// - server
//
// Finalize
// - build
// - test:css
// - concat
// - images
// - fonts
