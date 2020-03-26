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
      <Header symbol="add" />
      <NoteForm onSave={text => onAddNote({ text })} />
    </>
  )
}
