import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DateView from './DateView'
import { replaceTags } from './Tag'

Note.propTypes = {
  created: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
}

export default function Note({ created, text, onTagClick }) {
  return (
    <StyledNote>
      <DateView time={created} />
      {replaceTags(text, onTagClick)}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px lightgrey;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 8px;
`
