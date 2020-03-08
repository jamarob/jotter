import React from 'react'
import styled from 'styled-components/macro'

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
