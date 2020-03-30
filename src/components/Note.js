import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Timestamp from './Timestamp'
import { replaceTags } from './Tag'
import { useHistory } from 'react-router-dom'
import IconButton from './Buttons/IconButton'

Note.propTypes = {
  id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
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
  const history = useHistory()
  return (
    <StyledNote>
      <NoteHeader>
        <Timestamp created={created} edited={edited} />
        <DeleteButton title="delete" size="5" onClick={() => onDelete(id)} />
        <EditButton
          title="edit"
          size="5"
          onClick={() => history.push(`/edit/` + id)}
        />
      </NoteHeader>
      {replaceTags(text, onTagClick)}
    </StyledNote>
  )
}

const StyledNote = styled.section`
  margin: 0 0 var(--size-5) 0;
  padding: var(--size-2);

  :last-child {
    margin-bottom: var(--size-6);
  }

  box-shadow: var(--shadow);

  text-align: justify;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  word-wrap: break-word;

  color: var(--neutral-1);
  background: white;
`

const NoteHeader = styled.div`
  display: flex;
`

const DeleteButton = styled(IconButton)`
  color: var(--neutral-5);
  margin-left: auto;
`

const EditButton = styled(IconButton)`
  color: var(--neutral-5);
  margin-left: var(--size-2);
`
