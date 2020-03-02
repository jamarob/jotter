import React from 'react'
import styled from 'styled-components'

export default function({ millis }) {
  const date = new Date(millis)
  const localeString = date.toLocaleString()
  return <StyledDate>{localeString}</StyledDate>
}

const StyledDate = styled.div`
  color: grey;
  font-size: 0.9em;
  padding-bottom: 4px;
`
