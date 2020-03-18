import { useState } from 'react'
import uid from 'uid'
import { loadNotes, saveNotes } from '../data/services'
import useSearch from './useSearch'
import useUndo from './useUndo'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState(loadNotes())
  const [search, setSearch, searchedNotes] = useSearch(originalNotes)
  const [lastOperation, saveState, restoreState] = useUndo(setOriginalNotes)

  function addNote(note) {
    const newNote = { id: uid(32), ...note }
    const newNotes = [newNote, ...originalNotes]
    saveState(CREATE, originalNotes)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function deleteNote(id) {
    saveState(DELETE, originalNotes)
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
    saveState(UPDATE, originalNotes)
    setOriginalNotes(newNotes)
    saveNotes(newNotes)
  }

  function dismissUndo() {
    saveState('', null)
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
    undoLastOperation: restoreState,
    dismissUndo,
  }
}
