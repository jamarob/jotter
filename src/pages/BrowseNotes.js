import React from 'react'
import Header from '../components/Header'
import NotesList from '../components/NotesList'

export default function BrowseNotes({ notes, onTagClick }) {
  return (
    <>
      <Header title="Browse Notes" />
      <NotesList notes={notes} onTagClick={onTagClick} />
    </>
  )
}
