import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import NotesList from './components/NotesList'
import GlobalStyle from './GlobalStyle'
import useNotes from './hooks/useNotes'

function App() {
  const [notes, setNotes] = useNotes()

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
