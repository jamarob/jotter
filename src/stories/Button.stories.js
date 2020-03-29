import React from 'react'
import StoryContainer from './StoryContainer'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'

export default {
  title: 'Buttons/Button',
  component: Button,
}

export const Normal = () => (
  <StoryContainer>
    <Button onClick={action('Button clicked')}>Normal</Button>
  </StoryContainer>
)

export const Primary = () => (
  <StoryContainer>
    <Button primary onClick={action('Button clicked')}>
      Primary
    </Button>
  </StoryContainer>
)
