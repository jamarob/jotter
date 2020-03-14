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
  grid-template-rows: auto 48px;
  grid-template-areas:
    'text text'
    'cancel save';
  gap: 16px;
  margin: 16px;

  textarea {
    grid-area: text;
    padding: 8px;
    border: none;
    box-shadow: 2px 2px 2px 2px lightgrey;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  button {
    border-radius: 4px;
    cursor: pointer;
  }

  .cancel {
    color: #333;
    border-color: #333;
    background: white;
  }

  .save {
    color: white;
    border-color: #333;
    background: #333;
  }
`
