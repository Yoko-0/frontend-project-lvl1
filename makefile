install:
	npm install
start:
	node bin/brain-games.js
start-even:
	node bin/brain-even.js
start-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
