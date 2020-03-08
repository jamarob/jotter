import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DateView.propTypes = {
  time: PropTypes.number.isRequired,
}

export default function DateView({ time }) {
  return <StyledDate>{toLocaleString(time)}</StyledDate>
}

function toLocaleString(time) {
  return new Date(time).toLocaleString()
}

const StyledDate = styled.div`
  color: gray;
  font-size: 14px;
  padding-bottom: 4px;
`
