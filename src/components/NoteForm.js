import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tip from './Tip'
import Button from './Button'
import Timestamp from './Timestamp'

NoteForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  created: PropTypes.string,
  edited: PropTypes.string,
}

export default function NoteForm({ onSave, text, created, edited }) {
  const [noteText, setNoteText] = useState(text || '')
  useEffect(() => setNoteText(text || ''), [text])
  const history = useHistory()
  return (
    <StyledNoteForm>
      <StyledTip>
        Prefix a word with <Tagchar>@</Tagchar> to turn it into a tag!
      </StyledTip>
      {created && <StyledTimestamp created={created} edited={edited} />}
      <textarea
        autoFocus
        placeholder="Enter your note..."
        onChange={event => setNoteText(event.target.value)}
        value={noteText}
      ></textarea>
      <ButtonGroup>
        <Button onClick={handleCancel}>cancel</Button>
        <Button primary onClick={handleSave}>
          save
        </Button>
      </ButtonGroup>
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
  display: flex;
  flex-direction: column;
  margin: var(--size-5);

  textarea {
    flex-grow: 1;
    padding: var(--size-2);
    border: none;
    box-shadow: var(--shadow);
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: var(--neutral-1);
  }
`

const StyledTip = styled(Tip)`
  margin-bottom: var(--size-4);
`

const StyledTimestamp = styled(Timestamp)`
  margin-bottom: var(--size-1);
`

const Tagchar = styled.span`
  color: var(--primary-3);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`

const ButtonGroup = styled.section`
  display: flex;
  margin-top: var(--size-5);

  button:first-child {
    width: 50%;
    margin-right: var(--size-1);
  }
  button:last-child {
    width: 50%;
    margin-left: var(--size-2);
  }
`
