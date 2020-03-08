import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default function Header({ title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #333;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`
