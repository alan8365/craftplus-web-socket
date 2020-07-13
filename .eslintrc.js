module.exports = {
	"env": {
		"browser": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars":[
			"warn", {
				"vars": "all",
				"args": "after-used",
				"ignoreRestSiblings": false
			}
		],
		"no-undef": [
			"warn"
		]
	}
};
