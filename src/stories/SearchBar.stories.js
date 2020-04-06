import { action } from '@storybook/addon-actions'
import React from 'react'
import SearchBar from '../components/SearchBar'
import StoryContainer from './StoryContainer'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const Empty = () => {
  return (
    <StoryContainer>
      <SearchBar
        folded={true}
        toggleFolded={action('Toggle folded')}
        search=""
        setSearch={action('Set search')}
        onSearch={action('Do search')}
        onClear={action('Clear search')}
      />
    </StoryContainer>
  )
}

export const Input = () => {
  return (
    <StoryContainer>
      <SearchBar
        folded={true}
        toggleFolded={action('Toggle folded')}
        search="Something"
        setSearch={action('Set search')}
        onSearch={action('Do search')}
        onClear={action('Clear search')}
      />
    </StoryContainer>
  )
}
