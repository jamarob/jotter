import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

NoteForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
}

export default function NoteForm({ onSave, text }) {
  const [noteText, setNoteText] = useState(text || '')
  const history = useHistory()
  return (
    <StyledNoteForm>
      <textarea
        autoFocus
        placeholder="Enter your note..."
        onChange={event => setNoteText(event.target.value)}
        value={noteText}
      ></textarea>
      <button className="cancel" onClick={handleCancel}>
        Cancel
      </button>
      <button className="save" onClick={handleSave}>
        Save
      </button>
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
  grid-template-rows: auto var(--size-7);
  grid-template-areas:
    'text text'
    'cancel save';
  gap: var(--size-4);
  margin: var(--size-5);

  textarea {
    grid-area: text;
    padding: var(--size-2);
    border: none;
    box-shadow: var(--shadow);
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: var(--neutral-1);
  }

  button {
    cursor: pointer;
    box-shadow: var(--shadow);
    text-transform: uppercase;
    font-weight: bold;
  }

  button.cancel {
    color: var(--neutral-1);
    border-color: var(--neutral-1);
    background: white;
  }

  button.save {
    color: white;
    border-color: var(--neutral-1);
    background: var(--neutral-1);
  }
`
