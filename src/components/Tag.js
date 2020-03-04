import React from 'react'
import styled from 'styled-components/macro'

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

export default function Tag({ text, onClick }) {
  return <StyledTag onClick={() => onClick(text)}>{text}</StyledTag>
}

const StyledTag = styled.span`
  color: teal;
  cursor: pointer;
`
