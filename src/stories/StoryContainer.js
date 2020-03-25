import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'

export default function StoryContainer(props) {
  return (
    <>
      <GlobalStyle />
      <StyledContainer style={props.style}>{props.children}</StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 24px;
  main {
    flex-grow: 1;
  }
`
