import React, { useEffect, useState } from 'react'

export default function Notification(props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {

      const timer = setTimeout(async () => {
        setVisible(false)
      }, props.delay)

      return () => clearTimeout(timer)
    
  }, [props.delay])


  const showIfVisible = () => {
    return (visible ? <div className={props.notification.success ? "notification notification-success" : "notification notification-failure"} onClick={() => setVisible(false)}>{props.notification.message}</div> : null)
  }

  return (
    showIfVisible()
  )
     
  
}
