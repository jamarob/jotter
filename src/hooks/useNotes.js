import { useEffect, useState } from 'react'
import {
  postNote,
  getNotes,
  deleteNote as deleteNoteService,
  putNote,
} from '../util/services'
import useSearch from './useSearch'
import useUndo from './useUndo'
import useCloudStatus from './useCloudStatus'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState([])
  const [search, setSearch, searchedNotes] = useSearch(originalNotes)
  const [lastOperation, saveState, restoreState] = useUndo(setOriginalNotes)
  const {
    status,
    setDownload,
    setUpload,
    setOffline,
    setOnline,
  } = useCloudStatus()

  useEffect(() => {
    setDownload()
    getNotes()
      .then(notes => setOriginalNotes(notes))
      .then(setOnline)
      .catch(setOffline)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function addNote(note) {
    setUpload()
    postNote(note)
      .then(newNote => {
        saveState(CREATE, originalNotes)
        setOriginalNotes([newNote, ...originalNotes])
      })
      .then(setOnline)
      .catch(setOffline)
  }

  function deleteNote(id) {
    setUpload()
    deleteNoteService(id)
      .then(response => {
        saveState(DELETE, originalNotes)
        setOriginalNotes(originalNotes.filter(note => note.id !== id))
      })
      .then(setOnline)
      .catch(setOffline)
  }

  function updateNote(note) {
    setUpload()
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
      .then(setOnline)
      .catch(setOffline)
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function undoLastOperation() {
    setDownload()
    restoreState()
      .then(setOnline)
      .catch(setOffline)
  }

  function dismissUndo() {
    saveState('', null)
  }

  return {
    status,
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
