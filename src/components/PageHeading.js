import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PageHeading.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']).isRequired,
}

const Titles = {
  HOME: 'Jotter',
  ADD: 'Jot it down',
  EDIT: 'Rejot it',
}

export default function PageHeading({ page, className }) {
  return (
    <StyledPageHeading className={className}>{Titles[page]}</StyledPageHeading>
  )
}

const StyledPageHeading = styled.h1`
  font-family: Handlee;
  text-transform: uppercase;
`
