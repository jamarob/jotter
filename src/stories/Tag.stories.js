import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../GlobalStyle'
import Tag from '../components/Tag'

export default {
  title: 'Tag',
  component: Tag,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Tag text="I AM A TAG" onClick={action('Tag was clicked')} />
    </div>
  </>
)
