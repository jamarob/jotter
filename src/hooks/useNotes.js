import { useState, useEffect } from 'react'
import {
  loadNotes,
  saveNotes,
  loadSearchTerm,
  saveSearchTerm,
} from '../data/services'
import uid from 'uid'
import filterNotes from '../util/filterNotes'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState(loadNotes())
  const [notes, setNotes] = useState(originalNotes)
  const [searchTerm, setSearchTerm] = useState(loadSearchTerm())

  useEffect(() => {
    setSearchTerm(searchTerm)
    setNotes(filterNotes(originalNotes, searchTerm))
  }, [originalNotes, searchTerm])

  function addNote(note) {
    const newNotes = [{ id: uid(32), ...note }, ...originalNotes]
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function deleteNote(id) {
    const newNotes = originalNotes.filter(note => note.id !== id)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function updateNote(note) {
    const index = originalNotes.findIndex(n => n.id === note.id)
    const newNotes = [
      ...originalNotes.slice(0, index),
      note,
      ...originalNotes.slice(index + 1),
    ]
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function searchNotes(search) {
    setSearchTerm(search)
    saveSearchTerm(search)
  }

  return {
    notes,
    searchNotes,
    searchTerm,
    addNote,
    findNote,
    deleteNote,
    updateNote,
  }
}
