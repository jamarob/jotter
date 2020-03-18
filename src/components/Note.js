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
  box-shadow: var(--note-shadow);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 0 0 var(--size-5) 0;
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
    cursor: pointer;

    &:hover {
      color: var(--primary-5);
    }
  }
`
