import React, { useState, useEffect, useContext, createContext } from 'react'
import { API_ROUTE } from '../../app-settings';

export const NotificationContext = React.createContext();

export const NotificationManager = (props) => {
    const [notifications, setNotifications] = useState([]);

    async function addNotification({success, message, active}) {
        try {
            setNotifications([...notifications, { success, message, active: true }])

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <NotificationContext.Provider value={{ notifications, addNotification }}>
            { props.children }
        </NotificationContext.Provider>
    )
}