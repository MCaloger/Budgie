import React, { useContext } from "react";
import { NotificationContext } from "../../Contexts/NotificationManager/NotificationManager";
import Notification from "./Notification";

export default function NotificationContainer() {
  const notificationContext = useContext(NotificationContext);
  const delay = 3000;

  return (
    <div className="notification-container">
      <NotificationContext.Consumer>
        {(notifications) =>
          notifications.notifications.map((notification, index) => (
            <Notification
              key={index}
              notifid={index}
              notification={notification}
              deactivateNotification={
                notificationContext.deactivateNotification
              }
              delay={delay}
            />
          ))
        }
      </NotificationContext.Consumer>
    </div>
  );
}
