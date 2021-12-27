import  {createProxyMiddleware}  from 'http-proxy-middleware';
export default function(app){
  app.use(
    // 代理api 下面再把 /api 替换为空字符串 因为路径里面没有 /api
    createProxyMiddleware('/api', {  // 遇见 /api1 前缀的请求 就会触发该代理配置
      target: 'https://m.maoyan.com/ajax', // 请求转发给谁
      changeOrigin: true, // 控制服务器接收到的请求头Host的值 
      // 重新请求路径 把 /api1 替换为空字符串 必须加
      pathRewrite:{'^/api' : ''},
      // secure: false,
    }),
  )
}