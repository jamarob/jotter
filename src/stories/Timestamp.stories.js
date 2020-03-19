import React from 'react'
import GlobalStyle from '../GlobalStyle'
import Timestamp from '../components/Timestamp'

export default {
  title: 'Timestamp',
  component: Timestamp,
}

export const Created = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Timestamp created={0} />
    </div>
  </>
)

export const Modified = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Timestamp created={0} edited={10000000} />
    </div>
  </>
)
