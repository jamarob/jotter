import React from 'react'
import { PropTypes } from 'prop-types'
import { GiBookmark } from 'react-icons/gi'
import {
  MdAddCircle,
  MdCreate,
  MdCloudDone,
  MdCloudOff,
  MdCloudDownload,
  MdCloudUpload,
} from 'react-icons/md'
import styled from 'styled-components/macro'

Header.propTypes = {
  symbol: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']).isRequired,
  status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'DOWNLOAD', 'UPLOAD'])
    .isRequired,
}

Header.defaultProps = {
  symbol: 'HOME',
  status: 'OFFLINE',
}

export default function Header({ symbol, status }) {
  return (
    <StyledHeader>
      {symbol === 'ADD' ? (
        <CreateLogo />
      ) : symbol === 'EDIT' ? (
        <EditLogo />
      ) : symbol === 'HOME' ? (
        <AppLogo />
      ) : null}
      <h1>JOTTER</h1>
      {status === 'ONLINE' ? (
        <Online />
      ) : status === 'OFFLINE' ? (
        <Offline />
      ) : status === 'DOWNLOAD' ? (
        <Download />
      ) : status === 'UPLOAD' ? (
        <Upload />
      ) : null}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-7);

  background: var(--neutral-1);
  color: var(--neutral-10);

  font-size: var(--size-5);

  h1 {
    font-size: var(--size-5);
    font-family: 'Handlee', cursive;
  }
`

const AppLogo = styled(GiBookmark)`
  margin: 0 var(--size-3) 0 var(--size-5);
`
const CreateLogo = styled(MdAddCircle)`
  margin: 0 var(--size-3) 0 var(--size-5);
`
const EditLogo = styled(MdCreate)`
  margin: 0 var(--size-3) 0 var(--size-5);
`
const Online = styled(MdCloudDone)`
  margin: 0 var(--size-5) 0 auto;
`
const Offline = styled(MdCloudOff)`
  margin: 0 var(--size-5) 0 auto;
`
const Download = styled(MdCloudDownload)`
  margin: 0 var(--size-5) 0 auto;
`
const Upload = styled(MdCloudUpload)`
  margin: 0 var(--size-5) 0 auto;
`
