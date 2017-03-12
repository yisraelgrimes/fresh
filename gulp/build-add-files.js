// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp  = require( 'gulp'       );  // Umm. The reason we're here?
var shell = require( 'gulp-shell' );  // Terminal Commands in Gulp

// -------------------------------------


// In addition to the 'gulp build' workflow in './gulpfile.js', this
// task handles downloading a few files to put in your production environment.

if ( optys.config.add404Page ) {
	var add404Page = [
		'echo Adding 404.html from the Fresh-Resources repo...',
		'curl -o build/.404.html https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/404.html',
		// 'echo Adding \'.editorconfig\' to your project root.',
		// 'cp ' + pathy.gulpRsc + '/.editorconfig ./'
	].join("\n");
} else {
	var add404Page;
};

// -------------------------------------

if ( optys.config.addHumans ) {
	var addHumans = [
		'echo Adding humans.txt from the Fresh-Resources repo...',
		'curl -o build/humans.txt https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/humans.txt',
	].join("\n");
} else {
	var addHumans;
};

// -------------------------------------

if ( optys.config.addRobots ) {
	var addRobots = [
		'echo Adding robots.txt from the Fresh-Resources repo...',
		'curl -o build/.robots.txt https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/robots.txt',
	].join("\n");
} else {
	var addRobots;
};


gulp.task( 'build:rootfiles', shell.task( [
	addRobots,
	addHumans,
	add404Page
] ) );
