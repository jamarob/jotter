import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function NoteForm({ onSave }) {
  const [noteText, setNoteText] = useState('')
  const history = useHistory()
  return (
    <StyledNoteForm>
      <textarea
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
      const created = Date.now()
      onSave({
        text,
        created,
      })
      history.push('/')
    }
  }
}

const StyledNoteForm = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 48px;
  grid-template-areas:
    'text text'
    'cancel save';

  textarea {
    padding: 8px;
    grid-area: text;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  button {
    margin: 8px;
    border-radius: 8px;
  }

  .cancel {
    color: #333;
    border-color: #333;
    background: whitesmoke;
  }

  .save {
    color: whitesmoke;
    border-color: #333;
    background: #333;
  }
`
