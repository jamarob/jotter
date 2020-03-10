import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'

AddNotePage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
}

export default function AddNotePage({ onAddNote }) {
  return (
    <>
      <Header title="Add Note" />
      <NoteForm onSave={handleSave} />
    </>
  )

  function handleSave(text) {
    const created = Date.now()
    onAddNote({ text, created })
  }
}
