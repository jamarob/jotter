import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import StoryContainer from './StoryContainer'
import Search from '../components/Search'

export default {
  title: 'Search',
  component: Search,
  decorators: [withKnobs],
}

export const Default = () => (
  <StoryContainer>
    <Search
      searchTerm={text('Search term', 'Foobar')}
      onSearch={action('Search')}
    />
  </StoryContainer>
)
