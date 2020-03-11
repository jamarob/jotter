import { useState, useEffect } from 'react'
import {
  getNotes,
  getSearchTerm,
  saveNotes,
  saveSearchTerm,
} from '../data/services'
import uid from 'uid'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState(getNotes())
  const [notes, setNotes] = useState(originalNotes)
  const [searchTerm, setSearchTerm] = useState(getSearchTerm())

  useEffect(() => {
    setSearchTerm(searchTerm)
    setNotes(originalNotes.filter(note => note.text.includes(searchTerm)))
  }, [originalNotes, searchTerm])

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function addNote(note) {
    const newNotes = [{ id: uid(32), ...note }, ...originalNotes]
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
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
