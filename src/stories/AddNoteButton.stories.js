import React from 'react'
import StoryContainer from './StoryContainer'
import AddNoteButton from '../components/AddNoteButton'

export default {
  title: 'Buttons',
  component: AddNoteButton,
}

export const AddNote = () => (
  <StoryContainer style={{ marginTop: 50, position: 'relative' }}>
    <AddNoteButton />
  </StoryContainer>
)
