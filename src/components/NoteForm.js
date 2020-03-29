import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tip from './Tip'
import Button from './Button'

NoteForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
}

export default function NoteForm({ onSave, text }) {
  const [noteText, setNoteText] = useState(text || '')
  useEffect(() => setNoteText(text || ''), [text])
  const history = useHistory()
  return (
    <StyledNoteForm>
      <StyledTip>
        Prefix a word with <Tagchar>@</Tagchar> to turn it into a tag!
      </StyledTip>
      <textarea
        autoFocus
        placeholder="Enter your note..."
        onChange={event => setNoteText(event.target.value)}
        value={noteText}
      ></textarea>
      <Button onClick={handleCancel}>cancel</Button>
      <Button primary onClick={handleSave}>
        save
      </Button>
    </StyledNoteForm>
  )

  function handleCancel() {
    history.push('/')
  }

  function handleSave() {
    const text = noteText.trim()
    if (text) {
      onSave(text)
      history.push('/')
    }
  }
}

const StyledNoteForm = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto var(--size-7);
  grid-template-areas:
    'tip tip'
    'textarea textarea'
    'cancel save';
  gap: var(--size-4);
  margin: var(--size-5);

  textarea {
    grid-area: textarea;
    padding: var(--size-2);
    border: none;
    box-shadow: var(--shadow);
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: var(--neutral-1);
  }
`
const StyledTip = styled(Tip)`
  grid-area: tip;
`

const Tagchar = styled.span`
  color: var(--primary-3);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`
