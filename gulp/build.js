// Fresh v2.0.3
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
		'build:message',
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


// Default output message for Static builds
var buildMessage = 'Your STATIC site is ready for production! Check the \'' + pt.buildD + '\' directory for your optimized files. All you have to do now is grab that directory and make it the root folder of your site. If you want to test it out, just run \'gulp build:test\' in your command line.'

if (op.isDynamic){
	var buildMessage = 'Your DYNAMIC template is ready to be converted for your CMS! Check the \'' + pt.buildD + '\' directory for your template-ready files. You demo content probably won\'t work but if you want to check the other stuff then just run \'gulp build:test\' in your command line.'
}

g.task('build:message', function() {
	console.log('');
	console.log(buildMessage);
	console.log('');
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
