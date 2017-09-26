// Fresh v2.0.1
// -------------------------------------
// 2DO-FRESH: Add downloader for .sass-lint.yml to file

// Plugins
var g           = require( 'gulp'             );
var gulpif      = require( 'gulp-if'          );
var sass        = require( 'gulp-sass'        );
var prefix      = require( 'gulp-autoprefixer');
var sourcemaps  = require( 'gulp-sourcemaps'  );
var sassLint    = require( 'gulp-sass-lint'   );
var tabify      = require( 'gulp-tabify'      );
var parker      = require( 'gulp-parker'      );
var browserSync = require( 'browser-sync'     ),
		reload      = browserSync.reload;

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


// Output Options
var sassOpts = {
	errLogToConsole: true,
	outputStyle: 'expanded',
	sourceComments: 'true',
	indentType: 'tab',
	indentWidth: '1',
};

// Autoprefixer Options
var prefixOpts = [
	'last 2 versions',
	'ie >= 9',
	'and_chr >= 2.3'
];

// Linter Options
var lintOpts = {
	files: { ignore: op.sassLintX },
	configFile: 'gulp/__rsc__/.sass-lint.yml',
};


// -------------------------------------
// Main Tasks
// -------------------------------------
// 2DO-FRESH: find out if there's a way to get sass to not care if tabs/spaces are used together. And find out if it's possible to convert tabs to spaces on-save without re-running all sass files.
// TODO: Add a universal `ignore` tag to the global pt variable to be used in other tasks.
g.task('styles', function() {
	return g.src([
		pt.devD + pt.stylesD + pt.stylesFiles,
		'!**/@*.+(sass|scss)'
		])
		// 2DO-FRESH: Add tabify as option in config for users who aren't tabifying with their editor
		// .pipe(tabify( 2, true ))
		.pipe(gulpif(op.lintSass, sassLint( lintOpts )))
		.pipe(gulpif(op.lintSass, sassLint.format()))
		.pipe(sourcemaps.init())
			.pipe(sass( sassOpts ).on('error', sass.logError))
			.pipe(prefix( prefixOpts ))
		.pipe(sourcemaps.write())
		.pipe(g.dest(pt.stagingD + pt.stylesDestD))
		.pipe(reload({stream:true}));
});


g.task('styles:normalize', function() {
	return g.src('node_modules/normalize.css/normalize.css')
		.pipe(g.dest(pt.stagingD + pt.stylesDestD))
		.pipe(reload({stream:true}));
});

// -------------------------------------
// Helper Tasks
// -------------------------------------

// Lint sass files without processing
g.task('styles:lint', function() {
	return g.src(pt.devD + pt.stylesD + pt.stylesFiles)
		.pipe(sassLint( lintOpts ))
		.pipe(sassLint.format())
});

// Tabify sass files without processing
g.task('styles:tabify', function() {
	return g.src(pt.devD + pt.stylesD + pt.stylesFiles)
		.pipe(tabify( 2, true ))
		.pipe(g.dest(pt.devD + pt.stylesD))
});

// Prints stylesheet info to CLI
g.task('styles:test', function() {
	g.src(pt.buildD + pt.stylesDestD + pt.cssFiles)
		.pipe(parker())
});


// -------------------------------------------------------------------
// Related tasks: (see 'init.js')
// - 'dl:styles' - Downloads main.sass (or .scss) and normalize.scss
//                 templates to 'dev/styles'.
