import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function AddNoteButton() {
  return <StyledAddNoteButton to="/add">+</StyledAddNoteButton>
}

const StyledAddNoteButton = styled(Link)`
  position: absolute;
  width: var(--size-7);
  height: var(--size-7);
  left: 50%;
  top: 2px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border: 2px solid var(--neutral-10);
  border-radius: 50%;
  background: var(--neutral-1);
  color: var(--neutral-10);

  font-weight: bold;
  font-size: var(--size-7);
  cursor: pointer;

  &:hover {
    color: var(--primary-5);
  }
`
