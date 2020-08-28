install:
	npm install
start:
	node bin/brain-games.js
start-even:
	node bin/brain-even.js
start-calc:
	node bin/brain-calc.js
start-gcd:
	node bin/brain-gcd.js
start-progression:
	node bin/brain-progression.js
start-prime:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
