module.exports = {
    'env': {
        'node': true,
        'es2021': true,
        'browser': true,
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'jest',
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': 'off',
    }
};
