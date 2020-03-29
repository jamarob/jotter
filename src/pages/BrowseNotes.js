import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import AddNoteButton from '../components/AddNoteButton'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import Search from '../components/Search'
import UndoMessage from '../components/UndoMessage'

BrowseNotes.propTypes = {
  status: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      edited: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
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
  status,
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
      <Header page="HOME" status={status} />
      {lastOperation && (
        <UndoMessage
          text={lastOperation}
          onUndo={undoLastOperation}
          onDismiss={dismissUndo}
        />
      )}

      <Main>
        <NotesList
          notes={notes}
          onTagClick={tag => onSearch(`'${tag}`)}
          onDelete={onDelete}
        />
      </Main>
      <Footer>
        <AddNoteButton />
        <Search searchTerm={searchTerm} onSearch={onSearch} />
      </Footer>
    </>
  )
}

const Main = styled.main`
  overflow-y: scroll;
`
const Footer = styled.footer`
  position: relative;
  color: var(--neutral-10);
  background: var(--neutral-1);
  padding-top: var(--size-5);
`
