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
  padding: 8px 16px 16px 16px;
  gap: 4px;

  input {
    background: #333;
    color: teal;
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid ${props => (props.hasInput ? 'teal' : 'gray')};
    padding-left: 4px;
  }
`

const SearchIcon = styled(MdSearch)`
  font-size: 36px;
  flex-shrink: 0;
  margin-left: 4px;
`
const ClearIcon = styled(MdBackspace)`
  font-size: 36px;
  flex-shrink: 0;
  margin-left: 4px;
`
