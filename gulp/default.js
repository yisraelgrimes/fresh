// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require('gulp'         );
var runSequence = require('run-sequence' );
var browserSync = require( 'browser-sync'),
		reload      = browserSync.reload;

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


// Serve files to browser
g.task('server', function() {
	browserSync({
		server: {
			baseDir: pt.server
		}
	})
});

// Set up watchers to run tasks and reload browser
g.task('watch', function() {
	g.watch(pt.devD + pt.allFiles, ['views'] );
	g.watch(pt.devD + pt.stylesFiles, ['styles'] );
	g.watch(pt.devD + pt.scriptsFiles, ['scripts'] );
	g.watch(pt.server + pt.htmlFiles, reload );
});

// -------------------------------------

// Default Task
g.task('default', function(callback) {
	runSequence('images', 'views', 'styles:tabify',
	['fonts', 'styles', 'styles:normalize', 'scripts', 'server'],
	'watch', callback )
});
