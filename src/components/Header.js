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
  background: var(--neutral-1);
  color: var(--neutral-10);
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-7);

  h1 {
    font-size: var(--size-5);
  }
`
const Logo = styled(GiBookmark)`
  font-size: var(--size-6);
  margin: 0 var(--size-5);
`

const MenuButton = styled(MdMenu)`
  font-size: var(--size-6);
  margin: 0 var(--size-5) 0 auto;
  cursor: pointer;

  &:hover {
    color: var(--primary-5);
  }
`
