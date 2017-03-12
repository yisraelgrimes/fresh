// Fresh v1.0.5
//
// Sets up Global Variables to use in gulp tasks.
// -------------------------------------------------------------------


// User Configuration
// -------------------------------------
// Modify the variables in this section to customize your project.


// File Structure--- If you want to auto-set up a basic file
// structure, leave 'basicStructure' to 'true.'
// The structure would be:
// dev
// ├── assets
// │   ├── fonts
// │   ├── images
// │   └── css
// ├── index.html
// ├── js
// │   ├── main.js
// │   └── vendor
// ├── pug (*optional)
// │   └── index.pug
// └── sass
//     └── main.sass
var basicStructure = true;

// Add .editorconfig file to the project root.
var addEditorconfig = true;

// Provide boilerplate README.md file to the root.
var addReadme = true;


// -------------------------------------
// SASS
// -------------------------------------

// Main Import file type. (Default == .scss)
var sassFileType = 'scss';

// Browser Autoprefixer options
// View all prefixer options at https://github.com/postcss/autoprefixer#options
var sassPrefixer = [
	'last 2 versions',
	'ie >= 9',
	'and_chr >= 2.3'
];

// Lint sass files based on '.sass-lint.yml'. To completely
// ingore linting, leave the variable set to 'true'.
var noSassLint = true;


// Sass files to not Lint (Default == Normalize)
var sassLintIgnore = '**/*normalize.+(sass|scss)';


// -------------------------------------
// JS
// -------------------------------------

// Main Import file-name
var jsMainImport = 'main.js';


// -------------------------------------
// Todo
// -------------------------------------

// Name of 'todo' output file
var todoFilename = 'TODO.md';

// Location of 'todo' output file
var todoLoc = './';

// Files to parse and files to ignore.
// Default parses the file types in the first line
// while ignoring 'node_modules' and 'gulp' files.
var todoSource = [
	'**/*.+(sass|scss|js|html|pug)',
	'!node_modules/**/*',
	'!gulp/**/*',
	'!_config.js'
];

// Additional Tags to search for
var todoTags = [
	'HOTFIX',
	'REVIEW'
];


// -------------------------------------
// PUG
// -------------------------------------

// To use Pug as the template/views engine, leave 'usePugArg' to 'true'.
var usePugArg = true;

// *Ignore the other Pug settings if you're not using Pug. You
// can also remove the 'views' task from default in gulpfile and
// the 'views' watcher from 'watch.js'. But it's not necessary.
// Pug output file (index.html) location. (Default == './dev')
// If changing, make sure you update the BrowserSync location.
var pugMainOutputLoc = 'default';

// Other pages: Default to './dev/html' directory
var pugPagesOutputLoc = 'default';


// -------------------------------------
// Build Files
// -------------------------------------
// Do you want the following files to automatically
// added to your final 'build' environment?
var importRobots  = false;    // robots.txt
var importHumans  = false;    // humans.txt
var import404Page = false;   // 404 Page


// -------------------------------------
// File Tree
// -------------------------------------

// You can create a filetree that prints to the CLI to
// add to your documentation. DO this by running 'gulp tree'.
// By default, the tree will target your './build' directory.
var treeSource = 'build';


// -------------------------------------------------------------------
// End: User Configs
// -------------------------------------------------------------------


// Global Variables.
// -------------------------------------
// These won't generally need to be modified.

var path = {
	dev:   'dev',    // Dev directory
	build: 'build',  // Optimized/finalized site files go here
	tasks: 'gulp'    // Gulp tasks directory
};

global.pathy = {
	root:    './',                    // Project root
	gulpRsc: path.tasks + '/__rsc__', // Gulp resources
	dev:     path.dev,                // Dev directory
	build:   path.build,              // Production Site

	server:  path.dev,                 // BrowserSync

	sass: {
		dir:   path.dev + '/sass',
		all:   path.dev + '/sass/**/*.+(sass|scss)',
		main:  path.dev + '/sass/main.' + sassFileType,
		dest:  path.dev + '/assets/css',
	},

	html: {
		all:   path.dev + '/**/*.html',
		main:  path.dev + '/index.html',
		pages: path.dev + '/html'
	},

	content: {
		all:   path.dev + '/**/*.md'
	},

	pug: {
		dir:   path.dev + '/pug',
		all:   path.dev + '/pug/**/*.pug',
		main:  path.dev + '/pug/index.pug',
		pages: path.dev + '/pug/pages/**/*.pug',
		dest:  path.dev + '/html'
	},

	js: {
		dir:    path.dev + '/js',
		all:    path.dev + '/**/*.js',
		main:   path.dev + '/js/' + jsMainImport,
		vendor: {
			dir:  path.dev + '/js/vendor',
			all:  path.dev + '/js/vendor/**/*.js'
		}
	},


	css: {
		all:   path.dev + '/assets/css/*.css'
	},

	assets: {
		dir:  path.dev + '/assets'
	},

	images: {
		dir:  path.dev + '/assets/images',
		all:  path.dev   + '/assets/images/**/*.+(png|jpg|jpeg|gif|svg|ico)',
		dest: path.build + '/assets/images'
	},

	fonts: {
		dir:  path.dev   + '/assets/fonts',
		all:  path.dev   + '/assets/fonts/**/*',
		dest: path.build + '/assets/fonts'
	}
}; // end: Global Paths


// -------------------------------------------------------------------


// Conditionals

// -------------------------------------
// SASS Linter
// -------------------------------------
if ( noSassLint ) {
	var allFiles = '**/*.+(sass|scss)';
} else {
	var allFiles = '';
};

// -------------------------------------
// PUG Location
// -------------------------------------
if ( pugMainOutputLoc === 'default' ) {
	var pugMainOutputLoc = pathy.server;
};
if ( pugPagesOutputLoc === 'default' ) {
	var pugPagesOutputLoc = pathy.html.pages;
};


// -------------------------------------------------------------------

// Global Options

global.optys = {
	config: {           // User Config Setup
		basicStructure: basicStructure,
		addReadme:  addReadme,
		addEditorconfig: addEditorconfig,
		importRobots:  importRobots,
		importHumans:  importHumans,
		import404Page: import404Page
	},

	imageMin: {          // Image optimization
		interlaced: true,
	},

	sass: {
		fileType: sassFileType,
		// Sass document styling
		output: {
			errLogToConsole: true,
			outputStyle: 'expanded',
			sourceComments: 'true',
			indentType: 'tab',
			indentWidth: '1',
			// precision: '10'
		},
		// Sass Autoprefixer
		prefixer: {
			browsers: sassPrefixer  // User setting at top
			// browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
		},
		// Sass Linting
		lint: {
			files: { ignore: [
				sassLintIgnore,       // User setting for specific files
				allFiles              // User setting to toggle all files
			] },
			configFile: path.tasks + '/__rsc__/.sass-lint.yml'
		}  // end: lint
	}, // end: sass

	// todo options
	todo: {
		source: todoSource,    // User setting at top
		output: {
			filename: todoFilename,
			customTags: todoTags,
			// Modifies output header
			transformHeader: function (kind) {
				return [
					'### ' + kind,
					'| Filename | line # | ' + kind,
					'|:------|:------:|:------'
				]
			}
		},
		dest: todoLoc
	}, // end: todo

	pug: {
		usePugArg:   usePugArg,        // Turns on/off pug tasks.
		mainDest:  pugMainOutputLoc,  // Controls where index.html is compiled to.
		pagesDest: pugPagesOutputLoc   // Controls where other html pages are compiled to.
	},

	tree: {
		treeSource: treeSource   // Used when printing file tree.
	}

}; // end: global options
