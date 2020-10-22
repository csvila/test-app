module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint/recommended', 'typescript'],
  env: {
    jest: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,

  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'default-case': 'warn',
    'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'new-cap': 'warn',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-inner-declarations': 'warn',
    'no-lonely-if': 'warn',
    'no-multi-spaces': 'error',
    'no-nested-ternary': 'error',
    'no-redeclare': 'error',
    'no-undef': 'warn',
    'no-undefined': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prop-types': 'warn',
    semi: ['error', 'never']
  }
}
