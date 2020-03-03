import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import NotesList from './components/NotesList'
import Header from './components/Header'
import useNotes from './hooks/useNotes'
import styled from 'styled-components/macro'

export default function App() {
  const [notes, setNotes] = useNotes()

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/notes">
            <Header title="All notes" />
            <NotesList notes={notes} />
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
