import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import {
  MdCloudDone,
  MdCloudOff,
  MdCloudDownload,
  MdCloudUpload,
} from 'react-icons/md'

ConnectionStatus.propTypes = {
  status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'DOWNLOAD', 'UPLOAD'])
    .isRequired,
}

export default function ConnectionStatus({ className, status }) {
  return (
    <>
      {status === 'ONLINE' ? (
        <Online className={className} />
      ) : status === 'OFFLINE' ? (
        <Offline className={className} />
      ) : status === 'DOWNLOAD' ? (
        <Download className={className} />
      ) : (
        <Upload className={className} />
      )}
    </>
  )
}

const Online = styled(MdCloudDone)``
const Offline = styled(MdCloudOff)``
const Download = styled(MdCloudDownload)``
const Upload = styled(MdCloudUpload)``
