const Koa = require('koa')
const http = require('http')
const router = require('./routers/api')
const app = new Koa()
require('dotenv').config()

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})


app.use(router.routes()).use(router.allowedMethods())

http.createServer(app.callback()).listen(process.env.APP_PORT)