module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'amd': true,
		'node': true,
		'jest': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	'overrides': [{
		files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off',
			'max-len': 'off'
		}
	}],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': ['react', '@typescript-eslint', 'i18next', 'react-hooks' ],
	'rules': {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'react/react-in-jsx-scope': 'off',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'i18next/no-literal-string': ['warn', {
			markupOnly: true,
			ignoreAttribute: ['data-testid', 'to']
		}],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/no-deprecated': 'warn',
	}
};
