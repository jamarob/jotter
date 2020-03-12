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
    <StyledSearch>
      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {search && <ClearIcon onClick={handleClear} />}
      <SearchIcon onClick={handleSearch} />
    </StyledSearch>
  )

  function handleClear() {
    setSearch('')
    onSearch('')
  }

  function handleSearch() {
    onSearch(search)
  }
}

const StyledSearch = styled.section`
  display: flex;
  margin: 8px 16px 0 16px;
  gap: 4px;

  input {
    color: teal;
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 4px;
  }
`

const SearchIcon = styled(MdSearch)`
  font-size: 36px;
`
const ClearIcon = styled(MdBackspace)`
  font-size: 36px;
`
