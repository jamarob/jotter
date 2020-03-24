import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../GlobalStyle'
import Note from '../components/Note'

export default {
  title: 'Note',
  component: Note,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Note
        id="1231245"
        created={123456789}
        edited={432645876689}
        text="Lorem ipsum dolor sit amet, @consetetur sadipscing elitr, @sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At @vero eos et accusam et justo duo dolores et ea rebum. Stet clita @kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        onTagClick={action('Tag was click')}
        onDelete={action('Delete tag')}
      />
    </div>
  </>
)
