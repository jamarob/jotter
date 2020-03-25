import PropTypes from 'prop-types'
import React from 'react'
import { MdDateRange } from 'react-icons/md'
import styled from 'styled-components/macro'
import localeDateString from '../util/localeDateString'

Timestamp.propTypes = {
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
}

export default function Timestamp({ created, edited }) {
  return (
    <StyledTimestamp>
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
`

const DateIcon = styled(MdDateRange)`
  margin-right: var(--size-1);
`
