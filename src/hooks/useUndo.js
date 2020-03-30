import { useState } from 'react'

export default function useUndo() {
  const [lastOperation, setLastOperation] = useState('')
  const [lastState, setLastState] = useState(null)

  function saveState(description, state) {
    setLastOperation(description)
    setLastState(state)
  }

  function dismissUndo() {
    saveState('', null)
  }

  return [lastOperation, lastState, saveState, dismissUndo]
}
