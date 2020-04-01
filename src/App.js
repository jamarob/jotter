import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useNotes from './hooks/useNotes'
import AddNotePage from './pages/AddNotePage'
import BrowseNotes from './pages/BrowseNotes'
import EditNotePage from './pages/EditNotePage'

export default function App() {
  const {
    status,
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
  } = useNotes()
  return (
    <Switch>
      <Route exact path="/">
        <BrowseNotes
          status={status}
          notes={notes}
          onSearch={searchNotes}
          searchTerm={searchTerm}
          lastOperation={lastOperation}
          undoLastOperation={undoLastOperation}
          dismissUndo={dismissUndo}
          onDelete={deleteNote}
        />
      </Route>
      <Route path="/add">
        <AddNotePage onAddNote={addNote} status={status} />
      </Route>
      <Route path="/edit/:id">
        <EditNotePage
          findNote={findNote}
          updateNote={updateNote}
          status={status}
        />
      </Route>
    </Switch>
  )
}
