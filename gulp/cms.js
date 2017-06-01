// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require( 'gulp'             );
var runSequence = require( 'run-sequence'     );
var touch       = require( 'touch'            );
var del         = require( 'del'              );
var removeCode  = require( 'gulp-remove-code' );
var rename      = require( 'gulp-rename'      );
var replace     = require( 'gulp-ex-replace'  );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------


g.task('cms', function(callback) {
	runSequence(
		'html2php',
		'rename:404',
		'rm:staticCss',
		'rm:ogFiles',
		'mk:index',
		'tree',
		callback
	)
});


g.task('html2php', function() {
  return g.src(pt.buildD + pt.htmlFiles)
		.pipe(removeCode( { cms: true } ) )
		.pipe(replace('<!-- @@', ''))
		.pipe(replace('<!--@@', ''))
		.pipe(replace('@@-->', ''))
		.pipe(replace('@@ -->', ''))
		.pipe(rename({
			extname: '.php'
		}))
		.pipe(g.dest(pt.buildD));
});


g.task('rm:ogFiles', function() {
	return del.sync([
		pt.buildD + pt.htmlFiles,
		pt.buildD + '/**/404.php'
	]);
});


g.task('mk:index', function() {
	touch(pt.buildD + '/index.html');
});


g.task('rename:404', function() {
	return g.src(pt.buildD + '/**/404.php')
		.pipe(rename({
			basename: "error"
		}))
		.pipe(g.dest(pt.buildD));
});



// TODO: Either find a way to use removecode to remove bang comments or wait to minify css/js until after the cms conversion.
g.task('rm:staticCss', function() {
	return g.src(pt.buildD + pt.stylesDestD + pt.cssFiles)
		.pipe(removeCode({
			cms: true,
			commentStart: '/*!',
			commentEnd: '*/',
		}))
		// .pipe( rename( 'removed.css' ) )
		.pipe(g.dest(pt.buildD + pt.stylesDestD));
});
