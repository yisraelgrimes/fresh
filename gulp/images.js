// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require('gulp'           );
var imagemin    = require( 'gulp-imagemin' );
var cache       = require( 'gulp-cache'    );

// Configs
var pt = require('./_config.paths'   );
var op = require('./_config.options' );

// -------------------------------------------------------------------


// If Production env, ignore images in a dir that contains '@@' in the name
var source = pt.devD + pt.imagesD + pt.imagesAll;
if (op.isDynamic) {
	var source = [
		pt.stagingD + pt.imagesD + pt.imagesAll,
		// 2DO-FRESH: Figure out glob ignore for @@ and rootimg
	];
};

// -------------------------------------
// 2DO-FRESH: create a way to ignore @@ for production and rootimg images should be put directly in output folder root.

// Copy, optimize, and cache images
g.task('images', ['rootimages'], function() {
	return g.src(pt.devD + pt.imagesD + pt.imagesAll)
		.pipe(cache(imagemin({
			interlaced: true,
		})))
		.pipe(g.dest(pt.stagingD + pt.imagesD));
});


g.task('rootimages', function() {
	return g.src(pt.devD + pt.imagesD + pt.imagesRootD + pt.imagesAll)
	.pipe(g.dest(pt.stagingD));
});

// -------------------------------------

g.task('build:images', ['build:rootimages'], function() {
	return g.src(source)
	.pipe(g.dest(pt.buildD + pt.imagesD));
});


g.task('build:rootimages', function() {
	return g.src(pt.devD + pt.imagesD + pt.imagesRootD + pt.imagesAll)
	.pipe(g.dest(pt.buildD));
});


// -------------------------------------
// Helper Tasks
// -------------------------------------

// Delete image cache
g.task('clean:cache', function (done) {
	cache.clearAll(done)
});


// -------------------------------------------------------------------
// Related tasks: (see 'init.js')
// - 'dl:images' - Downloads a few images to 'dev/images' to use for testing.
//                 Downloads placeholder favicon and apple-touch-icon
//                 images to 'dev/images/rootimg'
