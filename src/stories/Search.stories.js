import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../GlobalStyle'
import Search from '../components/Search'

export default {
  title: 'Search',
  component: Search,
}

export const Empty = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Search searchTerm="" onSearch={action('Search')} />
    </div>
  </>
)

export const WithText = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Search searchTerm="Foobar" onSearch={action('Search')} />
    </div>
  </>
)
