const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = (app) => {
  app.use(
    '/reviews',
    createProxyMiddleware({
      target: 'http://localhost:8888',
      changeOrigin: true,
    })
  )
}
