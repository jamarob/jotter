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
    <Timestamp
      created={date('created', new Date('2020-03-31T23:45:14.165+00:00'))}
      edited={date('edited', new Date('2020-04-01T23:09:28.958+00:00'))}
    />
  </StoryContainer>
)
