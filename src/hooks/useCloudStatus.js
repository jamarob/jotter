import { useState } from 'react'

export default function useCloudStatus() {
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

  function setOffline(error) {
    console.log(error)
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
