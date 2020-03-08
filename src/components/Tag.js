import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function Tag({ text, onClick }) {
  return <StyledTag onClick={() => onClick(text)}>{text}</StyledTag>
}

const TAG_REG_EXP = /(@\w+)/

const isTag = index => index % 2

export function replaceTags(text, onTagClick) {
  return text.split(TAG_REG_EXP).map((chunk, index) =>
    isTag(index) ? (
      <Tag key={index} text={chunk} onClick={onTagClick}>
        {chunk}
      </Tag>
    ) : (
      chunk
    )
  )
}

const StyledTag = styled.span`
  color: teal;
  cursor: pointer;
`
