var system = require('../utils/system')
var CONFIG = system.readConfigFile()

const SETTINGS = {
  SESSION_SECRET: 'session_secret',
  ENCRYPT_KEY: 'encrypt_key',
  // 本地Redis缓存设置
  REDIS_HOST: CONFIG.REDIS_HOST,
  REDIS_PORT: CONFIG.REDIS_PORT,
  REDIS_PSD: '',
  REDIS_DB: 0,
  // session过期时间
  SESSION_MAX_AGE: CONFIG.SESSION_MAX_AGE || 30 * 60 * 1000,
  // 本地 Mongodb设置
  MONGODB_URL: CONFIG.MONGODB_URL,
  MONGODB_USERNAME: 'ngem',
  MONGODB_PASSWORD: 'cms_db',
  // 文件上传目录设置
  UPLOAD_PATH: '/opt/files/cms/',
}

export default SETTINGS
