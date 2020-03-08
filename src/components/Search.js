import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

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
      {search && (
        <button onClick={handleClear}>
          <span role="img" aria-label="erase to left">
            &#x232b;
          </span>
        </button>
      )}
      <button onClick={handleSearch}>
        <span role="img" aria-label="left-pointing magnifying glass">
          &#x1f50d;
        </span>
      </button>
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

  button {
    width: 48px;
    height: 48px;
    border: 1px solid gray;
    background: none;
    border-radius: 4px;
    font-size: 24px;
  }
`
