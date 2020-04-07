deploy:
	JEKYLL_ENV=production bundle exec jekyll build
	echo "deploy _site to xroger88.github.io ..."
	cp -R ./_site ../xroger88.github.io
	cd ../xroger88.github.io && git add . && git status && git commit -m "updated" && git push

