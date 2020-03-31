import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import SearchBar from './SearchBar'
import { getTagsFromNotes } from '../util/tags'
import Tip from './Tip'
import IconButton from './Buttons/IconButton'
import TagList from './TagList'

Search.propTypes = {
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
  const history = useHistory()
  const [folded, setFolded] = useState(true)
  const [tags, setTags] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState([])

  useEffect(() => {
    setSearch(searchTerm)
  }, [searchTerm])

  useEffect(() => {
    setTags(getTagsFromNotes(notes))
  }, [notes])

  useEffect(() => {
    onSearch(query.join(' '))
  }, [query, onSearch])

  return (
    <StyledSearch folded={folded}>
      <AddNoteButton
        title="add"
        size={folded ? '7' : '0'}
        onClick={() => history.push('/add')}
      />
      <AdvancedSearch folded={folded}>
        <StyledTip>Click on the tags to build your query.</StyledTip>
        <TagList tags={tags} selectedTags={query} onTagClick={toggleInQuery} />
      </AdvancedSearch>
      <SearchBar
        folded={folded}
        toggleFolded={() => setFolded(!folded)}
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <NumberOfNotes>{notes.length} jots</NumberOfNotes>
    </StyledSearch>
  )

  function handleSearch() {
    onSearch(search)
  }

  function handleClear() {
    setSearch('')
    setQuery([])
  }

  function toggleInQuery(tag) {
    setQuery(
      query.includes(tag) ? query.filter(t => t !== tag) : [...query, tag]
    )
  }
}

const StyledSearch = styled.section`
  position: relative;
  background: var(--neutral-1);
  padding-top: ${props => (props.folded ? 'var(--size-5)' : 'var(--size-2)')};
  transition: 0.3s padding-top ease-in-out;
`

const AddNoteButton = styled(IconButton)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  border: ${props => (props.size === '0' ? '0' : '2px')} solid var(--neutral-10);
  border-radius: 50%;
  background: var(--neutral-1);
  color: var(--neutral-10);
  font-weight: bold;
  transition: 0.3s ease-in-out;
`

const AdvancedSearch = styled.section`
  height: ${props => (props.folded ? '0' : 'calc(100vh / 2)')};
  transition: 0.3s height ease-in-out;
  margin: var(--size-1) var(--size-5);
  overflow-y: auto;
`

const StyledTip = styled(Tip)`
  margin-bottom: var(--size-2);
  .icon {
    color: var(--primary-5);
  }
  .text {
    color: var(--neutral-10);
  }
`

const NumberOfNotes = styled.p`
  color: var(--neutral-5);
  text-align: center;
  font-family: Handlee, cursive;
  padding-bottom: var(--size-2);
`
