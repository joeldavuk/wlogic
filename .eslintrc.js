module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
    ],
    "prettier/prettier": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-commented-out-tests": "warn",
    "jest/no-test-prefixes": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },
    },
  ],
};
