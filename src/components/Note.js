import React from 'react'
import styled from 'styled-components/macro'
import DateView from './DateView'

export default function({ created, text }) {
  return (
    <StyledNote>
      <DateView time={created} />
      {text}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  padding: 8px;
`
