import { useState } from 'react'
import { getNotes } from '../data/services'

export default function useNotes() {
  // eslint-disable-next-line
  const [originalNotes, setOriginalNotes] = useState(getNotes())
  const [notes, setNotes] = useState(originalNotes)

  function searchNotes(string) {
    setNotes(originalNotes.filter(note => note.text.includes(string)))
  }

  return { notes, searchNotes }
}
