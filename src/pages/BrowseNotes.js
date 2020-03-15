import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import AddNoteButton from '../components/AddNoteButton'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import Search from '../components/Search'

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
}

export default function BrowseNotes({ notes, onSearch, searchTerm }) {
  return (
    <>
      <Header title="Browse Notes" />
      <Search searchTerm={searchTerm} onSearch={onSearch} />
      <Main>
        <NotesList notes={notes} onTagClick={onSearch} />
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
