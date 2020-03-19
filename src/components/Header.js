import React from 'react'
import { PropTypes } from 'prop-types'
import { GiBookmark } from 'react-icons/gi'
import { MdAddCircle, MdCreate, MdMenu } from 'react-icons/md'
import styled from 'styled-components/macro'

Header.propTypes = {
  symbol: PropTypes.string,
}

export default function Header({ symbol }) {
  return (
    <StyledHeader>
      {symbol === 'add' ? (
        <CreateLogo />
      ) : symbol === 'edit' ? (
        <EditLogo />
      ) : (
        <AppLogo />
      )}
      <h1>JOTTER</h1>
      <MenuButton onClick={() => console.log('menu clicked')} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-7);

  background: var(--neutral-1);
  color: var(--neutral-10);

  h1 {
    font-size: var(--size-5);
    font-family: 'Handlee', cursive;
  }
`

const AppLogo = styled(GiBookmark)`
  font-size: var(--size-5);
  margin: 0 var(--size-3) 0 var(--size-5);
`

const CreateLogo = styled(MdAddCircle)`
  font-size: var(--size-5);
  margin: 0 var(--size-3) 0 var(--size-5);
`

const EditLogo = styled(MdCreate)`
  font-size: var(--size-5);
  margin: 0 var(--size-3) 0 var(--size-5);
`

const MenuButton = styled(MdMenu)`
  font-size: var(--size-6);
  margin: 0 var(--size-5) 0 auto;
  cursor: pointer;

  &:hover {
    color: var(--primary-5);
  }
`
