import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import StoryContainer from './StoryContainer'
import SearchBar from '../components/SearchBar'

export default {
  title: 'SearchBar',
  component: SearchBar,
  decorators: [withKnobs],
}

export const Default = () => (
  <StoryContainer>
    <SearchBar
      folded={boolean('Folded', true)}
      toggleFolded={action('Toggle fold')}
      searchTerm={text('Search term', 'Foobar')}
      onSearch={action('Search')}
    />
  </StoryContainer>
)
