import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DateView from './DateView'
import { replaceTags } from './Tag'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

Note.propTypes = {
  id: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  edited: PropTypes.number,
  text: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function Note({
  id,
  created,
  edited,
  text,
  onTagClick,
  onDelete,
}) {
  return (
    <StyledNote>
      <NoteHeader>
        <DateView created={created} edited={edited} />
        <ActionLinks>
          <MdDelete onClick={() => onDelete(id)} />
          <Link to={'/edit/' + id}>
            <MdModeEdit />
          </Link>
        </ActionLinks>
      </NoteHeader>
      {replaceTags(text, onTagClick)}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  box-shadow: 2px 2px 2px 2px var(--neutral-9);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: var(--size-2);
  word-wrap: break-word;
  color: var(--neutral-1);
  background: white;
  text-align: justify;
`

const NoteHeader = styled.div`
  display: flex;
  align-items: flex-start;
`

const ActionLinks = styled.div`
  margin-left: auto;

  * {
    margin-left: var(--size-1);
    color: var(--neutral-5);
    font-size: var(--size-5);
  }
`
