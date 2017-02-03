// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp     = require( 'gulp'          );  // Umm. The reason we're here?
var useref   = require( 'gulp-useref'   );  // Concats using build tags
var gulpIf   = require( 'gulp-if'       );  // Minify specific files
var uglify   = require( 'gulp-uglify'   );  // JS minification
var cssnano  = require( 'gulp-cssnano'  );  // CSS minification
var htmlmin  = require( 'gulp-htmlmin'  );  // HTML Minification

// -------------------------------------


// Concat
gulp.task( 'concat', function() {
  return gulp.src( pathy.html.all )
    .pipe( useref() )
		.pipe( gulpIf( '*.js', uglify() ) )
    .pipe( gulpIf( '*.css', cssnano() ) )
    .pipe( gulpIf( '*.html', htmlmin( { collapseWhitespace: true } ) ) )
    .pipe( gulp.dest( pathy.build ) )
} );
