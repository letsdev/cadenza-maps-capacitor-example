import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    root: './src',
    build: {
      outDir: '../dist',
      minify: false,
      emptyOutDir: true
    },
    define: {
      CMS_ACCOUNT_PW: JSON.stringify(env.WTP_CMS_ACCOUNT_PW),       // or use "WP_CMS_ACCOUNT_PW" from env file
      CMS_ACCOUNT_KEY: JSON.stringify(env.WTP_CMS_ACCOUNT_KEY),     // or use "WP_CMS_ACCOUNT_KEY" from env file
      CMS_BASE_URL: JSON.stringify(env.WTP_CMS_BASE_URL),           // or use "WP_CMS_BASE_URL" from env file
      DOWNLOADABLE_MAP_ID: JSON.stringify(env.DOWNLOADABLE_MAP_ID)  // NOTE: downloadable map id, depending on mobile server environment "WTP_CMS_BASE_URL" or "WP_CMS_BASE_URL"
    }
  }
})
