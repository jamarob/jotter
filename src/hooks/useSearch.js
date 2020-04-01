import { useState, useEffect } from 'react'
import { getTagsFromNotes } from '../util/tags'

export function useSearch({ searchTerm, notes, onSearch }) {
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
    onSearch(query.map(tag => `'${tag}`).join(' '))
  }, [query, onSearch])

  function clearSearch() {
    setSearch('')
    setQuery([])
  }

  function toggleInQuery(tag) {
    setQuery(
      query.includes(tag) ? query.filter(t => t !== tag) : [...query, tag]
    )
  }

  return { tags, query, toggleInQuery, clearSearch, search, setSearch }
}
