import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { MdCreate, MdAddCircle } from 'react-icons/md'
import localeDateString from '../util/localeDateString'

DateView.propTypes = {
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
}

export default function DateView({ created, edited }) {
  return (
    <StyledDate>
      <MdAddCircle />
      {localeDateString(created)}
      {edited && (
        <>
          <MdCreate />
          {localeDateString(edited)}
        </>
      )}
    </StyledDate>
  )
}

const StyledDate = styled.div`
  color: gray;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  *:last-child {
    margin-left: 8px;
  }
`
