import React, { useState } from 'react'
import { decorate } from '@storybook/addon-actions'
import StoryContainer from './StoryContainer'
import SearchBar from '../components/SearchBar'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const Default = () => {
  const [folded, setFolded] = useState(true)
  const [search, setSearch] = useState('Foobar')

  const doSearch = decorate([_ => [search]])

  const clearSearch = decorate([
    _ => {
      setSearch('')
      return ['']
    },
  ])

  const toggleFolded = decorate([
    _ => {
      const toggled = !folded
      setFolded(toggled)
      return [toggled]
    },
  ])

  return (
    <StoryContainer>
      <SearchBar
        folded={folded}
        toggleFolded={toggleFolded.action('Toggle folded')}
        search={search}
        setSearch={setSearch}
        onSearch={doSearch.action('Search')}
        onClear={clearSearch.action('Clear search')}
      />
    </StoryContainer>
  )
}
