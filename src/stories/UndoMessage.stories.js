import { action } from '@storybook/addon-actions'
import React from 'react'
import UndoMessage from '../components/UndoMessage'
import StoryContainer from './StoryContainer'

export default {
  title: 'UndoMessage',
  component: UndoMessage,
}

export const Default = () => {
  return (
    <StoryContainer>
      <UndoMessage
        text="Last action."
        onUndo={action('Undo')}
        onDismiss={action('Dismiss')}
      />
    </StoryContainer>
  )
}
