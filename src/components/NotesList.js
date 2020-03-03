import React from 'react'
import styled from 'styled-components/macro'
import Note from './Note'

export default function NotesList({ notes }) {
  return (
    <StyledNotesList>
      {notes.length ? mapNotes() : <p>You have no notes, yet.</p>}
    </StyledNotesList>
  )

  function mapNotes() {
    return notes.map(note => (
      <Note key={note.id} created={note.created} text={note.text} />
    ))
  }
}

const StyledNotesList = styled.section`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`
