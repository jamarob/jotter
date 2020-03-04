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

export default function App() {
  const { notes, searchNotes } = useNotes()
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/notes">
            <BrowseNotes notes={notes} onTagClick={searchNotes} />
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
