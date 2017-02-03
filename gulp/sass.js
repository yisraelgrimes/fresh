// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var sass         = require( 'gulp-sass'     );  // Compiles sass into css
var browserSync  = require( 'browser-sync'  );  // Live browser reloading
var autoprefixer = require('gulp-autoprefixer' ); // Browser Prefixer for Sass
var sassLint     = require( 'gulp-sass-lint');  // Lint Sass w/ '.sass-lint.yml'
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------


// -------------------------------------
// SASS Workflow
// -------------------------------------
// Compiles, tabifies, and lints sass
gulp.task( 'sass', function( done ) {
	runSequence( ['sass:compile', 'tabify:sass'], 'test:sass', done )
} );


// Compiles, formats, prefixes, and lints sass
gulp.task( 'sass:compile', function() {
	return gulp.src( pathy.sass.all )
		.pipe( sass( optys.sass.output ).on( 'error', sass.logError ) )
		.pipe( autoprefixer( optys.sass.prefixer ) )
		.pipe( gulp.dest( pathy.sass.dest ) )
		.pipe( browserSync.reload( { stream: true } ) )
} );


// Lints Sass
gulp.task( 'test:sass', function () {
	return gulp.src( pathy.sass.all )
		.pipe( sassLint( optys.sass.lint ) )
		.pipe( sassLint.format() )
		.pipe( sassLint.failOnError() )
} );


// Converts spaces to tabs
gulp.task( 'tabify:sass', function () {
	return gulp.src( pathy.sass.all )
		.pipe( tabify( 2, true ) )
		.pipe( gulp.dest( pathy.sass.dir ) )
} );


// TODO: test autoprefixer to make sure it works properly
