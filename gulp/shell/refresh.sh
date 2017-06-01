#!/usr/bin/env bash


echo "The following files and directories will be removed:"
echo "./dev"
echo "./staging"
echo "./build"
echo "./.publish"
echo ".editorconfig"
echo ".stylishColors"
echo ".jshintignore"
echo ".pug-lintrc"
echo "And if you downloaded the ReadMe template and had the original renamed to fresh_README.md, it downloaded template will be removed and the original put back."
read -p "To proceed, enter Y. To exit, enter N. (y/n)  " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
	rm -rf ./dev
	rm -rf ./staging
	rm -rf ./build
	rm -rf ./.publish
	rm -rf ./.editorconfig
	rm -rf ./.stylishColors
	rm -rf ./.jshintignore
	rm -rf ./.pug-lintrc
	if [ -f ./fresh_README.md ]; then
		rm -rf ./README.md
		mv ./fresh_README.md ./README.md
	fi

	echo "Your project is now so Fresh and so clean clean."
	echo "Get to work!"
else
	echo " "
	echo "Leaving everything alone."
	return
fi
