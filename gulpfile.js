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
