import React from 'react'
import StoryContainer from './StoryContainer'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withKnobs],
}

export const Standard = () => (
  <StoryContainer>
    <Button
      primary={select(
        'Type',
        { Secondary: false, Primary: true },
        false,
        'Button-Type-Group'
      )}
      onClick={action('Button clicked')}
    >
      Button
    </Button>
  </StoryContainer>
)
