import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import { GiBookmark } from 'react-icons/gi'
import { MdAddCircle, MdCreate } from 'react-icons/md'

PageLogo.propTypes = {
  page: PropTypes.oneOf(['HOME', 'ADD', 'EDIT']).isRequired,
}

export default function PageLogo({ className, page }) {
  return (
    <>
      {page === 'ADD' ? (
        <CreateLogo className={className} />
      ) : page === 'EDIT' ? (
        <EditLogo className={className} />
      ) : (
        <AppLogo className={className} />
      )}
    </>
  )
}

const AppLogo = styled(GiBookmark)``
const CreateLogo = styled(MdAddCircle)``
const EditLogo = styled(MdCreate)``
