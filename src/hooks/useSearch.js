import { useState, useEffect } from 'react'
import { loadSearchTerm, saveSearchTerm } from '../data/services'
import filterNotes from '../util/filterNotes'

export default function useSearch(notes) {
  const [filtered, setFiltered] = useState(notes)
  const [search, setSearch] = useState(loadSearchTerm())

  useEffect(() => {
    setSearch(search)
    setFiltered(filterNotes(notes, search))
    saveSearchTerm(search)
  }, [search, notes])

  return [search, setSearch, filtered]
}
