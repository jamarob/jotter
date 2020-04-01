import React from 'react'
import StoryContainer from './StoryContainer'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, number } from '@storybook/addon-knobs'
import IconButton from '../components/IconButton'

export default {
  title: 'Buttons',
  component: IconButton,
  decorators: [withKnobs],
}

export const Icon = () => (
  <StoryContainer>
    <IconButton
      onClick={action('Button clicked')}
      title={select('Type', iconOptions, 'add', groupId)}
      size={number('Size', defaultValue, sizeOptions, groupId)}
    />
  </StoryContainer>
)

const iconOptions = {
  Add: 'add',
  Clear: 'clear',
  Close: 'close',
  Delete: 'delete',
  Edit: 'edit',
  Search: 'search',
  More: 'more',
  Less: 'less',
}

const defaultValue = 5
const sizeOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
}

const groupId = 'Icon-Button-Group'
