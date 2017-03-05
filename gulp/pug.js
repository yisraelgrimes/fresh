// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp         = require( 'gulp'          );  // Umm. The reason we're here?
var browserSync  = require( 'browser-sync'  );  // Live browser reloading
var shell        = require( 'gulp-shell'    );  // Terminal Commands in Gulp
var pug          = require( 'gulp-pug'      );  // Compiles Pug Files
var html2pug     = require( 'gulp-html2pug' );  // Converts HTML to Pug
var rename       = require( 'gulp-rename'   );  // Simple file renamer
var tabify       = require( 'gulp-tabify'   );  // Converts spaces to tabs
var runSequence  = require( 'run-sequence'  );  // Sets order for tasks to run

// -------------------------------------

// Local Options (not in '_config.js')
var options = {
	output: { pretty: '	' }   // Outputs indented markup
}

// -------------------------------------


if ( optys.pug.usePug ) {  // Toggle pug tasks on/off from _config.js

	// -------------------------------------
	// Converts HTML-to-Pug
	// -------------------------------------
	gulp.task( 'pug:convert', function() {
		return gulp.src( pathy.html.all )
		.pipe( html2pug() )
		.pipe( gulp.dest( pathy.pug.dir ) )
	} );


	// -------------------------------------
	// Pug Workflow
	// -------------------------------------
	// Tabify/compile pug to html
	gulp.task( 'pug', function( done ) {
		runSequence( ['tabify:pug', 'pug:index'], 'pug:pages', done )
	} );

	// Compiles Pug pages into html
	gulp.task( 'pug:pages', function buildHTML() {
	gulp.src( pathy.pug.pages )
		.pipe( pug( options.output ) )
		.pipe( rename( { dirname: optys.pug.pagesDest } ) )    // Adds dir to dev root
		.pipe( gulp.dest( pathy.dev ) )           // Dev Root
		.pipe( browserSync.reload( { stream: true } ) )
	} );

	// Compiles index.pug into index.html
	gulp.task( 'pug:index', function buildHTML() {
	gulp.src( pathy.pug.main )
		.pipe( pug( options.output ) )
		// .pipe( rename( { dirname: 'html' } ) )
		.pipe( gulp.dest( optys.pug.mainDest ) )           // Dev Root
		.pipe( browserSync.reload( { stream: true } ) )
	} );

	// Converts spaces to tabs
	gulp.task( 'tabify:pug', function () {
		return gulp.src( pathy.pug.all )
			.pipe( tabify( 2, true ) )
			.pipe( gulp.dest( pathy.pug.dir ) )
	} );

} else { // User instruction
	gulp.task( 'pug', shell.task( [
		'echo Pug has been turned off for this project. Feel free to delete the Pug task from this task group. You can also delete any pug related dependencies in your package.json like: gulp-pug and gulp-html2pug.',
	] ) );

}; // end: if
