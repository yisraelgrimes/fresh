// Fresh v1.0.3
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var browserSync  = require( 'browser-sync'  );  // Live browser reloading
var pug          = require( 'gulp-pug'      );  // Compiles Pug Filesvar
var html2pug     = require( 'gulp-html2pug' );  // Converts HTML to Pug
var prettyPug    = require( 'gulp-pug-beautify' ); // Makes pug pretty
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs

// -------------------------------------

// Local Options (not in '_config.js')
// Outputs indented HTML
var options = {
	pugOutput: { 
		omit_empty_lines: true,
		fill_tab: true,
		omit_div: true 
	},
	htmlOutput: { 
		pretty: '	'
	}
};

// -------------------------------------


// -------------------------------------
// Main Pug Task
// -------------------------------------

// Tabifies and then Comiples pug files that don't start with '_'
// into indented html.
gulp.task( 'views', function buildHTML() {
  return gulp.src( [
		pathy.pug.all,
		'!**/_*.pug'
	] )
	.pipe( tabify( 2, true ) )
	.pipe( gulp.dest( pathy.pug.dir ) )

	.pipe( pug( options.htmlOutput ) )
	.pipe( gulp.dest( pathy.server ) )
});


// -------------------------------------
// Helper Tasks
// -------------------------------------

// Converts html to pug and passes options from above.
gulp.task( 'html2pug', function() {
	return gulp.src( pathy.html.all )
	.pipe( html2pug() )
	.pipe( gulp.dest( pathy.pug.dir ) )

	.pipe( prettyPug( options.pugOutput ) )
	.pipe( gulp.dest( pathy.pug.dir ) )
} );


// Converts spaces to tabs on all pug files. Helpful for when
// the 'views' task fails due to mixed tabs/spaces.
// -------------------------------------
gulp.task( 'tabify:pug', function () {
	return gulp.src( pathy.pug.all )
		.pipe( tabify( 2, true ) )
		.pipe( gulp.dest( pathy.pug.dir ) )
} );