/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "^next(.*)$",
    "^@/styles/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  // Não separar grupos de imports com linha em branco
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
