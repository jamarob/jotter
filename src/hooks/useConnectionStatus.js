import { useState } from 'react'

export default function useConnectionStatus() {
  const [status, setStatus] = useState('ONLINE')

  function setUpload() {
    setStatus('UPLOAD')
  }

  function setDownload() {
    setStatus('DOWNLOAD')
  }

  function setOnline() {
    setStatus('ONLINE')
  }

  function setOffline() {
    setStatus('OFFLINE')
  }

  return {
    status,
    setUpload,
    setDownload,
    setOnline,
    setOffline,
  }
}
