module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:json/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.json'],
  },
  rules: {
    'prettier/prettier': 'error',

    'json/*': ['error', { allowComments: true }],

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
