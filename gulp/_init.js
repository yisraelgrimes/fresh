// Fresh v1.0.0
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
// - *Compiles SASS/Pug starter files into HTML/CSS
// - Copies dev-root files into the project root:
//   - Config for JShint (.stylishcolors)
//   - *.editorconfig
//   - *. Starter README.md (and renames the original)
if ( optys.pug.usePug ) {
	gulp.task( 'init', function( done ) {
		runSequence( ['make:files'],
		'pug:index', 'sass:compile',
		'init:rootfiles', done )
	});
} else {
	gulp.task( 'init', function( done ) {
		runSequence( ['make:files'], 'sass:compile',
		'init:rootfiles', done )
	});
};


// -------------------------------------------------------------------

// Vars to control/print info during 'gulp init'

// User feedback during CLI task
var devStructureTree = [
	'echo ./dev',
	'echo ├── assets',
	'echo │   ├── fonts',
	'echo │   ├── images',
	'echo │   └── main.css',
	'echo ├── index.html',
	'echo ├── js',
	'echo │   ├── main.js',
	'echo │   └── vendor',
	'echo ├── pug \*optional',
	'echo │   └── index.pug',
	'echo └── sass',
	'echo     └── main.sass'
].join("\n");


//  If auto-build basic files structure is on/off
if ( optys.config.basicStructure ) {
	var buildStructure = [
		'echo Creating your ./dev folder structure...',
		'mkdir dev',
		'mkdir dev/assets',
		'mkdir dev/assets/fonts',
		'mkdir dev/assets/images',
		'mkdir dev/js',
		'echo \'// This is your main js file. Import modules from here and link to this file in your html.\' >dev/js/main.js',
		'mkdir dev/js/vendor',
		'mkdir dev/sass',
		'echo \'// This is your main sass import file. It compiles to, and overwrites, dev/assets/main.css.\' >dev/sass/main.sass',
		devStructureTree
	].join("\n");
} else {
	var buildStructure = [
		'echo You can now create your own file structure, but I suggest starting with a ./dev folder...',
		'echo And make sure you update your file paths in the Global section of your config.js file...',
		'echo Happy building!'
	].join("\n");
}; // end: if

// -------------------------------------

// If auto-build Pug files is on/off
if ( optys.pug.usePug ) {
	var buildPugStructure = [
		'mkdir dev/pug',
		'echo \'//- This file compiles to, and overwrites, dev/index.html.\', >dev/pug/index.pug'
	].join("\n");
} else {
	var buildPugStructure = [
		'echo Pug file structure was not created.'
	]
}; // end:if

// -------------------------------------

// Builds file sys based on user config or prints info message.
gulp.task( 'make:files', shell.task( [
	buildStructure,
	buildPugStructure
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
// TODO: Create custom Readme template for the resources repo.
// -------------------------------------

// Used for JShint, moves the file to project root
var stylishcolors = [
	'echo Downloading .stylishcolors from the Fresh-Resources repo...',
	'curl -o .stylishcolors https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/.stylishcolors',
].join("\n");

// -------------------------------------

// Copies files from './gulp/__rsc__' to project root
gulp.task( 'init:rootfiles', shell.task( [
	addEditorconfig,
	stylishcolors,
	addReadme
] ) );
