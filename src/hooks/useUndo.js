import { useState } from 'react'

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
    restore(lastState)
    setLastState(null)
    setLastOperation('')
  }

  return [lastOperation, saveState, restoreState]
}
