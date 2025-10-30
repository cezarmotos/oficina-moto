# Instruções de setup (Node, pnpm) — projeto Oficina Moto

Resumo rápido

Este repositório é um site construído com Next.js + React + TypeScript sobre elétrica/eletrônica de motos (serviços, peças, informações técnicas). O objetivo deste documento é guiar a instalação do Node, do gerenciador de pacotes recomendado (pnpm) e como rodar o projeto em desenvolvimento e produção, tanto no Linux quanto no Windows.

Requisitos recomendados

- Node.js LTS (recomenda-se Node 20.x em 2025).
- pnpm (o repositório inclui `pnpm-lock.yaml`, por isso `pnpm` é recomendado).
- Git (para clonar/atualizar o repositório).

Arquivos/pastas importantes

- `package.json` — scripts e dependências (Next 15, React 19, TypeScript).
- `pnpm-lock.yaml` — lockfile do pnpm.
- `src/` — código da aplicação:
  - `src/app/eletrica/`, `src/app/bobinas/`, `src/app/contato/`, `src/app/sobre/` — páginas.
  - `src/components/` — componentes reutilizáveis (Banner, Header, Footer, etc.).
  - `src/styles/` — `globals.css`, `fonts.ts`.

Instalação do Node (Linux — bash)

1. Instalar nvm (recomendado):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
# fechar e abrir o terminal ou:
source ~/.bashrc
```

2. Instalar e usar Node 20 (LTS recomendado):

```bash
nvm install 20
nvm use 20
node -v  # deve mostrar v20.x.x
```

Instalação do Node (Windows)

Opções recomendadas:

- Instalar nvm-windows (gerenciador de versões): baixar o instalador em https://github.com/coreybutler/nvm-windows/releases e seguir o wizard.
- Ou usar o instalador oficial do Node (https://nodejs.org/en/).

Depois de instalar com o nvm-windows (PowerShell):

```powershell
nvm install 20
nvm use 20
node -v
```

Instalar pnpm

Opção recomendada (Corepack, disponível em Node moderno):

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

Alternativa (instalar global via npm):

```bash
npm install -g pnpm
pnpm -v
```

Clonar o repositório (se necessário)

```bash
git clone <repo-url>
cd oficina-moto
```

Instalar dependências e rodar em desenvolvimento

No diretório do projeto (onde está `package.json`):

```bash
pnpm install
pnpm dev
```

- O script `dev` em `package.json` é `next dev --turbopack`. Por padrão o Next roda em http://localhost:3000.

Com npm (não recomendado aqui, pois há `pnpm-lock.yaml`):

```bash
npm install
npm run dev
```

Build e start (produção)

```bash
pnpm build
pnpm start
```

Checagens úteis

- TypeScript:

```bash
pnpm run checkTypescript
```

- Lint:

```bash
pnpm run lint
pnpm run lint:fix  # tenta corrigir automaticamente
```

- Formatação:

```bash
pnpm run format
```

Diagnóstico / problemas comuns

- Versão incompatível do Node: o Next pode reclamar. Verifique com `node -v` e mude a versão via `nvm use`.
- Misturar gerenciadores de pacote: não misture `npm`/`yarn`/`pnpm` no mesmo projeto — prefira `pnpm` aqui.
- Erros após trocar de gerenciador/versão: limpe `node_modules` e reinstale:

```bash
rm -rf node_modules
pnpm install
```

- Forçar reinstalação / limpar cache pnpm:

```bash
pnpm store prune
pnpm install --force
```

- Logs: ao rodar `pnpm dev` ou `pnpm build` observe mensagens no terminal e poste aqui trechos de erro se precisar de ajuda.

Verificação rápida

1. Rode `pnpm dev`.
2. Abra http://localhost:3000 no navegador.
3. Confira páginas: `/eletrica`, `/bobinas`, `/contato` (existem em `src/app`).
4. Rode `pnpm run checkTypescript` e `pnpm run lint`.

Resumo técnico curto

- Framework: Next.js (App Router), TypeScript.
- Gerenciador de pacotes recomendado: `pnpm` (há `pnpm-lock.yaml`).
- Scripts úteis em `package.json`: `dev`, `build`, `start`, `lint`, `checkTypescript`, `format`.

Se quiser que eu adicione estas instruções diretamente em `README.md` (mesclar ou substituir), eu posso — ou podemos manter este `SETUP.md` separado. Também posso rodar `pnpm install` e `pnpm dev` localmente na sua cópia do workspace e reportar logs/erros se desejar.

---

Arquivo gerado automaticamente com instruções de setup.
