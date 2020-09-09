module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: "2018",
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "no-use-before-define": ["error", { functions: false }],
    "import/prefer-default-export": 0
    "no-absolute-path": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0
  },
};
