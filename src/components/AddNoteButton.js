import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function AddNoteButton() {
  return <StyledAddNoteButton to="/add">+</StyledAddNoteButton>
}

const StyledAddNoteButton = styled(Link)`
  position: absolute;
  width: 48px;
  height: 48px;
  left: calc(50% + 4px);
  top: 2px;
  transform: translate(calc(-50% + 4px), -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border: 2px solid white;
  border-radius: 50%;
  background: #333;
  color: white;

  font-weight: bold;
  font-size: 36px;
  cursor: pointer;
`
