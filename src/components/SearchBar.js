import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import IconButton from './Buttons/IconButton'

SearchBar.propTypes = {
  folded: PropTypes.bool.isRequired,
  toggleFolded: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default function SearchBar({
  folded,
  toggleFolded,
  searchTerm,
  onSearch,
}) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(searchTerm)
  }, [searchTerm])

  return (
    <StyledSearchBar>
      <FoldButton
        title={folded ? 'more' : 'less'}
        size="6"
        onClick={toggleFolded}
      />
      <input
        type="text"
        placeholder="Enter search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onClick={() => folded || toggleFolded()}
      />
      {search && <ClearButton title="clear" size="6" onClick={handleClear} />}
      <SearchButton title="search" size="6" onClick={handleSearch} />
    </StyledSearchBar>
  )

  function handleSearch() {
    folded || toggleFolded()
    onSearch(search)
  }

  function handleClear() {
    setSearch('')
    onSearch('')
  }
}

const StyledSearchBar = styled.section`
  display: flex;
  padding: 0 var(--size-5) var(--size-1) var(--size-5);
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
const FoldButton = styled(IconButton)`
  color: ${props => (props.title === 'more' ? 'inherit' : 'var(--primary-5)')};
  transition: 0.3s color ease-in;
`
const SearchButton = styled(IconButton)``
const ClearButton = styled(IconButton)`
  margin: 0 var(--size-1);
`
