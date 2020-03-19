import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../GlobalStyle'
import NoteForm from '../components/NoteForm'

export default {
  title: 'NoteForm',
  component: NoteForm,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <NoteForm onSave={action('Save')} />
    </div>
  </>
)
