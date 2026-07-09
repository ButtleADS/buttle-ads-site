import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // додає process, require, __dirname і т.д.
      },
    },
  },
];