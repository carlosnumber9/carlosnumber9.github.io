module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['warn', 4],
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['error', 'always'],
    },
};
