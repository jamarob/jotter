import React from 'react'
import styled from 'styled-components'

export default function({ created, text }) {
  const date = new Date(created)
  const localeDate = date.toLocaleString()
  return (
    <StyledNote>
      <StyledDate>{localeDate}</StyledDate>
      {text}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  padding: 8px;
`

const StyledDate = styled.div`
  color: grey;
  font-size: 0.9em;
  padding-bottom: 4px;
`
