import { useState } from 'react'
import uid from 'uid'
import { loadNotes, saveNotes } from '../data/services'
import useSearch from './useSearch'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState(loadNotes())
  const [lastOperation, setLastOperation] = useState('')
  const [lastState, setLastState] = useState(null)

  const [search, setSearch, searchedNotes] = useSearch(originalNotes)

  function saveLastState(operation, notes) {
    setLastState(notes)
    setLastOperation(operation)
  }

  function undoLastOperation() {
    if (!lastOperation) {
      return
    }
    setOriginalNotes(lastState)
    setLastOperation('')
    saveNotes(lastState)
  }

  function dismissUndo() {
    setLastOperation('')
  }

  function addNote(note) {
    const newNote = { id: uid(32), ...note }
    const newNotes = [newNote, ...originalNotes]
    saveLastState(CREATE, originalNotes)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function deleteNote(id) {
    saveLastState(DELETE, originalNotes)
    const newNotes = originalNotes.filter(note => note.id !== id)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function updateNote(note) {
    const index = originalNotes.findIndex(n => n.id === note.id)
    const newNotes = [
      ...originalNotes.slice(0, index),
      { ...note },
      ...originalNotes.slice(index + 1),
    ]
    saveLastState(UPDATE, originalNotes)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  return {
    notes: searchedNotes,
    searchNotes: setSearch,
    searchTerm: search,
    addNote,
    findNote,
    deleteNote,
    updateNote,
    lastOperation,
    undoLastOperation,
    dismissUndo,
  }
}
