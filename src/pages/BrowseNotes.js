import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import AddNoteButton from '../components/AddNoteButton'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import Search from '../components/Search'
import UndoMessage from '../components/UndoMessage'

BrowseNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  lastOperation: PropTypes.string,
  undoLastOperation: PropTypes.func.isRequired,
  dismissUndo: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function BrowseNotes({
  notes,
  onSearch,
  searchTerm,
  lastOperation,
  undoLastOperation,
  dismissUndo,
  onDelete,
}) {
  return (
    <>
      <Header title="Browse Notes" />
      <Search searchTerm={searchTerm} onSearch={onSearch} />
      {lastOperation && (
        <UndoMessage
          text={lastOperation}
          onUndo={undoLastOperation}
          onDismiss={dismissUndo}
        />
      )}

      <Main>
        <NotesList notes={notes} onTagClick={onSearch} onDelete={onDelete} />
      </Main>
      <AddNoteButton />
    </>
  )
}

const Main = styled.main`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  align-items: stretch;
`
