import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'
import { useParams } from 'react-router-dom'

EditNotePage.propTypes = {
  findNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
}

export default function EditNotePage({ findNote, updateNote }) {
  const { id } = useParams()
  const note = findNote(id)
  return (
    <>
      <Header title="Add Note" />
      <NoteForm onSave={handleSave} text={note.text} />
    </>
  )

  function handleSave(text) {
    updateNote({ ...note, text })
  }
}
