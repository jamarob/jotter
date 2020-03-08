import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import Search from '../components/Search'
import AddNoteButton from '../components/AddNoteButton'

BrowseNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default function BrowseNotes({ notes, onSearch, searchTerm }) {
  return (
    <>
      <Header title="Browse Notes" />
      <Main>
        <Search searchTerm={searchTerm} onSearch={onSearch} />
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
