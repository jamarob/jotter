import React from 'react'
import { action } from '@storybook/addon-actions'
import StoryContainer from './StoryContainer'
import Search from '../components/Search'

export default {
  title: 'Search',
  component: Search,
}

export const Empty = () => (
  <StoryContainer>
    <Search searchTerm="" onSearch={action('Search')} />
  </StoryContainer>
)

export const WithText = () => (
  <StoryContainer>
    <Search searchTerm="Foobar" onSearch={action('Search')} />
  </StoryContainer>
)
