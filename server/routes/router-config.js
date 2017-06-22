import indexRouter from './index'
function routerConfig (app) {
  app.use('/', indexRouter)
}

export default routerConfig
