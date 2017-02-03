// Fresh v1.0.0
//
// -------------------------------------------------------------------

// Require Plugins
var gulp   = require( 'gulp'        );  // Umm. The reason we're here?
var todo   = require( 'gulp-todo'   );  // Parses/makes a todo file
var shell  = require( 'gulp-shell'  );  // Terminal Commands in Gulp

// -------------------------------------


// Creates a todo list based on user configs in '_config.js'
gulp.task( 'todo', ['echo:todo'], function() {
	gulp.src( optys.todo.source )
		.pipe( todo( optys.todo.output ) )
		.pipe( gulp.dest( optys.todo.dest ) )
} );


// Prints info to CLI when running 'gulp todo'
gulp.task( 'echo:todo', shell.task( [
	'echo You can control the name and location of your TODO list from ./gulp/_config.js.'
] ) );


// Removes created 'todo' list
gulp.task( 'clean:todo', shell.task( [
	'rm -rf ' + optys.todo.dest + optys.todo.output.filename
] ) );
