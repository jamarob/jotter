import { useState, useEffect } from 'react'
import filterNotes from '../util/filterNotes'

export default function useNoteSearch(notes) {
  const [filtered, setFiltered] = useState(notes)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(search)
    setFiltered(filterNotes(notes, search))
  }, [search, notes])

  return [search, setSearch, filtered]
}
