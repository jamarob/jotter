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
  bottom: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border-radius: 50%;
  background: #333;
  opacity: 0.8;
  color: white;

  font-weight: bold;
  font-size: 36px;
  cursor: pointer;
`
