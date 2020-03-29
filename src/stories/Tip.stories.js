import React from 'react'
import StoryContainer from './StoryContainer'
import Tip from '../components/Tip'

export default {
  title: 'Tip',
  component: Tip,
}

export const Text = () => (
  <StoryContainer>
    <Tip>Keep calm and always carry a towel!</Tip>
  </StoryContainer>
)

export const Children = () => (
  <StoryContainer>
    <Tip>
      When in doubt press the <button>Button</button>.
    </Tip>
  </StoryContainer>
)
