// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require( 'gulp'          );
var runSequence = require( 'run-sequence'  );
var useref      = require( 'gulp-useref'   );
var gulpif      = require( 'gulp-if'       );
var uglify      = require( 'gulp-uglify'   );
var cssnano     = require( 'gulp-cssnano'  );
var htmlmin     = require( 'gulp-htmlmin'  );
var download    = require( 'gulp-download' );
var browserSync = require( 'browser-sync'),
		reload      = browserSync.reload;

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


g.task('build', function(callback) {
	runSequence(
		'clean', 'styles:tabify',
		[ 'images',
			'views',
			'fonts',
			'fonts:build',
			'styles',
			'styles:normalize',
			'scripts'
		],
		[ 'pack:humanstxt',
			'pack:robotstxt',
			'pack:readme',
			'pack:gitignore',
			'pack:changelog'
		],
		'build:images',
		'concat',
		'tree',
		callback
	)
});


// -------------------------------------
// Individual Tasks for 'build'
// -------------------------------------

g.task('concat', function() {
	return g.src(pt.stagingD + pt.htmlFiles)
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', cssnano()))
		.pipe(gulpif(op.isStatic, htmlmin({
			collapseWhitespace: true,
		})))
		.pipe(g.dest(pt.buildD));
});


g.task('pack:humanstxt', function() {
	if (op.packHumans) {
		download(op.link.humanstxt)
		.pipe(g.dest(pt.buildD));
	};
});


g.task('pack:robotstxt', function() {
	if (op.packRobots) {
		download(op.link.robotstxt)
		.pipe(g.dest(pt.buildD));
	};
});


g.task('pack:readme', function() {
	if (op.packReadme) {
		return g.src('README.md')
		.pipe(g.dest(pt.buildD));
	};
});


g.task('pack:gitignore', function() {
	if (op.packGitignore) {
		return g.src('.gitignore')
		.pipe(g.dest(pt.buildD));
	};
});


g.task('pack:changelog', function() {
	if (op.packChangelog) {
		return g.src('changelog')
		.pipe(g.dest(pt.buildD));
	};
});


// -------------------------------------
// Helper Task to test build files
// -------------------------------------
g.task('build:test', function() {
	browserSync({
		server: {
			baseDir: pt.buildD
		}
	})
});
