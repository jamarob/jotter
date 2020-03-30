import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default function Search({ searchTerm, onSearch }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(searchTerm)
  }, [searchTerm])

  return (
    <StyledSearch hasInput={search}>
      <input
        type="text"
        placeholder="Enter search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && <ClearButton title="clear" size="6" onClick={handleClear} />}
      <SearchButton title="search" size="6" onClick={() => onSearch(search)} />
    </StyledSearch>
  )

  function handleClear() {
    setSearch('')
    onSearch('')
  }
}

const StyledSearch = styled.section`
  display: flex;
  padding: var(--size-2) var(--size-5) var(--size-5) var(--size-5);
  color: var(--neutral-8);

  input {
    flex-grow: 1;
    color: var(--neutral-10);
    background: var(--neutral-1);
    border: none;
    border-bottom: 2px solid var(--neutral-3);
    padding-left: var(--size-1);
  }
`
const SearchButton = styled(IconButton)``
const ClearButton = styled(IconButton)`
  margin: 0 var(--size-1);
`
