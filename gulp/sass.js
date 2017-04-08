// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var sass         = require( 'gulp-sass'     );  // Compiles sass into css
var browserSync  = require( 'browser-sync'  );  // Live browser reloading
var autoprefixer = require('gulp-autoprefixer' ); // Browser Prefixer for Sass
var sassLint     = require( 'gulp-sass-lint');  // Lint Sass w/ '.sass-lint.yml'
var sourcemaps   = require( 'gulp-sourcemaps'); // Creates CSS Sourcemaps
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------


// -------------------------------------
// SASS Workflow
// -------------------------------------
// Compiles, tabifies, and lints sass
// If linter is on/off
if ( optys.sass.lintFiles ) {
	gulp.task( 'sass', function( done ) {
		runSequence( [ 'sass-compile' ], 'lint-sass', done )
	} );
} else {
	gulp.task( 'sass', [ 'sass-compile' ] );
};




// Lints Sass
gulp.task( 'lint-sass', function () {
	return gulp.src( pathy.sass.all )
		.pipe( sassLint( optys.sass.lint ) )
		.pipe( sassLint.format() )
		.pipe( sassLint.failOnError() )
} );



// Compiles, formats, prefixes, and lints sass
gulp.task( 'sass-compile', function() {
	return gulp.src( pathy.sass.all )
		// .pipe( tabify( 2, true ) )
		// .pipe( gulp.dest( pathy.sass.dir ) )
		.pipe( sourcemaps.init() )
		.pipe( sass( optys.sass.output ).on( 'error', sass.logError ) )
		.pipe( sourcemaps.write() )
		.pipe( autoprefixer( optys.sass.prefixer ) )
		.pipe( gulp.dest( pathy.sass.dest ) )
		.pipe( browserSync.reload( { stream: true } ) )
} );


// Not able to ignore files in sass lint