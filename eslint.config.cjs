const eslintPluginReact = require('eslint-plugin-react');

module.exports = [
  {
    // Configurație generală pentru ESLint
    plugins: {
      react: eslintPluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // Specifică versiunea ECMAScript
        sourceType: 'module', // Permite importuri
        ecmaFeatures: {
          jsx: true, // Permite sintaxa JSX
        },
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'eqeqeq': 'off',
      'no-alert': 'off',
      'semi': 'off',
      'quotes': 'off',
      'no-debugger': 'off',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'curly': 'off',
      'indent': 'off',
      'no-magic-numbers': 'off',
      'max-len': 'off',
      'no-const-assign': 'off',
      'no-new-object': 'off',
      'no-var': 'off',
      'prefer-const': 'off',
      'no-useless-escape': 'off',
      'no-trailing-spaces': 'off',
      'arrow-parens': 'off',
      'comma-dangle': 'off',
      'no-shadow': 'off',
      'prefer-arrow-callback': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
    },
  },
  {
    // Configurație pentru fișierele JSX
    files: ['*.jsx'],
    plugins: {
      react: eslintPluginReact,
    },
  },
];
