module.exports = {
  extends: ["eslint:recommended", "plugin:react-hooks/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
  },
};
