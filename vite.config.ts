import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), isDev && mkcert()],
});
