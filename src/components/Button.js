import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  cursor: pointer;
  box-shadow: var(--shadow);
  border-color: var(--neutral-1);

  text-transform: uppercase;
  font-weight: bold;
  font-family: Handlee;

  color: ${props => (props.primary ? 'var(--neutral-10)' : 'var(--neutral-1)')};
  background: ${props =>
    props.primary ? 'var(--neutral-1)' : 'var(--neutral-10)'};
`
