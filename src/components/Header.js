import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components/macro'
import PageLogo from './PageLogo'
import ConnectionStatus from './ConnectionStatus'

Header.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']).isRequired,
  status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'DOWNLOAD', 'UPLOAD'])
    .isRequired,
}

Header.defaultProps = {
  page: 'HOME',
}

export default function Header({ page, status }) {
  return (
    <StyledHeader>
      <StyledPageLogo page={page} />
      <h1>JOTTER</h1>
      <StyledConnectionStatus status={status} />
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
    font-family: Handlee;
    margin-right: auto;
  }
`

const StyledPageLogo = styled(PageLogo)`
  margin: 0 var(--size-3) 0 var(--size-5);
`
const StyledConnectionStatus = styled(ConnectionStatus)`
  margin: 0 var(--size-5) 0 0;
`
