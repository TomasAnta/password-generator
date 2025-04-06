import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unusedImports from "eslint-plugin-unused-imports";
import styledComponentsA11y from "eslint-plugin-styled-components-a11y";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default tseslint.config(
    {
        ignores: [".next", "dist"],
    },
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "jsx-a11y": jsxA11y,
            "unused-imports": unusedImports,
            "styled-components-a11y": styledComponentsA11y,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            semi: "warn",
            "no-duplicate-imports": "error",
            "react/prop-types": "off",
            "import/no-unresolved": "off",
            "linebreak-style": "warn",
            "react/react-in-jsx-scope": "off",
            "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
            "no-multiple-empty-lines": "warn",
            "@typescript-eslint/no-unused-vars": "off",
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
    },
    ...compat.extends("next/core-web-vitals", "next")
);
