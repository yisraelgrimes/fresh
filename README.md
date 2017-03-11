[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

---

# Fresh Starter Kit

A starter framework for building web projects using Sass, Gulp, Pug (optional), and some other modern tools. The goal for this starter kit is to be un-opinionated as possible while giving you easlily configured settings, keep things kinda modular, and be educational.


## Requirements

- [Node/NPM](https://nodejs.org/en/)
- [LibSass](http://sass-lang.com/libsass)
- [Gulp](http://gulpjs.com/)


## Features

- Configurable but automated environment setup
- Live reloading with BrowserSync
- Sass compiling and Autoprefixer configuration
- Sass Linting (based on `.sass-lint.yml`
- Javascript Linting (still need to add lint file)
- Pug compiling
- Optimizes final output files
- The voice of Cleveland Brown (run `gulp boom`)


## Installation

### [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

- [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- Mac OS: I reccomend using [Homebrew](http://brew.sh/). First, install Homebrew:

```Sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then Node:

```sh
brew install node
```

### Gulp

Install Gulp Globally on your machine:

```Sh
npm install gulp -g
```

### Get Fresh

Clone this repo to your local environment or download the zip file.

```sh
git clone https://github.com/yisraelgrimes/fresh.git
```

### Dependencies

```sh
cd your-fresh-project && npm install
```

*This will download all your npm/gulp dependencies to the directory: `./node_modules`*



## Project Setup

1. Update your info in the `package.json` file.

2. Go to `./_config.js` and configure your project in the top section (or use the default settings.)

3. Initiate your project:

   ```sh
   gulp init
   ```

4. Run the default Gulp task to start working:

   ```sh
   gulp
   ```


---

## Changelog

- v1.0.0
  - Initial Release

- v1.0.1
  - (HotFix) Added `gulp-cssnano` to dependencies.

- v1.0.2
  - Moved the user config file `_config.js` to the project root and added an importer file `_config-import.js` to the `./gulp` tasks directory.
  - Added conditional to `gulp init` that produces an index.html file even when Pug is not being used in the project.
	- Changed the default option to include Pug in the project to `false`.
	- Turned off Sass-Linting as the default.
  - Made the sass import file user configurable.
  - Converted initial dev files/directories into variables to be controlled through 'config.js'
- v1.0.3
  - Bugfix: BrowserSync watching/reloading HTML when using Pug.
	- Basic Dev-Templates auto added with `gulp init` task.
	  - index.pug/html file with minimal presets.
		- main.scss/sass
		- normalize.css (v3.0.3)
- v1.0.4
  - Bugfix: Gulp todo returned path errors. - Fixed.
  - Added `_config.js` to the `gulp todo` blacklist.
  - Added an admin task `gulp refresh` to remove all files setup when running `gulp init`. (This is mainly to make testing for me easier.)
  - Changed the `add readme` option in `config` to be turned on by default.

## Meta

Yisrael Grimes - @GrimesClassic - yisrael@tubemedia.co

Distributed under the uncopyright license. Which, isn't actually a license. You can read more about it from [Brian Gardner](https://briangardner.com/uncopyright/) of StudioPress fame.

---

## Thanks

This toolkit is based heavily on the works of the following fine people & projects:
- Mina Markham's [Sassy Starter](https://github.com/minamarkham/sassy-starter)
- [Zell Liew](https://zellwk.com/)
- [Hugo Giraudel](http://hugogiraudel.com/)
- All the cool kids that hang out in the Gulp chanel in the [FED's](http://frontenddevelopers.org/) Slack.
