// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require( 'gulp'          );
var runSequence = require( 'run-sequence'  );
var mkdir       = require( 'mkdirp'        );
var rename      = require( 'gulp-rename'   );
var download    = require( 'gulp-download' );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------



// -------------------------------------
// Main Tasks
// -------------------------------------

g.task('init', function(callback) {
	runSequence(
		'init:structure',
		['init:files', 'init:templates'],
	callback )
});


g.task('init:structure', function() {
	if (op.addStructure) {
		console.log( 'Creating a basic directory structure for developement in \'' + pt.devD + '\'...' );
		mkdir(pt.devD + pt.scriptsD + pt.scriptsVendD)
		mkdir(pt.devD + pt.stylesD)
		mkdir(pt.devD + pt.imagesD)
		mkdir(pt.devD + pt.fontsD)
		mkdir(pt.devD + pt.viewsD)
		if (op.usePug) {
			mkdir(pt.devD + pt.viewsD + '/partials')
		};
	};
});


g.task('init:files', function(callback) {
	runSequence([
		'dl:editorconfig',
		'dl:gitignore',
		'dl:readme',
		'dl:jshintignore',
		'dl:stylishcolors',
		'dl:puglintrc'],
	callback )
});


g.task('init:templates', function(callback) {
	runSequence([
		'dl:styles',
		'dl:scripts',
		'dl:views',
		'dl:images'],
		callback
	)
});


// -------------------------------------
// Tasks for 'init:files'
// -------------------------------------

g.task('dl:editorconfig', function() {
	if (op.editorconfig) {
		download(op.link.editorconfig)
		.pipe(g.dest('./'));
	};
});

g.task('dl:gitignore', function() {
	if (op.gitignore) {
		download(op.link.gitignore)
		.pipe(g.dest('./'));
	};
});

g.task('dl:readme', function() {
	if (op.readmeFile) {
		g.src('README.md')
			.pipe(rename({ prefix: 'fresh_' }))
			.pipe(g.dest('./'));
			download(op.link.readme)
			.pipe(g.dest('./'));
	};
});

g.task('dl:jshintignore', function() {
	if (op.jshintignore) {
		download(op.link.jshintignore)
		.pipe(g.dest('./'));
	};
});

g.task('dl:stylishcolors', function() {
	if (op.lintJs) {
		download(op.link.stylishcolors)
		.pipe(g.dest('./'));
	};
});

g.task('dl:puglintrc', function() {
	if (op.lintPug) {
		download(op.link.puglintrc)
		.pipe(g.dest('./'));
	};
});


// -------------------------------------
// Tasks for 'init:templates'
// -------------------------------------

g.task('dl:styles', function() {
	if (op.addStructure) {
		// Installing normalize via npm instead of from Fresh-resources
		// download(op.link.normalize)
		// .pipe(g.dest(pt.devD + pt.stylesD));

		if (op.sassType == 'sass') {
			download(op.link.mainSass)
			.pipe(g.dest(pt.devD + pt.stylesD));
		} else {
			download(op.link.mainScss)
			.pipe(g.dest(pt.devD + pt.stylesD));
		};
	};
});

g.task('dl:scripts', function() {
	if (op.addStructure) {
		download(op.link.mainJs)
		.pipe(g.dest(pt.devD + pt.scriptsD));
	};
});

g.task('dl:views', function() {
	if (op.addStructure) {
		if (op.usePug) {
			download(op.link.indexPug)
			.pipe(g.dest(pt.devD + pt.viewsD));
			download(op.link.four04Pug)
			.pipe(g.dest(pt.devD + pt.viewsD));
			download(op.link.basePug)
			.pipe(g.dest(pt.devD + pt.viewsD + '/partials'));
		} else {
			download(op.link.indexHtml)
			.pipe(g.dest(pt.devD + pt.viewsD));
			download(op.link.four04Html)
			.pipe(g.dest(pt.devD + pt.viewsD));
		};
	};
});

// -------------------------------------
// Download links for 'dl:images'

var dlUrlBase20 = 'https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/dev-templates/fresh-2.0/images/';
// Images
var imgGulp       = 'gulp-logo.png';
var imgNpm        = 'npm-logo.png';
var imgPug        = 'pug-logo.png';
var imgSass       = 'sass-logo.png';
var imgAppleTouch = 'rootimg/apple-touch-icon.png';
var imgFavicon    = 'rootimg/favicon.ico';


g.task('dl:images', function() {
	if (op.addStructure) {
		download(dlUrlBase20 + imgGulp)
		.pipe(g.dest(pt.devD + pt.imagesD));
		download(dlUrlBase20 + imgNpm)
		.pipe(g.dest(pt.devD + pt.imagesD));
		download(dlUrlBase20 + imgPug)
		.pipe(g.dest(pt.devD + pt.imagesD));
		download(dlUrlBase20 + imgSass)
		.pipe(g.dest(pt.devD + pt.imagesD));
		// Root Images
		download(dlUrlBase20 + imgAppleTouch)
		.pipe(g.dest(pt.devD + pt.imagesD + '/rootimg'));
		download(dlUrlBase20 + imgFavicon)
		.pipe(g.dest(pt.devD + pt.imagesD + '/rootimg'));
	};
});
