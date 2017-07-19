// Fresh v2.0.4
//
// Description:
// Configures options for environment and various plugins.
// -------------------------------------------------------------------

// Configs
var pt = require( './_config.paths' );

// -------------------------------------------------------------------
// User Configs
// -------------------------------------------------------------------


// -------------------------------------
// Project Type: Static or Dynamic (CMS)
// -------------------------------------
var buildType = 'static';     // HTMl
// var buildType = 'dynamic'; // CMS Site


// -------------------------------------
// Views: (html/pug/php/md)
// -------------------------------------
// Use Pug for templating?
var usePug = true;

// Lint Pug files
var lintPug = true;

// Send data to views from json file
var pipeData = true;

// Path to data file
var dataPath = pt.devD + pt.viewsD + '/data.json';
// dataPath Defaults to: ./dev/views/data.json

// -------------------------------------
// Styles: (sass/scss/css)
// -------------------------------------
// Start with .sass or .scss
var sassType = 'sass';
// var sassType = 'scss';

// Lint Sass (Config file in: './gulp/__rsc__/.sass-lint.yml')
var lintSass = false;

// Files to skip linting
var sassLintX = [
	'**/*normalize*.+(sass|scss)',
];


// -------------------------------------
// Scripts
// -------------------------------------
// Lint Js
var lintJs = true;

// Download '.jshintignore' from Fresh-resources
var jshintignore = true;

// Automaitcally fix jslinting errors with fixmyjs
var fixJs = true;


// -------------------------------------
// Starter Files
// -------------------------------------
// Set up basic dev project with starter files. Structure would look like:
// dev/
// ├── fonts/
// ├── images/
// ├── scripts/
//     ├── vendors/
// │   └── main.js
// ├── styles/
// │   └── main.scss-or-.sass
// └── views/
//     ├── 404.html-or-.pug
//     └── index.html-or-.pug
var addStructure = true;

// Add an .editorconfig file to the project root.
var editorconfig = true;

// Add boilerplate README.md file to the project root.
var readmeFile = true;

// Download a .gitignore file to the project root.
var gitignore = true;


// -------------------------------------
// Package for Production
// -------------------------------------
// Download or add these files to production build
var packGitignore  = true;  // .gitignore (from Fresh-resources)
var packRobots     = true;  // robots.txt (from Fresh-resources)
var packHumans     = true;  // humans.txt (from Fresh-resources)
var packReadme     = true;  // Project README.md
var packChangelog  = true;  // changelog (if avaialable)


// -------------------------------------
// Todo
// -------------------------------------
// print a 2DO file that uses the tags below
var todoTags = [
	'HOTFIX',
	'REVIEW',
	'2DO-CH',
	'2DO-YG',
	// '2DO-FRESH',
	'POSTLAUNCH',
	'2DO-LATER',
];

// Files to search for tags
var todoFiles = './gulp/**/*.+(html|css|js|sass|scss|pug)';
// var todoFiles = './gulp/**/*.+(js|yml|sh)';

// Output Location
var todoOutput = './';


// -------------------------------------------------------------------
// Output conditions based on above settings
// -------------------------------------------------------------------

// Project Output Type
var isDynamic = true;
var isStatic = false;
if (buildType == 'static') {
	var isDynamic = false;
	var isStatic = true;
}


// Used for downloading templates from Fresh Resources Repo
var dlUrlBase20 = 'https://raw.githubusercontent.com/yisraelgrimes/fresh-resources/master/dev-templates/fresh-2.0/';


// -------------------------------------------------------------------
// Project Variables: to export
// -------------------------------------------------------------------
module.exports = {
	// Project Output Type
	buildType: buildType,         // env-string-[static or dynamic]
	isDynamic: isDynamic,         // env-bool
	isStatic: isStatic,           // env-bool

	// Views
	usePug: usePug,               // views-bool
	lintPug: lintPug,             // views-bool
	pipeData: pipeData,           // views-bool
	dataPath: dataPath,           // views-string

	// Styles
	sassType: sassType,           // styles-string-[sass or scss]
	lintSass: lintSass,           // styles-bool
	sassLintX: sassLintX,         // styles-array

	// Scripts
	lintJs: lintJs,               // scripts-bool
	jshintignore: jshintignore,   // scripts-bool
	fixJs, fixJs,                 // scripts-bool

	// Download Template Files
	addStructure: addStructure,   // files-bool
	editorconfig: editorconfig,   // files-bool
	readmeFile:   readmeFile,     // files-bool
	gitignore:    gitignore,      // files-bool

	// Package Files for Production
	packHumans: packHumans,       // build-bool
	packRobots: packRobots,       // build-bool
	packReadme: packReadme,       // build-bool
	packGitignore: packGitignore, // build-bool
	packChangelog: packChangelog, // build-bool

	// Todo
	todoTags: todoTags,           // todo-array
	todoFiles: todoFiles,         // todo-string
	todoOutput: todoOutput,       // todo-string

	// Download links for template files
	link: {
		// Dev Tools
		editorconfig:  dlUrlBase20 + 'dev-tools/.editorconfig',
		gitignore:     dlUrlBase20 + 'dev-tools/.gitignore',
		jshintignore:  dlUrlBase20 + 'dev-tools/.jshintignore',
		stylishcolors: dlUrlBase20 + 'dev-tools/.stylishcolors',
		puglintrc:     dlUrlBase20 + 'dev-tools/.pug-lintrc',
		humanstxt:     dlUrlBase20 + 'rootfiles/humans.txt',
		robotstxt:     dlUrlBase20 + 'rootfiles/robots.txt',
		readme:        dlUrlBase20 + 'rootfiles/README.md',
		mainSass:      dlUrlBase20 + 'templates/styles/main.sass',
		mainScss:      dlUrlBase20 + 'templates/styles/main.scss',
		normalize:     dlUrlBase20 + 'templates/styles/normalize.scss',
		four04Html:    dlUrlBase20 + 'templates/views/404.html',
		indexHtml:     dlUrlBase20 + 'templates/views/index.html',
		indexPug:      dlUrlBase20 + 'templates/views/index.pug',
		four04Pug:     dlUrlBase20 + 'templates/views/404.pug',
		viewsData:     dlUrlBase20 + 'templates/views/data.json',
		mainJs:        dlUrlBase20 + 'templates/scripts/main.js',
		basePug:       dlUrlBase20 + 'templates/views/partials/_base.pug',
		// name:   dlUrlBase20 + '',
	}
};
