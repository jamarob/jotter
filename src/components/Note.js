import React from 'react'
import styled from 'styled-components'
import Date from './Date'

export default function({ created, text }) {
  return (
    <StyledNote>
      <Date millis={created} />
      {text}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  padding: 8px;
`
