import React from 'react'
import Header from '../components/Header'
import GlobalStyle from '../GlobalStyle'

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Header />
    </div>
  </>
)

export const Add = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Header symbol="add" />
    </div>
  </>
)

export const Edit = () => (
  <>
    <GlobalStyle />
    <div style={{ padding: 24 }}>
      <Header symbol="edit" />
    </div>
  </>
)
