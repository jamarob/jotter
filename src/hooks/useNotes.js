import { useState } from 'react'
import { getNotes } from '../data/services'
import uid from 'uid'

export default function useNotes() {
  // eslint-disable-next-line
  const [originalNotes, setOriginalNotes] = useState(getNotes())
  const [notes, setNotes] = useState(originalNotes)
  const [searchTerm, setSearchTerm] = useState('')

  function searchNotes(string) {
    setSearchTerm(string)
    setNotes(originalNotes.filter(note => note.text.includes(string)))
  }

  function addNote(note) {
    const newNotes = [{ id: uid(32), ...note }, ...notes]
    setOriginalNotes(newNotes)
    setNotes(newNotes)
  }

  return { notes, searchNotes, searchTerm, addNote }
}
