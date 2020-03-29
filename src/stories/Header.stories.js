import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import StoryContainer from './StoryContainer'
import Header from '../components/Header'

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
}

const pageOptions = {
  Home: 'HOME',
  Add: 'ADD',
  Edit: 'EDIT',
}

const statusOptions = {
  Online: 'ONLINE',
  Offline: 'OFFLINE',
  Download: 'DOWNLOAD',
  Upload: 'UPLOAD',
}

const groupId = 'Page-Status-Group'

export const Default = () => (
  <StoryContainer>
    <Header
      page={select('Page', pageOptions, 'HOME', groupId)}
      status={select('Status', statusOptions, 'ONLINE', groupId)}
    />
  </StoryContainer>
)
