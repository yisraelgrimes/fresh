// Fresh v1.0.2
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var browserSync  = require( 'browser-sync'  );  // Live browser reloading
var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------


// -------------------------------------
// Init
// -------------------------------------
// - Initializes the project based on user config settings in '_config.js.'
// - *Creates dev directory and files
// - Copies dev-root files into the project root:
//   - Config for JShint (.stylishcolors)
//   - *.editorconfig
//   - *. Starter README.md (and renames the original)
// - *Initiates the 'gulp default' task.
if ( optys.pug.usePugArg ) {
	gulp.task( 'init', function( done ) {
		runSequence( ['make:dev-files', 'import:rootfiles'],
		'default', done )
	} );
} else {
	gulp.task( 'init', function( done ) {
		runSequence( ['make:dev-files', 'import:rootfiles'],
		'default', done )
	} );
};


// -------------------------------------------------------------------


//  If auto-build basic files structure is on/off
if ( optys.config.basicStructure ) {
	var basicDevStructure = [
		'echo Creating your ./dev folder structure...',
		'mkdir ' + pathy.dev,
		'mkdir ' + pathy.assets.dir,
		'mkdir ' + pathy.fonts.dir,
		'mkdir ' + pathy.images.dir,
		'mkdir ' + pathy.js.dir,
		'echo \'// This is your main js file. Import modules from here and link to this file in your html.\' >' + pathy.js.main,
		'mkdir ' + pathy.js.vendor.dir,
		'mkdir ' + pathy.sass.dir,
		'echo \'// This is your main sass import file. It compiles to, and overwrites, dev/assets/main.css.\' >' + pathy.sass.main
	].join("\n");
} else {
	var basicDevStructure = [
		'echo You can now create your own file structure, but I suggest starting with a ./dev folder...',
		'echo And make sure you update your file paths in the Global section of your config.js file...',
		'echo Happy building!'
	].join("\n");
}; // end: if

// -------------------------------------

// Create Pug file if pug is on
if ( optys.pug.usePugArg ) {
	var buildMainIndex = [
		'mkdir ' + pathy.pug.dir,
		'echo \'//- This file compiles to, and overwrites, dev/index.html.\', >' + pathy.pug.main,
	].join("\n");
} else {
	var buildMainIndex = [
		'echo \'\<\!-- This is your main index file. By default, BrowserSync will open this file in your browser. --\>\' >' + pathy.html.main
	]
}; // end:if


// -------------------------------------

// Builds file sys based on user config or prints info message.
gulp.task( 'make:dev-files', shell.task( [
	basicDevStructure,
	buildMainIndex
] ) );


// -------------------------------------------------------------------

// Root Files setup

// User config for .editorconfig file
if ( optys.config.addEditorconfig ) {
	var addEditorconfig = [
		'echo Downloading .editorconfig from the Fresh-Resources repo...',
		'curl -o .editorconfig https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/.editorconfig',
		// 'echo Adding \'.editorconfig\' to your project root.',
		// 'cp ' + pathy.gulpRsc + '/.editorconfig ./'
	].join("\n");
} else {
	var addEditorconfig;
};

// -------------------------------------

// User config for readme file. Default will download a starter file
// from Fresh-Resources repo. Originally cloned from Dan Bader.
// Read more about his readme template at goo.gl/dPEz6g.
if ( optys.config.addReadme ) {
	var addReadme = [
		'echo Renaming the original README.md to fresh_README.md...',
		'mv ./README.md ./fresh_README.md',
		'echo Downloading a template README.md from the Fresh-Resources repo...',
		'curl -o README.md https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/template-README.md',
	].join("\n");
} else {
	var addReadme;
};

// -------------------------------------

// Used for JShint, moves the file to project root
var stylishcolors = [
	'echo Downloading .stylishcolors from the Fresh-Resources repo...',
	'curl -o .stylishcolors https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/.stylishcolors',
].join("\n");

// -------------------------------------

// Copies files from './gulp/__rsc__' to project root
gulp.task( 'import:rootfiles', shell.task( [
	addEditorconfig,
	stylishcolors,
	addReadme
] ) );
