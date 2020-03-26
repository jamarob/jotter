import { useEffect, useState } from 'react'
import {
  postNote,
  getNotes,
  deleteNote as deleteNoteService,
  putNote,
} from '../util/services'
import useSearch from './useSearch'
import useUndo from './useUndo'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState([])
  const [search, setSearch, searchedNotes] = useSearch(originalNotes)
  const [lastOperation, saveState, restoreState] = useUndo(setOriginalNotes)

  useEffect(() => {
    getNotes()
      .then(notes => setOriginalNotes(notes))
      .catch(console.log)
  }, [])

  function addNote(note) {
    postNote(note)
      .then(newNote => {
        saveState(CREATE, originalNotes)
        setOriginalNotes([newNote, ...originalNotes])
      })
      .catch(console.log)
  }

  function deleteNote(id) {
    deleteNoteService(id)
      .then(response => {
        saveState(DELETE, originalNotes)
        setOriginalNotes(originalNotes.filter(note => note.id !== id))
      })
      .catch(console.log)
  }

  function updateNote(note) {
    putNote(note)
      .then(updatedNote => {
        saveState(UPDATE, originalNotes)
        const index = originalNotes.findIndex(n => n.id === updatedNote.id)
        const newNotes = [
          ...originalNotes.slice(0, index),
          updatedNote,
          ...originalNotes.slice(index + 1),
        ]
        setOriginalNotes(newNotes)
      })
      .catch(console.log)
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
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
