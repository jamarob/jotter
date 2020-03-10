import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components/macro'
import useNotes from './hooks/useNotes'
import BrowseNotes from './pages/BrowseNotes'
import AddNotePage from './pages/AddNotePage'
import DeleteNotePage from './pages/DeleteNotePage'
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
            />
          </Route>
          <Route path="/add">
            <AddNotePage onAddNote={addNote} />
          </Route>
          <Route path="/delete/:id">
            <DeleteNotePage findNote={findNote} deleteNote={deleteNote} />
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
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
`
