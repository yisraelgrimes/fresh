// Fresh v2.0.4
// -------------------------------------
// 2DO-FRESH: Add settings to .pug-lintrc

// Plugins
var g         = require( 'gulp'              );
var gulpif    = require( 'gulp-if'           );
var prettyPug = require( 'gulp-pug-beautify' );
var puglint   = require( 'gulp-pug-lint'     );
var html2pug  = require( 'gulp-html2pug'     );
var tabify    = require( 'gulp-tabify'       );
var rename    = require( 'gulp-rename'       );
var pug       = require( 'gulp-pug'          );
var del       = require( 'del'               );
var data      = require( 'gulp-data'         );
var fs        = require( 'fs'                );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


// If using pug, source .pug (but not partials). Otherwise source .html
var source = pt.devD + pt.viewsD + pt.htmlFiles;
if (op.usePug) {
	var source = [
		pt.devD + pt.viewsD + pt.pugFiles,
		'!' + pt.pugPartials
	];
};


// If using pug and linting is turned on. Otherwise don't lint pug files.
var lintPug = false;
if (op.usePug && op.lintPug) {
	var lintPug = true;
};


// If using gulp-data to get data to views engine and using Pug
var getData = false;
if (op.usePug && op.pipeData) {
	var getData = true;
};

// -------------------------------------
// Main tasks
// -------------------------------------

g.task('views', function() {
	return g.src( source )
		.pipe(gulpif(getData, data(function(file) {
			return JSON.parse(fs.readFileSync(op.dataPath));
		})))
		.pipe(gulpif(op.usePug, tabify(2, true)))
		.pipe(gulpif(lintPug, puglint()))
		.pipe(gulpif(op.usePug, g.dest(pt.devD + pt.viewsD)))
		.pipe(gulpif(op.usePug, pug({ pretty: '	' })))
		.pipe(g.dest(pt.stagingD));
});


// -------------------------------------
// Helper tasks
// -------------------------------------

// Converts html to pug
g.task('html2pug', function() {
	return g.src(pt.devD + pt.htmlFiles)
		.pipe(html2pug())
		// Make sure created .pug files are placed in 'views' dir
		.pipe(rename({dirname: ''}))
		// Make the output easy to read
		.pipe( prettyPug({
			omit_empty_lines: true,
			fill_tab: true,
			omit_div: true,
		}))
		.pipe(g.dest(pt.devD + pt.viewsD));
});

// -------------------------------------

// Remove leftover html files for after converting them to pug
g.task('clean:html2pug', function() {
	return del.sync(pt.devD + pt.htmlFiles);
});


// -------------------------------------------------------------------
// Related tasks: (see 'init.js')
// - 'dl:puglintrc' - Downloads a .pug-lintrc file to root.
//                    Use this file to configure linting rules for .pug files.
// - 'dl:views'     - If using pug, downloads index.pug, 404.pug, and _base.pug
//                    templates to the 'dev/views' directory.
//                    If using html, downloads index.html and 404.html
