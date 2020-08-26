install:
	npm install
start:
	node bin/parity-check.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
