// Fresh v2.0.1
// -------------------------------------

// Plugins
var g   = require('gulp' );
var del = require('del'  );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


// Removes staging and production directories
g.task('clean', function() {
	return del.sync([ pt.stagingD, pt.buildD ]);
});

g.task('clean:build', function() {
	return del.sync([pt.buildD]);
});

g.task('clean:staging', function() {
	return del.sync([pt.stagingD]);
});
