import { date, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Timestamp from '../components/Timestamp'
import StoryContainer from './StoryContainer'

export default {
  title: 'Timestamp',
  component: Timestamp,
  decorators: [withKnobs],
}

export const Default = () => (
  <StoryContainer>
    <Timestamp created={date('created')} edited={date('edited')} />
  </StoryContainer>
)
