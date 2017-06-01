// Fresh v2.0.1
// -------------------------------------

// Plugins
var g           = require( 'gulp'             );
var todo        = require( 'gulp-todo'        );
var del         = require( 'del'              );

// Configs
var pt = require('./_config.paths'  );
var op = require('./_config.options');

// -------------------------------------------------------------------

// Task Options
var options = {
	customTags: op.todoTags,
	// Modifies output header
	transformHeader: function (kind) {
		return [
			'### ' + kind,
			'| Filename | line # | ' + kind,
			'|:------|:------:|:------'
		]
	}
};

// -------------------------------------
// Main Task
// -------------------------------------

g.task('todo', function() {
	return g.src(op.todoFiles)
		.pipe(todo(options))
		.pipe(g.dest(op.todoOutput));
});


// Removes created 'todo' list
g.task('clean:todo', function () {
	return del.sync('./TODO.md');
});
