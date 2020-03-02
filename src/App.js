import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import NotesList from './components/NotesList'
import { getNotes } from './services'

function App() {
  const notes = getNotes()

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <NotesList notes={notes} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
