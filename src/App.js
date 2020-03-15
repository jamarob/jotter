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
            <AddNotePage onAddNote={addNote} />
          </Route>
          <Route path="/edit/:id">
            <EditNotePage findNote={findNote} updateNote={updateNote} />
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
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`
