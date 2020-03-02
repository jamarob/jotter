import React from 'react'
import styled from 'styled-components'
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

const StyledNotesList = styled.section``
