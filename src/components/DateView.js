import PropTypes from 'prop-types'
import React from 'react'
import { MdDateRange } from 'react-icons/md'
import styled from 'styled-components/macro'
import localeDateString from '../util/localeDateString'

DateView.propTypes = {
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
}

export default function DateView({ created, edited }) {
  return (
    <StyledDate>
      <MdDateRange />
      {localeDateString(created)}
      {edited && (
        <>
          {' · '}
          {localeDateString(edited)}
        </>
      )}
    </StyledDate>
  )
}

const StyledDate = styled.div`
  color: var(--neutral-7);
  font-size: var(--size-4);
  display: flex;
  align-items: center;
  gap: var(--size-1);

  .edited {
    margin-left: var(--size-1);
  }
`
