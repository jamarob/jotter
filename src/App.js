import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import NotesList from './components/NotesList'
import { getNotes } from './data/services'

function App() {
  const notes = getNotes()

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/notes">
          <NotesList notes={notes} />
        </Route>
        <Route path="/">
          <Redirect to="/notes" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
