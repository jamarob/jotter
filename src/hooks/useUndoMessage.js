import { useEffect, useRef, useState } from 'react'
import useCountdown from './useCountdown'

export default function useUndoMessage({ start, onUndo, onDismiss }) {
  const [remaining, cancelTimer] = useCountdown(start, handleDismiss)

  const [show, setShow] = useState(false)

  const ref = useRef()

  useEffect(() => setShow(true), [])

  function handleUndo() {
    cancelTimer()
    ref.current.addEventListener('transitionend', onUndo)
    setShow(false)
  }

  function handleDismiss() {
    cancelTimer()
    ref.current.addEventListener('transitionend', onDismiss)
    setShow(false)
  }

  return { remaining, handleUndo, handleDismiss, ref, show }
}
