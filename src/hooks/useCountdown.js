import { useRef, useState, useEffect, useCallback } from 'react'

export default function useCountdown(start, onExpire) {
  const [remaining, setRemaining] = useState(start)

  const timerId = useRef()

  const onExpireCallback = useCallback(onExpire, [])

  useEffect(() => {
    if (remaining > 0) {
      timerId.current = setTimeout(() => setRemaining(remaining - 1), 1000)
    } else {
      onExpireCallback()
    }
    return cancelTimer
  }, [remaining, onExpireCallback])

  function cancelTimer() {
    clearTimeout(timerId.current)
  }

  return [remaining, cancelTimer]
}
