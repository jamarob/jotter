import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { splitAtTag } from '../util/tags'

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function Tag(props) {
  return (
    <StyledTag
      className={props.className}
      onClick={() => props.onClick(props.text)}
    >
      {props.text}
      {props.children}
    </StyledTag>
  )
}

const isTag = index => index % 2

export function replaceTags(text, onTagClick) {
  return splitAtTag(text).map((chunk, index) =>
    isTag(index) ? (
      <Tag key={index} text={chunk} onClick={onTagClick}></Tag>
    ) : (
      chunk
    )
  )
}

const StyledTag = styled.span`
  color: var(--primary-3);
  cursor: pointer;
`
