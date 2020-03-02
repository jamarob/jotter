import React from 'react'
import styled from 'styled-components'

export default function({ created, text }) {
  return (
    <StyledNote>
      {created}
      <br />
      {text}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  padding: 8px;
`
