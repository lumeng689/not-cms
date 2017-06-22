var session = require('express-session')
var RedisStore = require('connect-redis')(session)
import settings from '../config/settings'

function sessionConfig (app) {
  app.use(session({
    secret: settings.SESSION_SECRET,
    name: 'sessionId',
    store: new RedisStore({
      port: settings.REDIS_PORT,
      host: settings.REDIS_HOST,
      pass: settings.REDIS_PSD,
      ttl: settings.SESSION_MAX_AGE / 1000 // 过期时间
    }),
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: settings.SESSION_MAX_AGE
    },
    resave: true,
    rolling: true,
    saveUninitialized: true
  }))
}

export default sessionConfig
