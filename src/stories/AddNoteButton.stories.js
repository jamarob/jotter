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
    <div style={{ padding: 24 }}>
      <AddNoteButton />
    </div>
  </>
)
