import { useState, useEffect } from 'react'
import {
  loadNotes,
  saveNotes,
  loadSearchTerm,
  saveSearchTerm,
} from '../data/services'
import uid from 'uid'
import filterNotes from '../util/filterNotes'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState(loadNotes())
  const [notes, setNotes] = useState(originalNotes)
  const [searchTerm, setSearchTerm] = useState(loadSearchTerm())
  const [lastOperation, setLastOperation] = useState('')
  const [lastState, setLastState] = useState(null)

  useEffect(() => {
    setSearchTerm(searchTerm)
    setNotes(filterNotes(originalNotes, searchTerm))
  }, [originalNotes, searchTerm])

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
    lastOperation,
    undoLastOperation,
    dismissUndo,
  }
}
