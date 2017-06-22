import Settings from '../config/settings'

const UploadUtils = {
  cleanUploadPath: function (absPath) {
    return absPath.substring(Settings.UPLOAD_PATH.length)
  }
}

export default UploadUtils
