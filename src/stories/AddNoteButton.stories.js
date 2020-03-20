import React from 'react'
import AddNoteButton from '../components/AddNoteButton'
import GlobalStyle from '../GlobalStyle'

export default {
  title: 'AddNoteButton',
  component: AddNoteButton,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 100, margin: 100, position: 'relative' }}>
      <AddNoteButton />
    </div>
  </>
)
