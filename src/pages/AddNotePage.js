import React from 'react'
import Header from '../components/Header'
import NoteForm from '../components/NoteForm'

export default function AddNote({ onAddNote }) {
  return (
    <>
      <Header title="Add Note" />
      <NoteForm onSave={onAddNote} />
    </>
  )
}
