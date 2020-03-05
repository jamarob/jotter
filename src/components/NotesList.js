import React from 'react'
import styled from 'styled-components/macro'
import Note from './Note'

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
  padding: 16px;
`
