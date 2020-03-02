import { useState, useEffect } from 'react'
import { getNotes } from '../data/services'

export default function useNotes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(getNotes())
  }, [])

  return [notes, setNotes]
}
