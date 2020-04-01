import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components/macro'
import PageLogo from './PageLogo'
import ConnectionStatus from './ConnectionStatus'
import PageHeading from './PageHeading'

Header.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']),
  status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'DOWNLOAD', 'UPLOAD']),
}

Header.defaultProps = {
  page: 'HOME',
}

export default function Header({ page, status }) {
  return (
    <StyledHeader>
      <StyledPageLogo page={page} />
      <StyledPageHeading page={page} />
      <ConnectionStatus status={status} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 var(--size-5);
  height: var(--size-7);

  background: var(--neutral-1);
  color: var(--neutral-10);

  font-size: var(--size-5);
`

const StyledPageLogo = styled(PageLogo)`
  margin-right: var(--size-3);
`

const StyledPageHeading = styled(PageHeading)`
  margin-right: auto;
`
