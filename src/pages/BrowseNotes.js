import PropTypes from 'prop-types'
import React from 'react'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import UndoMessage from '../components/UndoMessage'

BrowseNotes.propTypes = {
  status: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      edited: PropTypes.string.isRequired,
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
      <NotesList
        notes={notes}
        onTagClick={tag => onSearch(`'${tag}`)}
        onDelete={onDelete}
      />
    </>
  )
}
