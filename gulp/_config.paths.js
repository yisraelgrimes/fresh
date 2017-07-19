// Fresh v2.0.4
//
// Description:
// Configures path variables for tasks and projects.
// -------------------------------------------------------------------

// Configs
var op   = require( './_config.options' );

// -------------------------------------------------------------------
// Path Variables: to Export
// -------------------------------------------------------------------
module.exports = {
	// Everything in a directory
	allFiles: '/**/*',       // Glob all files in dir
	ignoreD:  '/*@@*',  // Add two '@@' to a dir/file to ignore

	// Root level directories
	devD:     './dev',
	stagingD: './staging',
	buildD:   './build',

	server:   './staging',   // BrowserSync will load from here.

	// Sublevel paths ------ //

	// Views: pug/html/data
	viewsD:       '/views',
	pugFiles:     '/**/*.pug',
	pugPartials:  '**/_*.pug',
	htmlFiles:    '/**/*.html',
	dataFiles:    '/**/*.json',

	// Scripts: js
	scriptsD:     '/scripts',
	scriptsFiles: '/**/*.js',
	scriptsMain:  '/main.js',
	scriptsVendD: '/vendors',
	scriptsDestD: '/js',

	// Styles: sass/scss/css
	stylesD:        '/styles',
	stylesFiles:    '/**/*.+(sass|scss)',
	stylesPartials: '**/_*.+(sass|scss)',
	stylesMain:     '/main.+(sass|scss)',
	stylesDestD:    '/css',
	cssFiles:       '/*.css',



	// Assets
	imagesD:      '/images',
	imagesRootD:  '/rootimg',
	imagesAll:    '/**/*.+(png|jpg|jpeg|gif|svg|ico)',
	fontsD:       '/fonts',
};
