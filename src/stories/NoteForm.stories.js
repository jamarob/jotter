import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import NoteForm from '../components/NoteForm'
import StoryContainer from './StoryContainer'

export default {
  title: 'NoteForm',
  component: NoteForm,
  decorators: [withKnobs],
}

const label = 'text'
const options = {
  Empty: '',
  Some:
    'Lorem ipsum dolor sit amet, @consetetur sadipscing elitr, @sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At @vero eos et accusam et justo duo dolores et ea rebum. Stet clita @kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
}
const defaultValue = ''
const groupId = 'GROUP-ID1'

export const Default = () => (
  <StoryContainer>
    <NoteForm
      text={select(label, options, defaultValue, groupId)}
      onSave={action('Save')}
    />
  </StoryContainer>
)
