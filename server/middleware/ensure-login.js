'use strict'

export default function ensureLoggedIn (options) {
  if (typeof options === 'string') {
    options = {redirectTo: options}
  }

  options = options || {}

  var url = options.redirectTo || '/login'
  var setReturnTo = options.setReturnTo === undefined ? true : options.setReturnTo

  return function (req, res, next) {
    console.log('backend auth filter......')
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      if (req.xhr || req.headers.accept.indexOf('json') > -1) {
        console.log('Ajax not authenticated!....')
        return res.status(401).json({sys: 'LOCAL', code: 4010, message: '====Please login at first===='})
      }
      console.log('Page not authenticated!....')
      if (setReturnTo && req.session) {
        req.session.returnTo = req.originalUrl || req.url
      }
      return res.redirect(url)
    }

    next()
  }
}
