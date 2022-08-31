module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // plugins: ["prettier"], // prettier 추가
  rules: {
    // "prettier/prettier": "error", // prettier 규칙을 위반하면 에러를 발생
  },
};
