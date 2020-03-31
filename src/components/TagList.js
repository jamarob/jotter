import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { MdClose } from 'react-icons/md'
import Tag from './Tag'

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagClick: PropTypes.func.isRequired,
}

export default function TagList({ tags, selectedTags, onTagClick }) {
  return (
    <StyledTagList>
      {tags.map(tag => {
        const selected = selectedTags.includes(tag)
        return (
          <StyledTag
            key={tag}
            selected={selected}
            text={tag}
            onClick={onTagClick}
          >
            {selected && <CloseIcon />}
          </StyledTag>
        )
      })}
    </StyledTagList>
  )
}

const StyledTagList = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledTag = styled(Tag)`
  padding: var(--size-1);
  margin: var(--size-2);
  background: ${props => (props.selected ? 'var(--primary-3)' : 'white')};
  color: ${props => (props.selected ? 'white' : 'var(--primary-3)')};
  font-size: 1.2em;
  box-shadow: 1px 1px 1px 1px var(--neutral-5);
  transition: 0.3s ease;
`
const CloseIcon = styled(MdClose)`
  margin-left: var(--size-1);
  font-size: var(--size-4);
`
