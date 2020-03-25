import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import StoryContainer from './StoryContainer'
import Header from '../components/Header'

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
}

const label = 'Symbol'
const options = {
  Home: '',
  Add: 'add',
  Edit: 'edit',
}
const defaultValue = ''
const groupId = 'GROUP-ID1'

export const Default = () => (
  <StoryContainer>
    <Header symbol={select(label, options, defaultValue, groupId)} />
  </StoryContainer>
)
