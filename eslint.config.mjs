import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignora artefatos gerados e build antes de qualquer regra/extend
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Regras base do Next + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Regras do projeto, aplicadas apenas a arquivos de código
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Evita excesso de linhas em branco
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
      // Garante newline no fim do arquivo
      "eol-last": ["error", "always"],
    },
  },
];

export default eslintConfig;
