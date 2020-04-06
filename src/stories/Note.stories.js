import React from 'react'
import { action } from '@storybook/addon-actions'
import StoryContainer from './StoryContainer'
import Note from '../components/Note'

export default {
  title: 'Note',
  component: Note,
}

export const Default = () => (
  <StoryContainer>
    <Note
      id="1231245"
      created="2020-03-31T23:45:14.165+00:00"
      edited="2020-04-01T23:09:28.958+00:00"
      text="Lorem ipsum dolor sit amet, @consetetur sadipscing elitr, @sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At @vero eos et accusam et justo duo dolores et ea rebum. Stet clita @kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      onTagClick={action('Tag was click')}
      onDelete={action('Delete note')}
    />
  </StoryContainer>
)
