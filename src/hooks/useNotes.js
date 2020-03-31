import { useEffect, useState } from 'react'
import {
  postNote,
  getNotes,
  deleteNote as deleteNoteService,
  putNote,
  loadNotesFromLocal,
  saveNotesToLocal,
  putNotes,
  setNeedsSync,
  sync,
} from '../util/services'
import useNoteSearch from './useNoteSearch'
import useUndo from './useUndo'
import useConnectionStatus from './useConnectionStatus'
import uid from 'uid'

const CREATE = 'Note added.'
const DELETE = 'Note deleted.'
const UPDATE = 'Note updated.'

export default function useNotes() {
  const [originalNotes, setOriginalNotes] = useState([])
  const [search, setSearch, searchedNotes] = useNoteSearch(originalNotes)
  const [lastOperation, lastState, saveState, dismissUndo] = useUndo()
  const {
    status,
    setDownload,
    setUpload,
    setOffline,
    setOnline,
  } = useConnectionStatus()

  useEffect(() => {
    setDownload()
    sync()
      .then(() => getNotes())
      .then(notes => {
        setOnline()
        setOriginalNotes(notes)
        saveNotesToLocal(notes)
      })
      .catch(() => {
        setOffline()
        setOriginalNotes(loadNotesFromLocal())
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function addNote(note) {
    saveState(CREATE, originalNotes)
    setUpload()
    sync()
      .then(() => postNote(note))
      .then(newNote => {
        setOnline()
        return [newNote, ...originalNotes]
      })
      .catch(() => {
        setOffline()
        setNeedsSync(true)
        const now = new Date().toISOString()
        const newNote = { ...note, id: uid(32), created: now, edited: now }
        return [newNote, ...originalNotes]
      })
      .then(notes => {
        setOriginalNotes(notes)
        saveNotesToLocal(notes)
      })
  }

  function deleteNote(id) {
    saveState(DELETE, originalNotes)
    setUpload()
    sync()
      .then(() => deleteNoteService(id))
      .then(() => {
        setOnline()
      })
      .catch(() => {
        setOffline()
        setNeedsSync(true)
      })
      .then(() => {
        const notes = originalNotes.filter(note => note.id !== id)
        setOriginalNotes(notes)
        saveNotesToLocal(notes)
      })
  }

  function updateNote(note) {
    saveState(UPDATE, originalNotes)
    setUpload()
    sync()
      .then(() => putNote(note))
      .then(updatedNote => {
        setOnline()
        return updatedNote
      })
      .catch(() => {
        setOffline()
        setNeedsSync(true)
        return { ...note, edited: new Date().toISOString() }
      })
      .then(updatedNote => {
        const index = originalNotes.findIndex(n => n.id === updatedNote.id)
        const newNotes = [
          ...originalNotes.slice(0, index),
          updatedNote,
          ...originalNotes.slice(index + 1),
        ]
        setOriginalNotes(newNotes)
        saveNotesToLocal(newNotes)
      })
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function undoLastOperation() {
    setDownload()
    sync()
      .then(() => putNotes(lastState))
      .then(notes => {
        setOnline()
        return notes
      })
      .catch(() => {
        setOffline()
        setNeedsSync(true)
        return lastState
      })
      .then(notes => {
        setOriginalNotes(notes)
        saveNotesToLocal(notes)
        dismissUndo()
      })
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
