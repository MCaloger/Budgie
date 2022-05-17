import React, { useEffect, useState } from 'react'

export default function Notification(props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    console.log('notificationelement', props)

      const timer = setTimeout(async () => {
        setVisible(false)
      }, props.delay)

      return () => clearTimeout(timer)
    
  }, [props.delay])

  console.log('notificationelementOUT', props)

  const showIfVisible = () => {
    return (visible ? <div className={props.notification.success ? "notification notification-success" : "notification notification-failure"}>{props.notification.message}</div> : null)
  }

  return (
    showIfVisible()
  )
     
  
}
