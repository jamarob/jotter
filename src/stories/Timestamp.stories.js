import React from 'react'
import StoryContainer from './StoryContainer'
import Timestamp from '../components/Timestamp'

export default {
  title: 'Timestamp',
  component: Timestamp,
}

export const Created = () => (
  <StoryContainer>
    <Timestamp created={0} />
  </StoryContainer>
)

export const Modified = () => (
  <StoryContainer>
    <Timestamp created={0} edited={10000000} />
  </StoryContainer>
)
