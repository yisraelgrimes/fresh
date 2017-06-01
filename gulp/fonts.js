// Fresh v2.0.1
// -------------------------------------

// Plugins
var g  = require('gulp');

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


g.task('fonts', function() {
	return g.src(pt.devD + pt.fontsD + pt.allFiles)
		.pipe(g.dest(pt.stagingD + pt.fontsD));
});


g.task('fonts:build', function() {
	return g.src(pt.devD + pt.fontsD + pt.allFiles)
		.pipe(g.dest(pt.buildD + pt.fontsD));
});
