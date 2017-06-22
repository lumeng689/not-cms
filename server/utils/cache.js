'use strict'

var redis = require('./redis')
var Q = require('q')

/**
 * 从cache中取出缓存
 * @param key 键
 * @param callback 回调函数
 */
var get = function (key) {
  var deferred = Q.defer()

  redis.get(key, function (err, data) {
    if (err) {
      deferred.reject(err)
    }
    if (!data) {
      deferred.reject('value is undefined')
    }

    data = JSON.parse(data)
    deferred.resolve(data)
  })

  return deferred.promise
}

exports.get = get

var del = function (key) {
  var deferred = Q.defer()
  redis.del(key, function (err, data) {
    console.log('==================')
    console.log(key)
    console.log('********************result***')
    console.log(err)
    console.log(data)
    if (err) {
      deferred.reject(err)
    }

    if (data && data === 1) {
      deferred.resolve(data)
    } else {
      deferred.reject('value is undefined')
    }
  })

  return deferred.promise
}

exports.del = del

/**
 * 将键值对数据缓存起来
 *
 * @param key  键
 * @param value 值
 * @param time 参数可选，毫秒为单位,切换为redis以秒为单位，除以1000
 * @param callback 回调函数
 */
var set = function (key, value, time) {
  var deferred = Q.defer()
  value = JSON.stringify(value)
  var callback = function (err, data) {
    if (err) {
      deferred.reject(err)
    }
    deferred.resolve(data)
  }

  if (!time) {
    redis.set(key, value, callback)
  } else {
    // 将毫秒单位转为秒
    redis.setex(key, parseInt(time / 1000), value, callback)
  }
  return deferred.promise
}

exports.set = set
