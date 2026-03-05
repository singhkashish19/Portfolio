import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/Portfolio/',
    plugins: [react()],
    server: {
        port: 5173,
        strictPort: false,
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    motion: ['framer-motion'],
                    icons: ['react-icons']
                }
            }
        },
        chunkSizeWarningLimit: 1000,
        assetsInlineLimit: 4096,
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'react-icons']
    }
});
