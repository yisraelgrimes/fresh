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

5. When you are ready to deploy your dev project to Github pages, copy/paste the code below into Terminal (if you don't already have) have a `gh-pages` branch. The script will:
	- Create a gh-pages branch.
	- Create/add a temporary README.md file.
	- Create/add a .gitignore file and add `node_modules` to the ignore list.
	- Commit the files/changes and push to the gh-pages branch.
	- Checkout the Master branch.
	
	```sh
	git checkout --orphan gh-pages && git rm -rf . && touch README.md && git add README.md && touch .gitignore && echo "node_modules" > .gitignore && git add .gitignore && git commit -m "Init gh-pages" && git push --set-upstream origin gh-pages &&  git checkout master
	```

	From there, you'll want to checkout the branch that you are wanting to deploy from and run:
	
	```sh
	gulp deploy
	```
	
	By default, the 'deploy' task will take all the files in your `./dev` directory and your `./README.md` file and push it to the root of your 'gh-pages' branch. The below directories in `./dev` are excluded by default because the compiled code would be in the `./dev/assets` folder:
	- pug
	- sass
	- js
	
	You can change what's included/excluded from the `gh-pages.js` file [here.](https://github.com/yisraelgrimes/fresh/blob/master/gulp/gh-pages.js#L13)


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
- v1.0.5
	- Added ability to import markdown files directly into pug and compile to html. Added .md files to `gulp watch` that compiles pug on save.
  - Added option to turn linting on/off for Javascript files.
  - Cleaned up `gulp sass` stream to perform better.
- v1.0.6
  - Added github pages task for dev environment `gulp deploy`.
- v1.1.7 (Work in Progress)
  - Changed `sass` parent-directory in the `dev` directory to `styles`.
  - Changed `pug` parent-directory in the `dev` directory to `views`.
  - Changed `js` parent-directory in the `dev` directory to `scripts`.
  - Decided to bump the version name up to 1.1.7 instead of 1.0.7 due to file structure changes.
- v1.1.8
  - Will be adding download commands for common dev files like `.gitignore`.

	
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
