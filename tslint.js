module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: ['standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error']
    }
};
