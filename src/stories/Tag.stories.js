import React from 'react'
import { action } from '@storybook/addon-actions'
import StoryContainer from './StoryContainer'
import Tag from '../components/Tag'

export default {
  title: 'Tag',
  component: Tag,
}

export const Default = () => (
  <StoryContainer>
    <Tag text="#someTag" onClick={action('Tag was clicked')} />
  </StoryContainer>
)
