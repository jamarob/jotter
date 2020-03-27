import { useState } from 'react'
import { putNotes } from '../util/services'

export default function useUndo(restore) {
  const [lastOperation, setLastOperation] = useState('')
  const [lastState, setLastState] = useState(null)

  function saveState(description, state) {
    setLastOperation(description)
    setLastState(state)
  }

  function restoreState() {
    if (!lastState) {
      return
    }
    return putNotes(lastState).then(notes => {
      restore(notes)
      setLastState(null)
      setLastOperation('')
    })
  }

  return [lastOperation, saveState, restoreState]
}
