import React from 'react'
import StoryContainer from './StoryContainer'
import AddNoteButton from '../components/AddNoteButton'

export default {
  title: 'AddNoteButton',
  component: AddNoteButton,
}

export const Default = () => (
  <StoryContainer style={{ marginTop: 50, position: 'relative' }}>
    <AddNoteButton />
  </StoryContainer>
)
