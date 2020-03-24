import React from 'react'
import StoryContainer from './StoryContainer'
import Header from '../components/Header'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <StoryContainer>
    <Header />
  </StoryContainer>
)

export const Add = () => (
  <StoryContainer>
    <Header symbol="add" />
  </StoryContainer>
)

export const Edit = () => (
  <StoryContainer>
    <Header symbol="edit" />
  </StoryContainer>
)
