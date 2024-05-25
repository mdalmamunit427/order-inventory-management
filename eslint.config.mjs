import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.node }},
  {
    ignores: ["**/node_modules/", "**/dist/"]
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "rules": {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "@typescript-eslint/no-explicit-any": 0,
    },
  }
];