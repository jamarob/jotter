import React from 'react'
import PropTypes from 'prop-types'

import {
  MdCloudDone,
  MdCloudOff,
  MdCloudDownload,
  MdCloudUpload,
} from 'react-icons/md'

ConnectionStatus.propTypes = {
  status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'DOWNLOAD', 'UPLOAD']),
}

export default function ConnectionStatus({ className, status }) {
  return {
    ONLINE: <MdCloudDone className={className} />,
    OFFLINE: <MdCloudOff className={className} />,
    DOWNLOAD: <MdCloudDownload className={className} />,
    UPLOAD: <MdCloudUpload className={className} />,
  }[status]
}
