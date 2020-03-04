import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import NotesList from '../components/NotesList'

export default function BrowseNotes({ notes, onTagClick }) {
  const { tag } = useParams()
  return (
    <>
      <Header title="Browse Notes" />
      <NotesList
        notes={tag ? notesFilteredByTag() : notes}
        onTagClick={onTagClick}
      />
    </>
  )

  function notesFilteredByTag() {
    return notes.filter(note => note.text.includes(tag))
  }
}
