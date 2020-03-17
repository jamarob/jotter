import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { MdSearch, MdBackspace } from 'react-icons/md'

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
        type="search"
        placeholder="Enter search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && <ClearIcon onClick={handleClear} />}
      <SearchIcon onClick={() => onSearch(search)} />
    </StyledSearch>
  )

  function handleClear() {
    setSearch('')
    onSearch('')
  }
}

const StyledSearch = styled.section`
  display: flex;
  padding: 8px 20px 20px 20px;
  gap: 4px;
  color: var(--neutral-8);

  input {
    background: var(--neutral-1);
    color: var(--neutral-10);
    flex-grow: 1;
    border: none;
    border-bottom: 2px solid var(--neutral-3);
    padding-left: var(--size-1);
  }
`

const SearchIcon = styled(MdSearch)`
  font-size: var(--size-6);
  flex-shrink: 0;
  margin-left: var(--size-1);
  cursor: pointer;

  &:hover {
    color: var(--primary-5);
  }
`
const ClearIcon = styled(MdBackspace)`
  font-size: var(--size-6);
  flex-shrink: 0;
  margin-left: var(--size-1);
  cursor: pointer;

  &:hover {
    color: var(--primary-5);
  }
`
