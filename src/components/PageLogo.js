import PropTypes from 'prop-types'
import React from 'react'
import { GiBookmark } from 'react-icons/gi'
import { MdAddCircle, MdCreate } from 'react-icons/md'

PageLogo.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']),
}

export default function PageLogo({ className, page }) {
  return {
    HOME: <GiBookmark className={className} />,
    ADD: <MdAddCircle className={className} />,
    EDIT: <MdCreate className={className} />,
  }[page]
}
