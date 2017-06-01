// Fresh v2.0.1
// -------------------------------------

// Plugins
var g      = require('gulp'          );
var shell  = require('gulp-shell'    );
var deploy = require('gulp-gh-pages' );

// Configs
var pt = require('./_config.paths'   );
var op = require('./_config.options' );

// -------------------------------------------------------------------


// Deploy Dev Environment for testing
g.task('deploy', function () {
	return g.src(pt.buildD + pt.allFiles)
		.pipe(deploy())
});


g.task('deploy:setup', shell.task([ 
	'. ./gulp/shell/ghpages.sh' 
]));


g.task('sync', shell.task([
	'. ./gulp/shell/commitpush.sh'
]));


// -------------------------------------------------------------------
// Creating the gh-pages branch from command line.
// -------------------------------------------------------------------

// Checkout your working branch that you want to build from. Then copy/paste the below command into terminal to:
// - Create a gh-pages branch
// - Create a temporary readme file
// - Create a .gitignore file and add `node_modules` to the ignore list
// - Commit the files/changes and push to the gh-pages branch
// - Checkout the Master branch
//
// Command:
// git checkout --orphan gh-pages && git rm -rf . && touch README.md && git add README.md && touch .gitignore && echo "node_modules" > .gitignore && git add .gitignore && git commit -m "Init gh-pages" && git push --set-upstream origin gh-pages &&  git checkout master