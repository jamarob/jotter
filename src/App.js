import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components/macro'
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
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/notes">
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
          <Route path="/">
            <Redirect to="/notes" />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  )
}

const PageLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`
