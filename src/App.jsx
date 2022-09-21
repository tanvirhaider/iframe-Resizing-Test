
import './App.css'
import React, { useRef, useState } from 'react'
import IframeResizer from 'iframe-resizer-react'

import MessageData from './message-data'

export default () => {
  const iframeRef = useRef(null)
  const [messageData, setMessageData] = useState()

  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }

  return (
    <>
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="https://dcsite.wpengine.com/vital-voices/index.html"
        style={{ width: '1px', minWidth: '100%'}}
      />
      <MessageData data={messageData} />
    </>
  )
}