// Fresh v2.0.1
// -------------------------------------

// Plugins
var g     = require('gulp'        );
var shell = require( 'gulp-shell' );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


// Resets the project back to the original 'Fresh' state
g.task('refresh', shell.task([ '. ./gulp/shell/refresh.sh' ]));


// Plays audio clip from Cleveland Brown (because, fun)
g.task('fun', shell.task([ 'afplay gulp/__rsc__/boom.m4a' ]));


// Symple test to make sure gulp is processing properly
g.task('hello', function() { console.log('Hello World'); });

// Make a git.io short url
g.task('gitio', shell.task([ 
	'. ./gulp/shell/gitshorturl.sh' 
]));


// Use Cloc to print dev info about project.
// Must have Cloc installed on your machine. (brew install cloc)
g.task('cloc', shell.task([ 
	'cloc . --exclude-dir=node_modules' 
]));