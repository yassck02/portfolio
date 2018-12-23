#!/bin/sh
COMMIT_MESSAGE="$1"

repos=( 	"/Users/Connor/Documents/Projects/software/_Chaos"
			"/Users/Connor/Documents/Projects/software/ASCII-Maze-Generator"
			"/Users/Connor/Documents/Projects/software/Fractals"
			"/Users/Connor/Documents/Projects/software/L_System_Viewer"
			"/Users/Connor/Documents/Projects/software/Mandelbrot-Set"
			"/Users/Connor/Documents/Projects/software/Math-Art"
			"/Users/Connor/Documents/Projects/software/Maze-Generator"
			"/Users/Connor/Documents/Projects/software/Photo-2-Text"
			"/Users/Connor/Documents/Projects/software/Spirographer"	)

clear
echo "========================================================================="

for repo in "${repos[@]}"
do
	echo "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
	cd $repo
	git status
	git add --all
	git commit -m "$COMMIT_MESSAGE"
	git push origin master
done

echo "========================================================================="
