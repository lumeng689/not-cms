var fs = require('fs')
var path = require('path')
var nodemailer = require('nodemailer')
var _ = require('lodash')
var uuid = require('uuid')

var mkdirsSync = function (dirName) {
  if (fs.existsSync(dirName)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirName))) {
      fs.mkdirSync(dirName)
      return true
    }
  }
}

var system = {
  sendEmail: function (to) {
    var transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'lumtest@163.com',
        pass: 'Cloud1688'
      }
    })
    if (_.isArray(to)) {
      to = to.join(',')
    }
    var mailOptions = {
      from: 'lumtest@163.com', // sender address
      to: to,
      subject: 'Node.js发送邮件测试', // 主题
      html: '<b>我是HTML格式内容</b>' // html body
    }
    transporter.sendMail(mailOptions)
  },
  mkdirsSync: mkdirsSync,
  getFileMimeType: function (filePath) {
    var buffer = new Buffer(8)
    var fd = fs.openSync(filePath, 'r')
    fs.readSync(fd, buffer, 0, 8, 0)
    var newBuf = buffer.slice(0, 4)
    var head1 = newBuf[0].toString(16)
    var head2 = newBuf[1].toString(16)
    var head3 = newBuf[2].toString(16)
    var head4 = newBuf[3].toString(16)
    var typeCode = head1 + head2 + head3 + head4
    var filetype = ''
    var mimetype
    switch (typeCode) {
      case 'ffd8ffe1':
        filetype = 'jpg'
        mimetype = ['image/jpeg', 'image/pjpeg']
        break
      case 'ffd8ffe0':
        filetype = 'jpg'
        mimetype = ['image/jpeg', 'image/pjpeg']
        break
      case '47494638':
        filetype = 'gif'
        mimetype = 'image/gif'
        break
      case '89504e47':
        filetype = 'png'
        mimetype = ['image/png', 'image/x-png']
        break
      case '504b34':
        filetype = 'zip'
        mimetype = ['application/x-zip', 'application/zip', 'application/x-zip-compressed']
        break
      case '2f2aae5':
        filetype = 'js'
        mimetype = 'application/x-javascript'
        break
      case '2f2ae585':
        filetype = 'css'
        mimetype = 'text/css'
        break
      case '5b7bda':
        filetype = 'json'
        mimetype = ['application/json', 'text/json']
        break
      case '3c212d2d':
        filetype = 'ejs'
        mimetype = 'text/html'
        break
      default:
        filetype = 'unknown'
        break
    }
    fs.closeSync(fd)
    return {
      fileType: filetype,
      mimeType: mimetype
    }
  },
  readConfigFile: function () {
    try {
      var configString = fs.readFileSync('/opt/config/config.json', 'utf8')
      return JSON.parse(configString)
    } catch (e) {
      console.warn('read config file failed, please place a config file in /opt/config')
      return {}
    }
  },
  genUUID () {
    return uuid.v4({
      node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
      clockseq: 0x1234,
      msecs: new Date().getTime(),
      nsecs: 5678
    })
  }
}

module.exports = system
