/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-redux/recommended",
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react-redux", "jest", "css-modules"],
  rules: {
    indent: ["error", 2, { SwitchCase: "off" }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-redux/useSelector-prefer-selectors": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: false },
    ],
    "css-modules/no-unused-class": "off",
    "property-no-unknown": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
