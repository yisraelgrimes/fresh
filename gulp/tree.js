// Fresh v2.0.1
// -------------------------------------

// Plugins
var g        = require( 'gulp'          );

var archy    = require( 'archy'         );
var map      = require( 'gulp-map'      );
var filetree = require( 'gulp-filetree' );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------

// 
g.task('tree', function() {
	var once = true; // lalz0r
	g.src(pt.buildD + '/**')
		.pipe(map(function(file) {
			if(file.path.match(pt.buildD))
				return file
			}))
		.pipe(filetree({cwdRelative: true}))
		.pipe(map(function(file) {
			// file.tree: tree of files passed into filetree
			// file.subtree: subtree rooted at this file
			if(once) {
				console.log(archy(file.tree));
				once = !once;
			}
			return file;
		}))
});