import { action as storyAction } from '@storybook/addon-actions'
import React, { useState } from 'react'
import UndoMessage from '../components/UndoMessage'
import StoryContainer from './StoryContainer'
import { withKnobs, button } from '@storybook/addon-knobs'

export default {
  title: 'UndoMessage',
  component: UndoMessage,
  decorators: [withKnobs],
}

export const Default = () => {
  const [action, setAction] = useState('Last Action')
  button('Fire Action', () => setAction('Last Action'))

  return (
    <StoryContainer>
      {action && (
        <UndoMessage
          text="Last Action"
          onUndo={() => {
            setAction('')
            storyAction('undo')()
          }}
          onDismiss={() => {
            setAction('')
            storyAction('dismiss')()
          }}
        />
      )}
    </StoryContainer>
  )
}
