import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import handlebars from 'express-handlebars'
import helmet from 'helmet'
import settings from './config/settings'
import sessionConfig from './middleware/session-config'
import passportConfig from './middleware/passport-config'
import routerConfig from './routes/router-config'

import hbsHelpers from './utils/hbs_helpers'

let app = express()
app.set('views', path.join(__dirname, 'views'))

let hbs = handlebars.create({
  helpers: hbsHelpers
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser(settings.SESSION_SECRET))
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())
// 配置session
sessionConfig(app)
// 配置passport
passportConfig(app)
// 配置防范CSRF

// 配置路由
routerConfig(app)

app.all('/*', function (req, res, next) {
  res.sendFile('index.html',
    {
      root: path.resolve(__dirname, './public/'),
      dotfiles: 'deny'
    }
  )
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  res.render('404')
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log('********in app.js error handler*********')
  console.log(req.url)
  console.log(err)
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('500')
})

export default app
