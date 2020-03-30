import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  MdDelete,
  MdCreate,
  MdBackspace,
  MdSearch,
  MdClose,
  MdUnfoldMore,
  MdUnfoldLess,
} from 'react-icons/md'

IconButton.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOf([
    'delete',
    'edit',
    'search',
    'clear',
    'close',
    'more',
    'less',
  ]).isRequired,
}

IconButton.defaultProps = {
  size: 6,
}

export default function IconButton(props) {
  return <StyledButton {...props}>{Icons[props.title]}</StyledButton>
}

const Icons = {
  delete: <MdDelete />,
  edit: <MdCreate />,
  search: <MdSearch />,
  clear: <MdBackspace />,
  close: <MdClose />,
  more: <MdUnfoldMore />,
  less: <MdUnfoldLess />,
}
const StyledButton = styled.button`
  color: inherit;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => 'var(--size-' + props.size + ')'};
  height: ${props => 'var(--size-' + props.size + ')'};
  font-size: ${props => 'var(--size-' + props.size + ')'};
  cursor: pointer;
`
