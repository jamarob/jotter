import React from 'react'
import { action } from '@storybook/addon-actions'
import StoryContainer from './StoryContainer'
import NoteForm from '../components/NoteForm'

export default {
  title: 'NoteForm',
  component: NoteForm,
}

export const Create = () => (
  <StoryContainer>
    <NoteForm onSave={action('Save')} />
  </StoryContainer>
)

export const Edit = () => (
  <StoryContainer>
    <NoteForm
      style={{ background: 'hotpink' }}
      onSave={action('Save')}
      text="Lorem ipsum dolor sit amet, @consetetur sadipscing elitr, @sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At @vero eos et accusam et justo duo dolores et ea rebum. Stet clita @kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
  </StoryContainer>
)
