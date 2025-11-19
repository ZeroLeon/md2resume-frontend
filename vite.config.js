import { defineConfig } from 'vite'

export default defineConfig({
  // 生产环境配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',

    // 确保静态文件被正确处理
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        // 保持原有的文件路径结构
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        },
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    }
  },

  // 开发服务器配置
  server: {
    port: 5173,
    open: true
  },

  // 确保静态资源被正确处理
  publicDir: 'public',

  // 环境变量配置
  define: {
    __VITE_API_URL__: JSON.stringify(process.env.VITE_API_URL)
  }
})