import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import path from "path";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: [path.resolve("./tsconfig.app.json")],
        tsconfigRootDir: path.resolve(),
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // React rules
      ...react.configs.recommended.rules,

      // React Hooks best practices
      ...reactHooks.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",
      // React Fast Refresh rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // JSX A11y rules for accessibility
      "jsx-a11y/anchor-is-valid": "warn",

      // Correct rule to catch missing rel on target="_blank"
      "react/jsx-no-target-blank": "error",
    },
  },
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parserOptions: {
        project: [path.resolve("./tsconfig.node.json")], // Adjust if vite uses this config
        tsconfigRootDir: path.resolve(),
      },
    },
  },

  {
    // Enable strict and stylistic rules that require type-checking
    ...tseslint.configs.strictTypeChecked[0],
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
        pragma: "React",
        flowVersion: "0.53",
      },
    },
  }
);
