import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import styled from 'styled-components/macro'
import { useParams, useHistory } from 'react-router-dom'

DeleteNotePage.propTypes = {
  findNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
}

export default function DeleteNotePage({ findNote, deleteNote }) {
  const history = useHistory()
  const { id } = useParams()
  const { text } = findNote(id)
  return (
    <>
      <Header title="Delete Note" />
      <Main>
        <h2>Are you shure you want to delete this note?</h2>
        <p>{text}</p>
        <ConfirmationButtons>
          <button onClick={handleCancel} className="cancel">
            No
          </button>
          <button onClick={handleDelete} className="confirm">
            Yes
          </button>
        </ConfirmationButtons>
      </Main>
    </>
  )

  function handleCancel() {
    history.push('/notes')
  }

  function handleDelete() {
    deleteNote(id)
    history.push('/notes')
  }
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 16px;
  gap: 16px;

  p {
    box-shadow: 2px 2px 2px 2px lightgrey;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    padding: 8px;
  }
`
const ConfirmationButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  height: 42px;
  margin-top: 16px;

  button {
    flex-grow: 1;
    border-radius: 4px;
  }

  .cancel {
    color: #333;
    border-color: #333;
    background: white;
  }

  .confirm {
    color: white;
    border-color: #333;
    background: #333;
  }
`
