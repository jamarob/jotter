import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DateView.propTypes = {
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
}

export default function DateView({ created, edited }) {
  return (
    <StyledDate>
      {'created: ' + toLocaleString(created)}{' '}
      {edited && (
        <>
          <br />
          edited: {toLocaleString(edited)}
        </>
      )}
    </StyledDate>
  )
}

function toLocaleString(time) {
  return new Date(time).toLocaleString()
}

const StyledDate = styled.div`
  color: gray;
  font-size: 14px;
`
