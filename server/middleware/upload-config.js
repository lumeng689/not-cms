var multer = require('multer')
import * as path from 'path'
import Settings from '../config/settings'
var System = require('../utils/system')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('*****111****')
    console.log(file.mimetype)
    var destPath = path.join(Settings.UPLOAD_PATH, 'market')
    console.log(destPath)
    System.mkdirsSync(destPath)
    cb(null, destPath)
  },
  filename: function (req, file, cb) {
    var newFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    cb(null, newFileName)
  }
})

var upload = multer({storage: storage})

module.exports = upload
