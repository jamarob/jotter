import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import UndoMessage from '../components/UndoMessage'
import StoryContainer from './StoryContainer'

export default {
  title: 'UndoMessage',
  component: UndoMessage,
}

export const Default = () => {
  const [action, setAction] = useState('Last Action')
  return (
    <StoryContainer>
      <button disabled={action} onClick={() => setAction('Last Action')}>
        Action that can be undone
      </button>

      {action && (
        <UndoMessage
          text="Last Action"
          onUndo={() => {
            setAction('')
            action('undo')()
          }}
          onDismiss={() => {
            setAction('')
            action('dismiss')()
          }}
        />
      )}
    </StoryContainer>
  )
}
