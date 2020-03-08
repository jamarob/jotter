import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Note from './Note'

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onTagClick: PropTypes.func.isRequired,
}

export default function NotesList({ notes, onTagClick }) {
  return (
    <StyledNotesList>
      {notes.length ? mapNotes() : <p>No notes found...</p>}
    </StyledNotesList>
  )

  function mapNotes() {
    return notes.map(note => (
      <Note
        key={note.id}
        created={note.created}
        text={note.text}
        onTagClick={onTagClick}
      />
    ))
  }
}

const StyledNotesList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 16px 68px 16px;
`
