import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
     '/api':{
      target: 'https://m.maoyan.com/ajax', // 请求转发给谁
      changeOrigin: true, // 控制服务器接收到的请求头Host的值 
      // 重新请求路径 把 /api1 替换为空字符串 必须加
      pathRewrite:{'^/api' : ''},
      rewrite: path => path.replace(/^\/api/, '')
     }
    }
  }
})
