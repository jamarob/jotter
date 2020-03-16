import React from 'react'
import { GiBookmark } from 'react-icons/gi'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <h1>Jotter</h1>
      <MenuButton onClick={() => console.log('menu clicked')} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #333;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`
const Logo = styled(GiBookmark)`
  font-size: 32px;
  margin: 0 20px;
`

const MenuButton = styled(MdMenu)`
  font-size: 32px;
  margin: 0 20px 0 auto;
  cursor: pointer;
`
