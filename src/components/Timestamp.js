import PropTypes from 'prop-types'
import React from 'react'
import { MdDateRange } from 'react-icons/md'
import styled from 'styled-components/macro'
import localeDateString from '../util/localeDateString'

Timestamp.propTypes = {
  created: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  edited: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default function Timestamp({ className, created, edited }) {
  return (
    <StyledTimestamp className={className}>
      <DateIcon />
      {localeDateString(created)}
      {edited > created && (
        <>
          {' · '}
          {localeDateString(edited)}
        </>
      )}
    </StyledTimestamp>
  )
}

const StyledTimestamp = styled.div`
  display: flex;
  align-items: center;
  color: var(--neutral-7);
  font-size: var(--size-4);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`

const DateIcon = styled(MdDateRange)`
  margin-right: var(--size-1);
`
