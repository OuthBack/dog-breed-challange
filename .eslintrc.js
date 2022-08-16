module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ["import", "@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "react/self-closing-comp": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    camelcase: "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
  },
  settings: {
    node: {
      allowModules: ["electron"],
      resolvePaths: [__dirname],
      tryExtensions: [".js", ".json", ".node", ".ts", ".tsx"],
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
