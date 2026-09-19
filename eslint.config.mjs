import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

// ESLint stays on 9.x on purpose: eslint-config-next's JS parser (Next's
// bundled @babel/eslint-parser) and eslint-plugin-react 7.37.x (latest) only
// implement the ESLint 9 API — see AGENTS.md "Linting".
export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  globalIgnores(['.next/**', 'node_modules/**', 'audit-antes/**', 'audit-despues/**']),
])
