/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
// import checker from 'vite-plugin-checker';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index.ts',
      exportName: 'expressApp',
    }),
    // checker({
    //   typescript: true,
    //   eslint: {
    //     lintCommand: 'eslint . --ext .ts,.js,.mjs,.cjs,.json --cache',
    //   },
    // }),
  ],
});
