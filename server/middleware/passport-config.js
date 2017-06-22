var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var Cache = require('../utils/cache')
var settings = require('../config/settings')
var UserService = require('../services/user-service')

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, done) {
    console.log('-------in local strategy--------------')
    console.log(username)
    console.log(password)
    UserService.doLogin(username, password)
      .then(function (result) {
        return done(null, result)
      }, function (err) {
        return done(err, false, {message: 'Incorrect username.'})
      })
  }
))

passport.serializeUser(function (user, cb) {
  console.log('==============serializeUser================================')
  console.log(user)
  Cache.set('user:' + user.id, user, settings.SESSION_MAX_AGE * 1.5)
  cb(null, user.id)
})

passport.deserializeUser(function (id, done) {
  console.log('==============deserializeUser================================')
  Cache.get('user:' + id).then(function (user) {
    console.log(id)
    console.log(user)
    done(null, user)
  }).catch(function (err) {
    console.log('get user session failed')
    console.log(err)
    done(null, null)
  })
})

function passportConfig (app) {
  app.use(passport.initialize())
  app.use(passport.session())
}

export default passportConfig
