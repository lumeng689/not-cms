/*!
 * redis client
 */
'use strict'

import SETTINGS from '../config/settings'
import * as redis from 'redis'
var client = redis.createClient(SETTINGS.REDIS_PORT, SETTINGS.REDIS_HOST)
client.auth(SETTINGS.REDIS_PSD)
module.exports = client
