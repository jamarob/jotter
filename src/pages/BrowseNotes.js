import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import AddNoteButton from '../components/AddNoteButton'
import Header from '../components/Header'
import NotesList from '../components/NotesList'
import Search from '../components/Search'

const SCROLL_INTO_VIEW_OPTIONS = { block: 'start', behaviour: 'smooth' }

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
  const searchRef = useRef(null)
  return (
    <>
      <Header title="Browse Notes" />
      <Main>
        <Search ref={searchRef} searchTerm={searchTerm} onSearch={onSearch} />
        <NotesList notes={notes} onTagClick={handleTagClick} />
      </Main>
      <AddNoteButton />
    </>
  )

  function handleTagClick(tag) {
    searchRef.current.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS)
    onSearch(tag)
  }
}

const Main = styled.main`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  align-items: stretch;
`
