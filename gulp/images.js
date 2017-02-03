// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp      = require( 'gulp'          );  // Umm. The reason we're here?
var imagemin  = require( 'gulp-imagemin' );  // Image optimization
var cache     = require( 'gulp-cache'    );  // Caches optimized images

// -------------------------------------


// Optimizes/copies images to 'build' folder. Creates image cache
gulp.task( 'images', function() {
	return gulp.src( pathy.images.all )
	// Caching images that ran through imagemin
	.pipe( cache( imagemin( optys.imageMin ) ) )
	.pipe( gulp.dest( pathy.images.dest ) )
} );


// Deletes image cache
gulp.task( 'clean:cache', function ( done ) {
	return cache.clearAll( done )
} );
