import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Note from './Note'

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      edited: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  onTagClick: PropTypes.func.isRequired,
}

export default function NotesList({ notes, onTagClick, onDelete }) {
  return (
    <StyledNotesList>
      {notes.length ? mapNotes() : <p>No notes found...</p>}
    </StyledNotesList>
  )

  function mapNotes() {
    return notes.map(note => (
      <Note
        key={note.id}
        {...note}
        onTagClick={onTagClick}
        onDelete={onDelete}
      />
    ))
  }
}

const StyledNotesList = styled.main`
  padding: var(--size-5);
  overflow-y: scroll;
`
