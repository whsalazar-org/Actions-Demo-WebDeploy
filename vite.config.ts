/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Allows the app to be served from a sub-path, e.g. a GitHub Pages project
// site, where BASE_PATH is set to "/<repository-name>" by the deploy workflow.
const basePath = process.env.BASE_PATH || '/'
const base = basePath.endsWith('/') ? basePath : `${basePath}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // Enables Testing Library's automatic cleanup between tests.
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})
