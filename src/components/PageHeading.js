import React from 'react'
import PropTypes from 'prop-types'

PageHeading.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']),
}

const Titles = {
  HOME: 'Jotter',
  ADD: 'Jot it down',
  EDIT: 'Rejot it',
}

export default function PageHeading({ page, className }) {
  return <h1 className={className}>{Titles[page]}</h1>
}
