import Koa from 'koa'
import koaBody from 'koa-body'
import cors from 'koa2-cors'
import { loggerMiddleware } from './log/log'
import { FIXED_KEY } from './config/constant'
import { errorHandler, responseHandler } from './middleware/response'
import connectMongodb from './utils/connectMongodb'

const app = new Koa()

// log middleware
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Global middleware
app.use(koaBody({ multipart: true }))

// 设置跨域
app.use(cors())

connectMongodb()

// Response
app.use(responseHandler)

// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'authorization')
  await next()
})

const port = FIXED_KEY.port

app.listen(port, () => {
  console.log(`selever started on ${port}`)
})
