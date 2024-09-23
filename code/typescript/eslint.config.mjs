import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Correct package name for TypeScript ESLint plugin
import tsParser from "@typescript-eslint/parser"; // TypeScript parser

export default [
  {
    // Lint both source and test files (including .ts in tests folder)
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for TS files
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript specific rules
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    // Lint JavaScript files in commonjs style (if needed for Node.js environment)
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    // Special handling for test files
    files: ["tests/**/*.ts"], // This applies only to .ts files in the tests folder
    rules: {
      // Add custom rules or overrides for test files here
      "@typescript-eslint/no-unused-vars": "off", // Example: turning off a rule for test files
    },
  },
  pluginJs.configs.recommended,
];
