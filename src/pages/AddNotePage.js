import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'

AddNotePage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default function AddNotePage({ onAddNote, status }) {
  return (
    <>
      <Header page="ADD" status={status} />
      <NoteForm onSave={text => onAddNote({ text })} />
    </>
  )
}
