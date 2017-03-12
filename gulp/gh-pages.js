// Fresh v1.0.6
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var ghPages      = require( 'gulp-gh-pages' );  // Creates a Github Pages



// -------------------------------------


gulp.task('deploy', function() {
  return gulp.src('./dev/**/*')
    .pipe(ghPages());
});



// gulp.task('deploy', function () {
//   return gulp.src( [
//     './dist/**/*',
//     // '!**/*.sass',
//     // '!**/*.pug',
//     '!**/*.+(sass|pug|css)',
//     // './dist/index.html',
//     // './dist/sass/**/*',
//     './README.md'
//   ])
//     .pipe(deploy())
// });



// https://medium.com/superhighfives/deploying-to-github-pages-with-gulp-c06efc527de8#.p17ze1a3s

//
// git checkout --orphan gh-pages
// git rm -rf .
// touch README.md
// git add README.md
// git commit -m "Init gh-pages"
// git push --set-upstream origin gh-pages
// git checkout master

// echo "node_modules" > .gitignore
