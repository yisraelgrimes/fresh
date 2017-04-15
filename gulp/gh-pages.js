// Fresh v1.0.6
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var deploy       = require( 'gulp-gh-pages' );  // Creates a Github Pages


// -------------------------------------


// Deploy Dev Environment for testing
gulp.task('deploy', function () {
	return gulp.src( [
		'./' + pathy.dev      + '/**/*',
		'!'  + pathy.pug.dir  + '/**/*',
		'!'  + pathy.sass.dir + '/**/*',
		'!'  + pathy.js.dir   + '/**/*',
		'./README.md'
	])
		.pipe(deploy())
});


// 2DO-FRESH: Create a separate deploy task for build.


// Checkout your working branch that you want to build from. Then copy/paste the below command into terminal to:
// - Create a gh-pages branch
// - Create a temporary readme file
// - Create a .gitignore file and add `node_modules` to the ignore list
// - Commit the files/changes and push to the gh-pages branch
// - Checkout the Master branch
//
// Command:
// git checkout --orphan gh-pages && git rm -rf . && touch README.md && git add README.md && touch .gitignore && echo "node_modules" > .gitignore && git add .gitignore && git commit -m "Init gh-pages" && git push --set-upstream origin gh-pages &&  git checkout master
