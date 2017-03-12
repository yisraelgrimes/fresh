// Fresh v1.0.6
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var ghPages      = require( 'gulp-gh-pages' );  // Creates a Github Pages
// var browserSync  = require( 'browser-sync'  );  // Live browser reloading
// var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp
// var sass         = require( 'gulp-sass'     );  // Compiles sass into css
// var autoprefixer = require('gulp-autoprefixer' ); // Browser Prefixer for Sass
// var sassLint     = require( 'gulp-sass-lint');  // Lint Sass w/ '.sass-lint.yml'
// var parker       = require( 'gulp-parker'   );  // Auto requires tasks
// var gulpIf       = require( 'gulp-if'       );  // Minify specific files
// var useref       = require( 'gulp-useref'   );  // Concats using build tags
// var uglify       = require( 'gulp-uglify'   );  // JS minification
// var jshint       = require( 'gulp-jshint'   );  // Lints JS
// var cssnano      = require( 'gulp-cssnano'  );  // CSS minification
// var htmlmin      = require( 'gulp-htmlmin'  );  // HTML Minification
// var imagemin     = require( 'gulp-imagemin' );  // Image optimization
// var cache        = require( 'gulp-cache'    );  // Caches optimized images
// var todo         = require( 'gulp-todo'     );  // Parses/makes a todo file
// var pug          = require( 'gulp-pug'      );  // Compiles Pug Filesvar
// var requireDir   = require( 'require-dir'   );  // Auto requires tasks
// var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run
// var html2pug     = require( 'gulp-html2pug' );  // Converts HTML to Pug
// var rename       = require( 'gulp-rename'   );  // Simple file renamer
// var archy        = require( 'archy'         );  // Used for creating file-tree
// var archy        = require( 'archy'         );  // Used for displaying filetree
// var map          = require( 'gulp-map'      );  // Used for mapping filetree
// var filetree     = require( 'gulp-filetree' );  // Used to creat filetree


// -------------------------------------


gulp.task('deploy', function() {
  return gulp.src('./dev/**/*')
    .pipe(ghPages());
});
