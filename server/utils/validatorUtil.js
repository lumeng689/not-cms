'use strict'

var validator = require('validator')

var ValidatorUtils = {
  isUserName: function (str) {
    return validator.matches(str, /^[a-zA-Z][a-zA-Z0-9_]{4,11}$/)
  },
  isGBKName: function (str) {
    return validator.matches(str, /[\u4e00-\u9fa5]/)
  },
  isPsd: function (str) {
    return validator.matches(str, /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/)
  },
  isQQ: function (str) {
    return validator.matches(str, /^[1-9][0-9]{4,9}$/)
  },
  isEn: function (str) {
    return validator.matches(str, /^\S+[a-z A-Z]$/)
  },
  isEmail: function (str) {
    return validator.isEmail(str)
  }
}

// //自定义校验扩展
// validator.extend('isUserName', function (str) {
//     return /^[a-zA-Z][a-zA-Z0-9_]{4,11}$/.test(str)
// })
//
// validator.extend('isGBKName', function (str) {
//     return /[\u4e00-\u9fa5]/.test(str)
// })
//
// validator.extend('isPsd', function (str) {
//     return /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/.test(str)
// })
//
// validator.extend('isQQ', function (str) {
//     return RegExp(/^[1-9][0-9]{4,9}$/).test(str)
// })
//
// //只能是英文
// validator.extend('isEn', function (str) {
//     return /^\S+[a-z A-Z]$/.test(str)
// })

module.exports = ValidatorUtils
