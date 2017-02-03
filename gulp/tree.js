// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp
var archy        = require( 'archy'         );  // Used for displaying filetree
var map          = require( 'gulp-map'      );  // Used for mapping filetree
var filetree     = require( 'gulp-filetree' );  // Used to creat filetree

// -------------------------------------


// -------------------------------------
// File Tree
// -------------------------------------
// I honestly don't know how this works. It was copied from the plugin
// example and I turned the file paths into variables.
// If you can figure it out, let a brother know :)
// Plugin Example: https://www.npmjs.com/package/gulp-filetree
gulp.task( 'tree', ['echo:tree'], function() {
		var once = true; // lalz0r
		return gulp.src( optys.tree.treeSource + '/**' )
				.pipe( map( function( file ) {
						if( file.path.match( optys.tree.treeSource ) )
								return file
				} ) )
				.pipe( filetree( {cwdRelative: true} ) )
				.pipe( map( function( file ) {
						// file.tree: tree of files passed into filetree
						// file.subtree: subtree rooted at this file

						if( once ) {
								console.log( archy( file.tree ) );
								once = !once;
						}

						return file;
				} ) )
} );


// -------------------------------------
// Tree Info
// -------------------------------------
// Used during 'gulp build' for user convenience.
gulp.task( 'echo:tree', shell.task( [
	'echo Here is the file-tree for your ./build directory. You can copy this and paste it into your README or other documentation.',
] ) );
