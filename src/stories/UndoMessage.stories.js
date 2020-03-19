import React from 'react'
import { action } from '@storybook/addon-actions'
import GlobalStyle from '../GlobalStyle'
import UndoMessage from '../components/UndoMessage'

export default {
  title: 'UndoMessage',
  component: UndoMessage,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <UndoMessage
        text="Last action."
        onUndo={action('undo')}
        onDismiss={action('dismiss')}
      />
    </div>
  </>
)
