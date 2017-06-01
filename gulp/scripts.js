// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require( 'gulp'            );
var tabify      = require( 'gulp-tabify'     );
var jshint      = require( 'gulp-jshint'     );
var sourcemaps  = require( 'gulp-sourcemaps' );
var fixmyjs     = require( 'gulp-fixmyjs'    );
var browserSync = require( 'browser-sync'    ),
		reload      = browserSync.reload;

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


g.task('scripts', function() {
	return g.src(pt.devD + pt.scriptsD + pt.scriptsFiles)
		.pipe(tabify( 2, true))
		.pipe(g.dest( pt.devD + pt.scriptsD))
		// 2DO-FRESH: Get fixmyjs working
		// .pipe(gulpif(op.fixJs, fixmyjs()))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish-ex'))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(g.dest(pt.stagingD + pt.scriptsDestD))
		.pipe(reload({stream:true}));
});


g.task('scripts:lint', function() {
	return g.src(pt.devD + pt.scriptsD + pt.scriptsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish-ex'))
});


// -------------------------------------------------------------------
// Related tasks: (see 'init.js')
// - 'dl:jshintignore'  - Downloads a .jshintignore file to root.
//                        Use this file to exclude js files from linting.
// - 'dl:stylishcolors' - Downloads a .stylishcolors file to root. This file
//                        is used to add some style to the cli lint report.
// - 'dl:scripts'       - Downloads a main.js template to 'dev/scripts'
