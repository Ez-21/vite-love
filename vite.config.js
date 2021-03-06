import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true,
    port: 2000,
    logLevel: 'error',
    clearScreen: false,
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com', // 请求转发给谁
        changeOrigin: true, // 控制服务器接收到的请求头Host的值 
        // 重新请求路径 把 /api1 替换为空字符串 必须加
        pathRewrite: {
          '^/api': ''
        },
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/mpi': {
        target: 'https://music.163.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/mpi': ''
        },
        rewrite: path => path.replace(/^\/mpi/, '')

      }
    }
  },

})