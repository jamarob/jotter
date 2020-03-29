import PropTypes from 'prop-types'
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'

EditNotePage.propTypes = {
  findNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default function EditNotePage({ findNote, updateNote, status }) {
  const { id } = useParams()
  const note = findNote(id)
  return (
    <>
      <Header page="EDIT" status={status} />
      <NoteForm onSave={handleSave} text={note.text} />
    </>
  )

  function handleSave(text) {
    text !== note.text && updateNote({ ...note, text })
  }
}
