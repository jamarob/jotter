import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import SearchBar from './SearchBar'
import AddNoteButton from './Buttons/AddNoteButton'

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      edited: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default function Search({ searchTerm, onSearch, notes }) {
  const [folded, setFolded] = useState(true)

  return (
    <StyledSearch>
      <AddNoteButton />
      <AdvancedSearch folded={folded}></AdvancedSearch>
      <SearchBar
        folded={folded}
        toggleFolded={() => setFolded(!folded)}
        searchTerm={searchTerm}
        onSearch={onSearch}
      />
      <NumberOfNotes>{notes.length} jots</NumberOfNotes>
    </StyledSearch>
  )
}

const StyledSearch = styled.section`
  position: relative;
  background: var(--neutral-1);
  padding-top: var(--size-5);
`
const AdvancedSearch = styled.section`
  height: ${props => (props.folded ? '0' : 'calc(100vh / 2)')};
  transition: 0.3s height ease-in-out;
  margin: var(--size-1) var(--size-5);
  overflow: hidden;
`
const NumberOfNotes = styled.p`
  color: var(--neutral-5);
  text-align: center;
  font-family: Handlee, cursive;
  padding-bottom: var(--size-2);
`
